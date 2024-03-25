import './index.less'
import { createPortal } from "react-dom"
import { Button, Form, Input, Radio, notification } from "antd"
import { useEffect, useRef, useState } from "react"
import { api } from '@/api/user'

interface IProps {
    open?: boolean
}

interface IEvents {
    onClose?: () => void
    onClickLogin?: () => void
}

export enum TabKey {
    phone = 'phone',
    account = 'account',
}

const okStyle = { display: 'flex', alignItems: 'center', justifyContent: 'center', columnGap: 10 }

export const Register: React.FC<IProps & IEvents> = (props) => {
    const [form] = Form.useForm()
    const [step, setStep] = useState(1)
    const [open, setOpen] = useState(false)
    const dialogRef = useRef<HTMLDialogElement>(null!)
    const [isSubmiting, setIsSubmiting] = useState(false)
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
            form.resetFields()
        }
    }



    const handleSubmit = async () => {
        try {
            setIsSubmiting(true)
            const vs = await form.validateFields()
            await api.register(vs)
            closeModal()
            notification.success({ message: '注册成功', duration: 3 })
        } catch (error) {

        } finally {
            setIsSubmiting(false)
        }

    }

    const handleNext = async () => {
        try {
            await form.validateFields()
            setStep(prev => prev <= 2 ? 2 : prev + 1)
        }
        catch (error) {

        }
    }

    const handlePrev = () => {
        setStep(prev => prev >= 1 ? 1 : --prev)
    }

    const Dialog = (
        <dialog className='ant-dialog register' ref={dialogRef}>
            <div className='dialog-header'>
                <div className='come-back' onClick={props.onClickLogin}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M14 8L10 12L14 16" stroke="#89909E" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
                    <span>登录</span>
                </div>
                <div className='dialog-title'>注册</div>
            </div>
            <div onClick={closeModal} className="dialog-colse">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 19L19 5" stroke="#181D28" />
                    <path d="M5 5L19 19" stroke="#181D28" />
                </svg>
            </div>
            <div className='form-container'>
                <Form form={form} requiredMark={false} labelCol={{ span: 5 }}>
                    <div className={`dialog-step-item${step === 1 ? ' active' : ''}`} >
                        <Form.Item
                            hasFeedback
                            label='手机号'
                            rules={[
                                {
                                    required: true,
                                    message: '请输入手机号'
                                },
                                {
                                    required: true,
                                    pattern: /^(86|852|886)?(1[3-9]\d{9})|(0\d{2,3}-\d{7,8})$/,
                                    message: '手机格式不正确'
                                }
                            ]}
                            name='mobile'
                        >
                            <Input placeholder='请输入手机号' allowClear />
                        </Form.Item>
                        <Form.Item
                            hasFeedback
                            label='验证码'
                            rules={[
                                {
                                    required: true,
                                    message: '请输入验证码'
                                }
                            ]}
                            name='captcha'
                        >
                            <Input placeholder='请输入验证码' allowClear />
                        </Form.Item>
                        <Form.Item
                            label='邮箱'
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: '请输入邮箱'
                                },
                                {
                                    type: 'email',
                                    message: '邮箱格式不正确'
                                }
                            ]}
                            name='email'
                        >
                            <Input placeholder='请输入邮箱' allowClear />
                        </Form.Item>
                        <Form.Item
                            label='密码'
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: '请输入密码',
                                },
                                {
                                    max: 16,
                                    message: '密码长度只能在8-16个字符之间',
                                },
                                {
                                    min: 8,
                                    message: '密码长度只能在8-16个字符之间',
                                }
                            ]}
                            name='password'
                        >
                            <Input.Password placeholder='请输入密码' allowClear />
                        </Form.Item>
                        <Form.Item
                            hasFeedback
                            label='确认密码'
                            name='confirm_password'
                            dependencies={['password']}
                            rules={[
                                {
                                    required: true,
                                    message: '请输入确认密码',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('两次密码不一致'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password placeholder='请输入确认密码' allowClear />
                        </Form.Item>
                        <div style={okStyle}>
                            <Button
                                type='primary'
                                onClick={handleNext}
                                style={{ marginBottom: 24 }}
                            >
                                下一步
                            </Button>
                        </div>
                    </div>
                    <div className={`dialog-step-item${step === 2 ? ' active' : ''}`}>
                        <Form.Item
                            hasFeedback
                            label='姓名'
                            name='realname'
                        >
                            <Input placeholder='请输入姓名' allowClear />
                        </Form.Item>
                        <Form.Item
                            hasFeedback
                            label='性别'
                            name='gender'
                        >
                            <Radio.Group options={[{ label: '男', value: '男' }, { label: '女', value: '女' }]} />
                        </Form.Item>
                        <Form.Item
                            label='单位'
                            hasFeedback
                            name='company'
                        >
                            <Input placeholder='请输入单位名称' allowClear />
                        </Form.Item>
                        <Form.Item
                            label='专业'
                            hasFeedback
                            name='profession'
                        >
                            <Input placeholder='请输入专业' allowClear />
                        </Form.Item>
                        <Form.Item
                            label='研究方向'
                            hasFeedback
                            name='research'
                        >
                            <Input placeholder='请输入课题组研究方向' allowClear />
                        </Form.Item>
                        <div style={okStyle}>
                            <Button
                                onClick={handlePrev}

                                style={{ marginBottom: 24 }}
                            >
                                上一步
                            </Button>
                            <Button
                                type='primary'
                                loading={isSubmiting}
                                onClick={handleSubmit}
                                style={{ marginBottom: 24 }}
                            >
                                提交
                            </Button>
                        </div>
                    </div>


                </Form>
            </div>
        </dialog>
    )

    return open ? createPortal(Dialog, document.body) : null
}