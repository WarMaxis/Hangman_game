var startButton = document.getElementById('start-game');
var gameWord;

// Pobranie hasła po kliknięciu w przycisk Start
startButton.onclick = function getWord() {
  gameWord = prompt("Wpisz hasło do odgadnięcia:");
  gameWord = gameWord.toUpperCase();

  var length = gameWord.length;
  var hiddenWord = "";

  if (gameWord.length == 0) {
    alert("Wpisz hasło!");
  }
  else {
    for (i = 0; i < length; i++) {
      if (gameWord.charAt(i) == " ") {
        hiddenWord = hiddenWord + " ";
      }
      else if (isNaN(gameWord.charAt(i)) == false) {
        alert("Hasło nie może zawierać cyfr!\nWpisz nowe hasło.");
        break;
      }
      else {
        hiddenWord = hiddenWord + "-";
        document.getElementById('start-game').style.visibility = "hidden";
        document.getElementById('game-progress').style.visibility = "visible";
        document.getElementById('game-keyboard').style.visibility = "visible";
      };
    };
  };

  document.getElementById('game-word').innerHTML = hiddenWord;
};

function whatLetter(i) {
  console.log(i);
}
