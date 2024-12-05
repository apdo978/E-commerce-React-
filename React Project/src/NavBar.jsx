import Homepage from "./homepagecomp"
import React, {useState,useEffect} from "react" 
import imge from'./assets/images.png'
import Spinner from "./Pic";
function NavBar (){
   function handleHome (param){
    window.location.pathname =param
   }
    return(
        <>
        <div >

        <ul className="NavBar" >
        <Spinner/>
            <li onClick={()=>{handleHome("/")}}>Home</li>
            <li onClick={()=>{handleHome("/About")}}>About</li>
            <li onClick={()=>{handleHome("/Contact-Us")}}>Contact-Us</li>
        </ul>
</div>
        </>
    )

}
export default NavBar