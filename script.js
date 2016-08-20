var startButton = document.getElementById('start-game');
var gameWord;

// Pobranie hasła po kliknięciu w przycisk Start
startButton.onclick = function getWord() {
  gameWord = prompt("Wpisz hasło do odgadnięcia:");
  gameWord = gameWord.toUpperCase();

  var length = gameWord.length;
  var hiddenWord = "";

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
    }
  }

  document.getElementById('game-word').innerHTML = hiddenWord;
};
