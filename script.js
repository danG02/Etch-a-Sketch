const container = document.getElementById('container')
const reset = document.getElementById('reset')
const erase = document.getElementById('erase')
const color = document.getElementById('color')
const random = document.getElementById('random')

var randomColor = '#'+ Math.floor(Math.random()*16777215).toString(16)

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

makeRows(20, 20)

//making the divs change color when hover
container.addEventListener('mouseover', function(event) {
    event.target.style.background = "black"
})

//making the grid reset
reset.addEventListener('click', function() {
    container.style.color = "white"
})


//making the brush erase
erase.addEventListener('click', function (event) {
    container.addEventListener('mouseover', function(event) {
        event.target.style.background = "white"
    })
})

//changing the color of the mouse
const colorSelect = () => {
    let squares = document.querySelectorAll('#container div')
    const style = getComputedStyle(document.body)
    color.addEventListener('click', () => {
        squares.forEach((squares) => {
            squares.addEventListener('mouseover', () => {
                document.documentElement.style.setProperty('--hoverColor', ('#' + randomColor))
                document.documentElement.style.setProperty('--sqaureColor', ('#' + randomColor))
            })
        })
    })
}



//making random colors appear **makes only one color appear :(

random.addEventListener('click', function (event) {
    container.addEventListener('mouseover', function (event) {
        event.target.style.color = randomColor
    })
})

const randomColor = () => {

}