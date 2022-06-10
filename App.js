// import logo from './logo.svg';
import './App.css';
// import About from './Components/About';
import './Components/Navbar';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
import Alert from './Components/Alert';
// import Appradium from './Components/Appradium';


// babel compiles the JSX
function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }
  const toggleMode= ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled","success");
    }
  }
  return (
    <>
    <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
    {/* <Navbar/> */}
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm headding="Enter the Text to Analyze" mode={mode} showAlert={showAlert}/>
    {/* <About/> */}
    </div>
    {/* <Appradium/> */}
    </>
  );
}

export default App;
