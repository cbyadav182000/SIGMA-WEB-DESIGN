// let arr = [1,13,5,7,11];
// // let newArr = []

// // for (let index = 0; index < arr.length; index++) {
// //     const element = arr[index];
// //     newArr.push(element**2)
    
// // }
// // console.log(newArr)
// //short ct idea
// let newArr = arr.map((e, index, arr)=>{
//     return e**2

// })
// console.log(newArr)

// const greaterthanseven = (e)=>{
//     if(e>7){
//         return true
//     }
//     return false
// }
// console.log(a.filter(greaterthanseven))

//reduce function
let arr2=[1,2,3,4,5,6]
const red = (a,b)=>{
    return a*b
}
console.log(arr2.reduce(red))


//array.from ka use

console.log(Array.from("chandu"))