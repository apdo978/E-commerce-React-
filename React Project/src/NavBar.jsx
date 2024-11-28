import Homepage from "./homepagecomp"
import React, {useState,useEffect} from "react" 
import imge from'./assets/images.png'
import Spinner from "./Pic";
function NavBar (){
    const [route,setRoute] = useState(window.location.pathname)
function handleHome(path){
window.history.pushState({},"",path)
setRoute(path)

}
 const renderPage =()=>{ switch(route||window.location.pathname){
    case "/":
        return <Homepage/>;
    case "/About":
        return <>
        <h1> The Real Homie and the Ultimate Gangesta == &gt; AbdElGhafar </h1>
        </>
    case "/Contact-Us":
            return <h1>Contact Us Page</h1>;
        }
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
<div className="Renderd-Div">
    {renderPage()}
</div>
</div>
        </>
    )

}
export default NavBar