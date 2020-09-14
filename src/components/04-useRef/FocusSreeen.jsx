import React, { useRef } from 'react'
import '../03-example/multiplehooks.css'
export const FocusSreeen = () => {
    const inputref = useRef();
    // console.log(inputref)
    const handleClick = () =>{
       inputref.current.select();
    }
    return (
        <div>
            <h1 className="display-1">FocusScreen</h1>
            <hr/>
            <div className="input-group flex-nowrap">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="addon-wrapping">User</span>
                </div>
                <input  ref={inputref} type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
            <button type="button" className="btn btn-outline-primary mt-5" onClick={handleClick}>Focus</button>
        </div>
    )
}
