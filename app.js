var num = 0;
var manipulateEl = document.getElementById('value');
const increaseBtn = document.querySelector('.increase');
const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');
document.getElementById('value').textContent = num;

increaseBtn.addEventListener('click', function() {
    increaseNumber();
})

decreaseBtn.addEventListener('click', function() {
    decreaseNumber();
})

resetBtn.addEventListener('click', function() {
    resetNumber();
})

function increaseNumber () {
    num += 1;
    document.getElementById('value').textContent = num
    if(num > 0) {
        document.getElementById('value').style.color = 'hsl(125, 67%, 44%)'
    } else if(num == 0) {
        manipulateEl.style.color = 'hsl(209, 61%, 16%)'
    } 
}

function decreaseNumber () {
    num -= 1;
    document.getElementById('value').textContent = num
    if(num < 0) {
        document.getElementById('value').style.color = 'red'
    } else if(num == 0) {
        manipulateEl.style.color = 'hsl(209, 61%, 16%)'
    }
}

function resetNumber () {
    num = 0;
    document.getElementById('value').textContent = num 
    if(num == 0) {
        manipulateEl.style.color = 'hsl(209, 61%, 16%)'
    }
}
