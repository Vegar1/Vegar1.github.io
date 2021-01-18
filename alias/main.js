function randomWord() {
  var ordliste = ["Logaritme","Andregradsfunksjon","Infleksjonspunkt","Periferivinkel", "Sentralvinkel", "Korde", "Thalesetningen", "Monotoniegenskaper", "Origo", "Tangent", "Derivasjon", "Krumning", "Ekstremalpunkt", "Definisjonsmengde", "Verdimengde", "Vendepunkt", "Funksjon", "Vekstfart"];
  document.getElementById("alias").innerHTML = ordliste[Math.floor(Math.random() * ordliste.length)];
}
