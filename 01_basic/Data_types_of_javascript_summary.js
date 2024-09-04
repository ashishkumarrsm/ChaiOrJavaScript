console.log("hello");
//  JavaScript is a dynamically typed language, but TypeScript is a statically typed language.

// primtive
//  call by value 
// 7 type : ssbbnnu
// 1: string
// 2: number
// 3: symbole
const id= Symbol('123')
const another=Symbol('123')
console.log(id === another );

// 4: bollion
// 5: bigInt

// 6: null
// 7: undefined


// non prmitive 
// or 
// refrance type 


// 1 Array
const heros =[ "spiderman","superman"]
// 2 objects
 const obj = {
    name:"vikas",
    class:"Mca",
    age : 23

 }
// 3 functions 

const myFunction= function(){
   console.log("hello");
   
}
myFunction()


// An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:

let mySecondFunction = ()=>{
 console.log("welcome helo ");
 
}

mySecondFunction()
