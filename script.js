const container = document.getElementById("grid-container")

for (let i = 0; i <= 16; i++ ){
    const div = document.createElement("div");
    div.className = "grid-item";
    div.textContent = `Div ${i}`;
    div.style.backgroundColor = "pink"
    container.appendChild(div);
}


