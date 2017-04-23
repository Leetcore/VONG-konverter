var VONG = {
  timer: 500,
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
  ],
  start: function () {
    // finde inhalt
    VONG.konversator(element)
    setTimeout(VONG.start, VONG.timer)
  },
  konversator: function (element) {
    if (typeof(element) != 'undefined') { 
      for (var x = 0; x < VONGliste.length; x++) {
        element.innerHTML = element[0].innerHTML.split(' '+ VONGliste[x].deutsch +' ').join(' '+ VONGliste[x].vong +' ')
        element.classList.add('itsVONG')
      }
    }
  }
}
