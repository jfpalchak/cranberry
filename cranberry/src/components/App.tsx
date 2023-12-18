import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { fetchUserData } from '../store/authActions';
import { getCredentials } from '../utils/credentials-helper';
import Dashboard from './Dashboard/Dashboard';
import Register from './Register';
import SignIn from './SignIn';
import Home from './Home';
import Header from './Header';

function App() {

  const { isLoggedIn } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    if(isLoggedIn || getCredentials().token){
      dispatch(fetchUserData())
    }
  }, [isLoggedIn, dispatch])

  return (
    <div className="App">
      <Router>
        <Header loggedIn={isLoggedIn} />
        <Routes>
          <Route 
            path='/' 
            element={ 
              isLoggedIn 
                ? <Dashboard /> 
                : <Home />
            } 
          />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/register' element={<Register />} />
          <Route 
            path='/dashboard/*' 
            element={
              isLoggedIn 
                ? <Dashboard /> 
                : <SignIn />
            } 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
