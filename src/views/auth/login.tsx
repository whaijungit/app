import './index.less'
import { api } from '@/api/user'
import { CheckPwd } from './checked.pwd'
import { createPortal } from "react-dom"
import { useDispatch } from 'react-redux'
import { Button, Form, Input } from "antd"
import { userActions } from '@/stores/user'
import { setToken, showMsg } from '@/common'
import { captcha, pwd, user } from '@/common/svg'
import { useEffect, useRef, useState } from "react"
import { permissionActions } from '@/stores/permission'
import { auth } from '@/common/auth'

interface IProps {
    open?: boolean
}

interface IEvents {
    onClose?: () => void
    onClickRegister?: () => void
}

export enum TabKey {
    phone = 'phone',
    account = 'account',
}

export const Login: React.FC<IProps & IEvents> = (props) => {
    const [form] = Form.useForm()
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [tabKey, setTabKey] = useState(TabKey.account)
    const dialogRef = useRef<HTMLDialogElement>(null!)
    useEffect(() => {
        window.addEventListener('keydown', keyDown)
        return () => {
            window.removeEventListener('keydown', keyDown)
        }
    }, [dialogRef])
    useEffect(() => {
        if (typeof props.open !== 'undefined') {
            setOpen(props.open)
        }
    }, [props.open])
    useEffect(() => {
        if (open) {
            showDialog()
        } else {
            closeModal()
        }
    }, [open])

    const showDialog = () => {
        if (dialogRef.current) {
            dialogRef.current.showModal()
        }
    }
    const keyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeModal()
        }
    }
    const closeModal = () => {
        if (dialogRef.current) {
            props.onClose && props.onClose()
            setOpen(false)
            dialogRef.current.close()
            setTabKey(TabKey.account)
            form.resetFields()
        }
    }

    const onFinish = async (payload: any) => {
        try {
            const result = await api.login(payload)
            setToken(result.data.token)
            const resp = await api.info()
            auth(dispatch, resp)
            showMsg({ message: '登录成功' })
            closeModal()
        } catch (error) {

        }
    }

    const Dialog = (
        <dialog className='ant-dialog' ref={dialogRef}>
            <div className='tabs'>
                <div onClick={() => setTabKey(TabKey.account)} className={`tabs-item${tabKey === TabKey.account ? ' active' : ''}`}>密码登录</div>
                <div onClick={() => setTabKey(TabKey.phone)} className={`tabs-item${tabKey === TabKey.phone ? ' active' : ''}`}>短信登录</div>
            </div>
            <div onClick={closeModal} className="dialog-colse">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 19L19 5" stroke="#181D28" />
                    <path d="M5 5L19 19" stroke="#181D28" />
                </svg>
            </div>
            <div className='login-container'>
                <Form form={form} onFinish={onFinish}>
                    <Form.Item
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: '请输入账号'
                            }
                        ]}
                        name='username'
                    >
                        <Input placeholder='请输入账号' allowClear prefix={user} />
                    </Form.Item>
                    <Form.Item
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: '请输入密码'
                            }
                        ]}
                        name='password'
                    >
                        <Input.Password placeholder='请输入密码' allowClear prefix={pwd} />
                    </Form.Item>
                    <Form.Item
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: '请输入验证码'
                            }
                        ]}
                        name='captcha'
                    >
                        <Input placeholder='请输入验证码' allowClear prefix={captcha} />
                    </Form.Item>
                    <Form.Item
                        hasFeedback
                        name='checkedPwd'
                        initialValue={true}
                    >
                        <CheckPwd />
                    </Form.Item>
                    <Button
                        block
                        type='primary'
                        htmlType='submit'
                        style={{ marginBottom: 24 }}
                    >
                        登录
                    </Button>
                    <Button onClick={props.onClickRegister} block>注册</Button>
                </Form>
            </div>
        </dialog>
    )

    return open ? createPortal(Dialog, document.body) : null
}