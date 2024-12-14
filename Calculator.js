
function createButton(buttonLabel, className, callback) {
    const newButton = document.createElement("button");
    newButton.classList.add(className);
    newButton.textContent = buttonLabel;
    newButton.addEventListener("click", callback);
    return newButton
}
function clear (){
    displayNum.textContent = "";
    displayExpression.textContent = "";
    num1 = "";
    num2 = "";
}

function appendScreen(text){
    displayNum.textContent = displayNum.textContent += text;
}

add = (num1, num2) => +num1 + +num2;
sub = (num1, num2) => +num1 - num2;
mul = (num1, num2) => +num1 * +num2;
div = (num1, num2) => +num1 / num2;

function equals(){
    num2 = displayNum.textContent;
    switch (operation){
        case "+":
            solution = add(num1,num2);
            break;
        case "-":
            solution = sub(num1,num2);
            break;
        case "x":
            solution = mul(num1,num2);
            break;
        case "÷":
            solution = mul(num1,num2);
            break;
    }
    displayNum.textContent = solution;
    displayExpression.textContent = displayExpression.textContent + +num2 + " = ";
}

function opFunction(e){
    num1 = displayNum.textContent;
    operation = e.target.textContent;
    displayNum.textContent = "";
    displayExpression.textContent = +num1 + ' ' + operation + ' ';
}

const buttonsBox = document.querySelector("#buttons");
const displayNum = document.querySelector("#displayNum")
const displayExpression = document.querySelector("#displayExpression")
let num1,num2,operation,solution;
let num1Filled = false
buttonsBox.appendChild(createButton("Clear", "square", clear));
buttonsBox.appendChild(createButton("=", "square", equals));
for(let i = 0; i < 10; i++){
    buttonsBox.appendChild(createButton(i,"square", (e) => appendScreen(e.target.textContent)));
}
buttonsBox.appendChild(createButton("+", "square", opFunction));
buttonsBox.appendChild(createButton("-", "square", opFunction));
buttonsBox.appendChild(createButton("x", "square", opFunction));
buttonsBox.appendChild(createButton("÷", "square", opFunction));

buttonsBox.appendChild(createButton(".", "square", (e) => appendScreen(".")));