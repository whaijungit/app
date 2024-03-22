import { ITool } from '@/types'
import { DesignView } from '../reactive'
import { useCallback, useEffect, useState } from 'react'
import { Drawer, Form, type DrawerProps, Space, Button } from 'antd'

interface IProps {
    tool?: ITool
    open?: boolean
}

interface IEvent {
    onClose?: () => void
}

const footerStyle = { width: '100%', gap: 20, justifyContent: 'flex-end' }

export const CreateToolDrawer: React.FC<IProps&IEvent> = (props) => {
    const [form] = Form.useForm()
    const [open, setOpen] = useState(false)
    const [width, setWidth] = useState<number>()
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    useEffect(() => {
        if (props.open) {
            setOpen(true)
        }
    }, [props.open])

    useEffect(() => {
        setWidth(window.innerWidth - 240)
    }, [])

    const handleResize = useCallback(() => {
        setWidth(window.innerWidth - 240)
    }, [])

    const handleClose = () => {
        setOpen(false)
        form.resetFields()
        props.onClose&&props.onClose()
    }
    const title = () => {
        return props.tool ? `编辑【${props.tool.name}】` : '新建工具'
    }
    const drawerProps: DrawerProps = {
        open,
        width,
        title: title(),
        destroyOnClose:true,
        styles: {
            body: {
                padding: '0px'
            }
        },
        onClose: handleClose,
        footer: (
            <Space style={footerStyle}>
                <Button onClick={handleClose}>取消</Button>
                <Button.Group>
                    <Button>UI配置</Button>
                    <Button>分析参数</Button>
                </Button.Group>
                <Button.Group>
                    <Button type='primary'>保存</Button>
                    <Button type='primary'>提交</Button>
                </Button.Group>
            </Space>
        )
    }

    return (
        <Form requiredMark form={form}>
            <Drawer {...drawerProps}>
                <DesignView />
            </Drawer>
        </Form>

    )
}

