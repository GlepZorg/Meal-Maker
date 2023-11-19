const menu = {
    _meal: '',
    _price: 0,

    set meal(mealToCheck){
        if(typeof mealToCheck === 'string'){
            this._meal = mealToCheck;
        }
        else{
            console.log('Not a valid meal name!');
        }
    },
    set price(priceToCheck){
        if(typeof priceToCheck === 'number'){
            this._price = priceToCheck;
        }
        else{
            console.log('Not a valid price!');
        }
    },
    get todaysSpecial(){
        if(this._meal && this._price){
            return(`Today's Special is ${this._meal} for $${this._price}!`);
        }
        else{
            return('Meal or price was not set correctly!');
        }
    },
};
const mealNames = ['Fugu','Square Watermelon','Matsutake mushrooms','Wagyu beef', ' Ruby roman grapes '];
let randomNum = Math.floor(Math.random() * mealNames.length);
menu.meal = mealNames[randomNum];
menu.price = Math.floor(Math.random() * 1000);
console.log(menu.todaysSpecial);

