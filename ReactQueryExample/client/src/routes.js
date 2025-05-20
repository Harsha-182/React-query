import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Film from './components/Film';
import Home from './components/Home';
import Main from './components/Main';
import { HomeDetail } from './components/HomeDetail';
import { ParallelQueries } from './components/ParallelQueries';

const NavigationRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Main/>}/>
				<Route path='/film' element={<Film/>}/>
				<Route path='/home' element={<Home/>}/>
				<Route path='/home/:id' element={<HomeDetail/>}/>
				<Route path='/friend' element={<ParallelQueries/>}/>
			</Routes>
		</BrowserRouter>
	)
}

export default NavigationRoutes;