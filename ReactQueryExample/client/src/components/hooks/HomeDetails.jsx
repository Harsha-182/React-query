import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';

const fetchHome = async ({queryKey}) => {
	const id = queryKey[1];
	const res = await axios.get(`http://localhost:7000/home/${id}`);
	return res.data.data;
}

export const useHomeDetail = (id) => {
	return useQuery({
			queryKey: ['superhero', id],
			queryFn: fetchHome,
		});
}