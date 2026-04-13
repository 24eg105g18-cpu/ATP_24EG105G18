import {useContext} from 'react'
import {counterContextObj} from '../contexts/ContextProvider'
import {useCounterStore} from '../Store/useCounterStore'
function Home() {
  //call useCounterStore to get the state of zustand store
let newCounter = useCounterStore((state)=>state.newCounter);
let incremetCounter=useCounterStore((state)=>state.incremetCounter)
  const {counter,changeCounter}=useContext(counterContextObj);
  console.log("home")
  return (
    <div>
      <h1 className='text-4xl'>New Counter:{counter}</h1>
      <button onClick={incremetCounter} className='bg-amber-300'> change</button>
    
    </div>
  )
  
}

export default Home