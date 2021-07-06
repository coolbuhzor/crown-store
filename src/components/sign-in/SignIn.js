import React, { useState } from 'react';
import './SignIn.scss';
import FormInput from '../form-input/FormInput';

const SignIn = () => {
  const [signIn, setSignIn] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSignIn({ email: '', password: '' });
  };

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setSignIn({ [name]: value });
  };
  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form action='' onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={signIn.email}
          handleChange={handleChange}
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={signIn.password}
          handleChange={handleChange}
          label='password'
          required
        />

        <input type='submit' value='Sign In' />
      </form>
    </div>
  );
};

export default SignIn;