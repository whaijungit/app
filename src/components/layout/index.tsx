import './index.less'
import * as React from 'react'
import { logo } from '@/common/svg'
import { Menu, MenuProps } from 'antd'
import { ReactNode, useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { SYSTEM_MENUS, mapPremissionToMenuItems, TASK_MENUS } from '@/common'

interface LayoutProps {
    children?: ReactNode
}

export const Layout: React.FC<LayoutProps> = (props) => {
    const { children } = props
    return (
        <>
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
                        <span className='nav-item-link login'>登录</span>
                        <span className='nav-item-link register'>注册</span>
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
