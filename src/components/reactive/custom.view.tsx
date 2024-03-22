import { v4 } from 'uuid'
import { cps } from './icons'
import { useState } from 'react'
import { ISchema } from './schema'
import { Collapse, Form } from 'antd'
import { Editor } from '@monaco-editor/react'
import { CustomComponentMap } from './custom'
import { Draggable } from './drag.view'

type DragEvent = React.DragEvent<HTMLElement>

type RequiredSchema = Required<ISchema>

export const CustomView: React.FC = () => {

    const [schema, setSchema] = useState<RequiredSchema[]>([])

    const handleViewRenderDrop = (e: DragEvent) => {
        e.preventDefault()
        const data = e.dataTransfer.getData('text/plain')
        if (data) {
            const item = JSON.parse(data)
            setSchema([...schema, item])
        }
        console.log(e.currentTarget)

    }
    return (
        <div className='custom-view'>
            <div className='custom-item-view'>
                <div className='custom-title'>组件</div>
                <div className='custom-cps'>
                    {cps.map((it, index) => (
                        <div
                            draggable
                            key={index}
                            className='cps-item'
                            data-type='component'
                            onDragStart={e => {
                                e.dataTransfer.setData('text/plain', JSON.stringify({ ...it.template, id: v4() }))
                            }}
                        >
                            {it.icon}
                            <span>{it.label}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className='custom-item-view view-empty'>
                <div className='custom-title'>预览</div>
                <div className='form-scorller'
                    onDrop={handleViewRenderDrop}
                    onDragOver={e=>e.preventDefault()}
                >
                    <Form
                        layout='vertical'
                        name='design-form'
                        requiredMark={false}
                    >
                        {schema.map((item, index) => (
                            <Draggable
                                id={index}
                                key={item.id}
                            >
                                <Form.Item {...item.formItemProps}>
                                    {CustomComponentMap[item.type](item)}
                                </Form.Item>
                            </Draggable>
                        ))}
                    </Form>
                </div>

                {schema.length <= 0 && <div className='empty'>单击左侧组件即可添加</div>}
            </div>
            <div className='custom-item-view view-empty'>
                <div className='custom-title'>代码</div>
                <Editor
                    height={'60%'}
                    language='json'

                    options={{ fontSize: 18 }}
                />
                <Collapse
                    ghost
                    expandIconPosition='end'
                    items={[
                        {
                            label: '文档说明',
                            children: <Editor language='json' options={{ readOnly: true }} height={200} />
                        }
                    ]}
                />
                <div className='empty'>编辑选中组件的代码</div>
            </div>
        </div>
    )
}