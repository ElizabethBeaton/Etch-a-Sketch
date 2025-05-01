

let container = document.getElementById("grid-container");

for (let i = 1; i <= 256; i++) {  // 256 times, create a div. In css 640x640 makes it show row of 8
  let div = document.createElement("div");
  div.className = "grid-item";
  div.textContent = `Div ${String(i).padStart(3, "0")}`;   // added more digit placeholders to make sure grid is even and aligned
  div.style.margin = "2px"
  div.style.padding = "10px"

  // Make every 16th red
  div.style.backgroundColor = i % 16 === 0 ? "red" : "pink"; // if a multiple of 16, make red

    // turn div boxed green when hovered
  mouse(div)                              

  container.appendChild(div);
}

//pass div as a parameter to the mouse function and then call mouse(div) above because i want each div to respond to the mouseover event independently
function mouse(div) {                             
    div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "green"
})
}

function clicked() {              // when the button is clicked, provides two prompts. 
    const userInput = prompt("How many numbers of squares per side for your new grid? (1-20)");
    const userColourInput = prompt("What colour do you want the boxes? Blue or orange? ")



    clearGrid()
    const gridCount = parseInt(userInput); // convert string to number
    if (isNaN(gridCount) || gridCount < 1 || gridCount > 20) { // if not a number, less than 1 or more than 20
      alert("Please enter a valid number between 1 and 20.");
      clicked() // ask the question again
    }

    const squareSize  = 640 / gridCount // calc w and h of each square in the grid based on number is squares per rows user asked for
    for (let i = 1; i <= gridCount * gridCount; i++) {
        let div = document.createElement("div");
        div.className = "grid-item";
        div.textContent = `Div ${String(i).padStart(3, "0")}`; // added more digit placeholders to make sure grid is even and aligned
        div.style.margin = "2px";
        div.style.padding = "8px";
        div.style.textAlign = "center"
        pickColour(div, userColourInput); // calling function pickColour to set divs based on colour chosen in the userColourInput prompt
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;
        mouse(div)
        
        container.appendChild(div);
    }
}

const button = document.getElementById("button");
button.textContent = "Click here";
button.style.backgroundColor = "#fcf003";
button.style.border = "none"
button.style.padding = "16px";
button.style.marginTop = "60px"
button.style.fontSize = "20px"
button.style.marginBottom = "10px";
button.addEventListener("click", clicked);  

function clearGrid() {         // clears grid
    container.innerHTML = ""
}

function pickColour(div, userColourInput) {    // 
    const colour = userColourInput.toLowerCase();
    if (colour === "blue") {
        div.style.backgroundColor = "blue"
    } else if (colour === "orange") {
        div.style.backgroundColor = "orange";
    } else div.style.backgroundColor = "pink";
}
/*

when user clicks button, prompt comes. 
when number is written, grid clears.
use loop based on user input for how many times it loops and prints out the style for grid
*/


    

/*
challenge:
when the user clicks down, the mouse stops hovering, and then when the user clicks down again, it hovers.
idea is to create a picture. artsy*/


