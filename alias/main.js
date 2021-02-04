var ordliste = ["Kinetisk Energi", "Potensiell Energi", "Mekanisk Energi", "Energi", "Arbeid", "Virkningsgrad", "Effekt", "Joule", "Kraft", "Watt", "Vinkel", "Fart", "Akselerasjon", "Friksjonsarbeid"];
for(let i = ordliste.length — 1; i > 0; i--){
  const j = Math.floor(Math.random() * i)
  const temp = ordliste[i]
  ordliste[i] = ordliste[j]
  ordliste[j] = temp
}

function randomWord() {
  document.getElementById("alias").innerHTML = ordliste.shift();  
}
