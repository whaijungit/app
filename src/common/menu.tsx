import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

interface IPremission {
    sign: string
    label: ReactNode
    children?: IPremission[]
}

export const SYSTEM_MENUS: IPremission[] = [
    {
        label: '总览',
        sign: 'system',
    },
    {
        label: '用户管理',
        sign: 'system-users',
    },
    {
        label: '角色管理',
        sign: 'system-roles',
    },
    {
        label: '权限管理',
        sign: 'system-premissions',
    },
    {
        label: '工具管理',
        sign: 'system-tools',
    },
    {
        label: '运营管理',
        sign: 'system-operates',
    },
    {
        label: '图片管理',
        sign: 'system-images',
    },
    {
        label: '文件管理',
        sign: 'system-files',
    },
    {
        label: '项目管理',
        sign: 'system-projects',
    }
]

export const TASK_MENUS: IPremission[] = [
    {
        sign: 'task',
        label: '总览',
    },
    {
        label: '我的分析',
        sign: 'task-analysis',
        children: [
            {
                label: '项目',
                sign: 'task-analysis-projects',
            },
            {
                label: '工具',
                sign: 'task-analysis-tools',
            },
        ]
    },
    {
        label: '我的数据',
        sign: 'my-datas',
        children: [
            {
                label: '项目',
                sign: 'task-data-project',
            },
            {
                label: '工具',
                sign: 'task-data-tools',
            },
        ]
    },
]


export const mapPremissionToMenuItems = (premissions: IPremission[]) => {
    return premissions.map(it => {
        const newItem = {
            key: it.sign,
            label: it.children ? it.label : <NavLink children={it.label} to={`/${it.sign.split('-').join('/')}`} />,

        }
        if (it.children) {
            return {
                ...newItem,
                children: it.children.map(it => {
                    return {
                        key: it.sign,
                        label: it.children ? it.label : <NavLink children={it.label} to={`/${it.sign.split('-').join('/')}`} />,
                    }
                })
            }
        }
        return newItem
    })
} 