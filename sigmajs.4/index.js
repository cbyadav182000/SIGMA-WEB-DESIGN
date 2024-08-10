console.log("function in java script")

// bas aise hi
console.log(" hey  chandu kya hal hai")
console.log(" hey  chandu kya hal hai ji")
console.log(" hey  chandu kya ho rha hai")
console.log(" hey  chandu kya ho rha hai ji")
console.log(" hey  chandu  tb kya hal hai")




// function in java script
// ex:1
function sum(a,b) {
    console.log(a+b)
}
sum(3,5)

//ex:2

function sum(c, d,e=5) {
    // console.log(c+d)
    return c + d + e
}
result1=sum(4, 6)
result2=sum(5, 6)

console.log("the result is:", result1)
console.log("the result is:", result2)

// ex:3
function nice(name) {
    console.log(" hey " + name +"   kya hal hai") 
    console.log(" hey " + name +"  kya hal hai ji")
    console.log(" hey " + name +"  kya ho rha hai")
    console.log(" hey " + name +"  kya ho rha hai ji")
    console.log(" hey " + name +"  tb kya hal hai")
    
}
nice("chandu")
nice("sam")

// create funct using arrow function
const func1 =(x)=>{
    console.log(" i am arrow function",x)
}
func1(34);
func1(54);
func1(64);


