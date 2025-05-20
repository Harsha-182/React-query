import React, { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';

const fetchColor = async({queryKey}) => {
	const page = queryKey[1]

	return await axios.get('http://localhost:7000/color',{
		params: {
			limit:5,
			page
		}
	}).then(res => res.data.data);
}
export const PaginatedQueries = () => {
	const [pageNumber, setPageNumber] = useState(1);
	const {data, isError, isLoading, isFetching} = useQuery({
		queryKey: ['color', pageNumber],
		queryFn: fetchColor,
		keepPreviousData: true,
	})

	if(isLoading) {
		return <h1>Loading...</h1>
	}
	if(isError) {
		return <h1>Error...</h1>
	}

	return (
		<div>
			<h1>Paginated Queries</h1>
			{data?.map(item => {
				return(
					<div key={item.id}>
						<h2>{item.name}</h2>
					</div>
				)
			})}
			<button onClick={() => setPageNumber(page => page-1)} disabled={pageNumber === 1}>Prev Page</button>
			<button onClick={() => setPageNumber(page => page+1)} disabled={pageNumber === 4}>Next Page</button>
			{isFetching && <span>Loading...</span>}
		</div>
	)
}