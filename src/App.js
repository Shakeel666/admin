import React from 'react';
// import { useState } from 'react';
import './App.css';
import List from './Data/List/List';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Data/Home/Home';
import Single from "./Data/Single/Single";
import New from "./Data/New/New"
import { userInputs } from './formSource';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import "./Style/dark.scss"

function App() {

  // const [dark,setDark] = useState(false)
  const { darkMode } = useContext(DarkModeContext);

  return ( 
    <div className={darkMode ? "app dark" : "app"}>
    {/* //  <div className='app-dark'>   */}
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="users">
              <Route index element={<List/>}/> 
              <Route path=":userId" element={<Single/>}/>  
              {/* <Route path="new" element={<New />} />   */}
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User"/>}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
