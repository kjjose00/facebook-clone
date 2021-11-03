import React from 'react';
import { RiLiveFill } from "react-icons/ri";
import { FaPhotoVideo } from "react-icons/fa";

function Whatmind() {
    return (
        <div className='whatmind'>
            <img src="jose.jpg" alt="" className='profilepict'/>
            <input type="text" className='postyourmind' placeholder='what is your mind?'/><br />
            <hr className='divider'/>
            <RiLiveFill className='live'/><label className='span1'>Live video</label>
            <FaPhotoVideo className='photo'/><label className='span2'>photo/video</label>        
        </div>
    ) 
}

export default Whatmind
