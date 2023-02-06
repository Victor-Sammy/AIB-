import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { persistor, store } from './store/store'
import './fontawesome'
import { dom } from '@fortawesome/fontawesome-svg-core'
import { PersistGate } from 'redux-persist/integration/react'
import './components/interceptors/axios'

dom.watch()
// This will kick off the initial replacement of i to svg tags and configure a MutationObserver

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
)
