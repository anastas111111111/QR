import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
import QrCode from './components/Generation/QrCode'
import QrCodeScanner from './components/Scan/QrCodeScanner'
import GenerateHistory from './components/GenerateHistory/GenerateHistory'
import ScanHistory from './components/ScanHistory/ScanHistory'

const Layout = () => {
	return (
		<div>
			<Navigation />

			<Routes>
				<Route path='/generate' element={<QrCode />} />
				<Route path='/scan' element={<QrCodeScanner />} />
				<Route path='/scanHistory' element={<ScanHistory />} />
				<Route path='/generateHistory' element={<GenerateHistory />} />
			</Routes>
		</div>
	)
}

export default Layout
