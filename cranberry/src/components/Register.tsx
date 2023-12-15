import AuthService from '../services/auth.service';
import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const BASE_URL = "http://localhost:5000/api";

export default function Register() {

  const [registerSuccess, setRegisterSuccess] = useState<string | null>(null);
  const [nextStep, setNextStep] = useState(false);
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

  const handleNextStep = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNextStep(true);
  }

  const handleCancel = () => {
    setNextStep(false);
  }

  return (
    <section className="auth-main">

      <div className="auth-card">

        <div className="card-header">
          <h1>welcome to Cranberry</h1>
        </div>

        <div className="card-body">
          {registerSuccess &&
            <div className="error-message">
              <p>* {registerSuccess}</p>
            </div>
          }

          {/* onSubmit={handleRegister} */}
          <form className="register-form auth-form" onSubmit={handleNextStep} >
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
            <button className="btn primary-btn">Register</button>
          </form>

          <div className="callout">
            <p>Already have an account? <Link to="/sign-in">Sign in.</Link></p>
          </div>
        </div>

      </div>

      <Dialog open={nextStep} onClose={handleCancel}>
        <DialogTitle>User Information</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To finish registration, we just need a little more information.
          </DialogContentText>
          <form className="register-form auth-form">
          
          <button className="btn primary-btn">Register</button>
          </form>
        </DialogContent>
        <DialogActions>
          <button className="btn" onClick={handleCancel}>Cancel</button>
        </DialogActions>
      </Dialog>
    </section>
  );
} 

interface RegisterFormState {
  userName: string;
  email: string;
  password: string;
}