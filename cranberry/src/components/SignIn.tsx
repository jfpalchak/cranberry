import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CircularProgress } from '@mui/material';
import { useAppDispatch } from "../store/hooks";
import { signIn} from "../store/authActions";

import cloudLeft from './../assets/img/cloudLeft.png';
import cloudRight from './../assets/img/cloudRight.png';

function SignIn() {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState<SignInFormState>({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({...prevData, [name]: value}));
  }

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    dispatch(signIn({ email: formData.email, password: formData.password}))
      .unwrap()
      .then(() => {
        setLoading(false);
        navigate("/dashboard/profile");
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      })
  }

  return (
    <section className="auth-main">
      <img className="form-cloud-1" src={cloudLeft} alt="Cloud" />
      <img className="form-cloud-2" src={cloudRight} alt="Cloud" />
      <div className="auth-card signin-card">


        <div className="card-header">
          <h1>just breathe</h1>
        </div>

        <div className="card-body">
          {error &&
            <div className="error-message">
              <p>* {error}</p>
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
            <input 
              type="password" 
              id="signinPassword" 
              name="password" 
              placeholder="Password" 
              required
              onChange={handleChange}
            />
            <button className="btn primary-btn" type="submit">
              SIGN IN
              {loading &&
                <CircularProgress 
                  size={20} 
                  sx={{ 
                    color: 'white', 
                    position: 'absolute', 
                    top: '25%',
                    left: '60%'
                  }} 
                />
              }
            </button>
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

export default SignIn;