let numSquares=6;
let colors =[];
let clickedColor;

colors =generateRandomColors(numSquares);

let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();

let h1 = document.querySelector("h1");
let messageDisplay = document.querySelector("#message");
let resetBtn = document.querySelector("#reset");
let modeBtn = document.querySelectorAll(".mode");
let colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

init();
function init(){
    //mode button
    for(let i=0; i<modeBtn.length; i++){
        modeBtn[i].addEventListener("click",function(){
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent ==="Easy"? numSquares = 3: numSquares = 6;
        
            reset();
        });
        }
        //what happens to each square, setting up the squares
        for(let  i = 0; i< squares.length; i++){


            //add eventlistners to squares
            squares[i].addEventListener("click", function(){
                clickedColor = colors[i];
                //compare color to picked color
                if(clickedColor === pickedColor){
                    messageDisplay.textContent = "Correct";
                    changeColors(clickedColor);
                    h1.style.backgroundColor = clickedColor;
                    resetBtn.textContent = "Play Again";
                }
                else{
                    this.style.backgroundColor ="#232323";
                    messageDisplay.textContent ="Try Again";
                }
            });
            }
            reset();
}

function reset(){
      //generate a new random color
      colors = generateRandomColors(numSquares);
      //pick a new random color from array
      pickedColor = pickColor();
      //change the colordisplay  the squares on the page
      colorDisplay.textContent = pickedColor;
      messageDisplay.textContent = "";
      resetBtn.textContent="New Colors";
      //looping through the squares
      for(let  i = 0; i< squares.length; i++){
          squares[i].style.display ="block";
          //to check if its on easy mode
          if(colors[i]){
              squares[i].style.background =colors[i];
          }
          else{
              squares[i].style.display = "none";
          }
          squares[i].style.backgroundColor = colors[i];
      }
      h1.style.backgroundColor= "steelblue";
}
//Adding event listners to  the reset button

resetBtn.addEventListener("click", function(){
    //generate a new random color
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change the colordisplay  the squares on the page
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    this.textContent="New Colors";
    //looping through the squares
    for(let  i = 0; i< squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor= "steelblue";
});

function changeColors(color){
//loop through all squares
for(let  i = 0; i< squares.length; i++){
    squares[i].style.backgroundColor = color;
}
//change color to match all other color
}

 //generating random colors
 function pickColor(){
//pick a random number
let random = Math.floor(Math.random() * colors.length);
return colors[random];
 }
 function generateRandomColors(num){
     //make an array
     let arr =[];
     //add num random colors
     for(let i =0; i< num; i++){
         //get random color and push to array
         arr.push(randomColor());
     }
     // return array
     return arr;
 }

 function randomColor(){
     //pick a red from 0 t0 255
     let r = Math.floor(Math.random() * 256);
      //pick a green from 0 t0 255
      let g = Math.floor(Math.random() * 256);
       //pick a blue from 0 t0 255
       let b = Math.floor(Math.random() * 256);
       return "rgb("+ r + "," + g + "," + b + ")";
 }