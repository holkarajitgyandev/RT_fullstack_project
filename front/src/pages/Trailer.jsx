import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { minus, plus } from '../store/Numberslice';

const Trailer = () => {
  
  const count=useSelector(state=>state.counter);
  console.log(count)
  const dispatch=useDispatch()

  const add=(n)=>{
    dispatch(plus(n))

  }

  const sub=(n)=>{
    dispatch(minus(n))

  }
  return (
    <div>
      <p>count:{count}</p>
      <button onClick={()=>add(5)}>increment</button>
      <button onClick={()=>sub(4)}>decrement</button>
    </div>
  )
}

export default Trailer
