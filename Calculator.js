
function createButton(buttonLabel, className, callback) {
    const newButton = document.createElement("button");
    newButton.classList.add(className);
    newButton.textContent = buttonLabel;
    newButton.addEventListener("click", callback);
    return newButton
}
function clear(){
    displayNum.textContent = "0";
    displayExpression.textContent = "";
    num1 = "";
    num2 = "";
    operation = "";
}
function del(){
    if (displayExpression.textContent.includes("=")){
        clear();
    }
    displayNum.textContent = displayNum.textContent.substring(0,displayNum.textContent.length - 1);
}

function appendScreen(text){
    if(displayExpression.textContent.includes("=")){
        if(operation === ""){
            displayExpression.textContent = "";
            displayNum.textContent = text;
        } else {
            displayNum.textContent = text;
            displayExpression.textContent = +num1 + " " + operation + " ";

        }
    }else {
        if (displayNum.textContent === "0") {
            displayNum.textContent = text;
        } else {
            displayNum.textContent += text;
        }
    }
}

function decimal(){
    if(!displayNum.textContent.includes(".")){
        appendScreen(".")
    }
}

add = (num1, num2) => +num1 + +num2;
sub = (num1, num2) => +num1 - +num2;
mul = (num1, num2) => +num1 * +num2;
div = (num1, num2) => {
    if(num2 === "0"){
        return "divByZero";
    }
    return +num1 / +num2;
};

function equals(){
    if (displayExpression.textContent.includes('=')){
        num1 = displayNum.textContent;
        displayExpression.textContent = +num1 + " " + operation + " ";
    } else {
        num2 = displayNum.textContent;
    }
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
            solution = div(num1,num2);
            break;
    }
    displayNum.textContent = solution;
    displayExpression.textContent = displayExpression.textContent + +num2 + " = ";
    operation = "";
}

function opFunction(e){
    let nextOperation = e.target.textContent;
    if(displayNum.textContent !== ""){
        if(opRegex.test(displayExpression.textContent) && !displayExpression.textContent.includes("=")){
            equals();
            num2 = num1;
            num1 = displayNum.textContent;

        } else {
            num1 = displayNum.textContent;
            displayNum.textContent = "";
            displayExpression.textContent = +num1 + " " + nextOperation + " ";
        }
    }
    operation = nextOperation;
}
const opRegex = new RegExp("[+\-x÷]");
const buttonsBox = document.querySelector("#buttons");
const displayNum = document.querySelector("#displayNum");
const displayExpression = document.querySelector("#displayExpression");
let num1,num2,operation,solution;
buttonsBox.appendChild(createButton("+", "square", opFunction));
buttonsBox.appendChild(createButton("-", "square", opFunction));
buttonsBox.appendChild(createButton("x", "square", opFunction));
buttonsBox.appendChild(createButton("÷", "square", opFunction));

for(let i = 1; i < 10; i++){
    buttonsBox.appendChild(createButton(i,"medium", (e) => appendScreen(e.target.textContent)));
}
buttonsBox.appendChild(createButton(".", "medium", decimal));
buttonsBox.appendChild(createButton(0,"medium", () => appendScreen("0")));
buttonsBox.appendChild(createButton("Delete", "medium", del));

buttonsBox.appendChild(createButton("Clear", "wide", clear));
buttonsBox.appendChild(createButton("=", "wide", equals));

