import React from 'react';
import { BsCameraVideo } from "react-icons/bs";
import { BiPhone } from "react-icons/bi";
import { AiOutlineMinus,AiOutlineClose,AiOutlineSend } from "react-icons/ai";

function Chatbox(props) {
    const closechat=()=>{
        props.close();
    }

    return (
        <div className='chatbox'>
            <div className="chathead">
            <div className="chathead1">


            <img src={props.url} alt="pict" className='profile_pict'/>
            <label>  {props.name}</label>
            </div>
            <div className="chathead2">
                <BsCameraVideo className='chatheadlogo' />
                <BiPhone className='chatheadlogo'/>
                <AiOutlineMinus className='chatheadlogo'/>
                <AiOutlineClose className='chatheadlogo' onClick={closechat}/>

            </div>
            </div>
            <div className="chatbody">
             <div className="chatms">

                <label>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, distinctio nihil! Modi excepturi distinctio in consequuntur, quaerat quos pariatur eligendi reprehenderit ipsam quia. Saepe laudantium consequuntur perspiciatis, hic perferendis asperiores? sit amet consectetur a.</label>
             </div>
             <div className="chatmr">
                 <label>Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ab numquam harum, quia inventore ex porro quis sed pariatur labore ipsam et. Temporibus amet eligendi maxime fuga natus nulla placeat? </label>
             </div>
            </div>
            <div className="chatfooter">
                <input type="text" className='postyourmessage' />
                <AiOutlineSend className='chatfooterlogo'/>

            </div>
            
            
        </div>
    )
}

export default Chatbox;
