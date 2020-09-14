import React, { Fragment, useState } from 'react';
import '../01-useState/counter.css';
export const CounterApp = () => {
    const [Counter, setCounter] = useState({
        counter1:10,
        counter2:20,
        counter3:30,
        counter4:40,
    });
    const {counter1, counter2}=Counter;
    const AddCounter= () =>{
        setCounter({
            ...Counter,
            counter1: counter1+1,
        });
    };
    return (
        <Fragment>
            <h2>Counter1 {counter1}</h2>
            <h2>Counter2 {counter2}</h2>
            <hr />
            <button className="btn btn-primary" onClick={AddCounter}>+1</button>
        </Fragment>
    )
}
