import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth } from "./firebase-utils/firebase.utils"
class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			currentUser: null
		}
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
			this.setState({
				currentUser: user
			});
			console.log(user);
		})
	}
h
	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Router>
					<Header currentUser={this.state.currentUser}/>
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route path="/shop" component={ShopPage} />
						<Route exact path="/signin" component={SignInAndSignUp} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
