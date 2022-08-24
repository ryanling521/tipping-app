const numPeople = document.querySelector("#number-people");
const button = document.querySelector("#btn");
const costMealGroup = document.querySelector(".cost-meal-container");
const newMeal = document.createElement('input');
const container = document.querySelector('.container')

// function that gets the number of people
function displayNumPeople() {
    console.log(numPeople.value);
}

let costArray = [];

// function that creates increments divs "cost of each meal"
function addMeal() {
    for (let i = 0; i < numPeople.value; i++) {
        costArray.push('meal-${i}')
    }
    costArray.forEach(function(e) {
        let div = document.createElement('div');
        div.classList.add("form-group"); 
        div.classList.add("each-meal");
        div.textContent += "'hello!";
        costMealGroup.append(div);
    })
}

// displays the number of people
button.addEventListener("click", displayNumPeople);

// constantly checks the number of people
setInterval(addMeal(), 100);


