var degisken = document.getElementById('degisken');
var btn = document.getElementsByClassName('btn');
var sil = document.getElementById('clr');
var dot = document.getElementById('dot');
const storage = document.getElementById('storage');

console.log(dot);

var operant1;
var operant2;
var operator;
var result;

function operation(oprtr) {
  switch (oprtr) {
    case '+':
      storage.innerText += '+';
      operant1 = degisken.innerText;
      operator = '+';
      sill();
      break;

    case '-':
      // operant 1  is negative
      if (degisken.innerText.includes('-')) {
        operant1 = degisken.innerText;
        operator = '-';
        sill();
        console.log('1');
        storage.innerText += '-';
        return;
      }
      // operant 1  is positive
      if (degisken.innerText != '') {
        operant1 = degisken.innerText;
        storage.innerText += '-';
        operator = '-';
        console.log('2');
        sill();
        return;
      }
      console.log('3');
      storage.innerText += '-';
      degisken.innerText = '-';
      break;
    case '*':
      storage.innerText += '*';
      operant1 = degisken.innerText;
      operator = '*';
      sill();
      break;
    case '/':
      storage.innerText += '/';
      operant1 = degisken.innerText;
      operator = '/';
      sill();
      break;
    case '.':
      if (degisken.innerText.includes('.')) {
        return;
      }
      if (degisken.innerText == '') {
        degisken.innerText += '0.';
        storage.innerText += '0.';
        return;
      }
      storage.innerText += '.';
      degisken.innerText += '.';
      break;
    default:
      break;
  }
}
function clearr() {
  degisken.innerText = '';
  operant1 = '';
  operant2 = '';
  operator = '';
  storage.innerText = '';
}
function backspace() {
  var uzunluk = degisken.textContent.length;
  if (uzunluk > 0) {
    degisken.textContent = degisken.textContent.substring(0, uzunluk - 1);
    storage.textContent = storage.textContent.substring(0, uzunluk - 1);
  }
}

function calculate() {
  operant2 = degisken.innerText;
  console.log('esittir basıldı');
  switch (operator) {
    case '+':
      if (operant1 == '' || operant2 == '') {
        return;
      }
      result = parseFloat(operant1) + parseFloat(operant2);

      degisken.innerText = result;
      break;
    case '-':
      if (operant1 == '' || operant2 == '') {
        return;
      }
      result = parseFloat(operant1) - parseFloat(operant2);
      degisken.innerText = result;
      break;
    case '*':
      if (operant1 == '' || operant2 == '') {
        return;
      }
      result = parseFloat(operant1) * parseFloat(operant2);
      degisken.innerText = result;
      break;
    case '/':
      if (operant1 == '' || operant2 == '') {
        return;
      }
      result = parseFloat(operant1) / parseFloat(operant2);
      degisken.innerText = result;
      break;

    default:
      break;
  }
  storage.innerText = result;
}
function sill() {
  degisken.innerText = '';
}

function numbers(value) {
  switch (value) {
    case 0:
      storage.innerText += '0';
      degisken.innerText += '0';

      break;
    case 1:
      storage.innerText += '1';

      degisken.innerText += '1';
      break;
    case 2:
      storage.innerText += '2';

      degisken.innerText += '2';
      break;
    case 3:
      storage.innerText += '3';

      degisken.innerText += '3';
      break;
    case 4:
      storage.innerText += '4';

      degisken.innerText += '4';
      break;
    case 5:
      storage.innerText += '5';

      degisken.innerText += '5';
      break;
    case 6:
      storage.innerText += '6';

      degisken.innerText += '6';
      break;
    case 7:
      storage.innerText += '7';

      degisken.innerText += '7';
      break;
    case 8:
      storage.innerText += '8';

      degisken.innerText += '8';
      break;
    case 9:
      storage.innerText += '9';

      degisken.innerText += '9';
      break;
    default:
      break;
  }
}