var cards = Array.prototype.slice.call(document.querySelectorAll(".card"));

cards.forEach(function (card) {
  card.classList.add("invisible");
});
cards[0].classList.remove("invisible");

document.querySelector(".next").addEventListener("click", function () {
  cards.forEach(function (card) {
    for (i = 0; i < card.childNodes.length; i++) {if (window.CP.shouldStopExecution(0)) break;
      card.childNodes[i].classList.remove("animate");
      card.childNodes[i].classList.remove("animateReverse");
    } window.CP.exitedLoop(0);
  });
  for (var i = 0; i < cards.length; i++) {if (window.CP.shouldStopExecution(1)) break;
    var card = cards[i];
    if (!card.classList.contains("invisible")) {
      if (cards.indexOf(card) + 1 < cards.length) {
        card.classList.add("invisible");
        cards[cards.indexOf(card) + 1].classList.remove("invisible");
        break;
      } else {
        cards[cards.length - 1].classList.add("invsisible");
        cards[0].classList.remove("invisible");
      }
    }
  } window.CP.exitedLoop(1);
});
document.querySelector(".previous").addEventListener("click", function () {
  cards.forEach(function (card) {
    for (i = 0; i < card.childNodes.length; i++) {if (window.CP.shouldStopExecution(2)) break;
      card.childNodes[i].classList.remove("animate");
      card.childNodes[i].classList.remove("animateReverse");
    } window.CP.exitedLoop(2);
  });
  for (var i = cards.length - 1; i >= 0; i--) {if (window.CP.shouldStopExecution(3)) break;
    var card = cards[i];
    if (!card.classList.contains("invisible")) {
      if (cards.indexOf(card) - 1 >= 0) {
        card.classList.add("invisible");
        cards[cards.indexOf(card) - 1].classList.remove("invisible");
        break;
      } else {
        cards[0].classList.add("invisible");
        cards[cards.length - 1].classList.remove("invisible");
      }
    }
  } window.CP.exitedLoop(3);
});
document.querySelector(".random").addEventListener("click", function () {
  cards.forEach(function (card) {
    for (i = 0; i < card.childNodes.length; i++) {if (window.CP.shouldStopExecution(4)) break;
      card.childNodes[i].classList.remove("animate");
      card.childNodes[i].classList.remove("animateReverse");

    }window.CP.exitedLoop(4);
  });
  shuffle(cards);
});
document.querySelector(".switch").addEventListener("click", function () {
  cards.forEach(function (card) {
    for (i = 0; i < card.childNodes.length; i++) {if (window.CP.shouldStopExecution(5)) break;
      card.childNodes[i].classList.remove("animate");
      card.childNodes[i].classList.remove("animateReverse");

    }window.CP.exitedLoop(5);
  });
  cards.forEach(function (card) {
    card.childNodes.forEach(function (div) {
      if (!div.classList.contains("switched")) {
        if (div.classList.contains('front')) {
          div.classList.remove('front');
          div.classList.add('back');
          div.classList.add('switched');
        } else if (div.classList.contains('back')) {
          div.classList.remove('back');
          div.classList.add('front');
          div.classList.add('switched');
        }
      } else {
        if (div.classList.contains('front')) {
          div.classList.remove('front');
          div.classList.add('back');
          div.classList.remove('switched');
        } else if (div.classList.contains('back')) {
          div.classList.remove('back');
          div.classList.add('front');
          div.classList.remove('switched');
        }
      }
    });
  });
});
cards.forEach(function (card) {
  card.addEventListener("click", function () {
    if (!card.childNodes[0].classList.contains("animate")) {
      for (var i = 0; i < card.childNodes.length; i++) {if (window.CP.shouldStopExecution(6)) break;
        card.childNodes[i].classList.remove("animateReverse");
        card.childNodes[i].classList.add("animate");
      }window.CP.exitedLoop(6);
    } else {
      for (var i = 0; i < card.childNodes.length; i++) {if (window.CP.shouldStopExecution(7)) break;
        card.childNodes[i].classList.remove("animate");
        card.childNodes[i].classList.add("animateReverse");
      }window.CP.exitedLoop(7);
    }
  });
});
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {if (window.CP.shouldStopExecution(8)) break;
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }window.CP.exitedLoop(8);
  a.forEach(function (card) {
    card.classList.add("invisible");
  });
  a[0].classList.remove('invisible');
  return a;
}
