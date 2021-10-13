import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import NewPage from "./NewPage";

export default function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/newpage/" component={NewPage} />
			</Switch>
		</Router>
	);
}
