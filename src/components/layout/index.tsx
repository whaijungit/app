import './index.less'
import * as React from 'react'
import { logo } from '@/common'
import { Menu, MenuProps } from 'antd'
import { Login, Register } from '@/views/auth'
import { NavLink, useLocation } from 'react-router-dom'
import { ReactNode, useEffect, useMemo, useState } from 'react'
import { SYSTEM_MENUS, mapPremissionToMenuItems, TASK_MENUS } from '@/common'
import { useSelector } from 'react-redux'
import { IRootState, IUserState } from '@/types/common'
import { AvatarDropDownMenu } from './avatar'

interface LayoutProps {
    children?: ReactNode
}

export const Layout: React.FC<LayoutProps> = (props) => {
    const { children } = props
    const [open, setOpen] = useState(false)
    const [openRegister, setOpenRegister] = useState(false)
    const userState = useSelector<IRootState, IUserState>(store => store.user)

    const showLoginModal = () => {
        setOpen(true)
    }
    const showRegisterModal = () => {
        setOpenRegister(true)
    }
    const closeRegister = () => {
        setOpenRegister(false)
    }
    const closeLogin = () => {
        setOpen(false)
    }

    const handleClickRegister = () => {
        closeLogin()
        showRegisterModal()
    }

    const handleClickLogin = () => {
        closeRegister()
        showLoginModal()
    }

    const renderAuth = useMemo(() => {
        if (userState.isLogin) {
            return <AvatarDropDownMenu />
        }
        return (
            <>
                <span onClick={showLoginModal} className='nav-item-link login'>登录</span>
                <span onClick={showRegisterModal} className='nav-item-link register'>注册</span>
            </>
        )
    }, [userState.isLogin])

    return (
        <>
            <Login onClickRegister={handleClickRegister} open={open} onClose={closeLogin} />
            <Register onClickLogin={handleClickLogin} open={openRegister} onClose={closeRegister} />
            <header className='header'>
                <nav className='nav'>
                    <div className='nav-item'>
                        <NavLink to='/' className='nav-item-link'>
                            {logo}
                        </NavLink>
                        <NavLink className='nav-item-link' to='/'>首页</NavLink>
                        <NavLink className='nav-item-link' to='/groups'>多组学</NavLink>
                        <NavLink className='nav-item-link' to='/tools'>云工具</NavLink>
                    </div>
                    <div className='nav-item'>
                        <NavLink className='nav-item-link' to='/system'>系统管理</NavLink>
                        <NavLink className='nav-item-link' to='/task'>任务中心</NavLink>
                        {renderAuth}
                    </div>
                </nav>
            </header>
            {children}
        </>
    )
}

interface SectionProps {
    title?: string
    children?: ReactNode
}

export const AsideSection: React.FC<SectionProps> = (props) => {
    const { title, children } = props
    const [menus, setMenus] = useState<MenuProps['items']>([])
    const location = useLocation()
    useEffect(() => {
        if (location.pathname.startsWith('/system')) {
            setMenus(mapPremissionToMenuItems(SYSTEM_MENUS))
        } else if (location.pathname.startsWith('/task')) {
            setMenus(mapPremissionToMenuItems(TASK_MENUS))
        }
    }, [location])
    return (
        <section className='section'>
            <aside className='aside'>
                <div className='aside-title'>{title}</div>
                <div className="aside-menu">
                    <Menu items={menus} mode='inline' />
                </div>
            </aside>
            <main className='main'>
                {children}
            </main>
        </section>
    )
}
