import { Suspense, lazy } from 'react'
import { start, done } from 'nprogress'
import { Layout } from '@/components/layout'
import { Outlet, RouteObject } from 'react-router-dom'

const Home = lazy(async () => {
    start()
    const comp = await import('@/views/home')
    done()
    return comp
})

const Groups = lazy(async () => {
    start()
    const comp = await import('@/views/groups')
    done()
    return comp
})

const GroupDetail = lazy(async () => {
    start()
    const comp = await import('@/views/groups/detail')
    done()
    return comp
})

const Tools = lazy(async () => {
    start()
    const comp = await import('@/views/tools')
    done()
    return comp
})

const ToolsDetail = lazy(async () => {
    start()
    const comp = await import('@/views/tools/detail')
    done()
    return comp
})

export const cloudRoutes: RouteObject[] = [
    {
        path: '/',
        element: <Layout children={<Outlet />} />,
        children: [
            {
                index: true,
                element: <Suspense children={<Home />} />
            },
            {
                path: 'groups',
                element: <Suspense children={<Groups />} />
            },
            {
                path: 'groups/:id',
                element: <Suspense children={<GroupDetail />} />
            },
            {
                path: 'tools',
                element: <Suspense children={<Tools />} />
            },
            {
                path: 'tools/:id',
                element: <Suspense children={<ToolsDetail />} />
            },
        ]
    }
]
