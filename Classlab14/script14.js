// collect the right and left buttons
const btnright = document.querySelector(".btnright")
const btnleft = document.querySelector(".btnleft")
// define a function to move scroll the photo gallery by the number of pixels
function scrollGallery(pixels){
    document.querySelector('div.gallerycontainer').scrollBy(
        {
            left: pixels,
            behavior: "smooth"
        }
    )
}
// add event to each button when clicked
btnright.addEventListener("click", function(){
    scrollGallery(508)
})
btnleft.addEventListener("click", function(){
    scrollGallery(-508)
})

// form events
// get the elements
const myForm = document.querySelector("#myForm")
const msg = document.querySelector(".msg")
const passwordInput = document.querySelector("#password")
const passwordError = document.querySelector("#passwordError")
const submitbtn = document.querySelector(".submitbtn")
const passwordmsg = document.querySelector(".passwordmsg")

// disable the submit button
window.addEventListener("load", function(){
    submitbtn.disabled = true
    submitbtn.classList = "disablebtn"
})

// add event listener for the input of the password
passwordInput.addEventListener('input', function(){
    // check the validity of the password as the user types
    const password = passwordInput.value
    if(password.length < 8){
        passwordError.textContent = 'Password must be 8+ characters'
        submitbtn.disabled = true
        submitbtn.classList = "disablebtn"
        passwordmsg.style.display = "none"
    }
    else{
        // clear the error message
        passwordError.textContent = ""
        // enable login button
        submitbtn.disabled = false
        submitbtn.classList = "submitbtn"
        password.style.display = "block"
    }
})
// add event listener for the submit form
myForm.addEventListener("submit", function(event){
    // prevent the default reset of the form data
    event.preventDefault()

    //perform form validation
    const usernameInput = document.querySelector("#username")
    const username = usernameInput.value

    if(username.trim()===""){
        msg.textContent = "Please enter a username"
        return
    }
    msg.textContent = `Welcome to JS forms, ${username}`

    // clear the username input field
    usernameInput.value = ""
})
