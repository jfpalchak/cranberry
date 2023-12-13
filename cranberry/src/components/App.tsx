import React, { useState, useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import SignIn from './SignIn';
import Register from './Register';
import Dashboard from './Dashboard/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './Dashboard/Profile';
import JournalControl from './Dashboard/JournalControl';
import JournalDetail from './Dashboard/JournalDetail';
import { IUser } from "./../types";
import AuthService from '../services/auth.service';

function App() {
  const [user, setUser] = useState<IUser | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLoggingIn = async () => {
    try {
      const user = await AuthService.getUserProfile()
      setUser(user.data)
      console.log("Fetched user: ", user); // ! CONSOLE LOG
      setLoggedIn(true);
    }
    catch (error) {
      console.log("Error fetching user info: ", error); // ! CONSOLE LOG
    }
  }

  const authorized = user ? true : false;
  
  return (
    <div className="App">
      <Router>
        <Header loggedIn={authorized} />
        <Routes>
          <Route path='/' element={ user ? <Dashboard/> : <Home />} />
          <Route path='/sign-in' element={<SignIn handleSetLoggedIn={handleLoggingIn} />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={user ? <Dashboard /> : <SignIn handleSetLoggedIn={handleLoggingIn} />} >
            <Route index element={user ? <Profile user={user} /> : <p>Loading...</p>} />
            <Route path="profile" element={user ? <Profile user={user} /> : <p>Loading...</p>} />
            <Route path="journals" element={user ? <JournalControl user={user} /> : <p>Loading...</p>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
