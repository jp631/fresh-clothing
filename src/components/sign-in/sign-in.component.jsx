import React, { Component } from 'react';
import FormInput from '../form-input/form-input.comonent';
import CustomButton from '../custom-bottom/custom-button.component';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils.js';

import './sign-in.style.scss';

class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            })
        } catch (error) {
            console.log(error);
        }

      
    }


    handleChange = event => {
        const { value, name } = event.target;

        this.setState({
            [name]: value,
        })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' handleChange={this.handleChange} label="email" value={this.state.email} required />
                    <FormInput name='password' type='password' handleChange={this.handleChange} label="password" value={this.state.password} required />
                    <div className='buttons'>
                    <CustomButton type='submit' value='Submit Form'>SIGN IN </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn >SIGN IN with GOOGLE </CustomButton>
                    </div>

                </form>
            </div>
        );
    }
}

export default SignIn;