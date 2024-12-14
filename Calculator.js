
function createButton(buttonLabel, className) {
    const newButton = document.createElement("button");
    newButton.classList.add(className);
    newButton.textContent = buttonLabel;
    return newButton
}

const buttonsBox = document.querySelector("#buttons");
for(let i = 0; i < 10; i++){
    buttonsBox.appendChild(createButton(i,"square"));
}

buttonsBox.appendChild(createButton("+", "square"));
buttonsBox.appendChild(createButton("-", "square"));
buttonsBox.appendChild(createButton("x", "square"));
buttonsBox.appendChild(createButton("÷", "square"));

