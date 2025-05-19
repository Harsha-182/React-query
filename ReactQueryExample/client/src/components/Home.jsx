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

	const onSuccess = (data) => {
		console.log("Perform side effect after data fetching", data.length);
	}

	const onError = (error) => {
		console.log("Perform side effect after encountering error", error.message);
	}

	const {isLoading, isError, error, data, refetch} = useQuery({
		queryKey: ['superhero'],
		queryFn: fetchHome,
		onSuccess,
		onError,
	});


	if(isLoading){
		return <div>Loading Home...</div>
	}

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