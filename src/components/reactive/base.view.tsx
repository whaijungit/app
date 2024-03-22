import { useState } from 'react'
import { Button, Input } from 'antd'
import { Doc } from '@/components/tool'

export const BaseView: React.FC = () => {
    const [, setDocFile] = useState<string>()
    const onClickChooseData = () => {
        const input = document.createElement('input')
        input.type = 'file'
        input.accept = '.json'
        input.click()
        input.onchange = e => {
            const target = e.target as HTMLInputElement
            if (target.files && target.files.length > 0 && target.files[0].type === 'application/json') {

                const reader = new FileReader()
                reader.readAsText(target.files[0])
                reader.onload = () => {
                    console.log(target.files)
                    setDocFile(target.files![0].name)
                }
            }
        }
        input.remove()
    }

    return (
        <div className='base-view'>
            <div className='base-view-item'>

                <Input.Search
                    allowClear
                    type='file'
                    placeholder='请选择工具文档'
                    enterButton={(
                        <Button
                            type='primary'
                            children='选择数据'
                            onClick={onClickChooseData}
                        />
                    )}
                />
                <Input.Search
                    style={{
                        marginTop: 10
                    }}
                    placeholder=''
                    enterButton={(
                        <Button
                            type='primary'
                            children='选择数据'
                            onClick={onClickChooseData}
                        />
                    )}
                />
            </div>
            <div className='base-view-item'>
                <Doc />
            </div>
        </div>
    )
}