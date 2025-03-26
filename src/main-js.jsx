
import React from 'react'
import ReactDOM from 'react-dom/client'
import AppJSWithRoutes from './AppJSWithRoutes'
import './index.css'
import { removeBrandingTagJS } from './utils/removeBrandingJS'

// Remove any branding tags
removeBrandingTagJS();

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppJSWithRoutes />
)
