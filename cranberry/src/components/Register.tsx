import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { registerUser, signIn } from '../store/authActions';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Input } from '@chakra-ui/react';


function Register() {
  
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { error } = useAppSelector(state => state.auth);

  const [loading, setLoading] = useState(false);
  const [nextStep, setNextStep] = useState(false);
  const [formData, setFormData] = useState<RegisterFormState>({
    userName: '',
    email: '',
    password: '',
    quitDate: '',
    avgSmokedDaily: 0,
    cigsPerPack: 20,
    pricePerPack: 0
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({...prevData, [name]: value}));
  }

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData);

      setLoading(true);

      dispatch(registerUser(formData))
      .unwrap()
      .then(() => {
        dispatch(signIn({ email: formData.email, password: formData.password }))
          .unwrap()
          .then(() => {
            setNextStep(false);
            setLoading(false);
            navigate("/dashboard/profile");
          })
          .catch((error) => {
            setNextStep(false);
            setLoading(false);
            console.log("Error signing in from registration: ", error);
          });
      })
      .catch((error) => {
        setNextStep(false);
        setLoading(false);
        console.log("Error registering user: ", error)
      });
  }

  const handleNextStep = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNextStep(true);
  }

  const handleCancel = () => {
    setNextStep(false);
  }

  // TODO: Refactor into smaller components

  return (
    <section className="auth-main">

      <div className="auth-card">

        <div className="card-header">
          <h1>welcome to Cranberry</h1>
        </div>

        <div className="card-body">
          {error &&
            <div className="error-message">
              <p>* {error}</p>
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
            {/* <br/>
            <input 
              type="password" 
              id="confirmPassword" 
              name="confirmPassword" 
              placeholder="Confirm Password" 
              required
              onChange={handleChange}
            /> */}
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
          <form className="register-form auth-form" onSubmit={handleRegister}>
            <br/>
            <label htmlFor="quitDate">When is (or was) your quit date?</label>
            <Input 
              type="datetime-local"
              value={formData.quitDate}
              id="quitDate"
              name="quitDate"
              onChange={handleChange} 
              isRequired={true}
            />
            <br/>
            <label htmlFor="avgSmokedDaily">About how many cigarettes do (or did) you smoke a day?</label>
            <input 
              type="number" 
              id="avgSmokedDaily" 
              name="avgSmokedDaily" 
              placeholder="It's okay to give an approximate number."
              onChange={handleChange} 
              required 
            />
            <br/>
            <label htmlFor="pricePerPack">How much does a packet of cigarettes typically cost?</label>
            <input 
              type="number" 
              min={1.00} 
              step={0.01}
              placeholder={'$ 0.00'}
              id="pricePerPack" 
              name="pricePerPack" 
              onChange={handleChange} 
              required 
            />
            <br/>
            <label htmlFor="cigsPerPack">How many cigarettes are in a packet?</label>
            <input 
              type="number"
              min={1} 
              value={formData.cigsPerPack}
              id="cigsPerPack" 
              name="cigsPerPack"
              placeholder="There is usually 20 in a pack."
              onChange={handleChange} 
              required 
            />
            <br/>
            <button className="btn primary-btn">SUBMIT</button>
          </form>
        </DialogContent>
        <DialogActions>
          <button className="btn cancel-btn" onClick={handleCancel}>Cancel</button>
        </DialogActions>
      </Dialog>
    </section>
  );
} 

interface RegisterFormState {
  userName: string;
  email: string;
  password: string;
  quitDate: string;
  avgSmokedDaily: number;
  cigsPerPack: number;
  pricePerPack: number;
}

export default Register;