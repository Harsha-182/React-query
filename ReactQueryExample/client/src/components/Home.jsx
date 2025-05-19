import React, {useState, useEffect} from 'react';
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Navbar from './Navbar';
import { useCustomQuery } from './hooks/HomeData';
import { Link } from 'react-router-dom';

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


	const onSuccess = (data) => {
		console.log("Perform side effect after data fetching", data.length);
	}

	const onError = (error) => {
		console.log("Perform side effect after encountering error", error.message);
	}

	const {isLoading, isError, error, data, refetch} = useCustomQuery(onSuccess, onError);


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