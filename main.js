const display = document.getElementById('display');
const buttons = document.getElementsByClassName('number');
const operator = document.getElementsByClassName('operator');
let operating = false;
let operand = '';

function clearScreen() {
  display.textContent = "0";
  resetOperating();
}

function evaluate() {
    let result;
    const content = display.textContent;
    const numbers = content.split(operand);
    const firstNumber = parseInt(numbers[0], 10);
    const secondNumber = parseInt(numbers[1], 10);

    switch(operand) {
      case '+':
        result = firstNumber + secondNumber;
        break;
      case '÷':
        if(firstNumber !== 0 && secondNumber !== 0) {
          result = firstNumber / secondNumber;
        } else {
          result = 0;
        }
        break;
      case '×':
        result = firstNumber * secondNumber;
        break;
      case '–':
        result = firstNumber - secondNumber;
        break;
    }
  
    resetOperating();
    display.textContent = result || 0;
    return result || 0;
}

function resetOperating() {
  operating = false;
  operand = '';
}

function numberClick(event) {
  let content = display.textContent;
  const numberButton = event.target.value;
  
  if(content != "0"){
    content += numberButton;
  } else {
    content = numberButton;
  }
  display.textContent = content;
}

function operatorClick(event) {
  let operator = event.target.value;
  let content = display.textContent;

  switch(operator) {
    case '=':
      evaluate();
      break;
    case 'C':
      clearScreen();
      break;
    default:
      operating = true;
      operand = operator;
      content += operator;
      display.textContent = content;
      break;
  }
}

for(i = 0; i < operator.length; i++) {
  operator[i].addEventListener('click', operatorClick, false);
}

for(i =  0; i < buttons.length; i++) {
buttons[i].addEventListener('click', numberClick, false);
}

clearScreen();