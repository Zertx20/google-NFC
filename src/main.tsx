import { StrictMode } from 'react'
import './i18n'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { trackPageView } from './utils/metaPixel'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Ensure Meta Pixel fires after React app loads
if (typeof window !== 'undefined') {
  // Wait for React to mount and pixel to be ready
  setTimeout(() => {
    trackPageView();
  }, 500);
}
