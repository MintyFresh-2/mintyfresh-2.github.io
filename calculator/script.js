// code for calculator
let state = "firstNumber"; //either first number, operator or second number
let firstNumber = "";
let operator = "+";
let secondNumber = "";

const displayEl = document.querySelector(".displayText");
const acEl = document.querySelector(".reset");
const number0El = document.getElementById("0");
const number1El = document.getElementById("1");
const number2El = document.getElementById("2");
const number3El = document.getElementById("3");
const number4El = document.getElementById("4");
const number5El = document.getElementById("5");
const number6El = document.getElementById("6");
const number7El = document.getElementById("7");
const number8El = document.getElementById("8");
const number9El = document.getElementById("9");
const addEl = document.getElementById("+");
const subtractEl = document.getElementById("-");
const multiplyEl = document.getElementById("*");
const divideEl = document.getElementById("/");
const equalEl = document.getElementById("=");
const dotEl = document.getElementById(".");

acEl.addEventListener("mousedown", function () {
  state = "firstNumber"; //either first number, operator or second number
  firstNumber = "";
  operator = "+";
  secondNumber = "";
  displayEl.textContent = "";
});

number0El.addEventListener("mousedown", function () {
  if (state === "firstNumber") {
    if (firstNumber !== "0") {
      firstNumber += "0";
      displayEl.textContent = firstNumber;
    }
  } else if (state === "operator") {
    state = "secondNumber";
    secondNumber += "0";
    displayEl.textContent = secondNumber;
  } else {
    if (secondNumber !== "0") {
      secondNumber += "0";
      displayEl.textContent = secondNumber;
    }
  }
});
number1El.addEventListener("mousedown", function () {
  if (state === "firstNumber") {
    if (firstNumber === "0") {
      firstNumber = "";
    }
    firstNumber += "1";
    displayEl.textContent = firstNumber;
  } else if (state === "operator") {
    state = "secondNumber";
    secondNumber += "1";
    displayEl.textContent = secondNumber;
  } else {
    if (firstNumber === "0") {
      firstNumber = "";
    }
    secondNumber += "1";
    displayEl.textContent = secondNumber;
  }
});
number2El.addEventListener("mousedown", function () {
  if (state === "firstNumber") {
    if (firstNumber === "0") {
      firstNumber = "";
    }
    firstNumber += "2";
    displayEl.textContent = firstNumber;
  } else if (state === "operator") {
    state = "secondNumber";
    secondNumber += "2";
    displayEl.textContent = secondNumber;
  } else {
    if (firstNumber === "0") {
      firstNumber = "";
    }
    secondNumber += "2";
    displayEl.textContent = secondNumber;
  }
});
number3El.addEventListener("mousedown", function () {
  if (state === "firstNumber") {
    if (firstNumber === "0") {
      firstNumber = "";
    }
    firstNumber += "3";
    displayEl.textContent = firstNumber;
  } else if (state === "operator") {
    state = "secondNumber";
    secondNumber += "3";
    displayEl.textContent = secondNumber;
  } else {
    if (firstNumber === "0") {
      firstNumber = "";
    }
    secondNumber += "3";
    displayEl.textContent = secondNumber;
  }
});
number4El.addEventListener("mousedown", function () {
  if (state === "firstNumber") {
    if (firstNumber === "0") {
      firstNumber = "";
    }
    firstNumber += "4";
    displayEl.textContent = firstNumber;
  } else if (state === "operator") {
    state = "secondNumber";
    secondNumber += "4";
    displayEl.textContent = secondNumber;
  } else {
    if (firstNumber === "0") {
      firstNumber = "";
    }
    secondNumber += "4";
    displayEl.textContent = secondNumber;
  }
});
number5El.addEventListener("mousedown", function () {
  if (state === "firstNumber") {
    if (firstNumber === "0") {
      firstNumber = "";
    }
    firstNumber += "5";
    displayEl.textContent = firstNumber;
  } else if (state === "operator") {
    state = "secondNumber";
    secondNumber += "5";
    displayEl.textContent = secondNumber;
  } else {
    if (firstNumber === "0") {
      firstNumber = "";
    }
    secondNumber += "5";
    displayEl.textContent = secondNumber;
  }
});
number6El.addEventListener("mousedown", function () {
  if (state === "firstNumber") {
    if (firstNumber === "0") {
      firstNumber = "";
    }
    firstNumber += "6";
    displayEl.textContent = firstNumber;
  } else if (state === "operator") {
    state = "secondNumber";
    secondNumber += "6";
    displayEl.textContent = secondNumber;
  } else {
    if (firstNumber === "0") {
      firstNumber = "";
    }
    secondNumber += "6";
    displayEl.textContent = secondNumber;
  }
});
number7El.addEventListener("mousedown", function () {
  if (state === "firstNumber") {
    if (firstNumber === "0") {
      firstNumber = "";
    }
    firstNumber += "7";
    displayEl.textContent = firstNumber;
  } else if (state === "operator") {
    state = "secondNumber";
    secondNumber += "7";
    displayEl.textContent = secondNumber;
  } else {
    if (firstNumber === "0") {
      firstNumber = "";
    }
    secondNumber += "7";
    displayEl.textContent = secondNumber;
  }
});
number8El.addEventListener("mousedown", function () {
  if (state === "firstNumber") {
    if (firstNumber === "0") {
      firstNumber = "";
    }
    firstNumber += "8";
    displayEl.textContent = firstNumber;
  } else if (state === "operator") {
    state = "secondNumber";
    secondNumber += "8";
    displayEl.textContent = secondNumber;
  } else {
    if (firstNumber === "0") {
      firstNumber = "";
    }
    secondNumber += "8";
    displayEl.textContent = secondNumber;
  }
});
number9El.addEventListener("mousedown", function () {
  if (state === "firstNumber") {
    if (firstNumber === "0") {
      firstNumber = "";
    }
    firstNumber += "9";
    displayEl.textContent = firstNumber;
  } else if (state === "operator") {
    state = "secondNumber";
    secondNumber += "9";
    displayEl.textContent = secondNumber;
  } else {
    if (firstNumber === "0") {
      firstNumber = "";
    }
    secondNumber += "9";
    displayEl.textContent = secondNumber;
  }
});
dotEl.addEventListener("mousedown", function () {
  if (state === "firstNumber") {
    if (firstNumber === "") {
      firstNumber = "0.";
    } else if (firstNumber.indexOf(".") === -1) {
      firstNumber += ".";
    }
    displayEl.textContent = firstNumber;
  } else if ((state = "operator")) {
    state = "secondNumber";
    secondNumber = "0.";
    displayEl.textContent = secondNumber;
  } else if (state === "secondNumber") {
    if (secondNumber === "") {
      secondNumber = "0.";
    } else if (secondNumber.indexOf(".") === -1) {
      secondNumber += ".";
    }
    displayEl.textContent = secondNumber;
  }
});

addEl.addEventListener("mousedown", function () {
  if (state === "firstNumber") {
    state = "operator";
    operator = "+";
    displayEl.textContent = operator;
  } else if (state === "operator") {
    operator = "+";
    displayEl.textContent = operator;
  }
});
subtractEl.addEventListener("mousedown", function () {
  if (state === "firstNumber") {
    state = "operator";
    operator = "-";
    displayEl.textContent = operator;
  } else if (state === "operator") {
    operator = "-";
    displayEl.textContent = operator;
  }
});
multiplyEl.addEventListener("mousedown", function () {
  if (state === "firstNumber") {
    state = "operator";
    operator = "*";
    displayEl.textContent = operator;
  } else if (state === "operator") {
    operator = "*";
    displayEl.textContent = operator;
  }
});
divideEl.addEventListener("mousedown", function () {
  if (state === "firstNumber") {
    state = "operator";
    operator = "/";
    displayEl.textContent = operator;
  } else if (state === "operator") {
    operator = "/";
    displayEl.textContent = operator;
  }
});
equalEl.addEventListener("mousedown", function () {
  if ((state = "secondNumber")) {
    if (operator === "+") {
      firstNumber = Number(firstNumber) + Number(secondNumber);
    } else if (operator === "-") {
      firstNumber = Number(firstNumber) - Number(secondNumber);
    } else if (operator === "*") {
      firstNumber = Number(firstNumber) * Number(secondNumber);
    } else if (operator === "/") {
      firstNumber = Number(firstNumber) / Number(secondNumber);
    }
    firstNumber = Math.round(firstNumber * 1000000) / 1000000;
    firstNumber = String(firstNumber);
  }
  state = "firstNumber";
  operator = "+";
  secondNumber = "";
  displayEl.textContent = firstNumber;
});
