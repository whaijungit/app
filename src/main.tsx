import App from './App'
import './worker/monaco'
import './less/index.less'
import 'nprogress/nprogress.css'
import { StrictMode } from 'react'
import { RecoilRoot } from 'recoil'
import { configure } from 'nprogress'
import { createRoot } from 'react-dom/client'

configure({ speed: 50 });

(async function setup() {
    const domEement = document.getElementById('app')
    if (domEement) {
        createRoot(domEement).render((
            <StrictMode>
                <RecoilRoot>
                    <App />
                </RecoilRoot>
            </StrictMode>
        ))
    }

})()