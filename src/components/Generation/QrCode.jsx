import { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import s from './QrCode.module.css'
import { GENERATE_DATA } from '../../constans'

const QrCode = () => {
	const [value, setValue] = useState('')

	const [result, setResult] = useState('')

	const onClickHandler = () => {
		const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')

		localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]))

		setResult(value)
		setValue('')
	}
	const onChangeHandler = e => {
		setValue(e.target.value)
		setResult('')
	}

	console.log('result', result)

	return (
		<div className={s.container}>
			<input
				type='text'
				value={value}
				onChange={onChangeHandler}
				placeholder='Введите запрос...'
				className={s.input}
			/>
			<button type='button' className={s.button} onClick={onClickHandler}>
				Сгенерировать QR
			</button>

			{result !== '' && (
				<div className={s.qrWrapper}>
					<QRCodeSVG value={result} size={180} />
				</div>
			)}
		</div>
	)
}

export default QrCode
