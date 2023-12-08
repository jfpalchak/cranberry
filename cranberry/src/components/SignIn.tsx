import axios from "axios";
import React, { useState } from "react";

const BASE_URL = "http://localhost:5000/api";

export default function SignIn() {

  const [registerSuccess, setRegisterSuccess] = useState<string | null>(null);

  const [formData, setFormData] = useState<SignUpFormState>({
    userName: '',
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({...prevData, [name]: value}));
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios.post(`${BASE_URL}/users/register`, formData)
      .then(response => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })

  }

  return (
    <section>
      <h1>Register:</h1>
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
          id="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
        />
        <br/>
        <input 
          type="password" 
          id="password" 
          name="password" 
          placeholder="Password" 
          required
          onChange={handleChange}
        />
        <br/>
        <button>Register</button>
      </form>

    </section>
  );
}

interface SignUpFormState {
  userName: string;
  email: string;
  password: string;
}