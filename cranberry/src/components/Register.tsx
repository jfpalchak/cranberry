import AuthService from '../services/auth.service';
import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';

const BASE_URL = "http://localhost:5000/api";

export default function Register() {

  const [registerSuccess, setRegisterSuccess] = useState<string | null>(null);
  const [formData, setFormData] = useState<RegisterFormState>({
    userName: '',
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({...prevData, [name]: value}));
  }

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    AuthService.register(formData)
      .then(response => {
        setRegisterSuccess(`${response.data.status}: ${response.data.message}`);
        // redirect user
      })
      .catch((error) => {
        console.log("Registration error: ", error) // ! CONSOLE LOG
        const message = error.response.data.message 
        || error.response.data[0]?.description
        || error.response.data.errors.Email
        || error.response.data.errors.Password
        || error.response.data.errors.UserName
        setRegisterSuccess(message);
      });
  }

  return (
    <section>

      <h1>Register:</h1>
      {registerSuccess}
      <form className="register-form" onSubmit={handleRegister}>
      <input 
          type="text" 
          id="userName" 
          name="userName" 
          placeholder="User Name" 
          required
          onChange={handleChange}
        />
        <br/>
        <input 
          type="text"
          id="registerEmail"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
        />
        <br/>
        <input 
          type="password" 
          id="registerPassword" 
          name="password" 
          placeholder="Password" 
          required
          onChange={handleChange}
        />
        <br/>
        <button>Register</button>
      </form>

      <div className="callout">
        <p>Already have an account? <Link to="/sign-in">Sign in.</Link></p>
      </div>
      
    </section>
  );
} 

interface RegisterFormState {
  userName: string;
  email: string;
  password: string;
}