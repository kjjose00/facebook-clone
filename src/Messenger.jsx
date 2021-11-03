import React, { useState } from 'react';
import {Bimages} from './Backgroundimages';
import Chatbox from './Chatbox';

function Messenger() {
    const [state,setState]=useState(false)
    const [value,setValue]=useState("")
    const [name,setName]=useState('')
    const [url,setUrl]=useState('')
    const closechatm=()=>{
        setState(false);
    }
    return (
        <div className='messenger'>
            <h1 style={{paddingTop:"50px"}}>Contacts</h1>
            {Bimages.map((item,index)=>{
                return(
                    <div key={index} className="friends messenger_friends" onClick={()=>{
                        
                        setState(true);
                        
                        setValue(item.id);
                        setName(item.name);
                        setUrl(item.url);
                        
                        }}>
                <img src={item.url} alt="" className='profile_pict'/>
                <label>  {item.name}</label>
            </div>


                )
            })}
        
                        {state?<Chatbox key={value} index={value} name={name} url={url} state={state} close={closechatm}/>:null}

           
            
        </div>
    )
}

export default Messenger
