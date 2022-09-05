import { useEffect, useState } from 'react'
import './App.css'
import StatusCard from './components/statusCard/StatusCard';
import Checkboxes from './components/Checkboxes/Checkboxes';

function App() {
  const [hadBreakfast, setHadBreakfast] = useState(false);
  const [hadDinner, setHadDinner] = useState(false);
  const [statusText, setStatusText] = useState("Happy Boy!");
  
  const Title = () => {
    return ( 
      <div className='title-container'>
        <h1 className='title'>Hungry Boy!</h1> 
      </div>
    );
  }

  
  const fetchData = async () => {
    try {
      await fetch("https://fh-workerget.k-berkowitz.workers.dev")
      .then(data => data.json())
      .then(data => {
        console.log(JSON.stringify(data));
        setHadBreakfast(JSON.parse(data.breakfast));
        setHadDinner(JSON.parse(data.dinner));
        setStatusText(data.statusText);
      });


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
      <StatusCard statusText={statusText}/>
      <Checkboxes breakfast={hadBreakfast} dinner={hadDinner}/>
    </div>
  )
}

export default App
