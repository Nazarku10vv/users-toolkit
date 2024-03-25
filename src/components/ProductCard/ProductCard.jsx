import React, { useEffect, useState } from 'react'
import './ProductCard.css'
import { IoSearchSharp } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { MdDelete } from 'react-icons/md'
import { removeTask } from '../../store/Slices/Slices'

const ProductCard = () => {
	const navigate = useNavigate()

	const [value, setValue] = useState('')
	const [data, setData] = useState(null)

	const todo = useSelector(state => state.Slices.todo)
	console.log(todo)

	const dispatch = useDispatch()

	console.log(data, 'data')

	function searchProduct() {
		let result = todo.filter(item =>
			item.name.toLowerCase().includes(value.toLowerCase())
		)
		setData(result)

		if (!value) {
			setData(todo)
		}
	}

	useEffect(() => {
		searchProduct()
	}, [value])

	return (
		<div>
			<section id='motion'>
				<div className='container'>
					<div className='motion'>
						<h1>Motion</h1>
						<h2
							style={{
								margin: '40px 0'
							}}
						>
							Пользователи({data?.length})
						</h2>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'end'
							}}
						>
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									background: 'rgba(237, 241, 247, 1)',
									border: ' 1px solid rgba(228, 233, 242, 1)',
									width: ' 332px',
									height: ' 40px',
									borderRadius: ' 5px'
								}}
							>
								<input
									style={{
										background: ' none',
										border: 'none',
										width: '100%',
										height: '100%',
										paddingLeft: '10px'
									}}
									type='text'
									placeholder='Найти пользователя по ФИО'
									onChange={e => setValue(e.target.value)}
								/>
								<IoSearchSharp
									style={{
										fontSize: '27px',
										paddingRight: '10px'
									}}
								/>
							</div>
							<button
								style={{
									background: 'rgba(51, 102, 255, 1)',
									width: '107px',
									height: '40px',
									padding: '0px 1pc 0px 0px',
									borderRadius: '4px 0px 0px 0px',
									color: 'white',
									fontSize: '16px'
								}}
								onClick={() => navigate('/admin')}
							>
								Добавить
							</button>
						</div>
						<div>
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'space-between',
									background: 'rgba(228, 233, 242, 1)',
									padding: '20px 20px 20px 80px',
									color: 'rgba(34, 43, 69, 1)',
									fontSize: '15px',
									marginTop: '4pc'
								}}
							>
								<div
									style={{
										display: 'flex',
										alignItems: 'center',
										gap: '20px'
									}}
								>
									<h3>Дата регистрации</h3>
									<h3>ФИО</h3>
								</div>
								<div
									style={{
										display: 'flex',
										alignItems: 'center',
										gap: '60px'
									}}
								>
									<h3>Работа</h3>
									<h3>Рост</h3>
								</div>
							</div>
							{data?.map(el => (
								<div
									key={el.id}
									style={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'space-between',
										padding: '20px 20px 20px 30px',
										color: 'rgba(34, 43, 69, 1)',
										fontSize: '15px',
										borderBottom: '1px solid #333'
									}}
								>
									<div
										style={{
											display: 'flex',
											alignItems: 'center',
											gap: '20px'
										}}
									>
										<img
											style={{
												width: '40px',
												height: '40px',
												borderRadius: '50%'
											}}
											src={el.photo}
											alt='non'
										/>
										<h3
											style={{
												width: '150px'
											}}
										>
											{el.time}
										</h3>
										<h3
											style={{
												fontSize: '15px',
												fontWeight: '400'
											}}
										>
											{el.name}
										</h3>
									</div>
									<div
										style={{
											display: 'flex',
											alignItems: 'center',
											gap: '60px'
										}}
									>
										<h3>dev</h3>
										<button
											onClick={() => dispatch(removeTask(el.id))}
											style={{
												color: 'red',
												background: 'none',
												fontSize: '25px',
												width: '41px'
											}}
										>
											<MdDelete />
										</button>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default ProductCard
