import { Suspense, lazy } from 'react'
import { start, done } from 'nprogress'
import { Outlet, RouteObject } from 'react-router-dom'
import { Layout, AsideSection } from '@/components/layout'

const Tools = lazy(
    async () => {
        start()
        const comp = await import('@/views/system/tools')
        done()
        return comp
    }
)

const Users = lazy(
    async () => {
        start()
        const comp = await import('@/views/system/users')
        done()
        return comp
    }
)

export const systemkRoutes: RouteObject[] = [
    {
        path: '/system',
        element: <Layout children={<AsideSection title='平台管理' children={<Outlet />} />} />,
        children: [
            {
                index: true,
                element: <Suspense children={<>dashbord</>} />
            },
            {
                path: 'users',
                element: <Suspense children={<Users/>} />,
            },
            {
                path: 'roles',
                element: <>roles</>,
            },
            {
                path: 'tools',
                element: <Suspense children={<Tools />} />,
            },
            {
                path: 'premissions',
                element: <>premissions</>,
            },
            {
                path: 'files',
                element: <>files</>,
            },
            {
                path: 'images',
                element: <>images</>,
            },
            {
                path: 'operates',
                element: <>operates</>,
            },
            {
                path: 'projects',
                element: <>projects</>,
            }
        ]
    }
]
