import mockImg from './host.tool.png'
export const HostCardGroup: React.FC = () => {
    return (
        <div className='host'>
            <div className="host-item">
                <div className="host-title">多组学</div>
                <div className="host-more">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <rect y="32" width="32" height="32" rx="16" transform="rotate(-90 0 32)" fill="white" />
                        <path d="M15 20L19 16L15 12" stroke="#181D28" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className="host-cards">
                    {new Array(8).fill(0).map((_, index) => (
                        <div key={index} className="host-tool-item">
                            <img className='host-tool-img' src={mockImg} alt="" />
                            <div>
                                <div className='host-tool-title'>宏基因组</div>
                                <div className='host-tool-desc'>质量控制和统计分析</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="host-item">
                <div className="host-title">云工具</div>
                <div className="host-more">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <rect y="32" width="32" height="32" rx="16" transform="rotate(-90 0 32)" fill="white" />
                        <path d="M15 20L19 16L15 12" stroke="#181D28" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className="host-cards">
                    {new Array(8).fill(0).map((_, index) => (
                        <div key={index} className="host-tool-item">
                            <img className='host-tool-img' src={mockImg} alt="" />
                            <div>
                                <div className='host-tool-title'>宏基因组</div>
                                <div className='host-tool-desc'>质量控制和统计分析</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}