import React, {useState} from "react"
import Button from "./button-with-module/button"
function Arr (){
    const [foods, setFoods] = useState(["apple","orange"])
    function handleValue (){
        const Inbut = document.querySelector("input").value
        document.querySelector("input").value = ""
        setFoods((f)=>Inbut.length>0&& Inbut!=" "?[...f,Inbut]:f )
        // console.log(Inbut)
    }
    function RemoveButt(index){
        setFoods((f)=> f.filter((e,i)=>i!=index))
     }
    return(<div>
        <h2>List of Food</h2>
        <ul>
        {foods.map((e,i)=> <li onClick={()=>{RemoveButt(i)}} key={i}>{e}
       
        </li>) }
        
        </ul>
        <input type="text" placeholder="Enter Your "/>
        <button onClick={handleValue}>Add Food</button>
    </div>)
}
export default Arr