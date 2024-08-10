/*create a faulty calculator using java script

this faulty calculator does following:
1- it take two number as input from the user
2- it perform wrong operation as follow:

+ ----> -
* ----> +
- ----> /
/----> **

it performs wrong operation 10% 0f the time

*/

let random = Math.random()
let a= prompt("Enter first number")
let b= prompt("Enter second number")
let c= prompt("Enter  operator")
let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}


if (random> 0.1){
    //Perform correct calculation
    console.log("The result is ${a} ${c} ${b}")
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

}
else{
    //perform wrong operation
    c= obj [c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

}
