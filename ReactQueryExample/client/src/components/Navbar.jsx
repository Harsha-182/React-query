import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			<ul>
				<li>
					<Link to="/">Main</Link>
				</li>
				<li>
					<Link to="/film">Film</Link>
				</li>
				<li>
					<Link to="/home">Home</Link>
				</li>
				<li>
					<Link to="/friend">Friend</Link>
				</li>
			</ul>
		</div>
	)
}

export default Navbar;