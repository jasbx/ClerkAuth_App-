import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
const PUBLISH_KEY=import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if(!PUBLISH_KEY){
  throw new Error('missing puplish key')
}
import { ClerkProvider } from '@clerk/clerk-react'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISH_KEY}>
    <App />
    </ClerkProvider>
  </React.StrictMode>,
)
