import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Film from './components/Film';
import Home from './components/Home';

const NavigationRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/film' element={<Film/>}/>
			</Routes>
		</BrowserRouter>
	)
}

export default NavigationRoutes;