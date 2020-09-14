import React, { Fragment } from 'react'
import './effects.css'
import { useEffect } from 'react'
import { useState } from 'react'
import { Message } from './Message'
export const SimpleForm = () => {
    const [formState, setformState] = useState({
        name:'',
        email:'',
    })
    const {name,email}=formState;

    useEffect(()=>{
        console.log('uso de useEffect');
    },[]);
    useEffect(()=>{
        console.log('el estado del Form cambio');
    },[formState]);
    const haddleOnChange=({target})=>{
        setformState({
            ...formState,
            [target.name]:target.value
        })
    }
    return (
        <Fragment>
            <h1>UseEffect</h1>
            <hr />
            <form className="form-group">
                <input type="text" name="name" className="form-control" placeholder="coloca tu nombre"
                autoComplete="off" required value={name} onChange={haddleOnChange} />
                <input type="email" name="email" className="form-control" placeholder="email@gmail.com"
                autoComplete="off" required value={email} onChange={haddleOnChange} />
            </form>
            {(name==='uriel')&&<Message />}
        </Fragment>
    )
}
