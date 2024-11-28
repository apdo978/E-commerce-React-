import Slider from "./slider"
import React, {useState,useEffect} from "react"
import Cards from "./Cards"
import { createContext } from "react"

export const UseContext = createContext()

function Homepage(){

    const [data,setData] = useState([])

   let  FetchApi =  function(apilink){
return( new Promise(function(resolved,rejected){
let MyRequest = new XMLHttpRequest()
MyRequest.open("GET",apilink)
MyRequest.send()
MyRequest.onload = function (){
    if(this.readyState === 4 && this.status === 200){
        resolved(JSON.parse(this.response))
    }else {rejected(Error("Error on api"))}
}}))}
useEffect(function(){
    FetchApi("https://fakestoreapi.com/products").then(
        (res)=>setData(res),
        (rej)=> rej
    )
},[])

    return(<>
    <UseContext.Provider value ={data} >
    <Slider />
    <h1>only Homies can Be Here</h1>
    <Cards/>
    </UseContext.Provider>
    </>)
}
export default Homepage