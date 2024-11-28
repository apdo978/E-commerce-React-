import React, {useContext,useEffect,useState,useRef} from "react"
import {UseContext} from './homepagecomp'
function Cards (){
const [Comp,setComp] = useState([""])
    const user = useContext(UseContext)
    // const ref = useRef()

    function handleCardFunction(e,i){
   setComp(c=> user[i])
   document.getElementById("descr").scrollIntoView({
     behavior: 'smooth',
     block:"start",
   })

 }
 

    return(
        <>
       (<h1>homie</h1>
    <div className="card" >
        {user?.map((e,i)=>{ return(<div  key={i} id={i} onClick={(e)=>handleCardFunction(e,i)}>
        <h3>{e.title}</h3>
        <h3>{e.category}</h3>
        <img src={e.image} style={ {width:"200px"} } alt="" />
        <p><b>Price</b> {e.price}</p>
        <p>{e.description}</p>
        <p>{e.rating.rate}</p>
        <p>  Numper of Purchase  {e.rating.count}</p>
        </div>)})||"Loading"}
        </div>)
        <p id="descr" style={{
            textTransform:"capitalize",
            fontWeight:"bold",
            fontSize:"20px"
        }} >{Comp.description||""}</p>
    </>
            )
    
}
export default Cards