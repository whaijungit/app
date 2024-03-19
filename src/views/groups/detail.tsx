import { Button } from 'antd';
import group from './images/tool.png'
import technology from './images/technology.png'

const GroupDetail: React.FC = () => {
    return (
        <article className='group-detail'>
            <div className='group-header'>
                <div className='wrapper'>
                    <div className='header-container'>
                        <img src={group} alt="" />
                        <div className="group-text">
                            <div className='group-title'>宏基因组</div>
                            <div className='group-desc'>全基因组关联分析（GWAS）工具旨在简化大量数据的分析过程，提供易于使用的界面和丰富的数据可视化和分析功能。用户可以上传群体的基因型和表型数据，进行质量控制和统计分析，并根据需要绘制Manhattan图、QQ图和其他图表来展示分析结果。</div>
                            <div className='group-author'>
                                <div className='group-version'>版本：V1.0</div>
                                <div className='group-update-time'>更新时间：2023-06-02 08:56:04</div>
                            </div>
                            <Button type='primary'>示例报告</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div className="technology">
                    <div className='technology-title'>技术路线</div>
                    <div className='technology-img'>
                        <img src={technology} alt="" />
                    </div>
                </div>
                <div className="technology">
                    <div className='technology-title'>技术路线</div>
                    <div className='technology-img'>
                        <img src={technology} alt="" />
                    </div>
                </div>
            </div>
        </article>
    )
}

export default GroupDetail;
