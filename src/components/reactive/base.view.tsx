import { useState } from 'react'
import { Button, Input } from 'antd'
import { Doc } from '@/components/tool'

const readLine = new FileReader()

export const BaseView: React.FC = () => {
    const [logo, setLogo] = useState<File>()
    const [doc, setDocFile] = useState<File>()
    const onClickChooseData = (accept: string) => {

        const input = document.createElement('input')
        input.type = 'file'
        input.accept = accept
        input.click()
        input.onchange = e => {
            const target = e.target as HTMLInputElement
            if (target.files && target.files.length > 0) {

                const reader = new FileReader()
                reader.readAsText(target.files[0])
                reader.onload = () => {
                    if (accept === '.json') {
                        setDocFile(target.files![0])
                    } else {
                        setLogo(target.files![0])
                    }

                }
            }
        }
        input.remove()
    }

    return (
        <div className='base-view'>
            <div className='base-view-item'>

                <Input.Search
                    value={doc?.name}
                    placeholder='请选择工具文档'
                    enterButton={(
                        <Button
                            type='primary'
                            children='选择数据'
                            onClick={() => onClickChooseData('.json')}
                        />
                    )}
                />
                <Input.Search
                    style={{
                        marginTop: 10
                    }}
                    value={logo?.name}
                    placeholder=''
                    enterButton={(
                        <Button
                            type='primary'
                            children='选择数据'
                            onClick={() => onClickChooseData('.png,.jpg,.gif')}
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