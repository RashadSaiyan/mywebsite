console.log("Hello World");

const age = 23;

const canYouDrink = (age) => {
if (age > 21){
    console.log("Go ahead and drink")
}else{
    console.log("Not yet here is some milk")
}
};
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

const menu = {
    _meal: '',
    _price: 0,
    _additions: '',


    set meal(mealToCheck){
        if (typeof mealToCheck === "string"){
          return this._meal = mealToCheck; }
    },

    set price(priceToCheck){
        if (typeof priceToCheck === 'number'){
          return this._price = priceToCheck; }
    },

    get todaysSpecial(){
        if(this._meal && this._price){
          return `“Today’s Special is ${this._meal} for ${this._price}!”`}else
          {
            return `'Meal or price was not set       correctly!'`
          }
    }
    
}

menu.meal = 'Hot Wings Fried Hard';
menu.price = 14.99;

console.log(menu.todaysSpecial);



