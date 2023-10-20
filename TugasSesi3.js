// tipeObject

var restaurant = {
    name: "Warning House",
    city: "Jakarta",
    favoriteDrink: "Avocado Juice",
    favoriteFood: "Vegetable Tofu Steak",
    isVegan: true
};
var { name, city, favoriteDrink, favoriteFood, isVegan } = restaurant;
console.log("Nama : " + name);
console.log("Kota : " + city);
console.log("Minuman Favorit : " + favoriteDrink);
console.log("Makanan Favorit : " + favoriteFood);
console.log("Vegan : " + isVegan);

// tipeArray

var restaurant = [
    {
        name: "Warning House",
        city: "Jakarta",
        favoriteDrink: "Avocado Juice",
        favoriteFood: "Vegetable Tofu Steak",
        isVegan: true 
    },
];
console.log("Nama : " + restaurant[0].name);
console.log("Kota : " + restaurant[0].city);
console.log("Minuman Favorit : " + restaurant[0].favoriteDrink);
console.log("Makanan Favorit : " + restaurant[0].favoriteFood);
console.log("Vegan : " + restaurant[0].isVegan);