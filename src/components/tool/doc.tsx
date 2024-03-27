import { Table, Image } from 'antd'
import React from 'react'

interface BasicInfo {
    desc: string
    type: string
    name_en: string
    name_zh: string
    version: string
    category: string
}

interface IParameter {
    name: string
    label: string
    desc: string[]
    anno: string[]
    demo_file: string
    demo_table: {
        data: any[]
        columns: any[]
    }
}

interface IResultShowItem {
    title: string
    desc: string[]
    data: IResultShowDataItem[]
}

interface IResultShowDataItem {
    name: string
    type: 'img' | 'table'
    label: string
    anno: string[]
    desc: string[]
    data: any[]
}

interface ParameterDesc {
    data: IParameter[]
}

export interface IDocJSON {
    basic_info: BasicInfo
    parameter_desc: ParameterDesc
    result_show: {
        data: IResultShowItem[]
    }
}

export const Doc: React.FC<{ json?: IDocJSON, base64?: string }> = ({ json, base64 }) => {
    if (!json) {
        return null
    }
    const desc = (its: string[]) => {
        if (!its) {
            return
        }
        if (its.length > 0) {
            return (
                <div className='arg-item-desc'>
                    {its.map((it, index) => (
                        <p key={index}>{it}</p>
                    ))}
                </div>
            )
        }
    }

    const anno = (its: string[]) => {
        if (!its) {
            return
        }
        if (its.length > 0) {
            return (
                <div className='arg-item-anno'>
                    {its.map((it, index) => (
                        <p key={index}>{it}</p>
                    ))}
                </div>
            )
        }
    }


    const renderArgsItem = (argsItems: IParameter[]) => {
        return argsItems.map((item, index) => (
            <div key={index} className='arg-item'>
                <div className='arg-item-title'>{item.name}</div>
                {desc(item.desc)}
                {item.label && <div className='arg-item-transpranecy'>
                    {item.label}
                </div>}
                {item.demo_table && (
                    <div className='arg-item-table'>
                        <Table
                            rowKey={'id'}
                            scroll={{ x: 1500 }}
                            columns={item.demo_table.columns}
                            dataSource={item.demo_table.data}
                        />
                    </div>
                )}
                {anno(item.anno)}

            </div>
        ))
    }

    const renderShowDataItem = (showDataItem: IResultShowDataItem[]) => {
        return showDataItem.map((item, index) => {
            console.log(item.data)

            return (
                <div className='arg-item' key={index}>

                    {desc(item.desc)}
                    {item.label && <div className='arg-item-transpranecy'>
                        {item.label}
                    </div>}
                    {item.type === 'img' && <div className='arg-item-image'>
                        <Image src={(item.data && item.data.length > 0) ? item.data[0].path : void 0} />
                    </div>}
                    {anno(item.anno)}
                </div>
            )
        })
    }

    const renderItem = () => {
        if (json.result_show && json.result_show.data) {
            return json.result_show.data.map((showItem, index) => {

                return (
                    <React.Fragment key={index}>
                        <div className="args-title">{showItem.title}</div>
                        {renderShowDataItem(showItem.data)}
                    </React.Fragment>
                )
            })
        }
    }

    return (
        <article className='tool-doc'>
            <header className='tool-doc-header'>
                <img className="tool-doc-header-logo" src={base64} alt="" />
                <div className='tool-doc-header-text'>
                    <h3 className='tool-doc-header-title'>{json.basic_info.name_zh}</h3>
                    <p className='tool-doc-header-desc'>{json.basic_info.desc}</p>
                    <div className='tool-doc-header-author'>
                        <span className=''>版本：{json.basic_info.version}</span>
                        <span className=''>更新时间：{ }</span>
                    </div>
                </div>
            </header>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1260 1" fill="none">
                <path d="M0 0.5H1260" stroke="#E8EAF0" />
            </svg>
            <div className='args-content'>
                <div className="args-item">
                    <div className="args-title">参数说明</div>
                    {renderArgsItem(json.parameter_desc.data)}
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1260 1" fill="none">
                    <path d="M0 0.5H1260" stroke="#E8EAF0" />
                </svg>
                <div className="args-item">
                    {renderItem()}
                </div>
            </div>
        </article>
    )
}