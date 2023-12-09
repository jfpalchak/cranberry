import axios from "axios";
import React, { useState } from "react";

const BASE_URL = "http://localhost:5000/api";

export default function SignIn() {

  const [registerSuccess, setRegisterSuccess] = useState<string | null>(null);
  const [signInSuccess, setSignInSuccess] = useState<string | null>(null);

  const [formData, setFormData] = useState<SignUpFormState>({
    userName: '',
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({...prevData, [name]: value}));
  }

  // REGISTER
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios.post(`${BASE_URL}/users/register`, formData)
      .then(response => {
        setRegisterSuccess(`${response.data.status}: ${response.data.message}`);
        // redirect user
      })
      .catch((error) => {
        setRegisterSuccess(`${error.response.data.status}: ${error.response.data.message}`);
      });
  }

  // SIGN IN
  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios.post(`${BASE_URL}/users/signin`, { email: formData.email, password: formData.password })
      .then(response => {
        setSignInSuccess(`${response.data.status}: ${response.data.message}`);
        const token = response.data.token;

        sessionStorage.setItem("token", token);
        // redirect user
      })
      .catch((error) => {
        setSignInSuccess(`${error.response.data.status}: ${error.response.data.message}`);
      });

  }

  return (
    <section>

      <h1>Register:</h1>
      {registerSuccess}
      <form className="register-form" onSubmit={handleSubmit}>
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

      <h1>Sign In</h1>
      {signInSuccess}
      <form className="signin-form" onSubmit={handleSignIn}>
        <input 
          type="text"
          id="signinEmail"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
        />
        <br/>
        <input 
          type="password" 
          id="signinPassword" 
          name="password" 
          placeholder="Password" 
          required
          onChange={handleChange}
        />
        <br/>
        <button>Log In</button>
      </form>

    </section>
  );
}

interface SignUpFormState {
  userName: string;
  email: string;
  password: string;
}