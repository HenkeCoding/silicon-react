import Providers from './Providers.jsx'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <Providers>
    <App />
  </Providers>
)
