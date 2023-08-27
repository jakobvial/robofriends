import React, {Component} from "react";
import SearchBox from "../components/searchBox/searchBox.component";
import CardList from "../components/cardList/cardList.component";
import "./App.css";
import Scroll from "../components/scroll/scroll.component";
import {ErrorBoundary} from "react-error-boundary";

interface Robot {
	id: number;
	name: string;
	email: string;
}

interface AppState {
	robots: Robot[];
	searchField: string;
}

class App extends Component<{}, AppState> {
	constructor(props: {}) {
		super(props);
		this.state = {
			robots: [],
			searchField: ""
		};
	}

	async componentDidMount() {
		// Using promises
		// fetch("https://jsonplaceholder.typicode.com/users")
		// .then(response => response.json())
		// .then(users => this.setState({robots: users}));

		// Using async/await instead
		const response = await fetch("https://jsonplaceholder.typicode.com/users");
		const users = await response.json();
		this.setState({robots: users});
	}

	onSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const {value} = event.target;
		this.setState({searchField: value});
	};

	render() {
		const {searchField, robots} = this.state;

		const filteredRobots = robots.filter(
				robot => robot.name.toLowerCase().includes(searchField.toLowerCase())
		);

		return !robots.length ?
				<h1 className="tc f1">Loading...</h1>
				:
				(
						<div className="tc">
							<h1 className="f1">RoboFriends</h1>
							<SearchBox
									onChangeHandler={this.onSearchChange}
									value={searchField}
							/>
							<Scroll>
								<ErrorBoundary fallback={<h1 className="f1">Something went wrong.</h1>}>
									<CardList robots={filteredRobots}/>
								</ErrorBoundary>
							</Scroll>
						</div>
				);
	}
}

export default App;
