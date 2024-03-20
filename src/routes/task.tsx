import { Suspense } from 'react'
import { Outlet, RouteObject } from 'react-router-dom'
import { Layout, AsideSection } from '@/components/layout'
import { ReactiveView } from '@/components/reactive'

export const taskRoutes: RouteObject[] = [
    {
        path: '/task',
        element: <Layout children={<AsideSection title='任务中心' children={<Outlet />} />} />,
        children: [
            {
                index: true,
                element: <Suspense children={<ReactiveView />} />
            },
            {
                path: 'project',
                element: <>groups</>,
            },
            {
                path: 'datas',
                element: <>tools</>,
            }
        ]
    }
]
