const container = document.getElementById("grid-container");

for (let i = 1; i <= 256; i++) {  // 256 times, create a div. In css 640x640 makes it show row of 8
  const div = document.createElement("div");
  div.className = "grid-item";
  div.textContent = `Div ${String(i).padStart(3, "0")}`;   // added more digit placeholders to make sure grid is even and aligned
  div.style.margin = "2px"
  div.style.padding = "10px"

  // Make every 16th red
  div.style.backgroundColor = i % 16 === 0 ? "red" : "pink"; // if a multiple of 16, make red

    // turn div boxed green when hovered
  div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "green"
})

  container.appendChild(div);
}
