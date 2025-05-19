import { useParams } from "react-router-dom"
import { useHomeDetail } from "./hooks/HomeDetails";

export const HomeDetail = () => {
	const {id} = useParams();

	const {data, isLoading, isError} = useHomeDetail(id);

	if(isLoading){
		return( 
			<div>Loading...</div>
		)
	}
	if(isError){
		return(
			<div>Error: {isError.message}</div>
		)
	}
	return(
		<div>
			{data?.title}
		</div>
	)
}