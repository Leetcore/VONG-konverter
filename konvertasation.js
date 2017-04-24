var VONG = {
  counter: 0,
  timer: 500,
  className: "itsVONG",
  matchList: ['h1', 'h2', 'article p', 'p', 'span'],
  VONGliste: [
    {deutsch: "eine", vong: "1me"},
    {deutsch: "ein", vong: "1"]},
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
    // finde 1 inhalt
    var element = document.querySelector(VONG.matchList[VONG.counter] +':not(.'+ VONG.className +')')
    
    // finde mehr inhalt wenn 0 inhalt
    if (element == null ) {
      // wieder vong vorne
      if (VONG.counter == VONG.matchList.length) {
        VONG.counter = 0
      } else {
        VONG.counter++
      }
    } else {
      VONG.konversator(element)
    }
    setTimeout(VONG.start, VONG.timer)
  },
  konversator: function (element) {
    if (typeof(element) != 'undefined') { 
      for (var x = 0; x < VONGliste.length; x++) {
        element.textContent = element[0].textContent.split(' '+ VONGliste[x].deutsch +' ').join(' '+ VONGliste[x].vong +' ')
        element.textContent = element[0].textContent.split(' '+ VONGliste[x].deutsch +'.').join(' '+ VONGliste[x].vong +'.')
        // element.textContent = element[0].textContent.split(' '+ VONGliste[x].deutsch +'.').join(' '+ VONGliste[x].vong +'.')
        element.classList.add(VONG.className)
      }
    }
  }
}
