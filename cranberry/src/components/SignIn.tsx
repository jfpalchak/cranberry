import React from "react";


export default function SignIn() {
  return (
    <section>
      <form className="register-form">
        <input 
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
        <input 
          type="password" 
          id="password" 
          name="password" 
          placeholder="Password" 
          required 
        />
        <button>Register</button>
      </form>

    </section>
  );
}