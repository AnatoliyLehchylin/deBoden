import React from 'react'
import ReactDOM from 'react-dom/client'
import {ThemeProvider} from '@mui/material/styles';
import theme from './services/theme.js';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={theme}>
        <App/>
    </ThemeProvider>
)
