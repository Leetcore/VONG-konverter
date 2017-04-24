var VONG = {
  counter: 0,
  timer: 500,
  className: "itsVONG",
  matchList: ['h1', 'h2', 'h3', 'h4', 'h5', 'article p', 'p', 'span'],
  VONGliste: [
    {deutsch: "eine", vong: "1"},
    {deutsch: "eins", vong: "1"},
    {deutsch: "einen", vong: "1"},
    {deutsch: "einem", vong: "1"},
    {deutsch: "ein", vong: "1"},
    {deutsch: "der", vong: "de"},
    {deutsch: "die", vong: "de"},
    {deutsch: "das", vong: "de"},
    {deutsch: "was", vong: "watt"},
    {deutsch: "bist", vong: "bimst"},
    {deutsch: "von", vong: "vong"},
    {deutsch: "vom", vong: "vong"},
    {deutsch: "bin", vong: "bims"},
    {deutsch: "bist", vong: "bimst"},
    {deutsch: "mein", vong: "meim"},
    {deutsch: "freund", vong: "Freumd"},
    {deutsch: "ist", vong: "isd"},
    {deutsch: "sprache", vong: "sprech"},
    {deutsch: "habe", vong: "han"},
    {deutsch: "haben", vong: "hannen"},
    {deutsch: "hab", vong: "han"},
    {deutsch: "hat", vong: "han"},
    {deutsch: "nicht", vong: "nid"},
    {deutsch: "gut", vong: "vong Nicigkeit her"},
    {deutsch: "mann", vong: "Boi"},
    {deutsch: "frau", vong: "Gurl"},
    {deutsch: "angela", vong: "Angelo"},
    {deutsch: "geld", vong: "Money"},
    {deutsch: "merkel", vong: "Merte"},
    {deutsch: "wir", vong: "sims"},
    {deutsch: "ihr", vong: "seit"},
    {deutsch: "sie", vong: "sims"},
    {deutsch: "ik", vong: "ick"},
    {deutsch: "ent", vong: "enten"},
    {deutsch: "ver", vong: "fer"},
    {deutsch: "ten", vong: "den"},
    {deutsch: "keit", vong: "keitigen"},
    {deutsch: "tum", vong: "tumm"},
    {deutsch: "fli", vong: "fly"},
    {deutsch: "tion", vong: "zon"}
  ],
  start: function () {
    // finde 1 inhalt wo nicht vong ist
    for (var matchIndex = 0; matchIndex < VONG.matchList.length; matchIndex++) {
      var element = document.querySelector(VONG.matchList[matchIndex] +':not(.'+ VONG.className +')')
      if (element != null) {
        VONG.konversator(element)
      }
    }

    // round round baby round round
    setTimeout(VONG.start, VONG.timer)
  },
  konversator: function (element) {
    if (typeof(element) != 'undefined') { 
      for (var x = 0; x < VONG.VONGliste.length; x++) {
        element.innerHTML = element.innerHTML.split(VONG.VONGliste[x].deutsch.substring(0,1).toUpperCase() + VONG.VONGliste[x].deutsch.substring(1, VONG.VONGliste[x].deutsch.length - 1)).join(VONG.VONGliste[x].vong.substring(0,1).toUpperCase() + VONG.VONGliste[x].vong.substring(1, VONG.VONGliste[x].vong.length - 1))
        element.innerHTML = element.innerHTML.split(' '+ VONG.VONGliste[x].deutsch).join(' '+ VONG.VONGliste[x].vong)
        element.classList.add(VONG.className)
      }
    }
  }
}
VONG.start()
