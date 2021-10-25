let string = '';
const row = 10;
const square = 10;
const board = document.querySelector('.board');

for (let i = 1; i <= row; i++) {
    string += '<div class="row">';
    for (let j = 1; j <= square; j++) {
        string += `<div class="square bg-square"></div>`;
    }
    string += '</div>';
}
board.innerHTML += string;
