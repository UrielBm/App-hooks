import React, { Fragment } from 'react'
import './multiplehooks.css'
import { useFetch } from '../../Hooks/useFetch'
import { useCounter } from '../../Hooks/useCounter';
export const MultipleCustomHook = () => {
   const {counter,increment}=useCounter(1);
   const state=useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
   const {data,loading}=state; 
   const {author, quote}=!!data&&data[0];
    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr />
            {
                loading 
                ?
                    (
                        <div className="alert alert-info text-center">
                        <p>Loading...</p>
                        </div>
                    )
                :
                    (
                        <Fragment>
                        <blockquote className="blockquote text-right">
                            <p className="mb-0">{quote}</p>
                            <footer className="blockquote-footer">{author}</footer>
                        </blockquote>
                        <button type="button" className="btn btn-primary" onClick={()=>increment(1)}>Siguiente Quote</button>
                        </Fragment>
                    )
            }
        </div>
    )
}
