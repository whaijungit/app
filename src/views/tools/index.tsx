import bg from './bg.png'
import { Input } from 'antd'
import toolimgURL from './tool.png'
import { search } from '@/common/svg'



const Groups: React.FC = () => {
    return (
        <div className='cloud'>
            <div className='cloud-header'>
                <div className='wrapper'>
                    <img src={bg} alt='' />
                    <div className='cloud-header-text-item cloud-header-title'>云工具</div>
                    <div className='cloud-header-text-item cloud-header-desc'>专注于数据分析和可视化绘图，可为用户提供便捷、高效的数据处理与可视化的系列工具。</div>
                    <div className='cloud-header-text-item cloud-header-search'>
                        <Input placeholder='搜索云工具' className='cloud-search' prefix={search} allowClear />
                    </div>
                </div>
            </div>
            <div className='wrapper'>
                <div className='cloud-toc'>
                    <div className='cloud-toc-item active'>基础绘图</div>
                    <div className='cloud-toc-item'>基础绘图</div>
                    <div className='cloud-toc-item'>基础绘图</div>
                    <div className='cloud-toc-item'>基础绘图</div>
                    <div className='cloud-toc-item'>基础绘图</div>
                </div>
                <div className='cloud-category'>
                    <div className='cloud-category-title'>基础绘图</div>
                    <div className='cloud-category-list'>
                        {new Array(6).fill(0).map((_, index) => (
                            <div key={index} className="cloud-category-item tool">
                                <img src={toolimgURL} alt="" />
                                <div>
                                    <div className='cloud-category-item-title'>基础绘图</div>
                                    <div className='cloud-category-item-desc'>基于VCF输入文件计算各品种间的IBS遗传距离，并通过热图进⾏结果展⽰。</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='cloud-category-title'>基础绘图</div>
                    <div className='cloud-category-list'>
                        {new Array(6).fill(0).map((_, index) => (
                            <div key={index} className="cloud-category-item tool">
                                <img src={toolimgURL} alt="" />
                                <div>
                                    <div className='cloud-category-item-title'>基础绘图</div>
                                    <div className='cloud-category-item-desc'>基于VCF输入文件计算各品种间的IBS遗传距离，并通过热图进⾏结果展⽰。</div>

                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='cloud-category-title'>基础绘图</div>
                    <div className='cloud-category-list'>
                        {new Array(6).fill(0).map((_, index) => (
                            <div key={index} className="cloud-category-item tool">
                                <img src={toolimgURL} alt="" />
                                <div>
                                    <div className='cloud-category-item-title'>基础绘图</div>
                                    <div className='cloud-category-item-desc'>基于VCF输入文件计算各品种间的IBS遗传距离，并通过热图进⾏结果展⽰。</div>

                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='cloud-category-title'>基础绘图</div>
                    <div className='cloud-category-list'>
                        {new Array(6).fill(0).map((_, index) => (
                            <div key={index} className="cloud-category-item tool">
                                <img src={toolimgURL} alt="" />
                                <div>
                                    <div className='cloud-category-item-title'>基础绘图</div>
                                    <div className='cloud-category-item-desc'>基于VCF输入文件计算各品种间的IBS遗传距离，并通过热图进⾏结果展⽰。</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='cloud-category-title'>基础绘图</div>
                    <div className='cloud-category-list'>
                        {new Array(6).fill(0).map((_, index) => (
                            <div key={index} className="cloud-category-item tool">
                                <img src={toolimgURL} alt="" />
                                <div>
                                    <div className='cloud-category-item-title'>基础绘图</div>
                                    <div className='cloud-category-item-desc'>基于VCF输入文件计算各品种间的IBS遗传距离，并通过热图进⾏结果展⽰。</div>

                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='cloud-category-title'>基础绘图</div>
                    <div className='cloud-category-list'>
                        {new Array(6).fill(0).map((_, index) => (
                            <div key={index} className="cloud-category-item tool">
                                <img src={toolimgURL} alt="" />
                                <div>
                                    <div className='cloud-category-item-title'>基础绘图</div>
                                    <div className='cloud-category-item-desc'>基于VCF输入文件计算各品种间的IBS遗传距离，并通过热图进⾏结果展⽰。</div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Groups