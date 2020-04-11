import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';

import "./sign-in.styles.scss";
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
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
                    <FormInput name="email" value={this.state.email} required onChange={this.handleChange} label="email" />
                    <FormInput name="password" value={this.state.password} required onChange={this.handleChange} label="password" />

                    <CustomButton type="submit">Submit Form</CustomButton>
                </form>
            </div>
        );
    }
}


export default SignIn;