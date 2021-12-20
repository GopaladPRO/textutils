import About from "./components/About";
import React, {useState} from 'react'
import Alert from './components/Alert';
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm'
// import {
//   BroswerRouser as Router,
//   Routes,
//   Route,
//   Link,
//   BrowserRouter
// } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert]=useState(null);
  const [taMode,setTAMode] = useState('light');
  const showAlert = (message,type,timeout)=>{
    timeout = timeout === undefined?1500:timeout;
   setAlert({
     msg:message,
     type:type
   }) 
   setTimeout(() => {
     setAlert(null);
   }, timeout);
  }
  const toggleMode = (event) =>{
    if(event.target.id==='flexSwitchCheckDefault'){
      if(event.target.checked){
        setMode('dark');
        document.body.style.backgroundColor='#3b3939';
        showAlert("Dark Mode is enabled","success",3000);
      }
      else{
        setMode('light');
        document.body.style.backgroundColor='white';
        showAlert("White Mode is enabled","success",3000);
      }
    }
    else{
      setMode(event.target.id);
      showAlert(event.target.id+" Mode is enabled","success",3000);
      document.getElementById('flexSwitchCheckDefault').checked=false;
    }
    switch(event.target.id){
      case "primary":
        setTAMode("blue");
        document.body.style.backgroundColor="blue";
        break;
      case "success":
        setTAMode("#198754");
        document.body.style.backgroundColor="lightgreen";
        break;
      case "danger":
        setTAMode("#DC3545");
        document.body.style.backgroundColor="red";
        break;
      case "warning":
        setTAMode("#FFC107");
        document.body.style.backgroundColor="yellow";
        break;
      case "info":
        setTAMode("skyblue");
        document.body.style.backgroundColor="#0DCAF0";
        break;
      case "flexSwitchCheckDefault":
        if(event.target.checked){
          setTAMode("#3b3939");
          document.body.style.backgroundColor='#3b3939';
        }
        else{
          setTAMode("white");
          document.body.style.backgroundColor="white";
        }
        break;
      default:
        setTAMode("#3b3939");
    }
  }
   return (
    // <BrowserRouter>
    <>
          <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}></Alert>
      <div className="container my-3">
        {/* <Routes> */}
          {/* <Route path='/about' element={<About/>}/> */}
         {/* <Route path='/' element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} taMode={taMode}/>}/> */}
        {/* </Routes>        */}
        <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} taMode={taMode}/>
        </div>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
