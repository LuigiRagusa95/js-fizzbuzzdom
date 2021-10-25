// version row and square
let sum = 0;
let string = '';

const row = 7;
const square = 7;
const board = document.querySelector('.board');

for (let i = 1; i <= row; i++) {
    string += '<div class="row">';
    for (let j = 1; j <= square; j++) {
        sum += 1;
        if (sum % 3 === 0 && sum % 5 === 0) {
            string += `<div class="square bg-fizzbuzz">fizzbuzz</div>`;
        } else if (sum % 3 === 0) {
            string += `<div class="square bg-fizz">fizz</div>`;
        } else if (sum % 5 === 0) {
            string += `<div class="square bg-buzz">buzz</div>`;
        } else string += `<div class="square bg-square">${sum}</div>`;
    }
    string += '</div>';
}
// board.innerHTML = string;

// Version only square
let dom = '';
let br = 10;
let sqaure = 100;

for (let i = 1; i <= sqaure; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        dom += `<div class="square bg-fizzbuzz">fizzbuzz</div>${i % br === 0 ? `</br>` : ''}`;
    } else if (i % 3 === 0) {
        dom += `<div class="square bg-fizz">fizz</div>${i % br === 0 ? `</br>` : ''}`;
    } else if (i % 5 === 0) {
        dom += `<div class="square bg-buzz">buzz</div>${i % br === 0 ? `</br>` : ''}`;
    } else dom += `<div class="square bg-square">${i}</div>${i % br === 0 ? `</br>` : ''}`;
    console.log(i);
}
board.innerHTML = dom;
