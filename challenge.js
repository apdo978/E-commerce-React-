//variable challenge
// let the_tiltle =("Elzero"),firstDescription=("Elzero Web School"),timr0date=("25/10")
// let card =`(<div><h3>hello ${the_tiltle}</h3> <p> ${firstDescription} </p> <span>${timr0date}</span>
// // </div>`;
// document.write(card.repeat(4));
// var n1=(10),n2=(20);
// var n1=("10"),n2=("20");
// console.log(n1,n2);
// console.log(`${n1}${n2}`);
// console.log(n1+"\n"+ n2)
// console.log(`${n1} 
// ${n2}`)
// console.log(typeof {name:"elzero"})
// document.write("`I'm In  \n \\\\ love\\\\ \"\"\"\'\'\' \n ++ with ++ \\\"\"\" \n ")
// let a=("`I'm In"),b=("\\\\"),c=("Love \\\\ \"\"\" \'\'\'"),d=("++ With ++"),e=("\\\"\"\"\\\"\"\""),f=("\"\"JavaScript\"\"")
// console.log(a+"\n"+b+"\n"+c+"\n"+d+"\n"+e+"\n"+f)
// let a = 21, b = 20;
// console.log("//"+" "+"_"+a,b+"_"+a,b+"_"+a,b+"_"+b+"_");
// console.log(`// _${a}_${b}${a}_${b}${a}_${b}${a}_${b}_`);

//                                  arithmatic operators
// let a=("10");
// console.log(10+"osama");
// console.log(10-"osama");
// console.log(typeof  10-"osama");

// console.log(2**4);
// console.log(2**4);

// //                medoulas the rest of numper so can be devided and give a numper 
// console.log(10/2);
// console.log(11%2); //remove1

//                                  increment and decrement 
// num =1;
// console.log(num++);
// console.log(++num);
//  console.log(num--);
//  console.log(num);
// console.log(+100)
// console.log(+"100")
// console.log(+"0xff")
// console.log(+null)
// console.log(+false)
// console.log(+true)

// console.log(-100)
// console.log(-"100")
// console.log(-"osama")
// console.log(-"0xff")
// console.log(-null)
// console.log(-false)
// console.log(-true)

//                             type coartion type casting
// let a="10",b=20,c=(true);
// console.log(a-b)
//                    assigenment operator =   
// let a=10
// console.log(a+=40)//a=40+a
// a+=40//a=a2+40=90
// a-=50 //a=a3-50
// a/=2
// console.log(a)
// let d="-100",e="20",f=30,g=true ;
// console.log(-d*+e)
// console.log()
// console.log(+e*+g*2+-d+f+g*3); //  =173
// console.log(1000000)
// console.log(1_000_000)
// console.log(1e6)
// console.log(10**6)
// console.log(Number.MAX_SAFE_INTEGER.toString())
// console.log(Number.MAX_VALUE)

//                         numper methode

// console.log((110).toString()) // tostringe numper to stringe console.log((n).tostringe())

// console.log((100.15555).toFixed(2)) tofixed علشان يقرب الارقام بيدي striing look at console

// console.log(parseInt("100.50osama"))//analysis of data detecying anumper giving integar nump numper 

// console.log(parseFloat("100.50 osama")) // parse int analysis of dat backing a numper 

// console.log(Number("100o sama "))//Nan

// console.log(+("100o sama "))//Nan

// console.log(Number.isInteger("100"))
// console.log(Number.isInteger(100.50))
// console.log(Number.isInteger(100))

                                    //math object
// console.log(Math.round(99.2))//round هيقرباك لاقرب حاجه

// console.log(Math.round(99.5)) npt like tofixed

// console.log(Math.ceil(99.2));//cail => maximum round من سقف

// console.log(Math.floor(99.9));//oppsite floor => 

// console.log(Math.min(100,2000,50,30,-50));
// console.log(Math.max(99.9,10,1000,-50));

// console.log(Math.pow(2,8))

// console.log(Math.random())//any random value

// console.log(Math.trunc(99.2))//will return integer part lik parseint
// let a=1_00,b=2_00.5,c=1e2,d=2.4;
// console.log(Math.trunc(Math.min(a,b,c,d)))
// console.log(parseInt(Math.min(a,b,c,d)))
// console.log(Math.round(Math.min(a,b,c,d)))
// console.log(Math.floor(Math.min(a,b,c,d)))

// console.log(a**Math.trunc(d))
// console.log(a**parseInt(d))

// console.log(a**Math.round(d))
// console.log(a**Math.floor(d))
// console.log(a**parseInt(d))

                                  //challange
// console.log(Math.ceil((parseInt(b) / Math.ceil(d))));
// console.log(Math.round((parseInt(b) / Math.ceil(d))));
// console.log(((parseInt(b) / Math.ceil(d))));

// index هاتلي الحاجه دي

// let theName=" ahmed"
// let thelist=[1,2,3,4,5]
// console.log(theName[3])//counting from zero
// console.log(theName[5])//returning un defind

// console.log(theName.charAt(5))
//theName.charat(n)==theName[n] numper of index with index numpring

// console.log(theName.length)//counting from one =>> length of index numpring

// console.log(theName.trim())//removing spacess

// console.log(theName.toUpperCase())

// console.log(theName.toLowerCase())

// console.log(theName.trim().charAt(2).toUpperCase())

//                          INDEX OF   هل الحاجه دي موجوده ولا لا
// let a='elzerowebschool'

// console.log(a.indexOf("web"))
// console.log(a.indexOf("web",8))
// console.log(a.lastIndexOf("o"))//get from last to first

// console.log(a.slice(2,7))//not include the end in tirming
// console.log(a.slice(-2))//-to count from last to first
// console.log(a.split("",6))

// let b ='elzero web school'
// console.log(a.length)
// console.log(a.substring(2,6))==slice==> دا الفرق بينهم 
// console.log(a.substring(6,2))//السالب بيخليه يبدا  من الصفر
// console.log(a.substring(a.length-1))//like a.slice
// console.log(a.substring (-10,3))=صفر و 3

// console.log(b.substr(-5,2)) من بعد -5 حرفين
// console.log(b.indexOf("web")) ==>دا هيديني رقم الحاجه موجوده فين
// console.log(b.includes("web"))==>دا هيديني الحاجه موجوده ولا لا
// console.log(b.includes("web",8))
// 
// console.log(a.startsWith("o",2))//  هنا بساله الحرف من اول الحرف ال2 بيبدا ب o with lenght not index
// console.log(b.endsWith(""))

// let a=("eLZERO WEB SCHOOL")
// console.log(a.length)
// console.log(a.charAt(2).toUpperCase())

// console.log(a.slice(-4,-3).toUpperCase().repeat(8))
// console.log(a.charAt(13).toUpperCase().repeat(8))
// console.log(a.substring(13,14).toUpperCase().repeat(8))
// console.log(a.substring(a.length-4,14).toUpperCase().repeat(8))
// console.log(a.substr(-4,1).toUpperCase().repeat(8))
// console.log(a.split(" ",1))

// console.log(a.substr(0,6)+" "+a.substr(a.length-6))
// console.log(a[0].toLowerCase()+a.substring(1,a.length-1)+a.charAt(16).toLowerCase())
// console.log(a[0].toLowerCase()+a.slice(1,-1)+a.charAt(16).toLowerCase())

//                                            comparison operators
// equal comparing onley value not type
// console.log(10 == "10")//true
// console.log(10 != "10")//true
//identical operator 
// console.log(10==="10")//false string and num value + type
// console.log(10!=="10")//true  not identical string and num value + type
// console.log(10>10)
// console.log(10<10)
// console.log(10<=10)
// console.log(10>=10)

//                        logical operator
// console.log(!(10==10))
// console.log(10==10 && 10>8 && 10>=50) // all conditions must be full filled
// console.log(10==10 || 10>8 || 10>=50) // onley one condition must be full filled

//                    control flow
//syntax if (condition){action}
// let price = 100 , discount=false , discountAmount=30 , country ="KSA",student='truee'; 
// if(discount===true){
//     price-=discountAmount
// } else if(country==="egypt"){price-=40//if first condition not ful filled we will applay this
// }
//  else if(country==="syria"){
//     price-=40}
//     else{
//         price-=10
//     }//if not ful filling of any condition do this
// console.log(price)

//                        nested if 
// if(discount===true){
//     price-=discountAmount
// }else if(country==="KSA"){
//     price-=discountAmount   //going on them condition by condition and can make them all or one of them
//        if(student===true)
//         price-=discountAmount+10
//     }
//     else{price-=10}
// if(discount===true){
//     price-=discountAmount}
//     else if(country==="KSA" && student==='true'){
//         price-=discountAmount+20
//     }
//     else if(country==="KSA"&& student==="false"){
//         price-=10
//     }
//     else{price=price}

//     console.log(price)
//syntax :  condition ? action if tru :action if false
// let Name="mona",gender="female",age=19;
// // if(gender==="male"){console.log("mr");}else{console.log("Mrs")}
// result1=gender ==="male" ?"mr" : "Mrs";//if and else onley 
// // console.log(gender)
// resualt=age<20
//  ? "too small": age>=20 && age<=60 
//  ?"perfect":age>60
//  ?"too old"
//  :"out of range"
// result2=age<20 ?"un fortinatly":age>=20 && age<=60?"perfecto":"out of range"
// console.log(result2)
// console.log(`hello ${result1} ${Name} ur: ${result2}  ${resualt}`)

//logical or null+un identified+ false value
// let price= 
// console.log(Boolean(price))
// 
// console.log(`the price is ${price||200}`) //if price is a false value will go to the other conditions
// console.log(`the price is ${price??200}`)//onley null will lead to secound option
//                       if challange
// a=10
// if(a<10){console.log(10)}
// else if(a>=10 && a<=40){console.log("10 to 40")}
// else if(a>40){console.log(">40")}
// else{console.log("Unknowen")}

// a<10?console.log(10):a==10 && a<=40?console.log("10 to 40"):a>40?console.log(">40"):console.log("Unknowen")
// let st =("Elzero Web school")
// st.length*2 ==="34" ? console.log("good"):console.log("2")
// if((st.length*2).toString()==="34"){console.log("good")}else{"2"}

// console.log(st.length)
//let st = "Elzero Web School";

// if ((st.length*2).toString()=== "34") {
//     console.log("Good");
//   }
  
//   // W Position May Change
//   if (st[st.indexOf("W")].toLowerCase() === "w") {
//     console.log("Good");
//   }
  
//   if (st.length !== "string") {
//     console.log("Good");
//   }
  
//   if (typeof (st.length) === "number") {
//     console.log("Good");
//   }
  
//   if (st.slice(0,6)+st.slice(0,6) === "ElzeroElzero") {
//     console.log("Good");
//   }
// let a=5 //switch make identical comparison
// switch(3){
//       default:
//           console.log("unKnowen day")
//           break;
//     case 0:
//         console.log("saterday")
//         break;
//         case 1:
//             case 2:    //في حالة اكتر من case
//             console.log("monday")
//             break;
//   }
       //switch challange
// let jop="pharmacist";
// let salary="0";
// if(jop==="manegar"){salary=8000}
// else if(jop==="it"){salary=6000}
// else if(jop==="developer" ||jop==="designer"  ){salary=7000}
// else{salary=4000}
// console.log(salary)

// switch(jop){
//     default:salary=4000
//     break;
//     case "manegar":salary=8000
//      break;
//     case "it":salary=6000 
//     break;
//     case "developer":salary=7000 
//     break;
//     case "designer":salary=7000 
//     break;
// }
// console.log(salary)
// let holidays = 5;
// let money = 0;

// switch (holidays) {
//     case 0:
//         money = 5000;
//         console.log(`My Money is ${money}`);
//         break;
//     case 1:
//     case 2:
//         money = 3000;
//         console.log(`My Money is ${money}`);
//         break;
//     case 3:
//         money = 2000;
//         console.log(`My Money is ${money}`);
//         break;
//     case 4:
//         money = 1000;
//         console.log(`My Money is ${money}`);
//         break;
//     case 5:
//         money = 0;
//         console.log(`My Money is ${money}`);
//         break;
//     default:
//         money = 0;
//         console.log(`My Money is ${money}`);
// }

// if(holidays==0){
//     money=5000 
//     console.log(`My Money is ${money}`);
// }else if (holidays==1 ||holidays== 2){
// money=3000;console.log(`My Money is ${money}`);

// }
// else if(holidays==3){
//     money=2000; console.log(`My Money is ${money}`)
// }
// else if(holidays==4){
//     money=1000;
//     console.log(`My Money is ${money}`); 
// }
// else if(holidays==5){
//     money=0;
//     console.log(`My Money is ${money}`);
// }else{money = 0;
//     console.log(`My Money is ${money}`);}
/*في الكود الذي قدمته، هناك خطأ في استخدام الشرط else if (holidays==1||2). في هذه الحالة، التعبير holidays==1||2 لا يعمل كما تتوقع. الشرط holidays==1||2 سيتم تقييمه على النحو التالي:

أولًا، يتم تقييم holidays==1 والذي يُرجع true أو false.
ثم يتم تقييم 2، والذي يُعتبر دائمًا true لأن أي رقم غير صفري يُعتبر true في JavaScript.
لذا، الشرط else if (holidays==1||2) دائمًا سيكون true لأن 2 دائمًا يُعتبر true.

لتصحيح هذا الخطأ، يجب عليك استخدام الشرط else if (holidays == 1 || holidays == 2) للتأكد من أن أي من القيمتين 1 أو 2 يتم التحقق منها بشكل صحيح.

إليك الكود المصحح: */
// let myFriends = ["ahmed","mohamed","sayed",["sika","zika","mo"]]//[] ==== index of
// console.log(`hello ${myFriends[1]}`)
// console.log(`hello ${myFriends[3][2]}`)
// console.log(`hello ${myFriends[1][2]}`)//h 
// console.log(`${myFriends}`)

// myFriends[2]="gamal"

// console.log(`${myFriends}`)
// console.log(typeof myFriends)
// console.log(Array.isArray (myFriends))
//  myFriends[myFriends.length]='osama'//to insert vaalue alwayes after end 
//  myFriends[myFriends.length-1]='osama'//to insert vaalue alwayes insted of the end 
//  myFriends.length=2;//will show onley two of it
//  console.log(myFriends)
                            //  arrias
// myFriends.unshift("abdo","hazem") //adding them in the first
// console.log(myFriends)
// myFriends.shift()
// console.log(myFriends)
// let name=myFriends.shift()
// myFriends.push("hazem","abdp") //from the last
//
// console.log(myFriends)
// console.log(name)
//                  arrays search
// let myFriends=["ahmed","mohamed","sayed","alaa","ahmed"]
// console.log(myFriends.indexOf("ahmed",2))//from first to las
// console.log(myFriends.lastIndexOf("ahmed",-2))//from last to first
// console.log(myFriends.includes('ahmed'))
// if(myFriends.includes("ahmed"===-1)){
//        console.log("not found")
// }
// console.log(typeof("ahmed"===-1))
// switch(myFriends.indexOf("ahmed"===-1)){
      
       // default:console.log("not found")}
//last index or index give -1 if the elemnt not found in array
// let myFriends =[10, "sayed","mohamed","90",1000,100,20,"10",-20,-10]
// console.log(myFriends.sort())//sorting array caned be used together
// console.log(myFriends.sort().reverse())//sorting array caned be used together
// console.log(myFriends.reverse())//take from sort and reverse 
// var x=30
// console.log(x)
// var x=40
// console.log(x)
// var x=50
// console.log(x)
// //                     slicing
// let myFriends=["ahmed","sayed","ali","osama","gamal","ameer"]
// // console.log(myFriends.slice())
// // console.log(myFriends.slice(1))
// // console.log(myFriends.slice(1,3))
// // console.log(myFriends.slice(1,-2))//not include the end
// // console.log(myFriends)//delete cound numoer if elements that will be deleted from the array
// //syntax; var.splice(starting index, numper of what u want to remove index,addvalue to array)
// // myFriends.splice(0,0,"samir","samara")//delete cound numoer if elements that will be deleted from the array
// // console.log(myFriends)

// //                     concatinating
// let myNewFriends=["samar","sameh"]
// // let allFriends =myFriends.concat(myNewFriends)
// let allFriends =myFriends.concat(myNewFriends) //+ string from them concat == object
// console.log(typeof(myFriends))
// //                join ===> string with separator that i can select
// console.log(allFriends.join())
// let zero = 0, counter =3 ,my=["ahmed","mazero","elham","osama","gamal","ameer"]
//   my[1],my.push("mazero",'ahmed'),my.unshift("osama")

// console.log(my.[1])

//                                looop
// for(let i =0;i<10;i++){
       // console.log(i)}
       //i = start of loop;end of loop and condetion ; what to do after evrey addetion 
       //          loop array
       //  let myFriends=[2,3,"osa","ahmed",0,4,5,1,,"sayed","ali","amira"]  //let is important so u can add . and choose other commands
       // console.log(myFriends[0])
       // console.log(myFriends[1])
       // console.log(myFriends[2])
       // console.log(myFriends[3])
       // console.log(myFriends[4])
       // for(let i=0;i<5;i++){
       //        console.log(myFriends[i])
       // }//static
       // let myfriends=["osa","ahmed","sayed","ali","amira"]
       // console.log(myfriends[0])
       // console.log(myfriends[1])
       // console.log(myfriends[2])
       // console.log(myfriends[3])
       // console.log(myfriends[4])
       // for(let i=0;i<myFriends.length;i++){
       //        console.log(myFriends[i])}
       // //dynamic
       // let onleyNames=[]
       // for(let i=0;i<myFriends.length;i++){
       //       if(typeof myFriends[i]==="string"){
       //        onleyNames.push(myFriends[i])}
       // }
       // console.log(onleyNames)
        //nested loop
// let products =["kayboard","mouse","pen","pad","monitor"]
// let colors =["red","green","black"]
// let models =["2020","2021"]
// for (let i=0;i<products.length;i++){
//        console.log("#".repeat(15));
//        console.log(`#${products[i]}`);
//        console.log("#".repeat(15));
//        console.log("colors:");
// for (let j=0;j<colors.length;j++)
// console.log(` ${colors[j]}`)
//        console.log("models:")
// for (let k=0;k<models.length;k++)
//        console.log(`  ${models[k]}`)}
//  let products = ["kayboard","mouse",10,20,"pen","pad",30,40,"monitor"]
//  let colros =["red","green","black"]
//  for(let i=0;i<products.length;i++){
//         if(typeof products[i]==="number"){
//                continue
//               }
//               console.log(products[i])
//  }
// mainloop:for (i=0;i<products.length;i++){
//        if(typeof products[i]==="number"){
//               continue;}
//        if( products[i]==="monitor"){
//               break;}
//               console.log(products[i])
       
//        nestedLoop:for(j=0;j<colros.length;j++){
// if(colros[j]==="black"){
//        break mainloop;//or nested
// }
// console.log(` ${colros[j]}`)    }
// }
// ad vanced fooor
// let products = ["kayboard","3","1"]
// let i=0
// for(;;){
//        console.log(products[i])
//        i+=2
//        if(i===products.length){
//               break;
//        }}
//        //  else{break}}
//syntax firts should be the aviable netx that will be readed what ever the order the condition last will be the increment
       
// let products =["keyboard","mouse","pen","pad","monitor","iphone"]
// let colors =["red","green","blue"]
// for(i=0;i<products.length;i++){
//        document.write(`<div>`)
//        document.write(`<h1>[${i+1}] ${products[i]}</h1>`)
//        for(j=0;j<colors.length;j++){
//               document.write(`<p>${colors[j]}</p>`)
//        }
//        document.write(`${colors.join("|")}`)
//        document.write`</div>`}
// for(j=0;j<colors.length;j++){

// }
// loop ===while

// let num1 = 10;
// let num2 = 30;
// let num3 = "30";
//      if cond asssig
// if(parseInt(num3)>num1 && parseInt(num3)===num2){
//        console.log("true")
// }
// if(Number(num3)>num1 && parseInt(num3)===num2){
//        console.log("true")
// }
// if(parseInt(num3)>num1 && parseInt(num3)===num2){
//        console.log("true")
// }
// if(Number(num3)>num1 && num3!=num1 ){
// console.log("100")
// }
// if(parseInt(num3)>num1 && num3==num2 ){
// console.log("100")
// }
// if(num3>num1 && num3!=num1 ){
// console.log("100")
// }
// if(Number(num3)>num1 && num3!=num1 ){
// console.log("100")
// }
// swiftttttt
// let day = " Thursday";
// console.log(day.trim().charAt(0).toUpperCase()+day.trim().slice(1))
// switch(day.trim().charAt(0).toUpperCase()+day.trim().slice(1)){
//        case "Friday":console.log("No Appointments Available")
//        break;
//        case "Saturday":console.log("No Appointments Available")
//        break;
//        case "Sunday":console.log("No Appointments Available")
//        break;
//        case "Monday":console.log("From 10:00 AM To 5:00 PM")
//        break;
//        case "Thursday":console.log("From 10:00 AM To 5:00 PM")
//        break;
//        case "Tuesday":console.log("From 10:00 AM To 6:00 PM")
//        break;
//        case "Wednesday":console.log("From 10:00 AM To 7:00 PM")
//        break;
      
// }
// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;

// Method 1
// console.log(myFriends.slice((myFriends.length-myFriends.length),((myFriends.length+myFriends.length)-num))); // ["Ahmed", "Elham", "Osama"];
// console.log(myFriends.splice(0,3)); // ["Ahmed", "Elham", "Osama"];

// Method 2
// console.log("Your Code Here"); // ["Ahmed", "Elham", "Osama"];
// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;

// Method 1
// console.log(myFriends.slice((myFriends.length-myFriends.length),num)); // ["Ahmed", "Elham", "Osama"]
// console.log(myFriends.splice((myFriends.length-myFriends.length),num)); // ["Ahmed", "Elham", "Osama"]
// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [];

// Write One Single Line Of Code
// finalArr=arrOne.concat(arrTwo).sort().reverse()
// console.log(finalArr)

// console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
// let website = "Go";
// let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

// console.log(words[website.length]); // ZERO
// console.log(words[website.length][0]); // ZERO
// let needle = "JS";
// let haystack = ["PHP", "JS", "Python"];
// haystack.unshift(typeof needle)
// (typeof needle).concat.haystack
// haystack.push(typeof needle)
// console.log(haystack)
// console.log(typeof haystack.includes("PHP"))
// haystack[haystack.length] = typeof needle;
// console.log(haystack);

// let haystack = ["PHP", "JS", "Python"];
// haystack.splice(1, 0, typeof needle); // تضيف "string" في الموضع الثاني
// console.log(haystack);   //   بتخليك تشوف عايز تضيفها فين



// if( haystack.includes("string")===true){
//        console.log("found")
// }
// let arr1 = ["A", "C", "X"];
// arr1=arr1.toString()
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = [arr2.splice(2,2,arr1)]; 

// console.log(allArrs)
// let allArrs = arr2.splice(,,`${arr1.slice((arr1.indexOf("x")),(arr1.length))}`); 
// arr1.splice(2,,arr1)
//x
// arr1.indexOf("X")
// arr1.slice((arr1.indexOf("x")),(arr1.length))
//f,y
// arr2.slice(arr2.indexOf("F"),((arr2.length)+(arr2.indexOf("E"))))

// console.log((arr1.slice(arr1.indexOf("X"),(arr1.length))))
// console.log(arr1.length); // fxy

// console.log(allArrs.splice(1,0,"X")); // fxy
// console.log(arr2); // fxy
// console.log(arr1.); // fxy
// Your Code Here
// let start = 10;
// let end = 100;
// let exclude = 40;

// // Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100
// for(i=(start);i<=(end);i+=start){
//        if(i===exclude){
//               continue
//        }
//        console.log(i)

// }
// let start = 1;
// let end = 6;
// let breaker = 2;
// for(i=start;i<=end;i+=start){
//        console.log(i)
//        for(j=breaker;j<end;j+=breaker){
//               console.log(`--${j}`)
//        }
// }
// let index = 10;
// let jump = 2;

// let i=index
// for (;;) {
//        if(i<=jump){
//               break}
              
//               console.log(i)
//               i-=jump
//   // Write Your Code Here
// }

// // Output
// 10
// 8
// 6
// 4
// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";
// for(i=letter.length;i<friends.length;i++){
//        console.log(`"${i} =>${friends[i]}" `)
// }
// let start = 0;
// let swappedName = "elZerO";
// let gg =[]

       

// for(i=start;i<swappedName.length;i++){
//        if(swappedName.charAt(i)===swappedName[swappedName.indexOf("Z")]||swappedName.charAt(i)===swappedName.indexOf("O")){
//               gg.push(swappedName.charAt(i))
//        }
//        else{gg.push(swappedName.charAt(i))}
       
       
// }
// let kk=gg.toString()
// console.log(kk)
// let swappedName = "elZerO";
// let result = "";

// // استخدام حلقة `for` لتبديل حالة الحروف
// for (let i = swappedName.length - swappedName.length; i < swappedName.length; i++) {
//     let char = swappedName[i];
//     if (char === char.toUpperCase()) {
//        result += char.toLowerCase();
//     } else {
//         result += char.toUpperCase();
//     }
// }

// console.log(result); // "ELzERo"

// // functiosssssssssssssssssssssssss
// function sayHello(){
//        console.log(`say hello`)
// }
// sayHello()
// //syntax function name of function (variable){
// // what wil fn do Ex: console .log}
// //name of fn (argument what variable equal)
// function s(userName,age){
//        if(age<20){
//               console.log("app is not suitable for ur age")
//        }
//        else{console.log(`hello ${userName} your age is ${age} `)}
// }
// s("hazem",25)
// function gen(start,end,exclude){
//        for(let i=start;i<=end;i++){
//        if (i===exclude){
//               continue
//        }       
//        console.log(i)
              
//        }

// }
// gen(1982,2021,2020)
       // function calc (num1,num2){
       //        return num1+num2
       // }
       // calc(10,20)
       // console.log(calc(10,20))
       // function gen(start,end){
       //        for(i=start;i<end;i++){
       //               console.log(i)
       //               if(i===15){
       //                      return`interrapting`;
       //               }
       //        }
       // }
       // gen(10,20)
       //fun default value  

       // function say(userName="unKnowen",age="unKnowen"){
       //        // age=age||"unKnowen"
       //        // if(age===undefined){
       //        //        age="unKnowen"
       //        // }
       //        return console.log(console.log(`hello ${userName} your age is ${age}`)) 
       // }
       // say()
                
       // function clac(num1,num2,num3){
       //        return console.log(num1+num2+num3)
       // }
       // clac()
       //for un limted arguments 
       // function calc2(...numbers){//..numbers must be las paramter and its used onley one
       //        let result=0
       //        for(i=0;i<numbers.length;i++){
       //        result+=numbers[i]
       //        }
       //        return console.log(`final result is ${result}`)
       // }
       // calc2(10,20,30,40,50,60,70,80,90,100)
//        let password,userName;
//        userName=document.getElementById("textinput");
//        password=document.getElementById("password").value;
// document.getElementById("startbut").onclick = function  () {
//               document.write("Welcome back");}
//falsy truecy pattern 
//age = age||"knonen"
//let a= ["elzero","ahmeed","sameh","galal"]
//console.log(a);
// let n1 =10,n2=20;
// console.log(n1 +""+n2)
// console.log(`${n1} + ${n2}`)
// console.log(` ${typeof n1} + ${typeof n2}`)
// console.log(n1+"\n"+n2)
// const a=-Number.MIN_SAFE_INTEGER;
// console.log(a.toString().length);
// let num = 10,a=Number.isInteger(num)+Number.isInteger(num);
// console.log(a); // 2
// let flt = 10.4;
// let a=Math.trunc(Math.abs((Math.random()*10)-5))

// console.log(a); // 10
// const a="ahmed"

// console.log()
// tring Challenge
//   All Solutions Must Be In One Chain
//   You Can Use Concatenate
// */


// let a = 20;
// let b = 30;
// let c = 10;

// console.log(a == b && a == c || a < b); // true
// console.log(a < b && a > c); // true
// console.log(!(a > b) && !(a == b) && !(a < c) && !(a == c)); // true
/*
  If Condition Challenge
*/

// let a = 10;
//              a<10?console.log("good"): a >= 10 && a <= 40?console.log("10 To 40") 
// : (a > 40)?console.log("> 40"):console.log("Unknown");


// Write Previous Condition With Ternary If Syntax

// let st = "Elzero Web School";

// if ( (st.length*2).toString()=== "34") {
//   console.log("Good");
// }

// // W Position May Change
// if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {
//   console.log("Good");
// }

// if ( !== "string") {
//   console.log("Good");
// }
// console.log(st.length)
// if (typeof(1) === "number") {
//   console.log("Good");
// }
// console.log()
// if (st.slice(0,6).repeat(2) === "ElzeroElzero") {
//   console.log("Good");
// }
// Test Case 1

// let num = 20; // "009"
// if (num < 10) console.log("00"+num)
// // Test Case 2
// let num = 20; // "020"

// // Test Case 3
// let num = 110; // "110"
/*
  Array Challenge
*/
// myFriends.at
// myFriends.concat
// myFriends.includes
// myFriends.indexOf
// myFriends.join
// myFriends.pop
// myFriends.push
// myFriends.reverse
// myFriends.sort
// myFriends.unshift
// myFriends.shift
// myFriends.splice
// myFriends.slice
// myFriends.toString

// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;

// // Method 1
// // console.log(myFriends.slice(num-num,num)); // ["Ahmed", "Elham", "Osama"];

// // Method 2
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// friends=friends      
// console.log(friends); // ["Eman", "Osama"]
// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [];

// finalArr=arrOne.concat(arrTwo[arrTwo.length- +true]).reverse().concat(arrTwo[arrTwo.length-arrTwo.length],arrTwo[+true])
// finalArr=arrOne.concat(arrTwo).sort().reverse()
// finalArr=(arrTwo.slice(2).concat(arrOne.reverse())).concat((arrTwo.slice(0,2)).reverse())

// console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
// console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
// let website = "Go";
// let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

// // console.log(words[(words.length)-(website.indexOf('o'))][0].slice((words.length)-(website.indexOf('o'))).toUpperCase()); // ZERO
// // console.log(words.reverse()[0][0].slice(website.length).toUpperCase()); // ZERO
// let needle = "JS";
// let haystack = ["PHP", "JS", "Python"];

// // Write 3 Solutions
// let needle = "JS";
// let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
// if(haystack.includes(needle)){
//        console.log("found")
// }
// if(haystack.indexOf(needle)!=-1){
//        console.log("found")
// }
// if(haystack.lastIndexOf(needle)!=-1){
//        console.log("found")
// }
// for(let i=0;i<haystack.length;i++){
//        if(needle===haystack[i]){
//               console.log("found")
//               break;
//        }
//        else{console.log("omak 7eloah")}
// }
// let arr1 = ["A", "C", "X"];
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = [];
// allArrs=

// console.log(allArrs); // fxy
/*
  Loop Challenge
*/


// let a,b,c,d;
// function checkStatus(...data) {
//     for(let i=0;i<data.length;i++){
//        if(typeof data[i]=="string"){a=data[i]}
//        if(typeof data[i]=="number"){b=data[i]}
//        if(data[i]==true){c="avilable"}else{c="not"}
//     }

//     console.log(`Hello ${a}, Your Age Is ${b}, You Are ${c} For Hire`)
//        }
     
//      checkStatus("Osama", 38, false); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
//      checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
//      checkStatus("Osama", true, 38); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
//      checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
//      checkStatus(38, true, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
//      checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]
// let r=["osama","mohamed","ali"]

// let names = function (...rest) {
//        for(let i=0;i<rest.length;i++){
//               rest[i]=`[${rest[i]}]`
//        }
//        return `//      // String ${rest.join(", ")} => Done !`;
//      };
     
//      console.log(names("Osama", "Mohamed", "Ali", "Ibrahim","sanaa","hoda","wafaa"));
// //      // String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

// function getDetails(zName, zAge, zCountry) {
//   function namePattern(zName) {
//    zName=zName.split(" ");
//    Firstnaem=zName[0]
//    secoundName=` ${zName[1][0]}.`
//    zName=Firstnaem.concat(secoundName,)
//    return zName
//   }
//   function ageWithMessage(zAge) {
//     zAge=parseInt(zAge)
//     return `${zAge} is my age`
//   }
//   function countryTwoLetters(zCountry) {
// return " you live in"+zCountry.slice(0,2).toUpperCase()
//   }
//   function fullDetails() {
//  return "hello "+namePattern(zName)+","+ageWithMessage(zAge)+countryTwoLetters(zCountry)
//   }
//   return fullDetails(); // Do Not Edit This
// }

// console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// // Hello Osama M., Your Age Is 38, You Live In EG

// console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// // Hello Ahmed A., Your Age Is 32, You Live In SY




// function urlCreate(protocol, web, tld) {
//   return `${protocol}://www.${web}.${tld}`;
// }
// let urlCreate= (protocol, web, tld) =>  `${protocol}://www.${web}.${tld}`;

// console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
// function add(x) {
//   return function(y) {
//     return x + y;
//   };
// }

// const add2 = add(2);
// console.log(add2(5)) // Returns a function that adds 2 to its argument
// // console.log(add2(3)); // Output: 5
// let checker = (zName) =>{return (status) => { return  (salary) =>{return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;;};}}
// const chk =checker("osama")("Available")
// console.log(chk("3500"))
// console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
// console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
//  let specialMix= (...data)=>{
//   let a=0;
//  for(let i=0;i<data.length;i++){
//    if(isNaN(parseInt(data[i]))){continue}else{a+=parseInt(data[i])}
//  }
//  return a===0?`all is string`:a;
// }
// // console.log()
// console.log(specialMix(10, 20, 30)); // 60
// console.log(specialMix("10Test", "Testing", "20Cool")); // 30
// console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
// console.log(specialMix("Test", "Cool", "Test")); // All Is Strings


// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
// mix=mix.map((ele)=>{return isNaN(ele)?ele:""}).reduce((acc,ele)=>{return acc+ele})
// console.log(mix)
// // Elzero
// let myString = "Elllzzzzzzzeroo";
// myString=myString.split("").filter((ele,index,array)=>{return ele!=array[index-1]}).join("")
// console.log(myString)
// // Elzero
// let myArray = ["E", "l", "z", ["e", "r"], "o"];

// // Elzero
// myArray=myArray.reduce((acc,ele)=>{return Array.isArray(ele)?acc+ele.join(""): acc+ele})
// console.log(myArray)
// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
// numsAndStrings=numsAndStrings.filter((ele)=>{return !isNaN(ele)}).map(ele=>-ele)
// console.log(numsAndStrings)
// [-1, -10, 10, 20, -5, -3]
// let nums = [2, 12, 11, 5, 10, 1, 99];
// nums=nums.reduce((acc,ele,index,a)=>{
// return ele%2!=0?acc+ele:acc*ele;
// },1)
// console.log(nums)
// // 500
/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// // let solution = myString.split(",").join("").split("_").join("").split("").filter(ele=>isNaN(ele)).map((ele,index,arr)=>{return ele!=arr[index-1]?ele:""}).reduce;

// myString=myString.split(",").filter(ele=>isNaN(ele)).map((ele)=>{return ele=="_"?"":ele}).reduce((acc,ele)=>{return acc+ele})
// console.log(myString); // Elzero Web School
// Create Your Object Here

// let member={}
// member.name="Elzero"
// member.age=38
// member["country"]="Egypt"
// member.fullDetails= _=>`My Name Is ${member.name}, My Age Is ${member.age}  , I Live in ${member["country"]}
// `

// console.log(member.name); // Elzero
// console.log(member.age); // 38
// console.log(member.country); // Egypt
// console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

// // Method One
// objMethodOne={
//   "property":"Method One"
// }
// console.log(objMethodOne.property); // "Method One"

// // Method Two
// objMethodTwo=new Object({property:"Methode Two"})
// console.log(objMethodTwo.property); // "Method Two"

// // Method Three
// objMethodThree=Object.create({property:"Method Three"})

// console.log(objMethodThree.property); // "Method Three"

// // Method Four
// objMethodFour=Object.assign(objMethodTwo)
// objMethodFour.property="Method Four"
// console.log(objMethodFour.property); // "Method Four"

// let a = 1;

// let threeNums = {
//   b: 2,
//   c: 3,
//   d: 4,
// };

// let twoNums = {
//   e: 5,
//   f: 6,
// };

// // Create Your Object Here in One Line
// const finalObject=Object.assign(threeNums,twoNums)
// finalObject.a=a
// console.log(finalObject);
// console.log(finalObject.b);
// console.log(finalObject.c);
// console.log(finalObject.d);
// console.log(finalObject.e);

// /*
//   a: 1
//   b: 2
//   c: 3
//   d: 4
//   e: 5
//   f: 6
// */
// The Object To Work With
// let myFavGames = {
//   "Trinity Universe": {
//     publisher: "NIS America",
//     price: 40,
//   },
//   "Titan Quest": {
//     publisher: "THQ",
//     bestThree: {
//       one: "Immortal Throne",
//       two: "Ragnarök",
//       three: "Atlantis",
//     },
//     price: 50,
//   },
//   YS: {
//     publisher: "Falcom",
//     bestThree: {
//       one: "Oath in Felghana",
//       two: "Ark Of Napishtim",
//       three: "origin",
//     },
//     price: 40,
//   },
// };

// // Code One => How To Get Object Length ?
// let objectLength = Object.keys(myFavGames).length;
// for (let i = 0; i < objectLength; i++) {
//     console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
//     console.log(`The Publisher Is ${myFavGames[Object.keys(myFavGames)[i]].publisher}`);
//     console.log(`The Price Is ${myFavGames[Object.keys(myFavGames)[i]].price}`);
  
//     // Check If Nested Object Has Property (bestThree)
//     if (myFavGames[Object.keys(myFavGames)[i]].bestThree) {
//         console.log("- Game Has Releases");
//         console.log(`First => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.one}`);
//         console.log(`Second => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.two}`);
//         console.log(`Third => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.three}`);
//       }
//       console.log("#".repeat(20));
// }
//   //  console.log(Object.keys(myFavGames)[1])
    
//     // Ouput
    
//     "The Game Name Is Trinity Universe"
//     "The Publisher Is NIS America"
//     "The Price Is 40"
//     "####################"
//     "The Game Name Is Titan Quest"
//     "The Publisher Is THQ"
//     "The Price Is 50"
//     "- Game Has Releases"
//     "First => Immortal Throne"
//     "Second => Ragnarök"
//     "Third => Atlantis"
//     "####################"
// "The Game Name Is YS"
// "The Publisher Is Falcom"
// "The Price Is 40"
// "- Game Has Releases"
// "First => Oath in Felghana"
// "Second => Ark Of Napishtim"
// "Third => origin"
// "####################"
// ====================================
// dom selectors getting and setting
// ====================================
// document.getElementById("")
// document.getElementsByClassName(".")[]//for calss
// document.getElementsByName("")[]//returns arrayname attrebuits
// document.getElementsByTagName("")[]//<p> s return array 
// document.querySelector("")//selector . # string for tags and first element ["[name='value']"]
// document.querySelector("ul li") selecting element inside the element

// document.querySelectorAll("ul li")//returns all li inside al ul  

// document.querySelectorAll("")[]//returns an array 
// document.title
// document.body
// document.head
// document.images[]
// document.forms[].(attrebuts ex:name id class....).value//u can accecs to atterbuits and change its value also if its not found it will creat new attrebuts if its found it will over ride
// document.links[].href
// ==============
// changing atterbiuts dirctly
// ==============
// document.querySelector(".js").innerHTML//return html
// document.querySelector(".js").textContent//return pure text
// document.images[0].src="https://"//if its not found it will creat new attrebuts if its found it will over ride
// document.images[0].alt=""
// document.images[0].title="" 
// document.images[0].id="#" 
// document.images[0].className="img" 
// ==================
// changing atteributs with get atterbiut and set
// ==================
// document.querySelector(".js").getAttribute("class")//reading (disolaying) 
// document.querySelector("form").setAttribute("class",value)//readung creating and setiing atterbuits value
// ====================
//check Attributes
// ====================
// document.querySelector("p").attributes//showing all atteributs in this element
// document.querySelector("p").hasAttribute()?document.getElementsByTagName("p")[0].removeAttribute():// retutn true or false checking certien attervuit
// document.getElementsByTagName("p")[0].hasAttributes()//true or false have in general any atterbiuts or no
// ===========================
// DOM Creat Elemnts
// ===========================
// const myElement = document.createElement("div")
// const myAtter = document.createAttribute("class")//for custome atteribut that not found in document
// const myText = document.createTextNode("Product One")

// // myElement.className="product"//direct method
// myElement.setAttributeNode(myAtter)//custome method
// myElement.setAttribute("class","my class")
// myElement.appendChild(myText)
// // document.body.appendChild(myElement)
// document.body.appendChild(myElement)
// console.log(myElement)
// ====================
// children
// // ====================
// myElement =document.querySelector("div").children//onley elemnts in array
// myElement =document.querySelector("div").firstElementChild//only first elemnt in array
// myElement =document.querySelector("div").lastElementChild//only last elemnt in array
// myElement =document.querySelector("div").childNodes//all elemnts in array includes the text and spaces in array
// myElement =document.querySelector("div").firstChild//first elemnt includes the text and spaces in array
// myElement =document.querySelector("div").lastChild//first elemnt  includes the text and spaces in array
// ===================
// eventsssssss
// ===================
// maybe add inside the html tag as an attribut onload\onclick="js"or by selecting element
// document.querySelector//getelemntbyid...etc
// document.getElementById("#").onclick = function(){}
// document.getElementById("#").oncontextmenu = function(){}//right click
// document.getElementById("#").onmouseenter = function(){}// when mouse hover
// document.getElementById("#").onmouseleave = function(){}// when mouse hover and leave
// document.getElementById("#").onscroll = function(){}// scroll
// document.getElementById("#").onfocus = function(){}// 
// document.getElementById("#").onblur = function(){}//
// document.getElementById("#").onsubmit = function(){}//
// window.onresize = function(){}// resizing the window
//.focus
// .blur
// .click

// #######some practice 
// document.links[0].onclick=function(event){
//   event.preventDefault();//preventing default action
// }
// document.forms[0].onsubmit = function(event){
//   if(!true){event.preventDefault()}}
// =====================
// event simulation
// =====================
// window.onload=
// ====================
// classlist
// ====================
// element.classlest.leangth
// element.classlest.item("0") firsst word in class atterebiuts
// element.classlest.contain("") true or false
// element.classlest.toggle add if not found ,remove if found
// element.classlest.add
// element.classlest.remove()
// ===============
// deal with elemnt dom
// ===============
// Element.before(string or node) add before the element
// Element.after(string or node) add after the element
// Element.append(string or node) add in the end of the elemnt
// Element.preappend(string or node) add in the begaining  ofthe element
//element.remove() 
// ========================
// traversing inside the dom
// ========================
// document.querySelector(".one").nextSibling // next node 
// document.querySelector(".one").previousSibling // next node 
// document.querySelector(".one").nextElementSibling // next element not node not space not comment 
// document.querySelector(".one").previousElementSibling // previous element not node not space not comment 
// document.querySelector(".one").parentElement // previous element not node not space not comment 
// .lastChild
// .firstchild
//==========================
// cloning
//==========================
// cloneNode(trueor fals)//falsse coping without inside elements  true vicverse
// =============================
// addEventListener
// =============================
// element.addEventListener("click",()=>{action})
// document.addEventListener("click",(e)=>{
//   e.target
//   console.log(e.target)
// })
// ===================
// bom
// ===================
// window.console.log()
// this.console.log()
// console.log
// alert("ijsadjas")//returns only true
// confirm()//true or flase
// prompt()//typeing on console ok "" cancel null
// ==========================
// setTimeout()&&clearTimeout
// ==========================
// setTimeout(() => {}, timeout,arguments,arguments);
// setTimeout(test,2000,"osama",37)
// function test(user,age) {}
//  let vari=setTimeout(()=>{},3000)//handler for clearing time out
//  clearTimeout(vari)//or handler numper 1
// ======================
// setInterval()&&clearInterval
// ======================
// setInterval(() => {}, interval);
// clearInterval(handler)//handler numoer
// ====================
// location object
// ====================
// location.href//of window 127.0.0.1:5500
// location.href=""//setting
// location.href="/#id of any element"
// location.host//with port
// location.hostname="google.com"//will change only the host name without the resr
// location.protocol
// location.hash
// location.reload() reload
// location.replace("https://")//remove the current page from the history
// location.assign()//save entery in the history
// ==========================
// open() close() 
// =============================
// window.open("url","windowname title onlyor _blank or _value and self where to open","feature")//
// _blank: Opens the URL in a new tab or window.
// _self: Opens the URL in the current tab or window (similar to window.location).
// _parent: Loads the URL in the parent frame.
// _top: Loads the URL in the top-level frame.
//popupWindow width=800,height=600 دول الي بيحددوا

// : Sets the dimensions of the new window.
// menubar=yes/no: Shows or hides the menu bar.
// toolbar=yes/no: Shows or hides the toolbar.
// status=yes/no: Shows or hides the status bar.
// resizable=yes/no: Allows or disallows resizing of the window.
// scrollbars=yes/no: Enables or disables scrollbars.
// location=yes/no: Shows or hides the address bar.
// 4-true of false//leave in history or not

// window.close()//and only that opend with open()
// =====================
// window.history
// =====================
// history.length//includs 
// history.back()//back
// history.forward()//
// history.go(0)//reload 1 forward -1.... back
// =====================
// window.print()//print the page
// window.stop()//
// let mynewwindow = window.open("https://google.com","","width=500 hight=500")
// window.focus(mynewwindow)


// window.scrollTo(500,200,option) //x=500 افقي y عمودي
// window.scrollBy({
//left:500, top:200, behavior:"smooth"
//                      })
 //scroll+= x,y and options
// =====================
// window.scrollX ===pageXOffset
// window.scrollY pageYOffset
// window.onscroll
//========================
// localStorage accecs storage object
//========================
// window.localStorage.setItem("key","value")
// window.localStorage.getItem("key")
// window.localStorage.key="value"
// window.localStorage["key"]="value"
// document.body.style=window.localStorage["key"]
// document.body.style=window.localStorage.key//or getitem ...etc
// window.localStorage.removeItem("key")//only selected
// window.localStorage.clear()//remove all key values
// window.localStorage.key(0)//return the key of that index
//removed on privte browsing

//practiceing
// =========================
// document.addEventListener("click",(e)=>{e.currentTarget.dataset})//returning stored data in storage object

// ==================
// session storage
// ==================
//new tap new session 
//duplicate and reload keep the same session
// window.sessionStorage.setItem("key","value") same as localstorage
//===========
//practice
//===========
// if (window.localStorage.getItem("input")){
//   document.querySelector(".input").value=window.localStorage.getItem("input")
// }
// document.querySelector(".input").onblur=()=>{
//   window.sessionStorage.setItem("input",this.value)  
// }
// =============
// destructuring 
// =============
// let arr=[1,2,3,4]
// let [a,b,c,d]=arr
// a=1,b=2,..
//[a,,,]=arr only a value u want 
//[a,,,s="ajsiodjadsi"]=adding default 
//nested array let arr =[1,2,3,4,[1,2,["gamal"]]]
//let[a,,,,[,,[b]]]=arr//a=1,d=gamal
//==========
// object destructuring 
// //==========
// let obj = {
//   a:"apdo",
//   b:"boda",
//   c:23
// }
// obj.a=// apdo
// let {a,b,c}=obj//a=apdo as avriable ...
//let a,b,c
//({a,b,c}=obj) prenthsis for already decleared
// ================
// nested objects destructuring
// ================
// let obj = {
//   firstname:"apdo",
// lastname:"mohamed",
// age:"23",
// address:{
//   october:"6th",
// imbaba:"luxor street"
// }
// }
// const {firstname:f,age:a,address:{october}}=obj //destruction for october only
// const {firstname:f,age:a,address:{october,imbaba}}=obj //destruction for both
// console.log(october)//6th 
//for nested object only 
// const{october:mad,imbaba:nd}=obj.address
//====================
//set data type 
//====================
// let vari = new Set() // making an empty object thac hold only unique data
// let arr = [1,1,1,2,3]
// let vari = new Set(arr) // 
// let vari = new Set([1,1,1,2,3]) // 
// let vari = new Set().add(1) // 
// vari.add(1).add(3)//and so on
//vari.size ==length
//vari.delete(value u want to delet and returns true if this elemnt is found )
// vari.clear() //clear all elements indside
//vari.has("element")//if found true like include
// ================
//week set
// ================
//set.keys()===set.value()
//iterator.next().value
//weak set 
//type of data
//let  myws = object type of data new weakset({}or obj)
//no size property
//no next or key or value
//no for each 
//only store no accecable datagarbage value
//====================
//map data type
//====================
// let obj = {} // has default keys using prototype
// let obj = Object.create(null) // no properties object
// obj = new Map([iterable as akey value pair [10,"num"],[false,"boolean"]])//itarable key and value not contain default key
//obj.set(key,value)//key can be string or func or obj in normal obj it will over ride
//obj.get(key)//value
// map size map can be looped on dirctly map is better performance in data r an w
//mymap.delet  clear() has (key)
// ====================
// Array.from("asdasdasd123",(e) => return value)//any itirable value
// ====================
//let myset = new set(arra.from) // to make unique itirable
//array.from(myset) to return it as array
// functio ar(){  return arguments  }
// functio ar(){  return array.from(arguments)  }
//ar(ittrable)....array from it
//console.log([...new set(itrable value)]) uniq value in array
//===================
//array.copywithin
//===================
// let arr = [10,20,30,40,50,"a","b"]
// arr.copyWithin(target to copy into (index),index to copy to) it can take negeative value representing the end
// ===================
// arr.some()
// ===================
// arr.some()//returns only true or false  when the  condition came true

//===========
//regular expression
//===========
// let regex = /Elzero/i g;//in sensetive //g global as an array null if not found
// new RegExp("pattern",modifiers)
// mystring.match(regex)

// let tld = "com Net Org Info"
// let tldRe = /(org|info|io)/ig; with g all results
// tld.match(tldRe)//org and its index
// ================
// Ranges
// ================
// let num = "1234567890"
// let numRegx = /[0-9]/;//first numper in range g all numpers in range
// let notnumRegx = /[^0-2]/g; not in range
// dot (.) matches any character that included
//\w small charcters only
//\W capital special charcters only
// /\w@\w.(com|net|org)/g email validation
//\b matching the begaining or  or spam\b end of aword or (\b |  \b)
// .test() true or false
//=====================
//Quantifiers
//=====================
// /\w+@\w+.\w+/ig one or more wowrds
//  / 0\d*0/ //في ارقام او مفيشzero or more
// (https?://)? found with s or not  (www.)?\w+.\w+
// /s\d{3}s///only three numpers inside
// /s\d{4,5}s/// from 4to 5 numpers inside
// /s\d{4,}s/// at least 4
//ing$ => end with certin pattern
// /^we or\sor\w/ => start with 
// /\d\w{5}(?=z)///?=followed by z 
// not followed by something /\d\w{8}?!z/ not followed 
// Text,replace("what u wantto replace","value ") only first value
// Text.replaceAll("value","replacevalue")//will replace all values that contain this value

// m for multi line

//=================
//objects
//=================
//function constractor
// function Name (id,userName,salary){
//   this.i=id
//   this.u=userName
//   this.s=salary+1000
// }
// let obj1 = new Name(100,"sayed",7000)
// obj1.i
// new syntax

// class user {
//   // const l = 0 // not acceable by user not static
//   // static //acceable only by user
//   constructor(id,userName,salary){
//     this.i=id
//     this.userName=userName|| "UnKnowen"
//     this.salary=salary+1000 <6000 ? salary +500 :salary
//     this.msg = function () {
//       return `hello ${this.userName}` //proberty
//     }
//   }
//   updateNAme(newname){
//     this.userName=newname
//   }
//   writeMsg() {return `hello ${this.userName}`}//method
// }
// let user1 = new user(100,"zero",7000)
// user1 instanceof user //true
// user1.constructor === user //true
// let strOne = "elzero"
// let strTwo = new String("Elzero ")
// // static means thats only return to class 
// //inheritance
// class admin extends user {
//   super(id,userName);//will inherit this methods
// }
// #e//privte proberty only accecable by its class
// Object.prototype.anyprobertor method  adding this to prototype of any obj
//=================
// object meta data
//=================
// Object.defineProperty(object,"property key",{
//   //descreptor its default false
//   // writable:true, //changable false not
//   // enumerable:false, not readabl
//   // configurable,// deletion 
//   value
// })

// =======================
//looping throw an object
// =======================
// for(let prop in obj){
//   // prop =key  obj[prop]=value
// }
// Object.defineProperties()
// Object.defineProperty(myObj,"score",{
//   writable:false})
//   myObj.score = 500;
//   Object.defineProperties(myObj,{
//     id:{},
//     country:{}
//   })
//===================
// date and time
//===================
// let datenow = new Date() //current date and time
// let datenow = new Date(any date) //current date and time
// let datenow = new Date().gettime ms form time start //current date and time
// let datenow = new Date().getdate day() of the month form time start //current date and time
// let datenow = new Date().getdate day() of the month form time start //current date and time
// let datenow = new Date().getFullYear() //current date and time
// let datenow = new Date().getmonth() index +1 //current date and time
// let datenow = new Date().getDay() day of the weak index +1  //current date and time
//hours minutes secounds

//Date.now from 1/1/1970 unix time
//==================
// set date and time
//==================
// console.log(Date())
// let datenow = new Date()
// datenow.setTime()//time in ms from the begainning of the unix time
// datenow.setDate()//day of month from start unix time index
// datenow.setFullYear()//year ,mont opt 0 ,day opt
// datenow.setMonth
// datenow.setHours
// datenow.s
// ==============
// json
// ==============
/*
  What Is JSON ?
  - JavaScript Object Notation
  - Format For Sharing Data Between Server And Client
  - JSON Derived From JavaScript
  - Alternative To XML
  - File Extension Is .json

  Why JSON ?
  - Easy To Use And Read
  - Used By Most Programming Languages And Its Frameworks
  - You Can Convert JSON Object To JS Object And Vice Versa

  JSON vs XML
  ===================================================
  = Text Based Format      = Markup Language        =
  = Lightweight            = Heavier                =
  = Does Not Use Tags      = Using Tags             =
  = Shorter                = Not Short              =
  = Can Use Arrays         = Cannot Use Arrays      =
  = Not Support Comments   = Support Comments       =
  ===================================================
*/

/*
  JSON Syntax
  - Data Added Inside Curly Braces {  }
  - Data Added With Key : Value
  - Key Should Be String Wrapped In Double Quotes
  - Data Separated By Comma
  - Square Brackets [] For Arrays
  - Curly Braces {} For Objects

  Available Data Types
  - String
  - Number
  - Object
  - Array
  - Boolean Values
  - null

  public api vs privte api (secret key required) or showed on specific domain 

https://api.github.com/users/elzerowebschool

https://api.github.com/users/elzerowebschool
*/

/*
  JSON
  - JSON.parse => Convert Text Data To JS Object
  - JSON.stringify => Convert JS Object To JSON


/*
  To Understand Ajax, Fetch, Promises

  Asynchronous vs Synchronous Programming
  - Meaning

  Synchronous
  - Operations Runs in Sequence
  - Each Operation Must Wait For The Previous One To Complete
  - Story From Real Life

  Asynchronous
  - Operations Runs In Parallel
  - This Means That An Operation Can Occur while Another One Is Still Being Processed
  - Story From Real Life

  - Facebook As Example
  - Simulation

  Search
  - JavaScript Is A Single-Threaded
  - Multi Threaded Languages
*/

// Synchronous

// console.log("1");
// console.log("2");
// window.alert("Operation");
// console.log("3");

// Asynchronous
// console.log("1");
// console.log("2"); 
// setTimeout(() => console.log("Operation"), 3000);
// console.log("3");

/* 
=======
single thread lang
=======


The event loop is a core concept in JavaScript, enabling it to handle asynchronous operations despite being a single-threaded language. Let’s break it down:

Key Components of the JavaScript Event Loop
Call Stack:

A stack data structure that keeps track of function calls.
When a function is invoked, it is pushed onto the stack. When execution completes, it’s popped off.
Web APIs / Background Tasks:

Certain operations (e.g., setTimeout, HTTP requests, DOM events) are handled by the browser or Node.js runtime outside the main thread. These APIs manage the operation asynchronously.
Task Queue:

A queue that holds tasks (callbacks, event listeners) that are ready to execute.
Tasks from APIs like setTimeout or event listeners are pushed here once completed.
Event Loop:

Continuously checks the call stack and task queue.
If the stack is empty, it takes the first task from the queue and pushes it onto the stack for execution.
Flow of the Event Loop
A function is called and added to the call stack.
If the function includes an asynchronous operation (e.g., setTimeout, HTTP request), the operation is handed off to the Web APIs, and the function is popped off the stack.
Once the asynchronous operation completes, its callback is added to the task queue.
The event loop ensures the stack is empty before moving tasks from the queue into the stack for execution.






To Understand Ajax, Fetch, Promises

  Call Stack || Stack Trace
  -- JavaScript Engine Uses A Call Stack To Manage Execution Contexts
  -- Mechanism To Make The Interpreter Track Your Calls
  -- When Function Called It Added To The Stack
  -- When Function Executed It Removed From The Stack
  -- After Function Is Finished Executing The Interpreter Continue From The Last Point
  -- Work Using LIFO Principle => Last In First Out
  -- Code Execution Is Synchronous.
  -- Call Stack Detect Web API Methods And Leave It To The Browser To Handle It

  Web API
  -- Methods Available From The Environment => Browser


  setTimeout(() => {
  console.log("Web API");
}, 0);

function one() {
  console.log("One");
}
function two() {
  one();
  console.log("Two");
}
function three() {
  two();
  console.log("Three");
}

three(); 
one two three four first call stack finshed then call back queuw coming from web api 



AJAX
  - Asynchronous JavaScript And XML
  - Approach To Use Many Technologies Together [HTML, CSS, Js, DOM]
  - It Use "XMLHttpRequest" Object To Interact With The Server
  - You Can Fetch Data Or Send Data Without Page Refresh
====================
syntax
====================
let req = new XMLHttpRequest();
console.log(req);

Ajax object property of ready state:-

  - Ready State => Status Of The Request
  [0] Request Not Initialized
  [1] Server Connection Established
  [2] Request Received
  [3] Processing Request
  [4] Request Is Finished And Response Is Ready
  - Status
  [200] Response Is Successful
  [404] Not Found

  =========================
  syntax
  =========================
let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos", async defaul true and user name and pass for authentication);
myRequest.send();
console.log(myRequest);

myRequest.onreadystatechange = function () {
  // console.log(myRequest.readyState);
  // console.log(myRequest.status);
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
  }
};

========================
promsies
========================

 const myPromise = new Promise(function (function resolveFunction,function rejectFunction)  {
//   let connect = false;//or true
//   if (connect) {
//     resolveFunction(some thing u want to return);
//   } else {
//     rejectFunction(Error("Connection Failed"));
//   }
// }).then(  
function in case of fullfiling,
function in case of fullfiling
)
incase of not fulfiling
.catch(()={})
any way
finally()

//   



/*
  Promise   And   XHR


const getData = (apiLink) => {
  return new Promise((resolve, reject) => {
    let myRequest = new XMLHttpRequest();
    myRequest.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(Error("No Data Found"));
      }
    };

    myRequest.open("GET", apiLink);
    myRequest.send();
  });
};

getData("https://api.github.com/users/elzerowebschool/repos")
  .then((result) => {
    result.length = 10;
    return result;
  })
  .then((result) => console.log(result[0].name))
  .catch((rej) => console.log(rej));


 Fetch API
  - Return A Representation Of the Entire HTTP Response
*/

// fetch("https://api.github.com/users/elzerowebschool/repos")
//   .then((result) => {
//     console.log(result);
//     let myData = result.json();
//     console.log(myData);
//     return myData;
//   })
//   .then((full) => {
//     full.length = 10;
//     return full;
//   })
//   .then((ten) => {
//     console.log(ten[0].name);
//   });

// const getData = (apiLink) => {
//   return new Promise((resolve, reject) => {
//     let myRequest = new XMLHttpRequest();
//     myRequest.onload = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         resolve(JSON.parse(this.responseText));
//       } else {
//         reject(Error("No Data Found"));
//       }
//     };

//     myRequest.open("GET", apiLink);
//     myRequest.send();
//   });
// };

// getData("https://api.github.com/users/elzerowebschool/repos")
//   .then((result) => {
//     result.length = 10;
//     return result;
//   })
//   .then((result) => console.log(result[0].name))
//   .catch((rej) => console.log(rej));
/*
  Promise
  - All
  - All Settled
  - Race
*/

// const myFirstPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Iam The First Promise");
//   }, 5000);
// });

// const mySecondPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej("Iam The Second Promise");
//   }, 1000);
// });

// const myThirdPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Iam The Third Promise");
//   }, 2000);
// });

// Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
// );

// Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
// );

// Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
// );



/*
  Async
  - Async Before Function Mean This Function Return A Promise
  - Async And Await Help In Creating Asynchronous Promise Behavior With Cleaner Style
*/

// function getData() {
//   return new Promise((res, rej) => {
//     let users = [];
//     if (users.length > 0) {
//       res("Users Found");
//     } else {
//       rej("No Users Found");
//     }
//   });
// }

// getData().then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedValue) => console.log("Rejected " + rejectedValue)
// );

// function getData() {
//   let users = ["Osama"];
//   if (users.length > 0) {
//     return Promise.resolve("Users Found");
//   } else {
//     return Promise.reject("No Users Found");
//   }
// }

// getData().then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedValue) => console.log("Rejected " + rejectedValue)
// );

// async function getData() {
//   let users = [];
//   if (users.length > 0) {
//     return "Users Found";
//   } else {
//     throw new Error("No Users Found");
//   }
// }

// console.log(getData());

// getData().then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedValue) => console.log("Rejected " + rejectedValue)
// );

/*
  Await
  - Await Works Only Inside Asnyc Functions
  - Await Make JavaScript Wait For The Promise Result
  - Await Is More Elegant Syntax Of Getting Promise Result
*/

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("Iam The Good Promise");
//     reject(Error("Iam The Bad Promise"));
//   }, 3000);
// });

// async function readData() {
//   console.log("Before Promise");
//   // myPromise.then((resolvedValue) => console.log(resolvedValue));
//   // console.log(await myPromise);
//   console.log(await myPromise.catch((err) => err));
//   console.log("After Promise");
// }

// readData();






