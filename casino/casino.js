var money = 100;
document.getElementById("money").innerHTML = money;

function gamble() {
  // TODO
  let wage = document.getElementById("wager").value;
  let win;
  let radioValue = document.querySelector("input[type='radio'][name=color]:checked").getAttribute("id");

  console.log(radioValue)

  let randomNumber = Math.floor(Math.random()*100);
  let red = false;
  let black = false;
  let green = false;
  if (randomNumber < 48) {
    red = true;
    console.log("red: " + red);
  } 
  else if (randomNumber >= 48 && randomNumber < 96) {
    black = true;
    console.log("black: " + black);
  } else {
    green = true;
    console.log("green: " + green);
  }
  
  //Check if radioValue and Color is a win, if yes double wage
  let result = document.getElementById("result");
  let resultMSG = document.createTextNode("");
  result.textContent = "";
  if (money > wage && wager.value.length != 0){
    if (radioValue == "colorRed" && red) {
      win = wage * 2;
      money = money + win;
      document.getElementById("money").innerHTML = money ;
      resultMSG = document.createTextNode("RED WON");
      result.appendChild(resultMSG);
    }
    else if (radioValue == "colorBlack" && black) {
      win = wage * 2;
      money = money + win;
      document.getElementById("money").innerHTML = money;
      resultMSG = document.createTextNode("BLACK WON");
      result.appendChild(resultMSG);
    }
    else {  
      resultMSG = document.createTextNode("LOSE");
      result.appendChild(resultMSG);
    }
  }
  if (money < wage || money <= 0) {
    resultMSG = document.createTextNode("NOT ENOUGH MONEY");
    result.appendChild(resultMSG);
  }
}
