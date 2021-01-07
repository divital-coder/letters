//create grid

const container = document.querySelector(".lower");
function createGrid(){
  for(let a = 0 ;a<25;a++){
    let newBox = document.createElement("div");
    newBox.setAttribute("class","box");
    container.appendChild(newBox);
  }
}
createGrid();

// selecting colors and storing in var
const colorList = document.querySelectorAll(".color-box");
const boxes = document.querySelectorAll(".box");
let color;
colorList.forEach(function(input){
  input.addEventListener("click",function(){
    color = input.getAttribute("id");
  });
});
boxes.forEach(function(input){
  input.addEventListener("mousemove",function(){
    input.style.setProperty("background-color",color);
  })});

// suggest letters
let letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const letter = document.querySelector("span");
letter.innerHTML =letters[Math.floor(Math.random() * 26)];

// down-up coloring
