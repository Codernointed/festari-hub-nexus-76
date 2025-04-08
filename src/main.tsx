
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { optimizePerformance } from './utils/optimizePerformance.ts'

// Run performance optimizations as early as possible
optimizePerformance();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
