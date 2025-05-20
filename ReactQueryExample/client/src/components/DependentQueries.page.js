import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchHome = async ({ queryKey }) => {
	const emailId = queryKey[1]
	return await axios(`http://localhost:7000/user/${emailId}`).then((res) => res.data.data);
}

const fetchChannel = async ({ queryKey }) => {
	const channelId = queryKey[1]
	return await axios(`http://localhost:7000/channel/${channelId}`).then((res) => res.data.data);
}

export const DependentQueriesPage = ({email}) => {
	const { data } = useQuery({
		queryKey: ['home', email],
		queryFn: fetchHome,
	})
	const channelId = data[0]?.channelId

	useQuery({
		queryKey: ['channel', channelId],
		queryFn: fetchChannel,
		enabled: !!channelId,
	})
	return (
		<div>
			Dependent Queries Page
		</div>
	)
}