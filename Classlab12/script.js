// get the elements with class name 'description'
// querySelector will only select the first element
let desc = document.querySelector('.description')

// querySelectorAll selects all the elements
let desc_all = document.querySelectorAll('.description')

// get the element by id
let t = document.querySelector('#title')

// get elements by tag name, 'li'
let list_item = document.querySelectorAll('li')

// example 1:
// select the elements
let shape = document.querySelector(".shape")
let btnsquare = document.querySelector(".btnSquare")
let btnrectangle = document.querySelector(".btnRectangle")
let btncircle = document.querySelector(".btnCircle")

btncircle.addEventListener("click", function(){
    shape.textContent = "circle".toUpperCase()
    shape.className = "circle"
})

btnrectangle.addEventListener("click", function(){
    shape.textContent = "rectangle".toUpperCase()
    shape.className = "rectangle"
})

btnsquare.addEventListener("click", function(){
    shape.textContent = "Square".toUpperCase()
    shape.className = "square"
})