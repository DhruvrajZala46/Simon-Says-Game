let gameSeq = [];
let userSeq = [];

let buttons = ["red","green","yellow","orange"];

let started = false;
let level = 0;
let high = [];
let max=0;

let start = document.querySelector('.start');
let scoreboard = document.querySelector('.score-board');
let body = document.querySelector('body');
let highestScore = document.querySelector('.highest-score');

//Step 1 (starting the Game)
start.addEventListener("click",function(){
  if(started === false)
  {
    console.log("game is started");
    started = true;
    levelUp();
  }
});

//step 3 (make button flash)
function buttonFlash(btn)
{
  btn.classList.add("flash");

  setTimeout(function(){
    btn.classList.remove("flash");
  },300);
}


//step 2 (select random button)
function levelUp(){

  userSeq = [];
  level++;
  high.push(level);

  for(let i=0;i<high.length;i++)
    {
       if(high[i] > max)
       {
        max = high[i];
       }
    }
    
  highestScore.innerHTML=`Highest Score:${max}`;

  scoreboard.innerText=`Level ${level}`;

 let randomIndex = Math.floor(Math.random() * 4);
 let randomColor = buttons[randomIndex];
 let randomButton = document.querySelector(`.${randomColor}`);

  buttonFlash(randomButton);

  gameSeq.push(randomColor);
  
}




//step 6 (compare userMove and computerMove)
function check(idx)
{
 if(userSeq[idx] === gameSeq[idx])
 {
  if(userSeq.length == gameSeq.length)
  {
    setTimeout(levelUp,1000);
  }
 }
 else
 {
  scoreboard.innerHTML=`Game Over! Your score was <b>${level}</b> press start key to start again`;
  reset();
 }
}

//step 5 (select button details which user selected)
function btnPress()
{
  let btn = this;
  buttonFlash(btn);
  let userColor = btn.getAttribute("id");

  
  userSeq.push(userColor);

  check(userSeq.length-1);

}

//step 4 (select button by user)

let allButtons = document.querySelectorAll(".btn");
for(btn of allButtons)
{
  btn.addEventListener("click",btnPress);
}


//step 7 (reset Game)
function reset()
{
  started = false;
  gameSeq=[];
  userSeq= [];
  level = 0;
  
  body.classList.add("alert");

  setTimeout(function(){
    body.classList.remove("alert");
  },1000)
}
