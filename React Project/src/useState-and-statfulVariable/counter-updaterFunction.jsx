import React,{useState} from "react";//if u need safe updates based on previous state
function Counter2 (){
    let [counter,counterSet] = useState(0);
const Increament = function (){
// counterSet(counter )//0+1
//counterSet(counter + 1)//dont work only updating once 0+1 agian update make in batch in react to increase performance
counterSet(c => c + 1)//update the bending state not the current
counterSet(c => c + 1)//react puts the update in queue (data structure)(first in first out)
counterSet(c => c + 1)
}
const Reset = function (){
counterSet(0)
}
const decreament = function (){
counterSet(c=> c- 1)
counterSet(c=> c- 1)
counterSet(c=> c- 1)
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

export default Counter2;