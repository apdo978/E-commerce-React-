import { useEffect, useState } from "react";
import { useParams } from "react-router";
import './DetailsPAge.css'
function DetailsPAge(){
    const {Id} = useParams()
    const [data, setData] = useState({})
    const apiL = `https://fakestoreapi.com/products/${Id}`
    console.log(apiL)
    useEffect(()=>{
        fetch(apiL).then(res=>res.json()).then(res=>setData(res))
    },[])
 
    return(<>
    <div className="DetailsPAge">
   <h3>{data.title}</h3>
    <h3>{data.category}</h3>
    <img className="DetailsPAgeimg" src={data.image} style={ {width:"200px"} } alt="" />
    <p><b>Price</b> {data.price}</p>
    <p>{data.description}</p>
    <p>  Numper of Purchase  {data.rating?.count||"lodaing"} Rating:{data.rating?.rate}</p>
    <button class="store-button">
Buy
</button>

    </div>
        
    
    </>)
}
export default DetailsPAge;