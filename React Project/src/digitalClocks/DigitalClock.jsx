import React, {useState, useEffect} from "react"
function DigitalClock(){
    const [time,settime] = useState(new Date())
    useEffect(function () {
        let int = setInterval(()=>{
            settime(new Date())
            document.getElementById("dot").style.opacity="0%"
           

        },1000) 
        setInterval(()=>{
             
            document.getElementById("dot").style.opacity="100%"
        },2000)
    return ()=>{ clearInterval(int) }
    } ,[])

    return(
        <div>
            <span>{time.getHours()<10?"0"+time.getHours():time.getHours()>=12&&time.getHours()}</span>:
            <span>{time.getMinutes()<10?"0"+time.getMinutes():time.getMinutes()}</span><span id="dot">:</span> 
            <span>{time.getSeconds()<10?"0"+time.getSeconds():time.getSeconds()}</span>
            <span>{time.getHours>=12?"pm":"am"} </span>
   
        </div>
    )
}
export default DigitalClock