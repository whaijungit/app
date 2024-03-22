import React, { useState } from "react"
import { BaseView } from "./base.view"
import { CustomView } from "./custom.view"

interface TabItem {
    value: string
    label: React.ReactNode
}

const tabs: TabItem[] = [
    {
        value: 'base',
        label: '基础配置',
    },
    {
        value: 'params',
        label: '参数配置',
    }
]

export const DesignView: React.FC = () => {
    const [tabKey, setTabKey] = useState<string>(tabs[0].value)
    const tabCls = (it: any) => tabKey === it.value ? 'design-tool-tab-item active' : 'design-tool-tab-item'
    return (
        <section className='design-tool design-flex'>
            <div className="design-tool-tabs">
                {tabs.map(it => (
                    <div
                        key={it.value}
                        className={tabCls(it)}
                        onClick={() => setTabKey(it.value)}
                    >
                        {it.label}
                    </div>
                ))}
            </div>
            <div className='design-main'>
                {tabKey === 'base'&&<BaseView />}
                {tabKey === 'params'&&<CustomView />}
            </div>
        </section>
    )
}


