import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''})
    }

    handelChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value})

    }

    render() {
        return (
            <div className="signin">
                <h1>I have already account</h1>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name='email'
                        value={this.state.email}
                        label='email'
                        handleChange={this.handelChange}
                        required/>
                   
                    <FormInput
                        type="password"
                        name='password'
                        value={this.state.email}
                        handleChange={this.handelChange}
                        label='password'
                        required/>
                 
                    <div className="buttons">
                     <CustomButton type="submit" >Sign in </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign with Google</CustomButton>
                    </div>
                  
                </form>
            </div>
        ) 
    }
}

export default SignIn;