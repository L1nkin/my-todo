import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MyTodoList from './pages/MyTodoList';
import AppRouter from './routing/AppRouter';
import { AppContext } from './context';
import { useEffect, useState } from 'react';
import NavBar from './components/UI/navbar/Navbar';
import axios from 'axios';

function App() {

  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('auth') === 'true') {
      setIsAuth(true)
    }
  }, [])



  return (
    <div className='App'>
      <AppContext.Provider value={{
        isAuth,
        setIsAuth
      }}>
        <BrowserRouter>
          <NavBar />
          <AppRouter />
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
