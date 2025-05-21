import axios from 'axios';

const client = axios.create({ baseURL: 'http://localhost:7000' });

export const request = async ({...options}) => {
	client.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
	const onSuccess = res => { return res.data.data};
	const onError = err => {
		return err
	}

	return client(options)
		.then(onSuccess)
		.catch(onError);
}	