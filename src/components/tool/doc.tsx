import { Table } from 'antd'
import svg from './test.svg'

// const ArgItem = ()=> {
    
// }

export const Doc: React.FC = () => {
    return (
        <article className='tool-doc'>
            <header className='tool-doc-header'>
                <img className="tool-doc-header-logo" src={svg} alt="" />
                <div className='tool-doc-header-text'>
                    <h3 className='tool-doc-header-title'>LEfSe</h3>
                    <p className='tool-doc-header-desc'>全基因组关联分析（GWAS）工具旨在简化大量数据的分析过程，提供易于使用的界面和丰富的数据可视化和分析功能。用户可以上传群体的基因型和表型数据，进行质量控制和统计分析，并根据需要绘制Manhattan图、QQ图和其他图表来展示分析结果。</p>
                    <div className='tool-doc-header-author'>
                        <span className=''>版本：v1.0</span>
                        <span className=''>更新时间：2023-05-10</span>
                    </div>
                </div>
            </header>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1260 1" fill="none">
                <path d="M0 0.5H1260" stroke="#E8EAF0" />
            </svg>
            <div className='args-content'>
                <div className="args-item">
                    <div className="args-title">参数说明</div>
                    <div className='arg-item'>
                        <div className='arg-item-title'>任务名</div>
                        <div className='arg-item-desc'>
                            <p>本次分析任务的名称，⼀个好的任务名称将便于您进⾏任务管理</p>
                            <p>本次分析任务的名称，⼀个好的任务名称将便于您进⾏任务管理</p>
                            <p>本次分析任务的名称，⼀个好的任务名称将便于您进⾏任务管理</p>
                        </div>
                        <div className='arg-item-table'>
                            <Table scroll={{ x: '100%' }} />
                        </div>
                        <div className='arg-item-anoo'>
                            <p>本次分析任务的名称，⼀个好的任务名称将便于您进⾏任务管理</p>
                            <p>本次分析任务的名称，⼀个好的任务名称将便于您进⾏任务管理</p>
                            <p>本次分析任务的名称，⼀个好的任务名称将便于您进⾏任务管理</p>
                        </div>
                    </div>
                    <div className='arg-item'>
                        <div className='arg-item-title'>任务名</div>
                        <div className='arg-item-desc'>
                            <p>本次分析任务的名称，⼀个好的任务名称将便于您进⾏任务管理</p>
                            <p>本次分析任务的名称，⼀个好的任务名称将便于您进⾏任务管理</p>
                            <p>本次分析任务的名称，⼀个好的任务名称将便于您进⾏任务管理</p>
                        </div>
                        <div className='arg-item-table'>
                            <Table scroll={{ x: '100%' }} />
                        </div>
                        <div className='arg-item-anoo'>
                            <p>本次分析任务的名称，⼀个好的任务名称将便于您进⾏任务管理</p>
                            <p>本次分析任务的名称，⼀个好的任务名称将便于您进⾏任务管理</p>
                            <p>本次分析任务的名称，⼀个好的任务名称将便于您进⾏任务管理</p>
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1260 1" fill="none">
                    <path d="M0 0.5H1260" stroke="#E8EAF0" />
                </svg>
                <div className="args-item">
                    <div className="args-title">结果展示</div>
                    <div className='arg-item'>
                        <div className='arg-item-title'>任务名</div>
                        <div className='arg-item-desc'>本次分析任务的名称，⼀个好的任务名称将便于您进⾏任务管理</div>
                        <div className='arg-item-desc'>本次分析任务的名称，⼀个好的任务名称将便于您进⾏任务管理</div>
                    </div>
                </div>
            </div>
        </article>
    )
}