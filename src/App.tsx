import { Router } from './routes'
import './worker/monaco.worker'
import { ConfigProvider } from 'antd'
import { theme } from './stores/theme'
import { useRecoilValue } from 'recoil'
import { BrowserRouter } from 'react-router-dom'

const App: React.FC = () => {
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
