import propTypes from 'prop-types'
function List ({name=[],cat="Category"}){
   
    // const {name}= props;//destrructrueing
    // fruit.sort((a , b)=>a.name.localeCompare(b.name))//for ordering alphabitical the abc  a first elemnt and b secound an it itreate the rest
    // fruit.sort((a , b)=>a.id - b.id)//for ordering the abc  a first elemnt and b secound an it itreate the rest
//either one of them
    // const ListItem = fruit.map(function(e){return <li key = {e.name}>{e.name}</li>})
    // const lowCalFruit = fruit.filter((e)=>  e.id >3).map(e=> <li>{e.id}</li>)
    // const ListId = fruit.map(function(e){return <li key = {e.id}>{e.id}</li>})
    // console.log(lowCalFruit.map(e=> e.id))
  
//   console.log(props.name.map(e=> e.id))
const listItem = name.map(e=> <li key={e.id}>{e.name}</li>) ;
// console.log(listItem)
        return(
         <>
         <h3>{cat}</h3>
         <ul>  &nbsp;{listItem}</ul>
        
        {/* <ol>{idlist}</ol> */}
         {/* {lowCalFruit} */}
        {/* <ul>{ListItem} &nbsp;</ul> */}
        {/* <ul>{ListId} &nbsp;</ul> */}
        {/* <ol>{ListItem}</ol> */}
        </>
    )
}
List.propTypes={
    name:propTypes.array,
    cat:propTypes.string
}

export default List