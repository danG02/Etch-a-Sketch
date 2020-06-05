const container = document.getElementById('container')
const reset = document.getElementById('reset')
const erase = document.getElementById('erase')
const color = document.getElementById('color')

//this is the function to create multple grids and cols at the same time w/o C&P divs
const makeRows = (rows, cols) => {
    container.style.setProperty('--grid-rows',  rows)
    container.style.setProperty('--grid-cols', cols)
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div')
        //cell.innerText = (c + 1)  this is to show the number of each square
        container.appendChild(cell).className = "grid-item"
    }
}

makeRows(16, 16)

//making the divs change color when hover
container.addEventListener('mouseover', function(event) {
    event.target.style.background = "red"
})

//making the grid reset



//making the brush erase
erase.addEventListener('click', function (event) {
    container.addEventListener('mouseover', function(event) {
        event.target.style.background = "white"
    })
})

//changing the color of the mouse
color.addEventListener('click', function (event) {
    
})



