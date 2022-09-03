import { useEffect, useState } from 'react'
import './App.css'
import StatusCard from './components/statusCard/StatusCard';
import Checkboxes from './components/Checkboxes/Checkboxes';

function App() {
  const [hadBreakfast, setHadBreakfast] = useState(true);
  const [hadDinner, setHadDinner] = useState(false);
  const [picture, setPicture] = useState();
  
  const Title = () => {
    return ( 
      <div className='title-container'>
        <h1 className='title'>Hungry Boy!</h1> 
      </div>
    );
  }
  
  const fetchData = async () => {
    try {
      await fetch("http://localhost:8788/statusObjGET")
    .then(response => response)
    .then(res => console.log(res))


    } catch(err) {
      console.log(err);
    }
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <div className="App">
      <Title />
      <StatusCard picture={picture}/>
      <Checkboxes breakfast={hadBreakfast} dinner={hadDinner}/>
    </div>
  )
}

export default App
