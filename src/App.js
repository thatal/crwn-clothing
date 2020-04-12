import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase-utils/firebase.utils"
class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			currentUser: null
		}
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		console.log(process.env);
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if(userAuth){
				console.log(userAuth);
				console.log("calling from app js");
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapShot => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data()
						}
					})
					console.log(snapShot.data());
				});
			}else{
				this.setState({
					currentUser: userAuth
				});
			}
			console.log(userAuth);
		})
	}
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
