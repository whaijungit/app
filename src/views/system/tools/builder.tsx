import './index.less'
import { useState } from 'react'
import { FormRender } from '@/components/design'
import { MonacoEditor } from '@/components/monaco'
import { Collapse, Divider } from 'antd'

export const Builder: React.FC = () => {
    const [stepIndex, setStepIndex] = useState(2)
    return (
        <div className='builder-design'>
            <div className='builder-steps'>
                <div onClick={() => setStepIndex(1)} className={`step-item${stepIndex === 1 ? ' active' : ''}`}>基础配置</div>
                <div onClick={() => setStepIndex(2)} className={`step-item${stepIndex === 2 ? ' active' : ''}`}>参数配置</div>
            </div>
            <div className='step-panel'>
                <div className="panel-item">
                    <div className='panel-title'>组件</div>
                    <div className="component-panel">
                        <div className='component-title'>单体</div>
                        <div className='component-items'>
                            {new Array(10).fill(null).map((_, index) => (
                                <div
                                    key={index}
                                    draggable
                                    className='component-item'
                                >
                                    <img src="" alt="" />
                                    <span>文本框</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="panel-components">
                        <div className='component-title'>组合</div>
                        <div className='component-items'>
                            {new Array(2).fill(null).map((_, index) => (
                                <div key={index} draggable className='component-item'>
                                    <img src="" alt="" />
                                    <span>对象组件</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='panel-item' onDragEnter={e => e.preventDefault()}>
                    <div className='panel-title'>预览</div>
                    <FormRender />
                </div>
                <div className='panel-item'>
                    <div className='panel-title'>代码</div>
                    <div className="panel-editor">
                        <MonacoEditor
                            value='[]'
                            height='400px'
                        />
                    </div>
                    <Divider />
                    <Collapse
                        expandIconPosition='end'
                        items={[
                            {
                                label: '说明',
                                children: (
                                    <div>
                                        doc
                                    </div>
                                )
                            }
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}