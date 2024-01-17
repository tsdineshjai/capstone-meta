import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
	return (
		<>
			<Header>
				<Navbar></Navbar>
			</Header>
			<Main></Main>
			<Footer></Footer>
		</>
	);
}

export default App;
