import React, {useState} from "react"
function TodoList (){
    const [Task,setTask] = useState(["Hello"])
    const [newTask,setNewTask] = useState("")
    function inputHandle(e){
        setNewTask(()=> e.target.value)
    }
    function addHandle (){
        if (newTask.trim()!==""){
        setTask((t)=>[...t,newTask])
        setNewTask(()=>"")}
    }
     function RemoveButt(index){
        setTask(()=>Task.filter((e,i)=> i!==index))
     }
     function UpButt(index){
         const UpdatedArr = [...Task];
        if(index>0){
        [UpdatedArr[index],UpdatedArr[index-1]] = [UpdatedArr[index-1],UpdatedArr[index]]
         setTask(()=> UpdatedArr)}
        //  console.log(UpdatedArr)
     }
     function DownButt(ind){
        const UpdatedArr = [...Task];
        if(ind<UpdatedArr.length-1){
        [UpdatedArr[ind+1],UpdatedArr[ind]] = [UpdatedArr[ind],UpdatedArr[ind+1]]
         setTask(()=> UpdatedArr)}
     }
    return(
        <div className="parent">
            <h1>To-Do-List</h1>
            <input type="text" placeholder="Enter a Task...." value={newTask} onChange={inputHandle} />
            <button className="addButton" onClick={addHandle}>Add</button>
            <ul>
            {Task.map((e,i)=> <li key={i}>{e}
                
                <button className="removeButton" onClick={()=>{RemoveButt(i)}}>Remove</button>
                <button onClick={()=>{UpButt(i)}}>Up</button>
                <button onClick={()=>{DownButt(i)}}>Down</button>
                
            </li>)}
            </ul>
        </div>
    )
}
export default TodoList