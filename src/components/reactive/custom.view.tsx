import { v4 } from 'uuid'
import { cps } from './icons'
import { ISchema } from './schema'
import { Collapse, Form } from 'antd'
import { Editor } from '@monaco-editor/react'
import { CustomComponentMap } from './custom'
import React, { useMemo, useState } from 'react'

type DragEvent = React.DragEvent<HTMLElement>

type RequiredSchema = Required<ISchema>

export const CustomView: React.FC = () => {
    const [schema, setSchema] = useState<RequiredSchema[]>([])
    const [curSchema, setCurSchema] = useState<RequiredSchema>()
    const [startIndex, setStartIndex] = useState<number>()
    const handleViewRenderDrop = (e: DragEvent) => {
        e.preventDefault()
        const data = e.dataTransfer.getData('text/plain')
        if (data) {
            const item = JSON.parse(data)
            const items = [...schema, item]
            setCurSchema(item)
            setSchema(items);
            (e.target as HTMLElement ).scrollIntoView({behavior: 'smooth',block: 'nearest'})
        }
    }
    const draggableClass = (item: RequiredSchema) => {
        const tokens = new Set<string>()
        tokens.add('drag-item')
        if (curSchema && curSchema.id === item.id) {
            tokens.add('active')
        }
        return [...tokens].join(' ')
    }
    const handleChange = (e: string | undefined) => {
        try {
            const changeItem = JSON.parse(e || '')
            setSchema(prev => {
                return prev.map(item => {
                    if (curSchema) {
                        if (item.id === curSchema!.id) {
                            return {
                                ...changeItem,
                                id: curSchema.id
                            }
                        }
                    }
                    return item
                })
            })
        } catch (error) {

        }


    }
    const exclude = useMemo(() => {
        if (curSchema) {

            const object = { ...curSchema }
            Reflect.deleteProperty(object, 'id')
            return JSON.stringify(object, undefined, 4)
        }
    }, [curSchema])
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
                    onDragOver={e => e.preventDefault()}
                >
                    <Form
                        layout='vertical'
                        name='design-form'
                        requiredMark={false}
                    >
                        {schema.map((item, index) => (
                            <div
                                draggable
                                key={item.id}
                                className={draggableClass(item)}
                                onClick={() => setCurSchema(item)}
                                onDrop={(e) => {
                                    e.preventDefault()
                                    setCurSchema(item)
                                    e.stopPropagation()
                                    if (startIndex) {
                                        const swapItems = swap([...schema], startIndex, index)
                                        if (swapItems && swapItems.length > 0) {
                                            setSchema(swapItems)
                                            setStartIndex(undefined)
                                        }
                                    }
                                }}
                                onDragStart={() => {
                                    setStartIndex(index)
                                }}
                                onDragLeave={(e) => {
                                    e.preventDefault()
                                    setCurSchema(undefined)
                                }}
                            >
                                <Form.Item {...item.formItemProps}>
                                    {CustomComponentMap[item.type](item)}
                                </Form.Item>
                            </div>
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
                    value={exclude}
                    onChange={handleChange}
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
                {/* {<div style={{ display: curSchema ? 'none' : 'block' }} className='empty'>编辑选中组件的代码</div>} */}
            </div>
        </div>
    )
}

function swap(array: RequiredSchema[], index: number, targetIndex: number) {
    if (index < 0 || index >= array.length || targetIndex < 0 || targetIndex >= array.length) {
        console.log("Invalid index");
        return;
    }

    let temp = array[index];
    array[index] = array[targetIndex];
    array[targetIndex] = temp;

    return array;
}