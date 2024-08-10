console.log("java script Array")

let arr=[7,2,9,4,5]
arr[0]=234;
console.log(arr);
console.log(arr.length)    //array is mutable and string are imutable

console.log(arr[0])
console.log(arr[1])
console.log(arr[2])

//convert array to string
// console.log(arr.toString())

//join
console.log(arr.join(" and "))

// //pop shift
let a= [2, 5 ,7, 3, 8, 9]
console.log(a.sort())//array ko sorting karta hai
console.log(a.pop())
console.log(a.shift())

//push unshift
console.log(a.push(1))
console.log(a.unshift(3))
//delete
console.log(delete[4])

let a1=[1,2,3]
let a2=[4,5,6]
let a3=[7,8,9]
console.log(a1.concat(a2,a3))


//splice-->ek position se element ko delete aur new element add krta hai
const c=[1,3,5,7,9] //let
console.log(c.splice(2,2,4,10))
console.log(c)
// slice
const d=[1,3,5,7,9]
console.log(d.slice(2,5))