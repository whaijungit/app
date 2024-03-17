import { code, deliver, dimension, personality, track } from '@/common/svg'

export const Advantage: React.FC = () => {
    return (
        <div className='advantage'>
            <div className="advantage-item">
                <div className="advantage-text">
                    <div className="advantage-title">零代码</div>
                    <div className="advantage-desc">无需代码编程</div>
                    <div className="advantage-desc">玩转数据分析</div>
                </div>
                {code}
            </div>
            <div className="advantage-item">
                <div className="advantage-text">
                    <div className="advantage-title">大规模</div>
                    <div className="advantage-desc">超大存储</div>
                    <div className="advantage-desc">超强算力</div>
                </div>
                {dimension}
            </div>
            <div className="advantage-item">
                <div className="advantage-text">
                    <div className="advantage-title">项目实时跟踪</div>
                    <div className="advantage-desc">多段监控 动态化</div>
                    <div className="advantage-desc">把握项目进展</div>
                </div>
                {track}
            </div>
            <div className="advantage-item">
                <div className="advantage-text">
                    <div className="advantage-title">个性化</div>
                    <div className="advantage-desc">丰富的工具类型</div>
                    <div className="advantage-desc">灵活的参数配置</div>
                </div>
                {personality}
            </div>
            <div className="advantage-item">
                <div className="advantage-text">
                    <div className="advantage-title">便捷交付</div>
                    <div className="advantage-desc">多种数据交互形式</div>
                    <div className="advantage-desc">结果报告线上解读</div>
                </div>
                {deliver}
            </div>
        </div>
    )
}