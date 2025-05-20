import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';

export const InfinteQueries = () => {
	const fetchColor = async ({pageParam = 1}) => {
		return await axios.get('http://localhost:7000/color',{
		params: {
			limit:5,
			page:pageParam
		}
	}).then(res => res.data);
	}
	const {data, isError, isLoading, hasNextPage, fetchNextPage, isFetching} = useInfiniteQuery({
		queryKey: ['color'],
		queryFn: fetchColor,
		getNextPageParam: (_lastPage, pages) => {
			if(pages.length < 4) {
				return pages.length + 1
			} else {
				return undefined
			}
		}
	});

	if(isLoading) {
		return <h1>Loading...</h1>
	}
	if(isError) {
		return <h1>Error...</h1>
	}

	return (
		<div>
			{data?.pages?.map((group, i) => {
				return (
					<div key={i}>
						{
							group.data.map(item => (
								<h2 key={item.id}>
									{item.id} {item.name}
								</h2>
							))
						}
					</div>
				)
			})}
			<div>
				<button disabled={!hasNextPage} onClick={fetchNextPage}>Load more</button>
			</div>
			<div>
				{isFetching && <span>Loading...</span>}
			</div>
		</div>
	)
}