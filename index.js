const btn = document.getElementById("btn")
let food = document.getElementById("food")
const vegetarians = document.getElementById("vegetarian-input")
const numInput = document.getElementById("num-input")

// Tasks:
// - Write the JS to decide the perfect Christmas dinner and render it in the result element. Don't forget to check whether the meal should be vegetarian!
const chooseDinner = () => {
    let isVegetarian = vegetarians.checked
    let foodChoice = ''
    if (isVegetarian) foodChoice = "nut roast"
    else if(numInput.value <=4) foodChoice = "turkey"
    else foodChoice = "goose"
    food.textContent = foodChoice
}
btn.addEventListener("click", chooseDinner)

// Dinner suggestions (or choose your own!):
// Vegetarian: nut roast
// 4 people or less: turkey
// 5+ people: goose 

// Stretch goals:
// - Add more dietary options.
// - Show recipes when the meal has been selected.
