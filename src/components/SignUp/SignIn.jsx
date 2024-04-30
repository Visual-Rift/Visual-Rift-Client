import React, { useState } from 'react';
import './SignUp.css';
import logo from '/vro.png';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
  };

  return (
    <div className='form-page'>
      <form onSubmit={handleSubmit} className='form'>
        <div className='form-head'>
          <img src={logo} alt="visual-rift-logo" className='form-logo' />
          <h1>Visual Rift</h1>
        </div>
        <h1>SignIn</h1>

        <div className='form-row'>
          <label htmlFor="email" className='form-label'>email</label>
          <input type="text" name='email' id='email' className='form-input' value={email} onChange={(e) => { setEmail(e.target.value) }} />
        </div>


        <div className='form-row'>
          <label htmlFor="password" className='form-label'>password</label>
          <input type="password" id='password' name='password' className='form-input' value={password} onChange={(e) => { setPassword(e.target.value) }} />
        </div>

        <div className='form-row'>
          <button type='submit' className='btn btn-block'>Submit</button>
        </div>

        <div className='form-row'>
                Not a Member ?? <a> SignUp</a>
        </div>

      </form>
    </div>
  );
}

export default SignIn;
