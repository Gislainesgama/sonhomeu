import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import InstagramLinkPage from './InstagramLinkPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InstagramLinkPage />
  </StrictMode>,
)
