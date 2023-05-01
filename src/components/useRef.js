import React,{useRef} from 'react'
import './useRef.css'

export function Form(){
    const data=useRef(null)
    function submission(){
        data.current.click()
    }
    return (
        <div className='parent'>
            <input type='file' ref={data}/>
            
            <button onClick={submission}>pick the image</button>
        </div>
    )
}