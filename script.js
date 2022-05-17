const container = document.getElementById('container');
const setGridButton = document.getElementById('setGridButton');

function reset() {
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

setGridButton.addEventListener('click', () => {
    let size = window.prompt("Set grid size", "16");

    reset();

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);

        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = "black";
        })
    }
})