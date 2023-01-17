// My attempt prior to watching solution video:

const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const circles = document.querySelectorAll('.circle');
const progressBar = document.querySelector('.progress');

let index = 1;
let progressBarFill = 0;

prev.addEventListener('click', () => {
    index--;
    progressBarFill -= 33;
    
    if (index <= 1) {
        prev.disabled = true;
    }
    for (let i = 0; i <= index; i++) {
        circles[i].classList.add('active');
        if (i == index) {
            circles[i].classList.remove('active');
        }
    }
    next.disabled = false;
    progressBar.style.width = `${progressBarFill}%`;
})
next.addEventListener('click', () => {
    index++;
    progressBarFill += 33;
    
    if (index >= circles.length) {
        next.disabled = true;
    }
    for (let i = 0; i < index; i++) {
        circles[i].classList.add('active');
    }
    prev.disabled = false;
    progressBar.style.width = `${progressBarFill}%`;
})
