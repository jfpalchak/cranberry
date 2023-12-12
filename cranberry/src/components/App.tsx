import React, { useState } from 'react';
import Header from './Header';
import Home from './Home';
import SignIn from './SignIn';
import Register from './Register';
import Dashboard from './Dashboard/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLoggingIn = () => {
    setLoggedIn(!loggedIn);
  }

  const authorized = sessionStorage.getItem("user") ? true : false;
  
  return (
    <div className="App">
      <Router>
        <Header loggedIn={authorized} />
        <Routes>
          <Route path='/' element={ authorized ? <Dashboard/> : <Home />} />
          <Route path='/sign-in' element={<SignIn handleSetLoggedIn={handleLoggingIn} />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          {/* <Route path='/journal' element={} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
