var ordliste = ["Foton", "Bølgelengde", "UV-stråling", "Radioaktiv Stråling", "Tsjernobyl", "Røntgenstråling", "Synlig Lys", "Ioniserende Stråling", "Alfastråling", "Betastråling", "Proton", "Nøytron", "Elektron", "Halveringstid", "Kreft", "Energinivå"]
function randomWordIndependent() {
  document.getElementById("alias").innerHTML = ordliste[Math.floor(Math.random() * ordliste.length)];
}

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function randomWordDependent() {
	var ordStokk = shuffle(ordliste);
	if (ordStokk.length !== 0) {
		document.getElementById("alias").innerHTML = ordStokk.pop();
	} else {
		document.getElementById("alias").innerHTML = "Ferdig!";
	}

	}
  
