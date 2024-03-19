import App from './App'
import './less/index.less'
import 'nprogress/nprogress.css'
import { StrictMode } from 'react'
import { RecoilRoot } from 'recoil'
import { createRoot } from 'react-dom/client'
import { configure } from 'nprogress'
import { Drag } from './drag'

configure({ speed: 50 });

(async function setup() {
    const domEement = document.getElementById('app')
    if (domEement) {
        createRoot(domEement).render((
            <StrictMode>
                <RecoilRoot>
                    <Drag />
                    {/* <App /> */}
                </RecoilRoot>
            </StrictMode>
        ))
    }

})()