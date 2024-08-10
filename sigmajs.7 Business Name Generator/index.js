/*
Creayte a business name generator by combining list of adjectives and shop name and another word
not use array only use function



adjective nmae:-->

crazy
amazing
fire


shop name:
engine
foods
garments



Another word:
bros
limited
hub
*/
let rand = Math.random()
let first, second, third;

//lets generate the first word

if(rand<0.33){
    //0 0.33 0.66 1
    first ="Crezy"
}
else if(rand<0.66 && rand>=0.33){
first="Amazing"
}
else{
    first="Fire"
}


//lets generate the second word
rand = Math.random()

if(rand<0.33){
    //0 0.33 0.66 1
    second ="Engine"
}
else if(rand<0.66 && rand>=0.33){
second="Foods"
}
else{
    second="Garments"
}
//lets generate the Third word
 rand = Math.random()

if(rand<0.33){
    //0 0.33 0.66 1
    third ="Bros"
}
else if(rand<0.66 && rand>=0.33){
third="Limited"
}
else{
    third="Hub"
}
console.log(`${first} ${second} ${third}`)