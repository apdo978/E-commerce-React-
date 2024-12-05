import React, {useContext,useEffect,useState,useRef} from "react"
import {UseContext} from './homepagecomp'
import { useParams } from "react-router"
function Cards (){
    const user = useContext(UseContext)

    function handleCardFunction(i){
      window.location.pathname = `product/${user[i].id}`
      // console.log(`product${user[i].id}`)
 }

    return(
        <>
  
  <div className="card" >
            {user?.map((e,i)=>{ return(<div  key={i} id={i} onClick={()=>handleCardFunction(i)}>
            <h3>{e.title}</h3>
            <h3>{e.category}</h3>
            <img src={e.image} style={ {width:"200px"} } alt="" />
            <p><b>Price</b> {e.price}</p>
            <p>{e.description}</p>
            <p>{e.rating.rate}</p>
            <p>  Numper of Purchase  {e.rating.count}</p>
            </div>)})||"Loading..."}
            </div></>
            )
    
}
export default Cards