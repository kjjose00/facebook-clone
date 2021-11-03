import React from 'react'
import { FaFacebook,FaSearch,FaGamepad,FaFacebookMessenger } from 'react-icons/fa';
import { CgSearch } from "react-icons/cg";
import { MdHome,MdArrowDropDown } from "react-icons/md";
import { BsCollectionPlay,BsPlus,BsFillBellFill } from "react-icons/bs";
import { AiOutlineShop } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";

function Navbar() {
    const [state,setState]=React.useState(true)
    const handle=()=>setState(false)
    const show=()=>setState(true)
    

    return (
        <div className='navbar'>

          <div className="navbar_section_one">
              <FaFacebook className="navbar_f_logo"/>
             
              {state?<CgSearch className="navbar_search_logo"/>:null}
              <input type="text" className="navbar_searchbox" placeholder="  search in Facebook" onClick={handle}/>


              </div>  
          <div className="navbar_section_two" onClick={show}>
              <MdHome className="navbar_logo"/>
              <BsCollectionPlay className="navbar_logo"/>
              <AiOutlineShop className="navbar_logo"/>
              <HiUserGroup className="navbar_logo"/>
              <FaGamepad className="navbar_logo" />

          </div>
          <div className="navbar_section_three">
              <img src="jose.jpg" alt="jose" className="profile_pict"/>
              <h3 className="profile_name">Jose</h3>
              <span className="span_nav_3"><BsPlus className="icon_nav_3"/></span>
              <span className="span_nav_3"><FaFacebookMessenger className="icon_nav_3"/></span>
              <span className="span_nav_3"><BsFillBellFill className="icon_nav_3"/></span>
              <span className="span_nav_3"><MdArrowDropDown className="icon_nav_3"/></span>

          </div>

            
        </div>
    )
}

export default Navbar
