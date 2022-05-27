import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SportList from "./components/SportList";
import SportDetail from "./components/SportDetail";
import "./App.css";

function App() {
	return (
		<Router>
			<div>
				<nav>
					<Link to="/">Home</Link>
				</nav>

				<Switch>
				<Route path='/' exact component={SportList} />
				<Route path='/detail/:id' component={SportDetail} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;