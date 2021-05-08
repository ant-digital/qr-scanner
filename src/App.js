import logo from './logo.svg';
import './App.css';
import QrReader from 'react-qr-scanner'
import React, { useState } from 'react';


function App() {
  // const [data, setData] = useState('str')
  const [input, setInput] = useState('')
  const [guestList, setGuestList] = useState(['none'])


  function handleScan(data) {
    console.log('DT', data)
    setInput(data)
    if (data) {
      if (!guestList.includes(data)) {
        alert('Checking In . . .')
        save()
      } else {
        alert('Already in guest list')
      }
    }
  }
  function handleError(err) {
    console.error(err)
  }

  function save() {
    let sessionList = sessionStorage.getItem('guestList')
    if (sessionList) {
      sessionList = JSON.parse(sessionList)
    } else {
      sessionList = []
    }
    sessionList.push(input)
    sessionStorage.setItem('guestList', JSON.stringify(sessionList))

    const newList = guestList.concat([input])
    setGuestList(newList)
  }

  // function handleInput(e) {
  //   setInput(e.target.value)
  // }
  return (
    <div>
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
        {/* <input onChange={handleInput}></input>
        <button onClick={save}>save</button> */}
        <p>QR result : {input}</p>


      </div>
      <div>
        <h1>Guest List</h1>
        <ul style={{ textAlign: 'left' }}>
          {guestList.map(el => {
            return (<li key={el}>
              {el}
            </li>)
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;