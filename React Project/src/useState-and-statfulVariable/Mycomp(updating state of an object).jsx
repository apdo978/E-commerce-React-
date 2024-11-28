import React, {useState} from "react"
function Mycomp (){
    const [car, setCar] = useState({Year:2024, make: "Ford", model: "Mustang"})
    function handleNumber(e){
        setCar(c=>({...c,Year:e.target.value}))
    }
    function handleMake(e){
        setCar({...car,make:e.target.value})
    }
    function handleModle(e){
        setCar( {...car,model:e.target.value})
    }
    return(
  <div>
    <p> Your favorite car {car.Year} {car.make} {car.model}</p>
    <input type="number" value={car.Year}onChange={handleNumber} /><br />
    <input type="text" value={car.make} onChange={handleMake}/><br />
    <input type="text" value={car.model} onChange={handleModle}/><br />
  </div>
    )
}
export default Mycomp