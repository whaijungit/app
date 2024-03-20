import './index.less'
import { useState } from 'react'


export const Builder: React.FC = () => {
    const [stepIndex, setStepIndex] = useState(2)
    return (
        <div className='builder-design'>
            <div className='builder-steps'>
                <div onClick={() => setStepIndex(1)} className={`step-item${stepIndex === 1 ? ' active' : ''}`}>基础配置</div>
                <div onClick={() => setStepIndex(2)} className={`step-item${stepIndex === 2 ? ' active' : ''}`}>参数配置</div>
            </div>
            
        </div>
    )
}