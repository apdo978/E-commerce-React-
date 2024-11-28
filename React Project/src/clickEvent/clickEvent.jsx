function Button2 (){
 

    // let count = 0;
    // const handleClick = function (name){
        
    //     count++
    //     const handleClick2 = function(name){
    //         console.log(` stop${name}`)
    //     }
    //     return count<3?console.log(`ouch${name}`):handleClick2(name)
    // }
    // when u have an argument u should usr secound call back
  const handleClick =function (e) {e.target.textContent="ouch"} //any variable that passed as its with out any defention will consider as event object (e)=>{e}
    return(
        // <button onClick={(e)=> {handleClick(e)}}>click me</button>
        <button onDoubleClick={(e)=> {handleClick(e)}}>click me</button>
    )
}
export default Button2