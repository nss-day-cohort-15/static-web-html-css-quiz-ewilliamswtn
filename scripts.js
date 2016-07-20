var card1 = document.getElementById('cardTop1');
var maxHeight = 0;




window.onresize = function() {

  if (card1height > card2height && card1height > card3height && card1height > card4height) {
    card2.setAttribute("style", "width:card1height")
    card3.setAttribute("style", "width:card1height")
    card4.setAttribute("style", "width:card1height")

    else if (card2height > card1height && card2height > card3height && card2height > card4height) {
      card2.setAttribute("style", "width:card2height")
      card3.setAttribute("style", "width:card2height")
      card4.setAttribute("style", "width:card2height")

    }


  }


  card1.setAttribute("style", "width:900px");
};