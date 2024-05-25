import './App.sass';
import Main from './componets/mainsecton/Main.jsx';

import FilteredProducts from './componets/filteredProducts/FilteredProducts.jsx';
import SingleCardPage from './componets/singleCardPage/SingleCardPage.jsx';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './componets/navBar/NavBar.jsx';
import Cart from './componets/cartPage/Cart.jsx';
import Login from './componets/Login/Login.jsx';

function App() {
	const [searchValue, setSearchValue] = useState('');

	return (
		<div className="container">
			<BrowserRouter>
				<NavBar searchValue={searchValue} setSearchValue={setSearchValue} />
				<Routes>
					<Route path="/" element={<Main />} />
					<Route
						path="/filteredProducts/:type"
						element={<FilteredProducts />}
					/>
					<Route
						path="/filteredProducts/:type/:id"
						element={<SingleCardPage />}
					/>
					<Route path="/cart" element={<Cart />} />

					<Route path="/login" element={<Login />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
