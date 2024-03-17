import imgURL from './achievement.png'

export const Achievement: React.FC = () => {
    return (
        <div className='achievement'>
            <div className='achievement-container'>
                <div className="achievement-title">研发成果</div>
                <div className="achievement-items">
                    <div className="achievement-item">
                        <span>500+</span>
                        <span>知识产权申请</span>
                    </div>
                    <div className="achievement-item">
                        <span>300+</span>
                        <span>知识产权授权</span>
                    </div>
                    <div className="achievement-item">
                        <span>50+</span>
                        <span>专利授权</span>
                    </div>
                    <div className="achievement-item">
                        <span>30+</span>
                        <span>高水平论文发表</span>
                    </div>
                    <div className="achievement-item">
                        <span>10+</span>
                        <span>主持/参与重大科技项目</span>
                    </div>
                </div>
            </div>
            <img src={imgURL} alt="" />
        </div>
    )
}
