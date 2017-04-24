var VONG = {
  counter: 0,
  timer: 500,
  className: "itsVONG",
  matchList: ['h1', 'h2', 'article p', 'p', 'span'],
  VONGliste: [
    {deutsch: "eine", vong: "1me"},
    {deutsch: "ein", vong: "1"},
    {deutsch: "von", vong: "vong"},
    {deutsch: "bist", vong: "bimst"},
    {deutsch: "vom", vong: "vong"},
    {deutsch: "von", vong: "vong"},
    {deutsch: "bin", vong: "bims"},
    {deutsch: "bist", vong: "bimst"},
    {deutsch: "mein", vong: "meim"},
    {deutsch: "sprache", vong: "sprech"},
    {deutsch: "habe", vong: "han"},
    {deutsch: "hab", vong: "han"}, 
    {deutsch: "wir", vong: "sims"},
    {deutsch: "ihr", vong: "seit"},
    {deutsch: "sie", vong: "sims"}
  ],
  start: function () {
    // finde 1 inhalt wo nicht vong ist
    var element = document.querySelector(VONG.matchList[VONG.counter] +':not(.'+ VONG.className +')')
    
    // finde mehr inhalt
    if (element == null ) {
      // wieder vong vorne
      if (VONG.counter == VONG.matchList.length) {
        VONG.counter = 0
      } else {
        // finde nächsten match
        VONG.counter++
      }
    } else {
      // do magic
      VONG.konversator(element)
    }
    
    // round round baby round round
    setTimeout(VONG.start, VONG.timer)
  },
  konversator: function (element) {
    if (typeof(element) != 'undefined') { 
      for (var x = 0; x < VONG.VONGliste.length; x++) {
        element.innerHTML = element.innerHTML.split(VONG.VONGliste[x].deutsch.substring(0,1).toUpperCase() + VONG.VONGliste[x].deutsch.substring(1, VONG.VONGliste[x].deutsch.length - 1) +' ').join(' '+ VONG.VONGliste[x].vong +' ')
        element.innerHTML = element.innerHTML.split(' '+ VONG.VONGliste[x].deutsch +' ').join(' '+ VONG.VONGliste[x].vong +' ')
        element.innerHTML = element.innerHTML.split(' '+ VONG.VONGliste[x].deutsch +'.').join(' '+ VONG.VONGliste[x].vong +'.')
        element.classList.add(VONG.className)
      }
    }
  }
}
VONG.start()
