import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar(props) {
	return (
		<nav className="NavBar">
			<NavLink
				to="/"
				className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : ""
				}
			>
				Home
			</NavLink>
			<NavLink
				to="/stars"
				className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : ""
				}
			>
				Stars
			</NavLink>
			<NavLink
				to="/imagination"
				className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : ""
				}
			>
				Imagination
			</NavLink>
			<NavLink
				to="/nasacontact"
				className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : ""
				}
			>
				NASA Contact
			</NavLink>
			<NavLink
				to="/guestbook"
				className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : ""
				}
			>
				Guest Book
			</NavLink>
		</nav>
	);
}

export default NavBar;