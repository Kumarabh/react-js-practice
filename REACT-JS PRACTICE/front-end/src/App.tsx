import React from 'react';
import './App.css';
import Home from './pages/home/Home';
// import Login from './pages/login/Login';
import UserList from './pages/user-management/UserList';
import {Link} from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            {/* <Route path='/'> */}
              <Route path='/' element = {<Home />}>
                <Route index path='dashboard' element = {<Dashboard />} />
                <Route path='users' element = {<UserList />} />
              </Route>

              {/* <Route path='users'>
                <Route index element = {<List />} />
                <Route path=':userId' element = {<Single />} />
                <Route path='new' element = {<New />} />
              </Route>

              <Route path='products'>
                <Route index element = {<List />} />
                <Route path=':productId' element = {<Single />} />
                <Route path='new' element = {<New />} />
              </Route> */}

            {/* </Route> */}

            <Route path='login' element = {<Login />} />
          </Routes>
        
        </BrowserRouter>
    </div>
  );
}

export default App;
