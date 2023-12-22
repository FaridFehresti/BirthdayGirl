// Get the element by ID

// Add the "no-display" class to the element


var passwordInput = document.getElementById("password");
var container = document.getElementById("main-container");
var inputContainer = document.querySelector(".login-container");
container.classList.add("no-display");
// Event listener for button click
document.getElementById("button").addEventListener("click", function () {
    if (passwordInput.value === "lovelysami") {
        // If true, hide input container and show myContainer
        container.classList.remove("no-display");
        inputContainer.remove()
        backgroundMusic.play();

        
    }
});
passwordInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
            if (passwordInput.value === "lovelysami") {
                // If true, hide input container and show myContainer
                container.classList.remove("no-display");
                inputContainer.remove()
                backgroundMusic.play();

                
            }
    }
});