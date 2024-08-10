console.log("This is string")

let a="Chandu";
console.log(a)
console.log(a[0])// index zero se start hoti  hai
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[6])//undefined

// array ki lenght janana
console.log(a.length)

let nam = " chandrabhan "
let friend =" chandan "
console.log(" His name is " + nam +" and his friends name is " + friend)

//Using temlate literals
console.log(`His name is ${nam} and his friends name is ${friend}`)


//Escape Sequence Characters

let b="Surya"
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.length)
console.log(b.slice(1,4))
console.log(b.slice(1))

console.log(b.replace("Su","18"))
console.log(b.concat(a))
console.log(b.concat(a,"yadav"),"dileep")

console.log(b.charAt(1))