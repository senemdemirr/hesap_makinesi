var degisken = document.getElementById('degisken');
var btn = document.getElementsByClassName('btn');
var sil = document.getElementById('clr');
var dot = document.getElementById('dot');

var operant1;
var operant2;
var operator;
var result;

function operation(oprtr) {
    switch (oprtr) {
        case '+':
            operant1 = degisken.innerText;
            operator = "+";
            sill();
            break;
        case '-':
            if(operant1=="" || (operant1!="" && operator)){
                degisken.innerText="-";
                return;
            }
            operant1 = degisken.innerText;
            operator = "-";
            sill();
            break;
        case '*':
            operant1 = degisken.innerText;
            operator = "*";
            sill();
            break;
        case '/':
            operant1 = degisken.innerText;
            operator = "/";
            sill();
            break;
        case '.':
            if(degisken.innerText!=""){
                degisken.innerText+='.';
                return;
            }
            operant1 = degisken.innerText;
            sill();
            break;
        default:
            break;
    }
}

function calculate() {
    operant2 = degisken.innerText;
    console.log("esittir basıldı");
    switch (operator) {
        case "+":

            result = parseFloat(operant1) + parseFloat(operant2);
            degisken.innerText = result;
            break;
        case "-":
            result = parseFloat(operant1) - parseFloat(operant2);
            degisken.innerText = result;
            break;
        case "*":
            result = parseFloat(operant1) * parseFloat(operant2);
            degisken.innerText = result;
            break;
        case "/":
            result = parseFloat(operant1) / parseFloat(operant2);
            degisken.innerText = result;
            break;

        default:
            break;
    }
}
function sill() {
    degisken.innerText = "";

}

function numbers(value) {

    switch (value) {
        case 0:
            degisken.innerText += "0";
            break;
        case 1:
            degisken.innerText += "1";
            break;
        case 2:
            degisken.innerText += "2";
            break;
        case 3:
            degisken.innerText += "3";
            break;
        case 4:
            degisken.innerText += "4";
            break;
        case 5:
            degisken.innerText += "5";
            break;
        case 6:
            degisken.innerText += "6";
            break;
        case 7:
            degisken.innerText += "7";
            break;
        case 8:
            degisken.innerText += "8";
            break;
        case 9:
            degisken.innerText += "9";
            break;
        default:
            break;
    }

}
