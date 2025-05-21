import { useQuery, useMutation } from '@tanstack/react-query';
import axios from 'axios';

const fetchHome = async () => {
	const res = await axios.get('http://localhost:7000/home');
	return res.data.data;
}

const addHome = async (home) => {
	return axios.post('http://localhost:7000/home', home);
}

export const useCustomQuery = () => {
	return useQuery({
			queryKey: ['superhero'],
			queryFn: fetchHome,
	});
};

export const useAddHomeData = () => {
	return useMutation({
		mutationFn: addHome
	})
}