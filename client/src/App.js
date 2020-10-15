import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [data, setdata] = useState('')

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/data`).then(res => {
      setdata(res.data)
    })
  }, [])

  return (
    <div className="App">
      App Works
      <br />
      {data}
    </div>
  );
}

export default App;
