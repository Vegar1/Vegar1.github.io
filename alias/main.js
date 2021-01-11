function randomWord() {
  var ordliste = ["Stivelse","Energi","Glukose","Plante","Protein","Dyr","Karbohydrat","Fisk","Monosakkarid","Blod","Cellulose","Sukker","Kalori","Organisk","Næringsstoff","Uorganisk","Fett","Insulin","Vitamin","Sportsdrikk","Kostfiber","Sjokolade","Salt","Fotosyntese","Celleånding","Hormon","Enzym","Omega-3","Umettet fett","Mettet fett","D-vitamin","C-vitamin","Tynntarm"];
  document.getElementById("alias").innerHTML = ordliste[Math.floor(Math.random() * ordliste.length)];
}
