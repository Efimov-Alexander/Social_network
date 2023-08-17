import { useParams, } from "react-router-dom";


export const withRouter = (Component) => {
	function ComponentWithRouterProp(props) {
		let params = useParams();
		return (
			<Component
				{...props}
				params={params}
			/>
		);
	}
	return ComponentWithRouterProp;
}