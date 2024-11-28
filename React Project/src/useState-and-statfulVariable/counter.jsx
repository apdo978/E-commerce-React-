//counter with only use state and set
import React,{useState} from "react";
function Counter (){
    let [counter=0,counterSet] = useState();
const Increament = function (){
counterSet(counter + 1)
}
const Reset = function (){
counterSet(0)
}
const decreament = function (){
counterSet(counter - 1)
}
    return ( 
        <div> 
            <p>{counter}</p>
            <button onClick={Increament}>Increament</button>
            <button onClick={Reset}>Reset</button>
            <button onClick={decreament}>decreament</button>
        </div>
    );
}

export default Counter;