import { Router } from './routes'
import { ConfigProvider } from 'antd'
import { useAuth } from './hooks/auth'
import { theme } from './stores/theme'
import { useRecoilValue } from 'recoil'
import { BrowserRouter } from 'react-router-dom'

const App: React.FC = () => {
    useAuth()
    const configProviderProps = useRecoilValue(theme)
    return (
        <BrowserRouter>
            <ConfigProvider
                {...configProviderProps}
            >

                <Router />
            </ConfigProvider>
        </BrowserRouter>
    )
}

export default App;
