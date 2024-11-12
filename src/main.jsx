import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { RouterProvider } from 'react-router-dom'
import Router from './router/Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
    <RouterProvider router={Router}>
    <App />
    </RouterProvider>
    </Provider>
  </StrictMode>,
)
