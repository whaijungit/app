import './index.css'
import { v4 } from 'uuid'
import { ISchema, cps } from './core'
import { CustomComponentMap } from './map'
import { Editor } from '@monaco-editor/react'
import { Doc, type IDocJSON } from '@/components/tool'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Tabs, Drawer, Space, Input, Button, type TabsProps, Flex, Collapse, Form, Popconfirm, } from 'antd'

export const ReactiveView: React.FC = () => {
    const [form] = Form.useForm()
    const reader = useRef(new FileReader())
    const [doc, setDoc] = useState<File>()
    const [open, setOpen] = useState(false)
    const [logo, setLogo] = useState<File>()
    const [json, setJSON] = useState<IDocJSON>()
    const [base64, setBase64] = useState<string>()
    const renderRef = useRef<HTMLDivElement>(null!)
    const [openParams, setOpenParams] = useState(false)
    const [activeItem, setActiveItem] = useState<ISchema>()
    const [uiConfig, setUiConfig] = useState<ISchema[]>([])
    const [analysisParams, setAnalysisParams] = useState<Record<string, any>>()

    useEffect(() => {
        if (reader.current) {
            if (doc instanceof File) {
                reader.current.readAsText(doc)
                reader.current.onload = e => {
                    if (e.target?.result) {
                        try {
                            const docJSON = JSON.parse(e.target.result as string)
                            console.log(docJSON)
                            setJSON(docJSON)
                        } catch (error) {
                            console.log(error)
                        }
                    } else {
                        setJSON(undefined)
                    }
                }
            }
        }
    }, [doc, reader])
    useEffect(() => {
        if (reader.current) {
            if (logo instanceof File) {
                reader.current.readAsDataURL(logo)
                reader.current.onload = e => {
                    if (e.target?.result) {
                        try {
                            setBase64(e.target.result as string)
                        } catch (error) {
                            console.log(error)
                        }
                    } else {
                        setBase64(undefined)
                    }
                }
            }
        }
    }, [logo, reader])

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => (s: ISchema) => {
        e.dataTransfer.effectAllowed = 'linkMove'
        e.dataTransfer.setData('text/plain', JSON.stringify(s))
    }
    const handleClickUiConfig = () => {
        setOpen(true)
    }
    const handleClickAnalysis = async () => {
        const vs = await form.getFieldsValue()
        setAnalysisParams(vs)
        setOpenParams(true)
    }
    const onClickChooseInput = () => {
        const input = document.createElement('input')
        input.type = 'file'
        input.accept = 'application/json'
        input.click()
        input.onchange = e => {
            const target = e.target as HTMLInputElement
            if (target.files && target.files.length > 0) {
                setDoc(target.files[0])
            }
            else {
                setDoc(undefined)
            }
        }
        input.remove()
    }
    const onClickChooseLogo = () => {
        const input = document.createElement('input')
        input.type = 'file'
        input.accept = 'image/png,image/jpeg,image/gif,image/webp'
        input.click()
        input.onchange = e => {
            const target = e.target as HTMLInputElement
            if (target.files && target.files.length > 0) {
                setLogo(target.files[0])
            }
            else {
                setLogo(undefined)
            }
        }
        input.remove()
    }

    const value = useMemo(() => {
        if (activeItem) {
            const { id, ...reset } = activeItem
            return JSON.stringify(reset, null, 4)
        }
        return undefined
    }, [activeItem])

    const renderItem = () => {
        return uiConfig.map((it, i) => {
            return (
                <div
                    key={i}
                    draggable
                    onClick={(e) => {
                        setActiveItem(it);
                        (e.target as HTMLDivElement).scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }}
                    className={`custom-item${activeItem?.id === it.id ? ' active' : ''}`}

                >
                    <Form.Item shouldUpdate={true} {...it.formItemProps}>
                        {CustomComponentMap[it.type](it)}
                    </Form.Item>
                    <div className='action'>
                        <Popconfirm title='删除该组件?'
                            onConfirm={(e) => {
                                e?.stopPropagation()
                                setUiConfig(prev => prev.filter(s => it.id !== s.id))
                                if (activeItem && it.id === activeItem.id) {
                                    setActiveItem(undefined)
                                }
                            }}
                        >
                            <svg className='action-item' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" fill="white" />
                                <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#D6DAE3" />
                                <path d="M9 11H23L21.5 24H10.5L9 11Z" stroke="#67717D" strokeWidth="2" strokeLinejoin="round" />
                                <path d="M7 11H25" stroke="#67717D" strokeWidth="2" strokeLinejoin="round" />
                                <rect x="13" y="8" width="6" height="3" stroke="#67717D" strokeWidth="2" strokeLinejoin="round" />
                            </svg>
                        </Popconfirm>

                    </div>
                </div>
            )
        })
    }
    const handleSave = () => {

    }
    const items: TabsProps['items'] = [
        {
            key: 'base',
            label: '基础配置',
            children: (
                <div className='uiconfig-view'>
                    <div className='config-view-item upload-area'>
                        <Space
                            size={40}
                            direction='vertical'
                        >
                            <Space size={10}>
                                <span>工具文档</span>
                                <Space.Compact>
                                    <Input value={doc?.name} />
                                    <Button onClick={onClickChooseInput} type='primary'>选择</Button>
                                </Space.Compact>
                            </Space>
                            <Space size={10}>
                                <span>工具logo</span>
                                <Space.Compact>
                                    <Input value={logo?.name} />
                                    <Button onClick={onClickChooseLogo} type='primary'>选择</Button>
                                </Space.Compact>
                            </Space>
                        </Space>
                    </div>
                    <div className='config-view-item'>
                        <Doc json={json} base64={base64} />
                    </div>
                </div>
            )
        },
        {
            key: 'uiconfig',
            label: '参数配置',
            children: (
                <div className='uiconfig-view'>
                    <div className='config-view-item comps'>
                        <div className='view-title'>组件</div>
                        <div className='cps-items'>
                            {cps.map(it => (
                                <div
                                    draggable
                                    key={it.label}
                                    className='cps-item'
                                    onDragStart={(e) => handleDragStart(e)(it.template)}
                                >
                                    {it.icon}
                                    <span>{it.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='config-view-item render' >
                        <div className='view-title'>预览</div>
                        <div ref={renderRef} className='drag-container'
                            onDragEnter={e => {
                                const target = e.target as HTMLDivElement
                                target.classList.add('drop-enter')
                            }}
                            onDragOver={e => e.preventDefault()}
                            onDrop={e => {
                                const target = e.target as HTMLDivElement
                                target.classList.remove('drop-enter')
                                const data = e.dataTransfer.getData('text/plain')
                                if (data) {
                                    const item = {
                                        id: v4(),
                                        ...JSON.parse(data),
                                    }
                                    setActiveItem(item)
                                    setUiConfig([...uiConfig, item])
                                    renderRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
                                }
                                e.dataTransfer.clearData()
                            }}

                            onDragLeave={e => {
                                const target = e.target as HTMLDivElement
                                target.classList.remove('drop-enter')
                                e.dataTransfer.clearData()
                            }}
                        >
                            <Form
                                form={form}
                                layout='vertical'
                                requiredMark={false}
                            >
                                {renderItem()}
                            </Form>

                        </div>
                    </div>
                    <div className='config-view-item editor-readme'>
                        <div className='view-title'>代码</div>
                        <div className="editor">
                            <Editor
                                value={value}
                                language='json'
                                options={{ fontSize: 18 }}
                                onChange={e => {
                                    if (e && activeItem) {
                                        const item = {
                                            ...JSON.parse(e),
                                            id: activeItem.id,
                                        }
                                        setUiConfig(prev => prev.map<ISchema>(it => {
                                            if (it.id === activeItem.id) {
                                                return item
                                            }
                                            return it
                                        }))
                                    }
                                }}
                            />
                        </div>
                        <Collapse
                            items={[
                                {
                                    key: 'readme',
                                    label: '文档说明',
                                    children: <>Readme</>
                                }
                            ]}
                        />
                    </div>
                </div>
            )
        },
    ]

    return (
        <Drawer
            open={true}
            styles={{
                body: {
                    padding: '0px'
                },
            }}
            width={innerWidth - 240}
            footer={
                <Flex justify='flex-end'>
                    <Space size={24} >
                        <Button>取消</Button>
                        <Button.Group>
                            <Button onClick={handleClickUiConfig}>UI 配置</Button>
                            <Button onClick={handleClickAnalysis}>分析参数</Button>
                            <Button onClick={handleClickAnalysis}>文档配置</Button>
                        </Button.Group>
                        <Button.Group>
                            <Button onClick={handleSave} type='primary'>保存</Button>
                            <Button type='primary'>提交审核</Button>
                        </Button.Group>
                    </Space>
                </Flex>

            }
        >
            <Tabs
                items={items}
                tabPosition='left'
                style={{ height: '100%' }}
            />
            <Drawer width={800} onClose={() => setOpen(false)} open={open} title='UI配置'
                children={
                    <Editor
                        language='json'
                        options={{ readOnly: true, fontSize: 18 }}
                        value={JSON.stringify(uiConfig, undefined, 4)}
                    />
                }
            />
            <Drawer width={800} onClose={() => setOpenParams(false)} open={openParams} title='分析参数'
                children={
                    <Editor
                        language='json'
                        options={{ readOnly: true, fontSize: 18 }}
                        value={JSON.stringify(analysisParams, null, 4)}
                    />
                }
            />
        </Drawer>
    )
}
