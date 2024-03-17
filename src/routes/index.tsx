import routes from './routes'
import { useRoutes } from 'react-router-dom'

export const Router: React.FC = () => useRoutes(routes)

export { useSearchParams, useParams, useNavigate } from 'react-router-dom'