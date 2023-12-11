import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const BASE_URL = "http://localhost:5000/api";

export default function SignIn() {

  const [signInSuccess, setSignInSuccess] = useState<string | null>(null);
  const [formData, setFormData] = useState<SignInFormState>({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({...prevData, [name]: value}));
  }

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios.post(`${BASE_URL}/users/signin`, { email: formData.email, password: formData.password })
      .then(response => {
        setSignInSuccess(`${response.data.status}: ${response.data.message}`);
        const { token, userId }= response.data;

        console.log(response);

        sessionStorage.setItem("token", token);
        sessionStorage.setItem("user", userId);
        
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        const message = error.response.data.message 
        || error.response.data[0]?.description
        || error.response.data.errors.Email
        || error.response.data.errors.Password
        console.log(error);
        setSignInSuccess(message);
      });

  }

  return (
    <section>

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
        <button type="submit">Log In</button>
      </form>
      <p>New to Cranberry? <Link to="/register">Register here.</Link></p>
    </section>
  );
}

interface SignInFormState {
  email: string;
  password: string;
}