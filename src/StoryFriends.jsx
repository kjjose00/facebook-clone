import React, { useState } from 'react';
import {Bimages} from './Backgroundimages';
import { FiArrowRight } from "react-icons/fi";

function StoryFriends() {
    
   
    return (<>
        {Bimages.map((img,index)=>{ 
            return(<div key={index} className='story_friends' style={{backgroundImage:`url(${img.url})`}}>
            <img src="../jose.jpg" alt="" className='storyimage' /><br />
            <br /><br /><br /><br /><br /><br />
            <label>{img.name}</label>
            
        </div>)})}
        <FiArrowRight className='arrow'/>
       
        </>
       
    )
}

export default StoryFriends
