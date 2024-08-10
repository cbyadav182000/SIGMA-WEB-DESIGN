let a=[1,93,5,6,88]


for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
    
}

console.log("using forEach loop")

a.forEach((value,index,arr)=>{
    console.log(value,index,arr)
})

console.log("using forin loop")
let obj={
    a:1,
    b:2,
    c:3
}
for (const key in obj) {
    if (obj.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element)
        
    }
}


console.log("using forof loop")
let s=[1,4,8]
for (const iterator of s) {
    console.log(iterator)
    
}