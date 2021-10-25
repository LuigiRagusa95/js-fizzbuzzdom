let string = '';
let sum = 0;

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
board.innerHTML += string;
console.log(sum);
