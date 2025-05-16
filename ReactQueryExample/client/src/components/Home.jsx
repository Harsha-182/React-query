import React, {useState, useEffect} from 'react';
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';

import Navbar from './Navbar';

const Home = () => {
	// const [film, setFilms] = useState([]);
	// const [loading, setLoading] = useState(true);

	// useEffect(() => {
	// 	axios.get('http://localhost:7000/film')
	// 	.then((res) => {
	// 		setFilms(res.data.data);
	// 		setLoading(false);
	// 	})
	// 	.catch((err) => {
	// 		console.log("err:",err);
	// 	})
	// })

	// if(loading){
	// 	return(
	// 		<div>Loading...</div>
	// 	)
	// }

	const fetchHome = () => {
		return axios.get('http://localhost:7000/home').then((res) => res.data.data);
	}

	const {isLoading, isError, error, data, isFetching} = useQuery({
		queryKey: ['superhero'],
		queryFn: fetchHome,
		cacheTime: 5000,
	});

	 const queryClient = new QueryClient();
	 
	 const data1 = queryClient.getQueryData(['superhero']);
		console.log("data1==================", data1);
	 
	if(isLoading){
		return <div>Loading Home...</div>
	}
	
	console.log("isFetching:",isFetching);
	console.log("isLoading:",isLoading);

	if(isError){
		return(
			<div> Error: {error.message}</div>
		)
	}

	return (
		<div>
			<Navbar/>
			{data?.map((item) => {
				return(
					<div key={item.id}>
						<h1>{item.title}</h1>
						{/* <h2>Just testing</h2> */}
						<small>{item.year}</small>
					</div>
				)
			})}
		</div>
	)
}

export default Home;