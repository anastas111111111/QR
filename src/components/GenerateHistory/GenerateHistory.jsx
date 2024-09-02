import { QRCodeSVG } from 'qrcode.react'
import { GENERATE_DATA } from '../../constans'
import './GenerateHistory.css'

const GenerateHistory = () => {
	const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')

	return (
		<div className='generate-history'>
			{data.map((text, index) => (
				<p key={`${text}-${index}`} className='history-item'>
					<span className='text'>{text}</span>
					<QRCodeSVG value={text} size={100} className='qr-code' />
				</p>
			))}
		</div>
	)
}

export default GenerateHistory
