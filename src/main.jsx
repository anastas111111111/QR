import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './Layout'
import QrCode from './components/Generation/QrCode'
import QrCodeScanner from './components/Scan/QrCodeScanner'
import { BrowserRouter } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'


createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Layout />
	</BrowserRouter>
)
