import React from 'react'
import { SiJsonwebtokens } from 'react-icons/si';
import { AiOutlineLike,AiOutlineShareAlt } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { Bimages } from './Backgroundimages';

function Posts() {
    return (<>
        <div className='posts'>
           {Bimages.map((item,index)=>{
                return(
                    <div key={index} className="post">
                <div className='heading'>

                <img src="jose.jpg" alt="" className='profile_pict '/>
                <div className='arrange'>
                <label>{item.name}</label><br />
                1 hrs
                </div>
                </div>
                <div style={{backgroundImage:`url(${item.url})`}} className='property'>

                
                </div>
                <div className='reply'>
                    <AiOutlineLike/>
                    <FaRegComment/>
                    <AiOutlineShareAlt/>

                </div>
               
            </div>
                

                )

           })} 
            
        </div>
                

                </>
    )
}

export default Posts;
