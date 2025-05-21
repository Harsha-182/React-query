import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { request } from '../../utils/axios-utils'

const fetchHome = async () => {
	// const res = await axios.get('http://localhost:7000/home');
	// return res.data.data;
	return request({url: '/home'})
}

const addHome = async (home) => {
	// return axios.post('http://localhost:7000/home', home);
	return request({url: 'home', method: 'POST', data: home})

}

export const useCustomQuery = () => {
	return useQuery({
			queryKey: ['superhero'],
			queryFn: fetchHome,
	});
};

export const useAddHomeData = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: addHome,
		onMutate: (newHero) => {
			queryClient.cancelQueries({queryKey: ['superhero']});
			const previousHomeList = queryClient.getQueryData({queryKey: ['superhero']});
			queryClient.setQueryData(['superhero'], (old) => {
				return [...old, {...newHero, id: old.length + 1}]
			})
			return {previousHomeList}
		},
		onError: (_error, _home, context) => {
			queryClient.setQueryData(['superhero'], context.previousHomeList)
		},
		onSettled: () => {
			queryClient.invalidateQueries({queryKey: ['superhero']})
		},
	})
}