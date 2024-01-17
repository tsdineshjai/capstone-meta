import React from "react";
import Logo from "../Contents/Logo.svg";
import "../Styles/HeaderStyle.css";

const style = {
	display: "flex",
	justifyContent: "space-evenly",
	alignContent: "center",
	color: "brown",
	margin: "1rem",
	borderBottom: "1px solid grey",
	padding: "0 ",
};
function Header({ children }) {
	return (
		<header style={style} className="header">
			<img src={Logo} alt="little lemon logo" />
			{children}
		</header>
	);
}

export default Header;
