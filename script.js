//import
//import minus, {pi,addition} from './utils.js'
import * as utils from './utils.js'
console.log(utils.pi)
console.log(utils.addition(52,8))
//console.log(minus(10,2))
//setTimeout
window.setTimeout(function(){
    console.log("Hello timeout 1 ********")
},5000)

//
let timerid=window.setTimeout(function(){
    console.log("timeout 2")
},3000)
console.log(`*************8 ${timerid}`)

//cleartimeout
clearTimeout(timerid)

//setInterval
let inetrvalid2=window.setInterval(function(){
    console.log("hello timeinterval")
},1000)
clearInterval(inetrvalid2)
//NOrmalFunction ****** 
function newNormalFunction(){
    console.log("hello**************")
}
newNormalFunction()


//arrow function 
const newNormalFunction1 = ()  => {
    console.log("helloooooooooo")
}
newNormalFunction1()


const sumvalue =data=>{
    let sum=data+10
    return sum
}
console.log(sumvalue(4))


//with two parameter
 const sumtwoValue=(a,b)=>a+b
 console.log(sumtwoValue(5,10))

 var array=[1,2,3,4]
 let newarr=array.map((item)=>item*2)
 console.log(newarr)

//problem solve by arrow function for nested function problem

let objectprop={
   
    name12:"rawi****",
    getName: function(){
        console.log(this.name12)
        const fullname=()=>{
            console.log("hello i am inside nested function"+ this.name12)
        }
        fullname()
    }
}

    objectprop.getName()






//events@@@@@@@@@@@@@@@@
function myFunction(){
    console.log("Hurrauuuuuuyyyyyyy")
}
//event lsitener
let btn=document.que 
document.addEventListener("mousemove",handler)
function handler(){
    document.querySelector(".demo").innerHTML=Math.random()
}
let removebtn=document.querySelector(".remove")

removebtn.removeEventListener("mousemove",handler)

window.handlerremove = function handlerremove() {
     document.removeEventListener("mousemove",handler)
    //console.log("hello from handle remove");
}
//custom event
document.addEventListener("hello",function(data){
    console.log("hello custom event is called"+data.detail)
})
window.customevent=function customevent(){
let eve=new CustomEvent("hello",
{
    detail:{name:"rawi"}
})
document.dispatchEvent(eve)
}


//queryselector
let element=document.querySelector('div')
//.classname
console.log(element)
element.style.color="red"

let elementAll=document.querySelectorAll('div')
console.log(elementAll)
Array.from(elementAll).forEach(function(item){
    item.style.color="blue"
    console.log(item.innerText)
})
//in lwc 
//this.template.querySelector

// console.log("testing");
//******************** Variable ******************* */
/**** var keyword**** */
// can be updated and redeclared
// support two type of scope global and function scope not support block scope
var course="zero to hero"
console.log(course)
var course="zero to hero lwc"
console.log(course)
console.log(window)
    //global scope
console.log(window.course)
// function scope
function abc(){
    var anothercourse="hero"
    console.log(anothercourse)
}

//console.log(anothercourse)

//block scope
if(2==2){
var x=10
}
console.log(x)

// let keyword
// it help you to update the variable but not to redeclared it
let courselet ="zero to herolet "
console.log(courselet)
console.log(window.courselet)
function abc1(){
    let letvariable="ravy"
    console.log(letvariable)
}
abc1();
if(2==2){
    let m=10
    console.log(m)
}

//const keyword
// it can't be updated and can't be re declared
//const support block level and function not global scope

const  convariable=50
console.log(convariable)
console.log(window.convariable)
function hello(){
    const convariable=22
    console.log(convariable)
}
hello()
if(2==2){
    const gg=5
    console.log(5)
}

//*******************Datatype**********************
//number limit 253power-1
var num1=10
console.log(typeof(num1))
var num2=20.898988
console.log(typeof(num2))

//Bigint
var num3=34253253545n
console.log(typeof(num3))

//string
var str="hello"
console.log(typeof str)

//boolean
var ismonday=true
console.log(typeof ismonday)

//undefined
var m
console.log(m)

//object
var obj={}
console.log(typeof obj)

//array
var arr=[]
console.log(typeof arr)

//symbol
var sym=Symbol("id")
console.log(sym)
console.log(typeof sym)

//null type of object
var x1=10
x1=null
console.log(typeof x1)

//String() Boolean() -- constructor 
console.log(typeof new String("hello"))

//**************equality comparision******** */
//normal comparision == it will only compare the value
console.log(3==3)
console.log(3=="3")
//strict comparision ===  it will compare the value and datatype
// in lwc used in strict coparision
console.log("apple"==="Apple")
console.log(3==="3")


//***********Null and undefined */
var newvar
console.log(newvar)

var y=null
console.log(y)

console.log(newvar==y)//-- true 
console.log(newvar===y) //false because it is compare the datatype too

//********Spread operator */

//**************array
var arr=["data1","data2","data3"]
console.log(arr)
//array index value start from 0
console.log(arr[0])
console.log(arr[1])
//to add a value in array use push
arr.push("13")
console.log(arr[3])


//*************object always in key value form
var objsalesforce={
    "name": "apple",
    "age":23,
    "full name":"happy singh"
}

console.log(objsalesforce.name)
//if property having space then we have to below scenerio
console.log(objsalesforce["age"])
console.log(objsalesforce["full name"])

//how to add in object
objsalesforce.hobbbies="cricket"

console.log(objsalesforce)

//******** spread operator
// 1.expanding of string
let greeting="happy journey"
var expList=[...greeting]
console.log(expList)


//2. combining of array
let arr11=["amaxon","google"]
let arr22=["facebook","twitter"]
let arr33=[...arr11,...arr22]
console.log(arr33)

//adding value in array
let arr4=["a","b"]
let arr5 =[...arr4,"c"] 
//or
let arr6=["c",...arr4]
console.log(arr5)
console.log(arr6)

//object
let obj1={
    name:"raju",
    age:45,
    next:"hobbies"
}
let obj2={
    name:"ramu",
    age:78
}
// it will overide left obj1 with right obj 2  
let obj3={...obj1,...obj2}
console.log(obj3)

//shallow copy

var arrt=["x","y","z"]
arrt.push(20)
console.log(arrt)
//this create isssue so don't use push method use spreadoperator
var arr10=arrt
arr10.push(35)
console.log(arrt)
console.log(arr10)

//it create shallow copy mean it will not copy the reference
var arr44=[...arrt]
arr44.push(89)
console.log(arrt)
console.log(arr44)



////6. Nested copy
var arrobj=[
    {name:"dabu"},
    {name:"chabu"}
]
//shallow cop[y only work in 1 way it will not work in nested
var arrobj1=[...arrobj]

console.log(arrobj1)
arrobj1[0].name="bablidarling"
console.log(arrobj1)
console.log(arrobj)

//to hack nested copy
var arrobj2=JSON.parse(JSON.stringify(arrobj))
arrobj2[0].name="hellowa"
console.log(arrobj2)
console.log(arrobj)

//array destructing
let companies=["google","Apple"]
//let company1=companies[0]
//let company2=companies[1]


//desctucting
let [company1,company2]=companies
console.log(company1)
console.log(company2)

//object destructing
let option={
    title:"software engg",
    companyjob:"accenture"
}
//var title= option.title

let{title,companyjob}=option
console.log(title)
console.log(companyjob)

//String interpolation
var name="sales"
var name2="force"
console.log(name+name2)
var age=56

var strname="my name is"+name+"and my age is"+age
console.log(strname)

var a=2
var b=3
console.log(`my name is ${name}`)
console.log(`the sum of ${a} and ${b} is ${a+b}`)
var recordid=13333
console.log(`www.salesforce.com\\${recordid}`)

//String Methods
let Stringvar="hello guys how are u"

//includes() methods determine whether a string contain the a specified character or not
let check=Stringvar.includes("guys")
console.log(check)


//indexOf methods return the position of first occurence of specified string
let index=Stringvar.indexOf("guys")
console.log(index)
//if it return -1 then it  mean  string is not available

//startWith
//determine whether the string is available with charater or not
console.log(Stringvar.startsWith("hello"))

//Slice() extract the part and create a new string

let newstr=Stringvar.slice(0,6)
console.log(newstr)

//toLowerCase
let NewStr1="My name is Ramna"
console.log(NewStr1.toLowerCase())

//to upperCase
console.log(NewStr1.toUpperCase())

//trim- remove white spaces on both side
let searchtext="                  salesforce lwc helo           "
console.log(searchtext.trim())


//*******Object/Json Operation******** */

let objopp={
    name:"salesforce",
    age:23,
    dob:"23/10/2021"
}
//object.keys
console.log(Object.keys(objopp))

//object.values()
console.log(Object.values(objopp))

//JSON.Stringify
let StringfyStr=JSON.stringify(objopp)
console.log(StringfyStr)

//JSON.parse
console.log(JSON.parse(StringfyStr))

//**************Array Methods********** */

//map
let arrmap=[2,3,45,6,7]

//map()
//syntax
//arrmap.methodname(function(currentitem,index,actualarray)){})



let newarray=arrmap.map(function(currentItem,index,array){
    console.log(`currentItem is ${currentItem} index ${index},`)
return currentItem*2
})
console.log(newarray)

//filter
let filterValue=arrmap.filter(function(currentItem,index,array){
    return currentItem > 5
}
)
console.log(filterValue)

//every
let everyValue=arrmap.every(function(currentItem){
return currentItem > 6
})
console.log(everyValue)

//some()
let someValue=arrmap.some(function(currentItem){
    return currentItem == 6
})

console.log(someValue)
//sort
let arrname=["raju","apple","chabu"]
console.log(arrname.sort())

let sortValue=arrmap.sort(function(a,b){
    return b-a
})
console.log(sortValue)

//reduce()
//let reduceValue=arrmap.reduce()
// array.reduce(function(total,currentvalue,index,array){

// },initialvalue)

let num=[12,78,65]
let sum=num.reduce(function(total,currentitem){
    return total+currentitem
},0)
console.log(sum)

//foreach
num.forEach(function(currentItem){
console.log(currentItem)
})

//promise for asyncyronus 
function checkstatus(data){
    return new Promise(function(resolve,reject){
        if(data==="success"){
            return resolve("sucessfully executed")
        }
        else{
            return reject("unsuccessfully rejected")
        }
    })
    
}


console.log(checkstatus("success"))
checkstatus('success').then(function(result){
    console.log(result)
}).catch(function(error){
    console.log(error)
})

//service call in javascript from fetch() its is a asychronus and always a promise call
//whenever the service call happen then we have to call promises with help of then method
fetch(`https://api.github.com/users/karkranikhil`).then(function(result){
    console.log(result)
    //as we call from json multiple promise then its is a datastring
    return result.json()

}).then(function(response){
console.log(response)
})
.catch(function(error){
console.log(error)
})


//*************Export












