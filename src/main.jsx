import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'
import ShopContextProvider from './context/ShopContext.jsx'

import { Provider } from "react-redux";
import store from "./redux/app/store";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ShopContextProvider>

     <Provider store={store}>
        <App />
      </Provider>

    </ShopContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
