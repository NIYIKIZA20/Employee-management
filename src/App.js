import React from 'react';
import './App.css';
import Welcome from './routes/Welcome';
import Dashboard from './routes/Dashboard';
import Login from './routes/Login';
import DisplayTable from './routes/DisplayTable';
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path= '/' element= {<Welcome/>}/>
      <Route path= '/dashboard' element= {<Dashboard/>}/>
      <Route path= '/login' element= {<Login/>}/>
      <Route path= '/display/:comp' element= {<DisplayTable/>}/>
    </Routes>
  );
}

export default App;
