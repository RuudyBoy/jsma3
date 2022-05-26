import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BookList from "./components/BookList";
import BookDetail from "./components/BookDetail";
import "./App.css";

function App() {
	return (
		<Router>
			<div>
				<nav>
					<Link to="/">Home</Link>
				</nav>

				<Routes>
					<Route path="/" exact>
						<BookList />
					</Route>
					<Route path="/detail/:id">
						<BookDetail />
					</Route>
				</Routes>
			</div>
		</Router>
	);
}

export default App;