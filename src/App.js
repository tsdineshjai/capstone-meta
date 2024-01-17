import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
	return (
		<React.Fragment className="app">
			<Header>
				<Navbar></Navbar>
			</Header>
			<Main></Main>
			<Footer></Footer>
		</React.Fragment>
	);
}

export default App;
