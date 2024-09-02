import { QRCodeSVG } from 'qrcode.react'
import { SCAN_DATA } from '../../constans'
import './ScanHistory.css'

const ScanHistory = () => {
	const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')

	return (
		<div className='scan-history-container'>
			{data.map((text, index) => (
				<div key={`${text}-${index}`} className='scan-history-item'>
					<div className='scan-history-text'>{text}</div>
					<div className='scan-history-qrcode'>
						<QRCodeSVG value={text} size={100} />
					</div>
				</div>
			))}
		</div>
	)
}

export default ScanHistory
