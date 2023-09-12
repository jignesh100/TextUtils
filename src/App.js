import React, { useState } from 'react';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert("");
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      console.log('Dark mode enabled');
      document.body.style.backgroundColor = 'black';
      showAlert('Dark Mode Enabled', 'success');
    } else {
      setMode('light');
      console.log('Dark mode disabled');
      document.body.style.backgroundColor = 'white';
      showAlert('Dark Mode Disabled', 'success');
    }
  };



  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Alert alerts={alert} />

        <Router>
          <Routes>
          <Route exact path="/about" element={<About />} />
          <Route path="/" element={<TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />} />
        </Routes>
      </Router>




    </div >
    </>
  );
}

export default App;
