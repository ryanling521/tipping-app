const numPeople = document.querySelector("#number-people");
const calculateButton = document.querySelector("#btn");
const enterButton = document.querySelector("#enter-btn");
const costMealGroup = document.querySelector(".cost-meal-container");
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
        label.textContent = `Cost of meal ${index+1}`;
        userItem.appendChild(label);   

        let input = document.createElement('input');
        input.type = "number";
        input.placeholder = "$";
        input.name = "cost-meal";
        input.required = "true";
        input.classList.add("new-inputs");
        userItem.appendChild(input);   
    })
}

// constantly checks the number of people
// setInterval(addMeal, 1000);

enterButton.addEventListener("click", addMeal);

let costList = [];

function addCost() {
    // let costList = Array.from(document.querySelectorAll("#new-meal"));
    // let finalCost = costList.map(x => x*2);
    // console.log(finalCost);

    // select values from each cost of meal input
    // let costList = Array.from(document.querySelectorAll(".new-inputs"));

    // creates an array of values from cost of meal
    const newDiv = document.querySelectorAll(".new-inputs");
    newDiv.forEach(item => {
        costList.push(item.value);
    })
    container.append(costList);
}

calculateButton.addEventListener("click", addCost);

