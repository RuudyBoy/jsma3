import { Link } from "react-router-dom";

function SportItem({ id, title }) { 
	return (
		<Link to={`/detail/${id}`}>
			<h5>{title}</h5>
		</Link>
	);
}


export default SportItem;
