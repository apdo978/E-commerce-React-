import React, {useState} from "react"
function ArrObj(){
    const [cars,setCars] = useState([])
    const [Year,setnow] = useState(new Date().getFullYear())
    const [make,setmake] = useState("")
    const [modle,setmodle] = useState("")

    function changeYear (e){
        setnow(e.target.value) 
    }
    function changeYear (e){
        setnow(e.target.value) 
    }
    function makeHandle (e){
        setmake(e.target.value) 
    }
    function modleHandle (e){
        setmodle(e.target.value) 
    }
    function HandleAdd (){
        setCars([...cars,{year:Year,
                          Make:make,
                          Modle:modle
        }])
    }
    function removeEle (index) {
        setCars(cars.filter((e,i)=>i!==index))
    }
   
    // function removeEle(index){
    //     setCars(cars.filter((e,i)=>i!=index))
    // }
//     let arr = []
//     function buttonfunc (){
//         const test=document.querySelectorAll("input").forEach(e=>arr=[...arr,e.value])
// setCars([...cars,...(arr.join(" ").split())])
// console.log(cars)
   
  
    return(
        <div><h2>List of Car Object</h2>
        <ul>{cars.map((e,i)=><li onClick={()=>{removeEle(i)}} key={i}>{e.year} {e.Make} {e.Modle}</li>)}</ul>
        
        
        <input type="number" value={Year} onChange={(e)=>{changeYear(e)}} placeholder="Year"  /><br />
        <input type="text" placeholder="make" onChange={makeHandle}   /><br />
        <input type="text" placeholder="model"  onChange={modleHandle} /> <br />
        <button onClick={HandleAdd} >Add Car</button>
        </div>
        
    )
}
export default ArrObj