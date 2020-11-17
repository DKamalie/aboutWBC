var coffee = document.getElementById('coffees');
var sugar = document.getElementById('sugars');
var milk = document.getElementById('milks');
var mug = document.getElementById('all');
var cup = document.getElementById('cup');
var frame = document.getElementById('frame1');
var skull = document.getElementById('skull');


// COFFEE
coffee.addEventListener("mouseover", coffeeHoverFunc);

function coffeeHoverFunc() {
  frame1.style.transform = "translate(480px)";
  frame1.style.transition = "1s";
  cup.style.stroke = "brown";
  mug.style.fill = "#e05f14";
  skull.style.top ="4%";
  skull.style.left ="30%";
  skull.transition ="2s";
}

//SUGAR
sugar.addEventListener("mouseover", sugarHoverFunc);

function sugarHoverFunc() {
  frame1.style.transform = "translate(870px)";
  frame1.style.transition = "1s";
  cup.style.stroke = "yellow";
  mug.style.fill = "#d38a56";
}

//MILK
milk.addEventListener("mouseover", milkHoverFunc);

function milkHoverFunc() {
  frame1.style.transform = "translate(1220px)";
  frame1.style.transition = "1s";
  cup.style.stroke = "white";
  mug.style.fill = "#efbd7c";

}

var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// var x = Math.random() * window.innerWidth;
// var y = Math.random() * window.innerHeight;
var mouse = {
  x: undefined,
  y: undefined
}
var maxRadius = 40;
//var minRadius = ;



var colorArray = [
  '#794228',
  '#da6d42',
  '#84240c',
  '#372214',
  '#000000'
];

window.addEventListener('mousemove', function() {
  mouse.x = event.x;
  mouse.y = event.y;
  console.log(mouse);
})

window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  init();
})

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
  this.minRadius  = radius;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, 2*Math.PI, false);
    c.fillStyle = this.color;

    c.fill();

  }
  this.update = function() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    };

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    };
    this.x += this.dx;
    this.y += this.dy;

    //interactivity
    if ( mouse.x - this.x < 100 &&
      mouse.x -this.x > -100 &&
      mouse.y -this.y <100 &&
      mouse.y -this.y > -100 ) {
        if (this.radius < maxRadius) {
          this.radius += 1;
        }

    }
    else if (this.radius > this.minRadius){
      this.radius -= 1;
    }

    this.draw();

  }
}


var circleArray = [];

function init() {
  circleArray = [];
  console.log(circleArray);

  for (var i = 0; i < 500; i++) {
    var radius = Math.random() * 3 + 1;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = Math.random() - 0.5 ;
    var dy = Math.random() - 0.5 ;

    circleArray.push(new Circle(x, y, dx, dy, radius));

  }
}
function  animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }


}
  animate();
  init();


  // columns
  function disp() {
    document.getElementById('para1').style.display = "inline";
    document.getElementById('para2').style.display = "none";
    document.getElementById('para3').style.display = "none";
  }
  function disp1() {
    document.getElementById('para2').style.display = "inline";
    document.getElementById('para1').style.display = "none";
    document.getElementById('para3').style.display = "none";
  }

function disp2() {
  document.getElementById('para3').style.display = "inline";
  document.getElementById('para1').style.display = "none";
  document.getElementById('para2').style.display = "none";
}
