import React, { Fragment, useEffect } from 'react'
import './effects.css'
import { useForm } from '../../Hooks/useForm'
export const FormWithCoustomHooks = () => {
    const [formValues, hanleInputChange ] = useForm({
        name:'',
        email:'',
        password:'',
    })
    const {name,email,password}=formValues;
    useEffect(() => {
        console.log("el email cambio");
    }, [email])
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formValues);
    }
    return ( 
        <Fragment>
            <h1>FormWithCoustomHooks</h1>
            <hr />
            <form className="form-group" onSubmit={handleSubmit}>
                <input type="text" name="name" className="form-control" placeholder="coloca tu nombre"
                autoComplete="off" required value={name} onChange={hanleInputChange} />
                <input type="email" name="email" className="form-control" placeholder="email@gmail.com"
                autoComplete="off" required value={email} onChange={hanleInputChange} />
                <input type="password" name="password" className="form-control" placeholder="*****"
                autoComplete="off" required value={password} onChange={hanleInputChange} />
                <button type="submit" className=" btn btn-primary">Enviar datos</button>
            </form>
        </Fragment>
    )
}
