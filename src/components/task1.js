import React from 'react'
import './task1.scss'
import { Data1 } from './data2'

const Task1 = () => {
    return (
        <div className='task1'>
            {Data1.map((props) => {
                return(
                    
                    <div className="item" key={props.id}>
                       <div className="div1"> 
                        <div className="date">
                            <h5>{props.date}</h5>
                            </div>
                    <div className="div2" >
        
                        <button className='button1' style ={{background: `${props.bg}`}}>{props.buttonText}{props.category}</button>
                        
                        
                         <img className="img1" src={props.img} alt='profile-pic'/>
                         <h6>{props.title}</h6>
                         </div>
                         <div className="text">
                            
                            <p>{props.text}</p>
                            </div>

                            </div>
                            
                            <button className="button2">Download</button>
                            
                       
                       
                    </div>
                )
            })}
        </div>
    )
}

export default Task1