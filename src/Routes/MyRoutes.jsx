import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from '../Page/MainPage'
import AdminPage from '../Page/AdminPage'

const MyRoutes = () => {
	const routes = [
		{
			path: '/',
			element: <MainPage />,
			key: 1
		},
		{
			path: '/admin',
			element: <AdminPage />,
			key: 2
		}
	]
	return (
		<Routes>
			{routes.map(item => (
				<Route path={item.path} element={item.element} key={item.key} />
			))}
		</Routes>
	)
}

export default MyRoutes
