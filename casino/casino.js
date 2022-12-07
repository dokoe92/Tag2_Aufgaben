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
  if (wage > money ){
    if (radioValue == "colorRed" && red) {
      win = wage * 2;
      money = money + win;
      document.getElementById("money").innerHTML = money ;
    }
    if (radioValue == "colorBlack" && black) {
      win = wage * 2;
      money = money + win;
      document.getElementById("money").innerHTML = money;
    }
  } else {
    document.getElementById("result") += "<p>Not enough money!</p>";
  }

}
