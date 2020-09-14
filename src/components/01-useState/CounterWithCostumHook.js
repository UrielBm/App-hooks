import React from 'react'
import './counter.css'
import { useCounter } from '../../Hooks/useCounter'
export const CounterWithCostumHook = () => {
    const{state,increment,decrement,reset}=useCounter(100);
    return (
        <div>
            <h1>Conter with hook: {state}</h1>
            <hr />
            <button className="btn" onClick={()=>increment(2)}>+1</button>
            <button className="btn" onClick={()=>decrement(2)}>-1</button>
            <button className="btn" onClick={reset}>reset</button>
        </div>
    )
}
