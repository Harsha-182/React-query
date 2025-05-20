import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Film from './components/Film';
import Home from './components/Home';
import Main from './components/Main';
import { HomeDetail } from './components/HomeDetail';
import { ParallelQueries } from './components/ParallelQueries';
import { DynamicParallelPage } from './components/DynamicParallel.page';

const NavigationRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Main/>}/>
				<Route path='/film' element={<Film/>}/>
				<Route path='/home' element={<Home/>}/>
				<Route path='/home/:id' element={<HomeDetail/>}/>
				<Route path='/friend' element={<ParallelQueries/>}/>
				<Route 
					path='/dynamic' 
					element={
						<DynamicParallelPage
							homeId = {[1,2,3,4,5]}
						/>
					}
				/>
			</Routes>
		</BrowserRouter>
	)
}

export default NavigationRoutes;