import { cloudRoutes } from './cloud'
import type { RouteObject } from 'react-router-dom'
import { taskRoutes } from './task'
import { systemkRoutes } from './system'

const routes: RouteObject[] = [...cloudRoutes, ...taskRoutes, ...systemkRoutes]

export default routes
