import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Film = () => {
	const [film, setFilms] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		axios.get('http://localhost:7000/film')
		.then((res) => {
			setFilms(res.data.data);
			setLoading(false);
		})
		.catch((err) => {
			setError(err.message);
			setLoading(false);
		})
	})

	if(loading){
		return(
			<div>Loading...</div>
		)
	}

	if(error){
		return(
			<div>Error: {error}</div>
		)
	}

	return (
		<div>
			{film.map((item) => {
				return(
					<div key={item.id}>
						<h1>{item.title}</h1>
						<small>{item.year}</small>
					</div>
				)
			})}
		</div>
	)
}

export default Film;