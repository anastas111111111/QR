import { useState } from 'react'
import { Scanner } from '@yudiel/react-qr-scanner'
import s from './QrCodeScanner.module.css'
import { SCAN_DATA } from '../../constans'

const QrCodeScanner = () => {
	const [scanned, setScanned] = useState(null)

	const scanHandler = result => {
		setScanned(result[0].rawValue)

		const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')

		localStorage.setItem(
			SCAN_DATA,
			JSON.stringify([...prevData, result[0].rawValue])
		)
	}
	console.log('Scanned: ', scanned)

	return (
		<div className={s.container}>
			<p>{scanned}</p>
			<Scanner
				onScan={scanHandler}
				components={{ audio: false, finder: false }}
				styles={{ container: { width: 200, height: 200 } }}
			></Scanner>
			<p className={s.result}>{scanned}</p>
		</div>
	)
}

export default QrCodeScanner
