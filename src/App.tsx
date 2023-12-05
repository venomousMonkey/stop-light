import { useState, useEffect } from 'react'
import './App.css'

type StopLightState = 'stop' | 'slow' | 'go';
type StopLightCounter = number;

const STOP_DELAY = 4000;
const SLOW_DELAY = 3000;
const GO_DELAY = 5000;

function App() {
  const [state, setState] = useState<StopLightState>('stop');

  function getStopLightCLass(light: StopLightState) {
    return `light ${light}` + (state === light ? ' on' : '')
  }

const [counter, setCounter] = useState<StopLightCounter>(1);

  useEffect( () => {
    if (state === 'stop') {
      setTimeout( () => setState('slow'), STOP_DELAY)

      console.log('czerwone')
    } else if (state === 'slow' && counter % 2 !== 0) { 

      const result: number = counter % 2
      console.log(`${counter}' '${result} modulo rozne od zera`)
      setCounter((prevCounter) => prevCounter + 1)
      

      setTimeout( () => setState('go'), SLOW_DELAY)

    } else if (state === 'slow' && counter % 2 == 0) {
        const result: number = counter % 2
        console.log(`${counter}' '${result}  modulo rowne zero`)
        setCounter((prevCounter) => prevCounter + 1)
        
  
        setTimeout( () => setState('stop'), SLOW_DELAY)
    } else if (state === 'go') {
      setTimeout( () => setState('slow'), GO_DELAY)
    }
  }, [state])

  // This is proper stop-light model that is working
  // useEffect( () => {
  //   if (state === 'stop') {
  //     setTimeout( () => setState('go'), STOP_DELAY)
  //   } else if (state === 'slow') { 
  //     setTimeout( () => setState('stop'), SLOW_DELAY)
  //   } else {
  //     setTimeout( () => setState('slow'), GO_DELAY)
  //   }
  // }, [state])


  return (
    <div className='stop-light'>
      <div className={getStopLightCLass('stop')}></div>
      <div className={getStopLightCLass('slow')}></div>
      <div className={getStopLightCLass('go')}></div>
    </div>
  )
}

export default App
