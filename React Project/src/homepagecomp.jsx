import Slider from "./slider"
import React, {useState,useEffect} from "react"
import Cards from "./Cards"
import { createContext } from "react"
import './homepage.css'

export const UseContext = createContext()

function Homepage(){

    const [data,setData] = useState([])
    const [cat,setCat] = useState([])
    const [arr,setArr] = useState([])
    const [arrs,setArrs] = useState([])
    const [dis,setDis] = useState([])
    

   let  FetchApi =  function(apilink){
return( new Promise((resolved,rejected)=>{
let MyRequest = new XMLHttpRequest()
MyRequest.open("GET",apilink)
MyRequest.send()
MyRequest.onload = function (){
    if(this.readyState === 4 && this.status === 200){
        resolved(JSON.parse(this.response))
    }else {rejected(Error("Error on api"))}
}}))}
useEffect(()=>{
    FetchApi("https://fakestoreapi.com/products").then(
        (res)=>{setData(res)
            ,setArr(res)
        },
        (rej)=> rej)
        FetchApi("https://fakestoreapi.com/products/categories").then(res=>{setCat((e)=>res)
        })
},[])
function handlecat(e){
    if(e.target.value !== "All"){
setData(()=>arr.filter((ele)=>ele.category == e.target.value))}
else if(e.target.value === "All"){
    setData(arr)
}
}

function handleSearch(c){

    if((c.target.value.length  %2)==0){
        setDis([])
    setArrs([])
    arr.map(e=>setArrs(ele=>[...ele,e.description.toString()]))
    // arr.map(e=>arrs.push(e.price.toString()))
    arrs.map((ele,i)=>{
        if(ele.split(" ").includes(c.target.value.toString())){
         setDis((s)=>[...s,i])
         console.log(i)

        }
    })    
}

        // console.log (arrs.join(" ").split(" ").includes("Your"))
//    arrs.some((ele,i)=>{
//     })
    
}
function handleSearchClick(i){
    console.log(i)
    document.getElementById(i).scrollIntoView({
        behavior: 'smooth',
        block:"start",
      })
      document.getElementById(i).classList.add('scale');
     const interval= setTimeout(() => {
        document.getElementById(i).classList.remove('scale');
      }, 3000);
      setDis([])
      document.getElementsByTagName("input")[0].value = ""
     
}
    return(<>
    <UseContext.Provider value ={data} >
    <Slider />
    <h1>only Homies can Be Here</h1>
    <select  className="custom-select" name="categories" onChange={(e)=>handlecat(e)} >
    <option    name="categories" >All</option>
    {cat.map(e=><option   key={e} name="categories" value={e}>{e}</option>)}
    </select>
    <input type="search" placeholder="Discover Our Products" className="search-bar" onChange={(e)=>handleSearch(e)}/>
    <div className="div-ser">
    {dis.map(e => {
  return (
    <div key={e} className="clicksec" onClick={() => { handleSearchClick(e) }}>
      <p className="search-sugg">{arr[e].description}</p>
      <img src={arr[e].image} alt="" />
    </div>
  );
})}

    </div>
    <Cards/>
    </UseContext.Provider>
    </>)
}
export default Homepage