import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'

const root = document.getElementById('root')
if (!root) throw 'React root id missing in index.html'

ReactDOM.createRoot(root).render(<App />)
