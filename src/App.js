import logo from './logo.svg';
import './App.css';
import QrReader from 'react-qr-scanner'
import React, { useState } from 'react';


function App() {
  const [data, setData] = useState('str')
    function handleScan(data) {
      console.log('DT',data)
        setData(data)
    }
    function handleError(err) {
        console.error(err)
    }
  return (
    <div className="App">
      
            <h1>Scanner</h1>
            <QrReader
                delay={200}
                style={{
                    height: 240,
                    width: 320,
                }}
                onError={handleError}
                onScan={handleScan}
            />
            <p>QR result : {data}</p>
        
    </div>
  );
}

export default App;