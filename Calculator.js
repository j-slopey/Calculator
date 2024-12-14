
function createButton(buttonLabel, className, callback) {
    const newButton = document.createElement("button");
    newButton.classList.add(className);
    newButton.textContent = buttonLabel;
    newButton.addEventListener("click", callback);
    return newButton
}
function clearScreen (){
    displayNum.textContent = "";
}

function appendScreen(text){
    displayNum.textContent = displayNum.textContent += text;
}

function opFunction(e){
    num1 = +displayNum.textContent;
    clearScreen()
    operation = e.target.textContent;
}

const buttonsBox = document.querySelector("#buttons");
const displayNum = document.querySelector("#displayNum")
let num1,num2,operation;
buttonsBox.appendChild(createButton("Clear", "square", clearScreen));
buttonsBox.appendChild(createButton("=", "square"));
for(let i = 0; i < 10; i++){
    buttonsBox.appendChild(createButton(i,"square", (e) => appendScreen(e.target.textContent)));
}
buttonsBox.appendChild(createButton("+", "square", opFunction));
buttonsBox.appendChild(createButton("-", "square", opFunction));
buttonsBox.appendChild(createButton("x", "square", opFunction));
buttonsBox.appendChild(createButton("÷", "square", opFunction));

