console.log("I am a tutorial on Loops")

let a=1;
console.log(a)
console.log(a+1)
console.log(a+2)
// for loop

for(let i=0; i<100; i++){
    console.log(a+i);
}
// for in loop
let obj = {
    nam1:"chandu",
    role:"doveloper",
    compani:"ctech ltd"
}
for (const key in obj) {
        const element = obj[key];
        console.log(key,element)
        
}
//for of loop
for (const c of "chandu") {
    console.log(c)
    
}
// while loop
let i=0;
while (i<5) {
    console.log(i)
    i++
}
//do while loop
let j =10;
do {
    console.log(j)
    j++
    
} while (j<5);