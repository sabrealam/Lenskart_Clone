import React, { useState } from 'react' 
import './App.css'
import axios from 'axios'
function App() {
  const [data, setData] = useState([])


  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:5500/api/products")
      setData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(data)
 

  return (
    <>
      <button onClick={getData} >Get Data</button>
    
    </>
  )
}

export default App
