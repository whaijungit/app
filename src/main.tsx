import App from './App'
import './monaco.worker'
import './less/index.less'
import 'nprogress/nprogress.css'
import { store } from './stores'
import { StrictMode } from 'react'
import { RecoilRoot } from 'recoil'
import { configure } from 'nprogress'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'

configure({ speed: 50 });

(async function setup() {
    const domEement = document.getElementById('app')
    if (domEement) {
        createRoot(domEement).render((
            <StrictMode>
                <Provider store={store}>
                    <RecoilRoot>
                        <App />
                    </RecoilRoot>
                </Provider >
            </StrictMode>

        ))
    }

})()