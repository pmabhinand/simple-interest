import { TextField } from '@mui/material';
import './App.css';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { useState } from 'react';


function App() {

  const [interest , setInterest] = useState(0)
  const [principle , setPrinciple] = useState(0)
  const [rate , setRate] = useState(0)
  const [year , setYear] = useState(0)
  const [isprinciple , setIsPrinciple]=useState(true)
  const [isRate , setIsRate]=useState(true)
  const [isYear , setIsYear]=useState(true)

  const getValidate=(e)=>{
   const {name , value}=e.target

    /*  console.log(name,value)
    console.log(typeof(value)); */

    if(!! value.match(/^[0-9]+$/)){
       if(name==='principle'){
    setPrinciple(value)
    setIsPrinciple(true)
       }
       else if(name==='rate'){
          setRate(value)
          setIsRate(true)
       }
       else if(name==='year'){
        setYear(value)
        setIsYear(true)
       }

   /* else{
    
    setPrinciple(value)
    setIsPrinciple(false)
    }  */
  }
  else{
    if(name==='principle'){
      setPrinciple(value)
      setIsPrinciple(false)
    }
    else if(name==='rate'){
      setRate(value)
      setIsRate(false)
    }
    else if(name==='year'){
      setYear(value)
      setIsYear(false)
    }

  }
}

const handleCalculate=(e)=>{
  e.preventDefault()
  if(!principle || !rate || !year){
    alert('please fill the form')
  }
  else{
    setInterest(principle*rate*year/100)
  }
}

const handleReset=(e)=>{
  setInterest(0)
  setPrinciple(0)
  setRate(0)
  setYear(0)
  setIsPrinciple(true)
  setIsRate(true)
  setIsYear(true)
}

  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100 bg-dark'>
      <div className='bg-light p-5 rounded'>
      <h1>Simple interest</h1>
      <p>calculate simple interest easily</p>
      <div className='bg-warning d-flex justify-content-center align-items-center w-100 p-3 flex-column rounded mt-4 shadow'>
        <h1>RS {''} {interest}</h1>
        <p>total simple interest</p>
      </div>
      <form className='mt-4' onSubmit={(e)=>handleCalculate(e)}>
        <div className='mb-3'>
        <TextField name='principle' value={principle || ""} onChange={(e)=>getValidate(e)} className='w-100' id="outlined-basic" label="principle amount" variant="outlined" />
        </div>
        {!isprinciple &&
        <div>
          <p className='text-danger fw-bolder'>invalid input</p>
        </div>
        }
        <div className='mb-3'>
        <TextField name='rate' onChange={(e)=>getValidate(e)} value={rate || ""} className='w-100' id="outlined-basic" label="Rate of interest (p.a) %" variant="outlined" />
        </div>
        {!isRate &&
        <div>
          <p className='text-danger fw-bolder'>invalid input</p>
        </div>
        }

        <div className='mb-3'>
        <TextField name='year' onChange={(e)=>getValidate(e)} value={year || ""} className='w-100' id="outlined-basic" label="year (Yr)" variant="outlined" />
        </div>
        {!isYear &&
        <div>
          <p className='text-danger fw-bolder'>invalid input</p>
        </div>
        }
        <Stack direction="row" spacing={2}>
        <Button type='submit' disabled={isprinciple && isRate && isYear ?false:true} className='bg-success' style={{width:'200px',height:'50px'}} variant="contained">Calculate</Button>
        <Button onClick={handleReset} style={{width:'200px',height:'50px'}} variant="outlined">Reset</Button>
        </Stack>

      </form>
      </div>
    </div>
  );
}

export default App;
