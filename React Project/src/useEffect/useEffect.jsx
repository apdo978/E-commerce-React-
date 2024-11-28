import React, {useState,useEffect} from "react";
function Effect(){
    const [count,setCount] = useState(0)
    const [Color,setColor] = useState("")

    useEffect(()=>{
        document.title = count
    },[])//func and [depncies (value)] useEffect(()=> {}) without [] it will be called evrey rerender
                        //func and [depncies (value)] when  mount   empty function will called evrey rernder
                        //  when have dependencies (value)  function will be called only when this Value (dependaciy) change
                        
    function addCount(){
        setCount(c=> ++c)
    }
    function decCount(){
        setCount((c)=> --c)
    }
    function changeColor (){
setColor((c)=> c ==="red"?"green":"red")
    }
    return(
        <div>
           <p style={{color:Color}}>Count: {count}</p>
           <button onClick={addCount}> Add</button> 
           <button onClick={decCount}> decrease</button> 
           <button onClick={changeColor}> Change TheColor</button> 
        </div>
    )
}
export default Effect