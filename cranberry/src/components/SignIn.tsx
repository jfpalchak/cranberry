import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import { TextField } from "@mui/material";

const BASE_URL = "http://localhost:5000/api";

export default function SignIn(props: SignInProps) {

  const { handleSetLoggedIn } = props;

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

        console.log("Log in successful: ", response); // ! CONSOLE LOG

        sessionStorage.setItem("token", token);
        sessionStorage.setItem("user", userId);
        
        handleSetLoggedIn();
        navigate("/dashboard/profile");
      })
      .catch((error) => {
        console.log("Error logging in: ", error); // ! CONSOLE LOG
        let message = error.response.data.message 
        || error.response.data[0]?.description
        || error.response.data.errors.Email
        || error.response.data.errors.Password
        message = message.includes("Unable") 
          ? message.concat(" Please make sure your email or password is correct.")
          : message.concat("");
        setSignInSuccess(message);
      });

  }

  return (
    <section className="auth-main">

      <div className="auth-card">

        <div className="card-header">
          <h1>just breathe</h1>
        </div>

        <div className="card-body">
          {signInSuccess &&
            <div className="error-message">
              <p>* {signInSuccess}</p>
            </div>
          }
          <form className="signin-form auth-form" onSubmit={handleSignIn}>
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
            <button className="btn primary-btn" type="submit">SIGN IN</button>
          </form>

          <div className="callout">
            <p>New to Cranberry? <Link to="/register">Register here.</Link></p>
          </div>
        </div>

      </div>
  
    </section>
  );
}

interface SignInFormState {
  email: string;
  password: string;
}

type SignInProps = {
  handleSetLoggedIn: () => void;
}