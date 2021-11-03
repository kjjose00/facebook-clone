import React from 'react'
import { BsFillInfoSquareFill,BsCollectionPlay } from "react-icons/bs";
import { FaUserFriends,FaSave,FaFacebookMessenger,FaHandHoldingUsd,FaHandHoldingHeart } from 'react-icons/fa';
import { TiGroup } from "react-icons/ti";
import { AiOutlineShop,AiTwotoneFlag } from "react-icons/ai";
import { BiCalendarStar } from "react-icons/bi";
import { FiClock } from "react-icons/fi";
import { SiFacebooklive } from "react-icons/si";
import { RiAdvertisementLine,RiMessengerLine } from "react-icons/ri";
import { FcCalendar } from "react-icons/fc";
import { WiDayLightning,WiBarometer } from "react-icons/wi";

function Sidebar() {
   const arr=[{
       id:1,
       icon:<BsFillInfoSquareFill className="side_icon"/>,
       name:"covid-19 information center"
   },
   {
       id:2,
       icon:<FaUserFriends className="side_icon"/>,
       name:"Friends"
   },
   {
    id:3,
    icon:<TiGroup className="side_icon"/>,
    name:"Groups"
},
{
    id:4,
    icon:<AiOutlineShop className="side_icon"/>,
    name:"Market place"
},
{
    id:5,
    icon:<BsCollectionPlay className="side_icon"/>,
    name:"Watch"
},
{
    id:6,
    icon:<BiCalendarStar className="side_icon"/>,
    name:"Events"
},
{
    id:7,
    icon:<FiClock className="side_icon"/>,
    name:"Memories"
},
{
    id:8,
    icon:<FaSave className="side_icon"/>,
    name:"Saved"
},
{
    
    id:9,
    icon:<AiTwotoneFlag className="side_icon"/>,
    name:"Pages"
},
{

id:10,
icon:<SiFacebooklive className="side_icon"/>,
name:"Live Videos"
},
{

id:11,
icon:<FaFacebookMessenger className="side_icon"/>,
name:"Messenger"
},
{

id:12,
icon:<RiAdvertisementLine className="side_icon"/>,
name:"Recent Ad activities"
},
{

id:13,
icon:<FcCalendar className="side_icon"/>,
name:"Latest"
},
{

id:14,
icon:<FaHandHoldingUsd className="side_icon"/>,
name:"Offers"
},
{

id:15,
icon:<FaHandHoldingHeart className="side_icon"/>,
name:"Community Help"
},
{

id:16,
icon:<WiDayLightning className="side_icon"/>,
name:"Weather"
},
{

id:17,
icon:<WiBarometer className="side_icon"/>,
name:"Weather information Center"
},
{

id:18,
icon:<RiMessengerLine className="side_icon"/>,
name:"Messenger for children"
},
];
    
    return (
      
        <div className="sidebar">
            <div className="sidebar_profile">

            <img src="jose.jpg" alt="jose" className="sidebar_pict"/>
            <label className="name_sidebar">Jose k j</label>
            </div>
           
            {arr.map(item=>{
             return (<div className="sidemenu">
                 {item.icon}
                <h3 key={item.id}>{item.name}</h3>
            
                



            </div>)})}
        
            
        </div>
        
        
    )
}

export default Sidebar
