import React, {Component} from "react";
import {robots} from "./data/robots";
import SearchBox from "./components/searchBox/searchBox.component";
import CardList from "./components/cardList/cardList.component";
import "./App.css";

interface AppState {
	robots: typeof robots;
	searchField: string;
}

class App extends Component<{}, AppState> {
	constructor(props: {}) {
		super(props);
		this.state = {
			robots: robots,
			searchField: ""
		};
	}

	onSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const {value} = event.target;
		this.setState({searchField: value});
	};

	render() {
		return (
				<div className="tc">
					<h1 className="f1">RoboFriends</h1>
					<SearchBox
							onChangeHandler={this.onSearchChange}
							value={this.state.searchField}
					/>
					<CardList robots={this.state.robots.filter(
							robot => robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
					)}/>
				</div>
		);
	}
}

export default App;
