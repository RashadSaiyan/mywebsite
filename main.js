console.log("Hello World");

const age = 23;

const canYouDrink = (age) => {
if (age > 21){
    console.log("Go ahead and drink")
}else{
    console.log("Not yet here is some milk")
}
};

canYouDrink(age);

const drinkAge = (age) =>{
    return age > 21 ? "Where the Henny at" : "Baby Bib" 
};


console.log(drinkAge(age));



const beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage); // "Beer"




