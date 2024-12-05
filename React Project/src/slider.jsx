import React, {useEffect, useState, useContext} from "react"
import {UseContext} from './homepagecomp'
function Slider (){
   const Arr = useContext(UseContext)
                 const [index,setIndex] = useState(parseInt(localStorage.num)||0)
                 const [index2,setIndex2] = useState(1)
               
// console.log("index"+index)

      function handleForward(){
         setIndex2(i=> 0)
         setTimeout (()=>{ setIndex( (i)=> i<Arr.length-1? i + 1:0)
         },1000)
         setTimeout(() => {
            setIndex2(i=> 1)
         }, 2000);
      } 

function handleBackward(){
   setIndex2(i=> 0)
   setTimeout( ()=> {setIndex( (i)=> i>0?i - 1:Arr.length-1)},1000 )
   setTimeout(() => {
      setIndex2(i=> 1)
   }, 2000);
}

function handleImageClick(i){
   document.getElementById(i).scrollIntoView({
      behavior: 'smooth',
      block:"start",
    })
    document.getElementById(i).classList.add('scale');
   const interval= setTimeout(() => {
      document.getElementById(i).classList.remove('scale');
    }, 3000);
   

}

useEffect(()=>{
   localStorage.num = index
   console.log("localstorage"+ localStorage.num)
},[index])

useEffect(function(){
   let interval = setInterval(() => {
   document.getElementById("imge").click()
   }, 10000);
   return ()=>clearInterval(interval)
},[])
console.log( "Arr" + Arr[10]?.image||"ىخف غثف" )


 return(<>
                 <div className="Button-imges">
                 <div className="arrowDiv" onClick={handleBackward}>
                    <button className="arrow left"></button>
                    </div>
                <img  onClick={()=>handleImageClick(index)} className="slider" src={Arr[index]?.image||"data:image/png;base64,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"} style={{opacity:index2}} alt=""/>
                     <div className="arrowDiv" >
                    <button  id="imge" className="arrow right" onClick={handleForward}></button>
                    </div>
                    </div>
                    </>
                 )
               }
               export default Slider
               
               
               
               // useEffect(()=>{
               //    const interval2 = setInterval(()=>{
               // document.getElementsByTagName("img").style.opacity
               //    },3000)
               //    return ()=> {clearInterval(interval2)}
               //  },[])
 
//                import React, {useEffect, useState} from "react"

// function Slider (){
   
//                  const [index,setIndex] = useState(parseInt(localStorage.num)||0)
//                  const [index2,setIndex2] = useState(1)
//                  const [Arr,setArr] = useState([])
// // console.log("index"+index)

//       function handleForward(){
//          setIndex2(i=> 0)
//          setTimeout (()=>{ setIndex( (i)=> i<Arr.length-1? i + 1:0)
//          },1000)
//          setTimeout(() => {
//             setIndex2(i=> 1)
//          }, 2000);
//       } 

// function handleBackward(){
//    setIndex2(i=> 0)
//    setTimeout( ()=> {setIndex( (i)=> i>0?i - 1:Arr.length-1)},1000 )
//    setTimeout(() => {
//       setIndex2(i=> 1)
//    }, 2000);
// }
// useEffect(()=>{
//    localStorage.num = index
//    console.log("localstorage"+ localStorage.num)
// },[index])

// useEffect(()=>{
//    let MyRequest = new XMLHttpRequest()
//    MyRequest.open("GET","https://fakestoreapi.com/products")
//    MyRequest.send()
//    MyRequest.onload = function (){
//       this.status === 200 && this.readyState === 4 ?setArr(()=>(JSON.parse(MyRequest.response))):Error("Error from api")
//    }
// },[])

// useEffect(function(){
//    let interval = setInterval(() => {
//    document.getElementById("imge").click()
//    }, 10000);
//    return ()=>clearInterval(interval)
// },[])
// console.log( "Arr" + Arr[10]?.image||"ىخف غثف" )


//  return(<>
//                  <div className="Button-imges">
//                     <button className="arrow left" onClick={handleBackward}></button>

//                 <img  className="slider" src={Arr[index]?.image|| ""} style={{opacity:index2}} alt=""/>

//                     <button  id="imge" className="arrow right" onClick={handleForward}></button>
//                     </div>
//                     <div>{} </div>
//                     </>
//                  )
//                }
//                export default Slider