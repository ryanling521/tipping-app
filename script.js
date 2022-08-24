const numPeople = document.querySelector("#number-people");
const button = document.querySelector("#btn");
const costMealGroup = document.querySelector(".cost-meal-container");
const newMeal = document.createElement('input');
const container = document.querySelector('.container')

// function that gets the number of people
function displayNumPeople() {
    console.log(numPeople.value);
}

// displays the number of people
button.addEventListener("click", displayNumPeople);

// constantly checks the number of people
// setInterval(displayNumPeople, 100);


