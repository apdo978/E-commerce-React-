import React, {useState,useEffect} from "react";
function Window (){
    const [width,setWidth] = useState(window.innerWidth)
    const [height,setheight] = useState(window.innerHeight)
    useEffect(()=>{
        addEventListener("resize",handleresize)
        return    ()=>{
            removeEventListener("resize",handleresize)
        }
    })
    function handleresize(){
        setWidth(w=> window.innerWidth)
        setheight(h=> window.innerHeight)
      
    }
   
    return(
        <div>
            <p>width:{width}</p>
            <p>Height:{height}</p>
        </div>
    )
}
export default Window