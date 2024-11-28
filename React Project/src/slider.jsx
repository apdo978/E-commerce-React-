import React, {useEffect, useState} from "react"

function Slider (){
   
                 const [index,setIndex] = useState(parseInt(localStorage.num)||0)
                 const [index2,setIndex2] = useState(1)
                 const [Arr,setArr] = useState([])
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
    setTimeout(() => {
      document.getElementById(i).classList.remove('scale');
    }, 3000);

}

useEffect(()=>{
   localStorage.num = index
   console.log("localstorage"+ localStorage.num)
},[index])

useEffect(()=>{
   let MyRequest = new XMLHttpRequest()
   MyRequest.open("GET","https://fakestoreapi.com/products")
   MyRequest.send()
   MyRequest.onload = function (){
      this.status === 200 && this.readyState === 4 ?setArr(()=>(JSON.parse(MyRequest.response))):Error("Error from api")
   }
},[])

useEffect(function(){
   let interval = setInterval(() => {
   document.getElementById("imge").click()
   }, 10000);
   return ()=>clearInterval(interval)
},[])
console.log( "Arr" + Arr[10]?.image||"ىخف غثف" )


 return(<>
                 <div className="Button-imges">
                    <button className="arrow left" onClick={handleBackward}></button>

                <img  onClick={()=>handleImageClick(index)} className="slider" src={Arr[index]?.image|| ""} style={{opacity:index2}} alt=""/>

                    <button  id="imge" className="arrow right" onClick={handleForward}></button>
                    </div>
                    <div>{} </div>
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