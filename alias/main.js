function randomWord() {
  var ordliste = ["Kinetisk Energi", "Potensiell Energi", "Mekanisk Energi", "Energi", "Arbeid", "Virkningsgrad", "Effekt", "Joule", "Kraft", "Watt", "Vinkel", "Fart", "Akselerasjon", "Friksjonsarbeid"];
  document.getElementById("alias").innerHTML = ordliste[Math.floor(Math.random() * ordliste.length)];
}
