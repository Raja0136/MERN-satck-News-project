import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';
import About from './components/About';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";





let name = "vicky";
function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      document.title = "Dark mode";
      setInterval(() => {
        document.title = " your device having virue"
      }, 2000);
      setInterval(() => {
        document.title = "install an antivirue"
      }, 3000);
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = "White mode";
    }
  }
  return (
    <>
    <Router>

      {/* <Navbar title="Practice project" aboutText="About Us"/> */}
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <div className='container y-3'>
        <Switch>

          <Route exact path="/">
          <Textform heading="new text" mode={mode}/>
          </Route>

          <Route exact path="/about">
          <About/>
          </Route>
          
        </Switch>
      </div>

    </Router>
      
    </>
  );}

export default App;
