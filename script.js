var numSquares = 6;
var colors = randomGeneratedColor(numSquares);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var messageDisplay = document.querySelector('#message');
var displayColor = document.querySelector('#colorDisplay');
var h1 = document.querySelector('h1');
var resetBtn = document.querySelector('#reset');
var modeButton = document.querySelectorAll('.mode');

for(var i = 0; i < modeButton.length; i++){
    modeButton[i].addEventListener('click', function() {
        modeButton[0].classList.remove('selected');
        modeButton[1].classList.remove('selected');
        this.classList.add('selected');
        this.textContent === 'Easy' ? numSquares = 3 : numSquares = 6;
        reset();
    })
}

resetBtn.addEventListener('click', function(){
    reset();
})

function reset() {
    h1.style.backgroundColor = 'steelblue';
    resetBtn.textContent = 'New Colors';
    colors = randomGeneratedColor(numSquares);
    pickedColor = pickColor();
    displayColor.textContent = pickedColor;
    messageDisplay.textContent = "";
    for (var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = 'block';
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }
}

displayColor.textContent = pickedColor;

function pickColor(){
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}


for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener('click', function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            h1.style.backgroundColor = pickedColor;
            changeColor();
            messageDisplay.textContent = 'Correct';
            resetBtn.textContent = 'Play Again?'
        } else {
            this.style.backgroundColor = '#232323';
            messageDisplay.textContent = 'Try Again';

        }
    })

}
function changeColor(){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = pickedColor;
    }
}

function randomGeneratedColor(numSquares){
    var arr = [];
    for(var i = 0; i < numSquares; i++){
        arr.push(randomColor());
    }
    
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}