import React, {useState} from "react"
function ColorPicker (){
    const [color="#FFFFFF", colorSet] = useState()
    function handlecolor(e){
        colorSet(e.target.value)
    }
    return(
        <div className="colorPicker">
            <h1>Color Picker</h1>
        <div className="color-display" style={{backgroundColor:color}}>
            <p>selected color {color}</p>
        </div>
        <label>select a color  </label>
         <input type="color" value={color} onChange={handlecolor}/>
        
        </div>
    )
}
export default ColorPicker