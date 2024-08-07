import React from 'react'
import ReactDOM from 'react-dom/client'

import {StoreProvider} from "./app/Providers/StoreProvider";
import App from './app/App.tsx'

import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <StoreProvider>
            <App/>
        </StoreProvider>
    </React.StrictMode>,
)
