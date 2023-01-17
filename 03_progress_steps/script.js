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

// BT solution from video

const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
}