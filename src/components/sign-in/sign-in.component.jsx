import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';

import "./sign-in.styles.scss";
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGogle } from '../../firebase-utils/firebase.utils';

import {auth} from '../../firebase-utils/firebase.utils';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            })
        } catch (error) {
            console.error(error);
        }
    }
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="email" value={this.state.email} required onChange={this.handleChange} label="email" />
                    <FormInput type="password" name="password" value={this.state.password} required onChange={this.handleChange} label="password" />
                    <div className="buttons">
                        <CustomButton type="submit">SIGN IN</CustomButton>
                        <CustomButton type="button" onClick={signInWithGogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}


export default SignIn;