const numPeople = document.querySelector("#number-people");
const calculateButton = document.querySelector("#btn");
const enterButton = document.querySelector("#enter-btn");
const tax = document.querySelector("#tax");
const tip = document.querySelector("#tip");
const costMealGroup = document.querySelector(".cost-meal-container");
const finalCostMealGroup = document.querySelector(".final-cost-meal-container");
const newMeal = document.createElement('input');
const container = document.querySelector('.container')

// function - logs the number of people
function displayNumPeople() {
    console.log(numPeople.value);
}
// event - displays the number of people
calculateButton.addEventListener("click", displayNumPeople);

let costArray = [];

// function to remove children
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function addMeal() {
    removeAllChildNodes(costMealGroup);
    for (let i = 0; i < numPeople.value; i++) {
        let div = document.createElement('div');
        div.classList.add("form-group");
        div.classList.add("each-meal");
        div.setAttribute("id","new-meal");
        costMealGroup.appendChild(div);
    }

    const newDiv = document.querySelectorAll("#new-meal");
    newDiv.forEach((userItem, index) => {
        let label = document.createElement('label');
        label.setAttribute("for","number-people");
        label.textContent = `Meal ${index+1}`;
        userItem.appendChild(label);   

        let input = document.createElement('input');
        input.type = "number";
        input.placeholder = "$";
        input.name = "cost-meal";
        input.required = "true";
        input.pattern = "\\d*"
        input.min = "0";
        input.classList.add("new-inputs");
        userItem.appendChild(input);   
    })
}

// constantly checks the number of people
// setInterval(addMeal, 1000);

enterButton.addEventListener("click", addMeal);

let costList = [];

// let hello = true;

function addCost() {
    const newDiv = document.querySelectorAll(".new-inputs");
    if (costList.length != newDiv.length) {
        newDiv.forEach((item, index) => {
            // costList.push(item.value);
            costList.splice(index, 1, item.value);
        })
    }
    // hello = false;
}

// function addCostOnce() {
//     // if (costList.length != )
//     if (hello) addCost();

// }

calculateButton.addEventListener("click", addCost);


// populate final cost of each meal
function displayFinalCost() {
    removeAllChildNodes(finalCostMealGroup);
    let numberDisplay = costList.length;

    // convert the array to numbers
    const costListNum = costList.map(str => {
        return Number(str);
    });

    // calculate sum of list
    let sum = costListNum.reduce((a, b) => a + b, 0);
    
    for (let i = 0; i < numberDisplay; i++) {
        let div = document.createElement('div');
        div.classList.add("form-group");
        div.classList.add("each-meal");
        div.setAttribute("id","final-new-meal");
        finalCostMealGroup.appendChild(div);
    }

    const newDiv = document.querySelectorAll("#final-new-meal");
    newDiv.forEach((userItem, index) => {
        let label = document.createElement('label');
        label.setAttribute("for","final-number-people");
        label.textContent = `Final cost of meal ${index+1}`;
        userItem.appendChild(label);   

        let input = document.createElement('input');
        input.type = "number";
        input.value = costListNum[index] * (1 + tax.value/100) + costListNum[index] / sum * tip.value;
        input.name = "cost-meal";
        input.required = "true";
        input.classList.add("final-new-inputs");
        userItem.appendChild(input);   
    })

    // calculateButton.style.display = "none";
}

calculateButton.addEventListener("click", displayFinalCost);

