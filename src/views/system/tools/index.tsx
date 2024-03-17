import { Builder } from './builder'
import { Button, Drawer } from 'antd'
import { useEffect, useState } from 'react'

const Tools: React.FC = () => {
    const [open, setOpen] = useState(false)
    const [openWidth, setOpenWidth] = useState(0)
    useEffect(() => {
        setOpenWidth(window.innerWidth - 240)
        window.addEventListener('resize', () => {
            setOpenWidth(document.documentElement.clientWidth - 240)
        })
    }, [])
    const handleClickOpenDrawer = () => setOpen(true)
    const handleCloseDrawer = () => setOpen(false)
    return (
        <>
            <Button onClick={handleClickOpenDrawer}>新建工具</Button>
            <Drawer
                open={open}
                destroyOnClose
                onClose={handleCloseDrawer}
                styles={{
                    body: {
                        padding: 0
                    }
                }}
                maskClosable={false}
                footer={
                    <div style={{ display: 'flex', gap: 20, alignItems: 'center', justifyContent: 'flex-end' }}>
                        <Button onClick={handleCloseDrawer}>取消</Button>
                        <Button.Group>
                            <Button>界面配置</Button>
                            <Button>分析参数</Button>
                        </Button.Group>
                        <Button.Group>
                            <Button type='primary'>保存</Button>
                            <Button type='primary'>提交</Button>
                        </Button.Group>
                    </div>
                }
                width={openWidth}
                children={<Builder />}
            />
        </>
    )
}

export default Tools;
