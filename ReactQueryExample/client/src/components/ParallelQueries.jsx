import { useQuery } from "@tanstack/react-query"
import axios from 'axios';

const fetchHome = async() => {
	return await axios.get('http://localhost:7000/home').then((res) => res.data.data);
}

const fetchFriends = async() => {
	return await axios.get('http://localhost:7000/friend').then((res) => res.data.data)
}

export const ParallelQueries = () => {
	const {data: home} = useQuery({
		queryKey: ['superhero'],
		queryFn: fetchHome,
	})

	const {data: friends} = useQuery({
		queryKey: ['friends'],
		queryFn: fetchFriends,
	})

	return(
		<div>
			<h1>Parallel Queries</h1>

			<h2>Home</h2>
			{home?.map((item) => {
				return(
					<div key={item.id}>
						<h2>{item.title}</h2>
						<p>{item.year}</p>
					</div>
				)
			})}

			<h2>Friends</h2>
			{friends?.map((item) => {
				return(
					<div key={item.id}>
						<h2>{item.name}</h2>
						<p>{item.age}</p>
					</div>
				)
			})}
		</div>
	)
}