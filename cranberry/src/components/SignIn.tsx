import React, { useState } from "react";


export default function SignIn() {

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

    fetch(`https://localhost:5001/api/users/register`)
      .then(response => response.json())
      .then((jsonResponse) => {
        
      })

  }

  return (
    <section>
      <h1>Register:</h1>
      <form className="register-form">
      <input 
          type="text" 
          id="userName" 
          name="userName" 
          placeholder="User Name" 
          required 
        />
        <br/>
        <input 
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
        <br/>
        <input 
          type="password" 
          id="password" 
          name="password" 
          placeholder="Password" 
          required 
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