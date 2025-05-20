import { useQuery, useQueryClient  } from '@tanstack/react-query';
import axios from 'axios';

const fetchHome = async ({queryKey}) => {
	const id = queryKey[1];
	const res = await axios.get(`http://localhost:7000/home/${id}`);
	return res.data.data;
}

export const useHomeDetail = (id) => {
	const queryClient = useQueryClient();
	return useQuery({
			queryKey: ['superherodetail', id],
			queryFn: fetchHome,
			initialData: () => {
				const cachedHomeList = queryClient
				.getQueryData(['superhero'])

				return cachedHomeList?.find(home => home.id == id);
			}
			
		});
}