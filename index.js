

//All Nums over 2 equals Scissor

function PlayerChoice(){

  const num = prompt();
  let answer = "";

if(num == 0){
  answer = "Rock";
}else if(num == 1){

answer = "Paper";
}else{

  answer = "Scissor";
}

return answer;
}



function computerChoice(){

  let random = Math.floor(Math.random() * 3);
let answer = "";

if(random == 0){
  answer = "Rock";
}else if(random == 1){

answer = "Paper";
}else{

  answer = "Scissor";
}

return answer;
}



function checkResult(){

const cc = computerChoice();
const pc = PlayerChoice();

let ergebnis = "";

if(cc == pc){

  ergebnis = "Unentschieden";
}else if(cc == "Rock"&& pc == "Scissor"){

  ergebnis = "Computer Won";
}else if(cc == "Scissor"&& pc == "Paper"){

  ergebnis = "Computer Won";
}else if(cc == "Paper"&& pc == "Rock"){

  ergebnis = "Computer Won";
}else{
  ergebnis = "Player Won";

}

return ergebnis;


}
for(let i = 0; i < 5; i++){
console.log(checkResult());
}