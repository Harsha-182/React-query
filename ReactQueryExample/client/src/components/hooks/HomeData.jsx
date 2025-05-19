import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';

const fetchHome = () => {
	return axios.get('http://localhost:7000/home').then((res) => res.data.data);
}

export const useCustomQuery = (onSuccess, onError) => {
	return useQuery({
			queryKey: ['superhero'],
			queryFn: fetchHome,
			onSuccess,
			onError,
			enabled: false
		});
}