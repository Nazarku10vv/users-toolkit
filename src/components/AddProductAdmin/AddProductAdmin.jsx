import React, { useState } from 'react'
import { GoArrowLeft } from 'react-icons/go'
import { BsCheckLg } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addTask } from '../../store/Slices/Slices'

const AddProductAdmin = () => {
	const navigate = useNavigate()

	const [name, setName] = useState('')
	const [photo, setPhoto] = useState('')

	const dispatch = useDispatch()

	let data = new Date()
	let day = data.getDate()
	let monz = data.getMonth() + 1
	let year = data.getFullYear().toString().slice(-2)
	let hous = data.getHours()
	let minuteс = data.getMinutes()

	if (day < 10) day = '0' + day
	if (monz < 10) monz = '0' + monz
	if (hous < 10) hous = '0' + hous
	if (minuteс < 10) minuteс = '0' + minuteс

	let res = `${day}.${monz}.${year} в ${hous}:${minuteс}`

	function handleSave() {
		const newTask = {
			id: Date.now(),
			name: name,
			photo: photo,
			time: res
		}

		dispatch(addTask(newTask))

		setName('')
		setPhoto('')
	}

	return (
		<div>
			<section id='admin'>
				<div className='container'>
					<div className='admin'>
						<h3
							onClick={() => navigate('/')}
							style={{
								textAlign: 'left',
								fontFamily: 'Open Sans',
								fontSize: '30px',
								fontWeight: '700',
								lineHeight: '40px',
								color: 'rgba(34, 43, 69, 1)',
								display: 'flex',
								alignItems: 'center',
								gap: '15px',
								margin: '4pc 0 6pc 0'
							}}
						>
							<GoArrowLeft />
							Добавить нового пользователя
						</h3>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center'
							}}
						>
							<div
								style={{
									width: '500px'
								}}
							>
								<div
									style={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'space-between',
										margin: '20px 0'
									}}
								>
									<h3
										style={{
											fontFamily: 'Open Sans',
											fontSize: '15px',
											fontWeight: '700',
											lineHeight: '16px',
											color: 'rgba(143, 155, 179, 1)'
										}}
									>
										ФИО *
									</h3>
									<input
										onChange={e => setName(e.target.value)}
										value={name}
										style={{
											paddingLeft: '1pc',
											background: 'rgba(237, 241, 247, 1)',
											border: ' 1px solid rgba(228, 233, 242, 1)',
											width: '320px',
											height: '40px',
											borderRadius: ' 4px 0px 0px 0px'
										}}
										type='text'
										placeholder='Баланчев Баланча Баланчаевич'
									/>
								</div>
								<div
									style={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'space-between',
										margin: '20px 0'
									}}
								>
									<h3
										style={{
											fontFamily: 'Open Sans',
											fontSize: '15px',
											fontWeight: '700',
											lineHeight: '16px',
											color: 'rgba(143, 155, 179, 1)'
										}}
									>
										аватар *
									</h3>
									<input
										onChange={e => setPhoto(e.target.value)}
										value={photo}
										style={{
											paddingLeft: '1pc',
											background: 'rgba(237, 241, 247, 1)',
											border: ' 1px solid rgba(228, 233, 242, 1)',
											width: '320px',
											height: '40px',
											borderRadius: ' 4px 0px 0px 0px'
										}}
										type='text'
										placeholder='Ссылка изображение'
									/>
								</div>

								<button
									style={{
										width: '100%',
										height: '45px',
										borderRadius: '4px 0px 0px 0px',
										background: ' rgba(51, 102, 255, 1)',
										color: 'white',
										display: 'flex',
										alignItems: 'center',
										justifyContent: ' center',
										gp: '20px',
										fontSize: '20px',
										marginTop: '2pc'
									}}
									onClick={handleSave}
								>
									Добавить <BsCheckLg />
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default AddProductAdmin
