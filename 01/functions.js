
/*
anime({
    targets: ".quadrados",
    translateY: [1000,-100],
    //borderRadius: 50,
    duration: 3000,
    direction: "normal",
    loop: true,
    delay: anime.stagger(500),
    //rotate: 90,
    easing: "linear"
})
*/

var container = document.querySelector(".anime-container");

var l = 50;

for (var i = 0; i <= l; i += 1) {
  var x = anime.random(0, 1300);
  var y = 1000;

  var n = 1;
  
  for (var j = 0; j < n; j++) {
    var dot = document.createElement("div");
    dot.classList.add("dot");
    container.appendChild(dot);

    var size = anime.random(2, 5);
   
    dot.style.width = size + "px";
    dot.style.height = size + "px";
   
    dot.style.left = x + anime.random(-15, 15) + "px";
    dot.style.top = y + anime.random(-15, 15) + "px";
  
  
  }
}

anime({
  loop: true,
  easing: "linear",
  targets: document.querySelectorAll(".dot"),
 
  translateY: {
    value: -1100,
    
    duration: 1500,
    delay: anime.stagger(150)
  }
});


for (var i = 0; i <= l; i += 1) {
  var x = anime.random(0, 1300);
  var y = 1000;

  var n = 1;
  
  for (var j = 0; j < n; j++) {
    var dot = document.createElement("div");
    dot.classList.add("dot2");
    container.appendChild(dot);

    var size = anime.random(5, 10);
   
    dot.style.width = size + "px";
    dot.style.height = size + "px";
   
    dot.style.left = x + anime.random(-15, 15) + "px";
    dot.style.top = y + anime.random(-15, 15) + "px";
  
  
  }
}

anime({
  loop: true,
  easing: "linear",
  targets: document.querySelectorAll(".dot2"),
 
  translateY: {
    value: -1100,
    
    duration: 2000,
    delay: anime.stagger(100)
  }
});