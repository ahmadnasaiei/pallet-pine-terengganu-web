import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/NavbarComponent'
import ProductListing from './Containers/ProductListing'
import ProductDetailComponent from './components/Product/ProductDetailComponent';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<ProductListing />} />
				<Route path='/product/:productId' element={<ProductDetailComponent />} />
				<Route>404 Not Found</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App
