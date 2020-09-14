import React, { Fragment } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const Message = () => {
    const [coords, setcoords] = useState({
        x:0,
        y:0,
    })
    const {x,y}=coords;
    useEffect(() => {
        const moveMouse=(e)=>{
            const coords={x:e.x, y: e.y}
            setcoords(coords);
        }
        window.addEventListener('mousemove',moveMouse)
        return () => {
            // console.log('componente desmontado');
            window.removeEventListener('mousemove',moveMouse)
        }
    }, [])
    return (
        <Fragment>
            <h2> Hola cayola eres Super!!</h2>
            <p>
               x:{x} y:{y} 
            </p>
        </Fragment>
    )
}
