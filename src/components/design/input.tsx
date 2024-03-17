import { useState } from 'react'
import { Button, Input, InputProps } from 'antd'
import * as React from 'react'

interface INputItem {
    id: string
}

export const InputChooseData: React.FC<InputProps> = (props) => {
    const [inputs, setInputs] = useState<INputItem[]>([])
    const handleAddInput = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const target = ev.target as Element
        target.scrollIntoView({
            block: 'center', behavior: 'smooth'
        })
        setInputs([...inputs, { id: '@@INPUT' + Math.random().toString(36).substring(2, 8) }])
    }
    const handleRemoveItem = (id: string) => {
        setInputs(inps => inps.filter(item => item.id !== id))
    }
    return (
        <>

            <div className='input-choose-data'>
                <div className='input'> <Input {...props} /></div>
                <div className='input-choose-action'>
                    <div className='dowload-actions'>
                        <a>下载示例文件</a>
                        <a>使用示例文件</a>
                    </div>
                    <Button type='primary'>选择数据</Button>
                </div>
            </div>
            {inputs.map((it) => (
                <div key={it.id} className='input-choose-data'>
                    <div className='input'> <Input {...props} /></div>
                    <div className='input-choose-action'>
                        <div className='dowload-actions'>
                            <a className='input-close' onClick={() => handleRemoveItem(it.id)}>删除</a>
                        </div>
                        <Button type='primary'>选择数据</Button>
                    </div>
                </div>
            ))}
            <div className="input-add">
                <Button onClick={handleAddInput}>add Input</Button>
            </div>
        </>
    )
}