
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { optimizePerformance } from './utils/optimizePerformance.ts'
import { removeBrandingTag } from './utils/removeBranding.ts'

// Remove any branding tags as early as possible
removeBrandingTag();
// Run performance optimizations
optimizePerformance();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

