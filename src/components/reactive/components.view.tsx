import React, { useState } from "react"
import { Button, Col, Input, InputNumber, Row, Slider, Collapse as AntdCollapse } from "antd"
import { ISchema } from "./schema"

interface InputItem {
    id: string
    value: string
}

const inputItem = (): InputItem => {
    return {
        value: '',
        id: `$$@@${Math.random().toString(36).substring(2, 10)}`,
    }
}

export const ChooseData: React.FC = () => {
    return (
        <div className="choose-data">
            <Input />
            <div className="choose-data-action">
                <div className='click'>
                    <a className='dowload'>下载示例文件</a>
                    <a className='dowload'>使用示例文件</a>
                </div>
                <div className='choose-action'>

                    <Button type='primary'>选择数据</Button>
                </div>
            </div>
        </div>
    )
}

export const DynamicsChooseData: React.FC = () => {
    const [inputs, setInputs] = useState<InputItem[]>([])

    const handleClickAdd: React.MouseEventHandler<HTMLElement> = (e) => {
        e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'center' })
        setInputs([...inputs, inputItem()])
    }

    const handleRemoveItem = (item: InputItem) => {
        setInputs(prev => prev.filter(it => it.id !== item.id))
    }

    return (
        <div className='choose-data'>
            <div className='choose-data-wrapper'>
                <Input />
                <div className="choose-data-action">
                    <div className='click'>
                        <a className='dowload'>下载示例文件</a>
                        <a className='dowload'>使用示例文件</a>
                    </div>
                    <div className='choose-action'>

                        <Button type='primary'>选择数据</Button>
                    </div>
                </div>
            </div>
            <div className='inputs'>
                {inputs.map(inp => (
                    <React.Fragment key={inp.id}>
                        <Input
                            value={inp.value}
                            placeholder='请选择\输入'
                        />
                        <div className='input-item-actions' style={{ marginBottom: 5 }}>
                            <a
                                className='dowload'
                                onClick={() => handleRemoveItem(inp)}
                            >
                                X
                            </a>
                            <Button type='primary'>选择数据</Button>
                        </div>
                    </React.Fragment>
                ))}
            </div>
            <div className='add-input'>
                <Button type='dashed' onClick={handleClickAdd} >添加输入项</Button>
            </div>
        </div>
    )
}

export const SliderNumebr: React.FC = (props) => {
    return (
        <Row>
            <Col span={19}>
                <Slider {...props} />
            </Col>
            <Col span={3} offset={1}>
                <InputNumber readOnly {...props} />
            </Col>
        </Row>
    )
}

export const ObjectFC: React.FC = (_) => {
    return (
        <Row>

        </Row>
    )
}

export const Collapse = (props: ISchema) => {
    return (
        <AntdCollapse
            ghost
            items={[
                {
                    key: props.id,
                    label: props.formItemProps.label,
                }
            ]}
        />
    )
}
