import { StrictMode } from 'react'
import './i18n'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Ensure Meta Pixel fires after React app loads
if (typeof window !== 'undefined') {
  // Wait for React to mount and pixel to be ready
  setTimeout(function() {
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView');
    }
  }, 2000);
  
  // Also fire on window load
  window.addEventListener('load', function() {
    setTimeout(function() {
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'PageView');
      }
    }, 500);
  });
}
