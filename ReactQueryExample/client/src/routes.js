import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Film from './components/Film';
import Home from './components/Home';
import Main from './components/Main';

const NavigationRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Main/>}/>
				<Route path='/film' element={<Film/>}/>
				<Route path='/home' element={<Home/>}/>
			</Routes>
		</BrowserRouter>
	)
}

export default NavigationRoutes;