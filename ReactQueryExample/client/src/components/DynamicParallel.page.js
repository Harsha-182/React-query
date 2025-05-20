import { useQueries } from "@tanstack/react-query"
import axios from 'axios';

const fetchHome = async (id) => {
	return await axios.get(`http://localhost:7000/home/${id}`).then(res => res.data.data);
};

export const DynamicParallelPage = ({homeId}) => {
	useQueries({
		queries:homeId?.map( id => {
			return {
				queryKey: ['superhero', id],
				queryFn: () => fetchHome(id),
			}
		})
	})

	return(
		<div>
			<h1>Dynamic Parallel Queries</h1>
		</div>
	)
}