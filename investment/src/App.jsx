import Header from './components/Header.jsx';
import Userinput from './components/Userinput.jsx';
import Results from './components/Results.jsx';
import { useState } from 'react';



function App() {

  const[userinput,setuserinput]=useState({initialinvestment:10000, annualinvestment: 1200, exprectedreturn: 6, duration: 10});

  const inputvalid = userinput.duration >= 1;

    function handlechange(inputidentifier ,newvalue){
        setuserinput(prevuserinput=>{
            return{
                ...prevuserinput,
                [inputidentifier]: +newvalue
            }}
        );
    }

  return (
    <>
      <Header />
      <Userinput userinput={userinput} onChange={handlechange} />
      {!inputvalid && (<p className="center">Please enter a valid Duration.</p>)}
      {inputvalid && <Results userinput={userinput} />}
    </>
  )
}

export default App
