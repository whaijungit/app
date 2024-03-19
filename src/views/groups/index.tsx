import { Input } from 'antd'
import bg from './images/bg.png'
import { search } from '@/common/svg'
import toolimgURL from './images/tool.png'

const Groups: React.FC = () => {
    return (
        <div className='cloud'>
            <div className='cloud-header'>
                <div className='wrapper'>
                    <img src={bg} alt='' />
                    <div className='cloud-header-text-item cloud-header-title'>多组学</div>
                    <div className='cloud-header-text-item cloud-header-desc'>通过对高通量测序数据和检测结果进行生物信息分析，能够准确、快速、高效获得数据分析结果和报告，解锁繁杂分析任务。</div>
                    <div className='cloud-header-text-item cloud-header-search'>
                        <Input placeholder='搜索多组学' className='cloud-search' prefix={search} allowClear />
                    </div>
                </div>
            </div>
            <div className='wrapper'>
                <div className='cloud-toc'>
                    <div className='cloud-toc-item active'>微生物组</div>
                    <div className='cloud-toc-item'>微生物组</div>
                    <div className='cloud-toc-item'>微生物组</div>
                    <div className='cloud-toc-item'>微生物组</div>
                    <div className='cloud-toc-item'>微生物组</div>
                </div>
                <div className='cloud-category'>
                    <div className='cloud-category-title'>微生物组</div>
                    <div className='cloud-category-list'>
                        {new Array(6).fill(0).map((_, index) => (
                            <div key={index} className="cloud-category-item">
                                <img src={toolimgURL} alt="" />
                                <div className='cloud-category-item-title'>宏基因组</div>
                                <div className='cloud-category-item-desc'>基于VCF输入文件计算各品种间的IBS遗传距离，并通过热图进⾏结果展⽰。</div>
                            </div>
                        ))}
                    </div>
                    <div className='cloud-category-title'>微生物组</div>
                    <div className='cloud-category-list'>
                        {new Array(6).fill(0).map((_, index) => (
                            <div key={index} className="cloud-category-item">
                                <img src={toolimgURL} alt="" />
                                <div className='cloud-category-item-title'>宏基因组</div>
                                <div className='cloud-category-item-desc'>基于VCF输入文件计算各品种间的IBS遗传距离，并通过热图进⾏结果展⽰。</div>
                            </div>
                        ))}
                    </div>
                    <div className='cloud-category-title'>微生物组</div>
                    <div className='cloud-category-list'>
                        {new Array(6).fill(0).map((_, index) => (
                            <div key={index} className="cloud-category-item">
                                <img src={toolimgURL} alt="" />
                                <div className='cloud-category-item-title'>宏基因组</div>
                                <div className='cloud-category-item-desc'>基于VCF输入文件计算各品种间的IBS遗传距离，并通过热图进⾏结果展⽰。</div>
                            </div>
                        ))}
                    </div>
                    <div className='cloud-category-title'>微生物组</div>
                    <div className='cloud-category-list'>
                        {new Array(6).fill(0).map((_, index) => (
                            <div key={index} className="cloud-category-item">
                                <img src={toolimgURL} alt="" />
                                <div className='cloud-category-item-title'>宏基因组</div>
                                <div className='cloud-category-item-desc'>基于VCF输入文件计算各品种间的IBS遗传距离，并通过热图进⾏结果展⽰。</div>
                            </div>
                        ))}
                    </div>
                    <div className='cloud-category-title'>微生物组</div>
                    <div className='cloud-category-list'>
                        {new Array(6).fill(0).map((_, index) => (
                            <div key={index} className="cloud-category-item">
                                <img src={toolimgURL} alt="" />
                                <div className='cloud-category-item-title'>宏基因组</div>
                                <div className='cloud-category-item-desc'>基于VCF输入文件计算各品种间的IBS遗传距离，并通过热图进⾏结果展⽰。</div>
                            </div>
                        ))}
                    </div>
                    <div className='cloud-category-title'>微生物组</div>
                    <div className='cloud-category-list'>
                        {new Array(6).fill(0).map((_, index) => (
                            <div key={index} className="cloud-category-item">
                                <img src={toolimgURL} alt="" />
                                <div className='cloud-category-item-title'>宏基因组</div>
                                <div className='cloud-category-item-desc'>基于VCF输入文件计算各品种间的IBS遗传距离，并通过热图进⾏结果展⽰。</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Groups