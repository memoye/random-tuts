// const handleOnMouseMove = e => {
//     const { currentTarget: target } = e //destructuring currentTarget from e and assigning it to target

//     // Get the mouse position relative to the target element.
//     const rect = target.getBoundingClientRect(),
//         x = e.clientX - rect.left,
//         y = e.clientY - rect.top

//     // set custom properties for x and y coordinates
//     target.style.setProperty('--mouse-x', `${x}px`)
//     target.style.setProperty('--mouse-y', `${y}px`)
// }

// for (const card of document.querySelectorAll('.card')) {
//     card.addEventListener('mousemove', (e) => {
//         handleOnMouseMove(e)
//     })
// }

document.getElementById('cards').onmousemove = e => {
    for (const card of document.getElementsByClassName('card')) {
        const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top

        // set custom properties for x and y coordinates
        card.style.setProperty('--mouse-x', `${x}px`)
        card.style.setProperty('--mouse-y', `${y}px`)
    }
}
