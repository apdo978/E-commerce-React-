import React,{useState} from "react"
function Componant (){

   const [name = "Gust",setName] = useState()
   const [qunt = 1,quntName] = useState()
   const [pay = "",payset] = useState()
   const [rad = "",radset] = useState()
    function hanadleonChange (e){
        setName(e.target.value) 
    }
    
    function hanadleonquntChange (e){
        quntName(e.target.value) 
    }
    function hanadlpaymentChange (e){
        payset(e.target.value) 
    }
    function hanadlradioChange (e){
        radset(e.target.value) 
    }

    return(
        <div>
            <input value={name} onChange={hanadleonChange} />
            <p>Name: {name}</p>
            <input type="number" onChange={hanadleonquntChange} />
            <p>quntity: {qunt}</p>
            <select value={pay} onChange={hanadlpaymentChange}>
                <option value="">Select an Option</option>
                <option value="visa">visa</option>
                <option value="Master Card">Master Card</option>
            </select>
            <p>Payment: {pay}</p>
            <label > 
                <input type="radio" value="shipping" checked = {rad === "shipping"} onChange={hanadlradioChange}/>
                shipping
            </label>
            <label >
                <input type="radio" value="Delivery" checked = {rad === "Delivery"} onChange={hanadlradioChange}/>
                Delivery
             </label>
             <p>{rad}</p>
        </div>
    )
}
export default Componant