// My attempt prior to watching solution video. Fully working but h3 within div snaps to size as it's expanding.

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener('click', (el) => {
        panels.forEach((e) => {
            e.classList.remove('active');
        })
        panel.classList.add('active');
    })
})

// Brad Traversy solution:

// const panels = document.querySelectorAll('.panel')

// panels.forEach((panel) => {
//     panel.addEventListener('click', () => {
//         removeActiveClasses()
//         panel.classList.add('active')
//     })
// })

// function removeActiveClasses() {
//     panels.forEach(panel => {
//         panel.classList.remove('active')
//     })
// }