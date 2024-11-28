import React,{useState} from "react";
function Hook () //stateful Variable
{
const [name="zero", setName] = useState();
let [age=0, setAge] = useState();
const UpdateName = function(){
    setName("bro") //rerender virtual dom normal variables dont
}
const UpdateAge = function(){
    setAge(++age) //rerender virtual dom normal variables dont
}
    return(
        <div>
            <p>name:{name}</p>
            <button onClick={UpdateName}>Set Name</button>
            <p>name:{age}</p>
            <button onClick={UpdateAge}>Set Name</button>
        </div>
    );
}
export default Hook