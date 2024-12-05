import Element from "./page/elemetn";
import Footer from "./page/footer";
import Food from "./page/Food";
// import Card from "./card/card";
// import Button from "./button-with-module/button";
import Students from "./props-types-default/props";
import User from "./condetional-Rendaring/User";
import List from "./lists,propsdestructuring.maping object/list";
import Button2 from "./clickEvent/clickEvent";
import Hook from "./Hooks/ReactHook";
import Counter from "./useState-and-statfulVariable/counter";
import Componant from "./useState-and-statfulVariable/onchange-formandunputs/Mycomponant";
import ColorPicker from "./colorPickerProj/colorpicker";
import Counter2 from "./useState-and-statfulVariable/counter-updaterFunction";
import Mycomp from "./useState-and-statfulVariable/Mycomp(updating state of an object)";
// import Arr from "./src/useState-and-statfulVariable/Updating-An-Array";
import ArrObj from "./useState-and-statfulVariable/Updating-Array-of-Objects";
import TodoList from "./useState-and-statfulVariable/toDolistApp";
import Effect from "./useEffect/useEffect";
// import Window from "./bomUseEffect";
import DigitalClock from "./digitalClocks/DigitalClock";
import NavBar from "./NavBar";
import Homepage from "./homepagecomp";
function App (){
  // const fruit = [{id:1,name:"orange"}
  //   ,{id:2,name:"apple"}
  //   ,{id:3,name:"csss"}
  //   ,{id:4,name:"banana"}
  //   ,{id:5,name:"pineapple"}]
  // const vegatables = [{id:6,name:"prokli"}
  //   ,{id:7,name:"carrot"}
  //   ,{id:8,name:"cucumber"}
  //   ,{id:9,name:"banana"}
  //   ,{id:10,name:"pineapple"}]
  // const anmie = [{id:6,name:"prokli"}
  //   ,{id:11,name:"nar"}
  //   ,{id:12,name:"junt"}
  //   ,{id:13,name:"luf"}
  //   ,{id:14,name:"death"}]

  // console.log((Negcounter/n) + (poscounter/n) + (zercounter/n))1
  

  return(
    <>
    {/* <Element/>
    <Footer/>
    <Food/>
    <Food/> */}
{/* <Card/>
<Card/> */}
{/* <Button/> */}
{/* <Students age = {23} isStudent = {true}/>
<Students name="muhamed" age = {58} isStudent = {false}/>
<Students name="abdelghafar" age = {58} isStudent = {true}/>
<Students name="hazem" age = {26} isStudent = {true}/> */}
{/* <User isLoggedIn={true} /> */}
{/* <List name={fruit} cat="fruit"/>
<List name={vegatables} cat = "vegatables"/>
<List name={anmie} /> */}
{/* <Button2/> */}
{/* <Hook/> */}
{/* <Counter/> */}
{/* <Componant/> */}
{/* <ColorPicker/> */}
{/* <Counter2/> */}
{/* <Mycomp/> */}
{/* <Arr/> */}
{/* <ArrObj/> */}
{/* <TodoList/> */}
{/* <Effect/> */}
{/* <Window/> */}
{/* <DigitalClock/> */}
<div className="Renderd-Div">
  <Homepage/>
</div>
    </>
    
  );
}
export default App
//nav bar
//render page if(window.location.pathname == componant )return componant
//i will make path name for evrey componant 