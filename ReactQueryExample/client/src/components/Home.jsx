import React, {useState, useEffect} from 'react';
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Navbar from './Navbar';
import { useAddHomeData, useCustomQuery } from './hooks/HomeData';
import { Link } from 'react-router-dom';

const Home = () => {
	const [id, setId] = useState(0);
	const [title, setTitle] = useState('');
	const [year, setYear] = useState(0);
	const {isLoading, isError, error, data, refetch} = useCustomQuery();

	const { mutate:addHome } = useAddHomeData()

	if(isLoading){
		return <div>Loading Home...</div>
	}

	if(isError){
		return(
			<div> Error: {error.message}</div>
		)
	}

	const handleAddHomeClick = async() => {
		console.log({id, title, year})
		const home = {id, title, year}
		addHome(home)
	}

	
	return (
		<div>
			<Navbar/>

			<input type='number' placeholder='Enter ID' onChange={e => setId(e.target.value)} />
			<input type='title' placeholder='Enter Title' onChange={e => setTitle(e.target.value)} />
			<input type='year' placeholder='Enter Year' onChange={e => setYear(e.target.value)}/>
			<button onClick={handleAddHomeClick}>Add</button>
			
			<button onClick={refetch}>Refetch</button>
			{data?.map((item) => {
				return(
					<div key={item.id}>
						<Link to={`/home/${item.id}`}>{item.title}</Link>
					</div>
				)
			})}
		</div>
	)
}

export default Home;