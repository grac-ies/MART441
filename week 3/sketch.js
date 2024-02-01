
   //colors!
   var r;
   var g;
   var b;
   var z;
   
   //wasabi 
   var wa = 130;
   var was = 90;
   var wasa = 30;
 
   //wasabi speed :)
   var rspeed = 5;
   var gspeed = 9;
   var bspeed = 2;
   var zspeed = 1;

   //chopsticks are growing??? and skrinking i guess
   var chopstick1a = 200;
   var chopstick2b = 200; 

function setup() {
  createCanvas(400, 400);
  r = random(255);
  g = random(255);
  b = random(255);
  z = random(255);
  }
  
  function draw() {
    background(80, 173, 195);
    r = (r + rspeed) % 500;
    g = (g + gspeed) % 500;
    b = (b + bspeed) % 500;
    z = (z + zspeed) % 500;
    //pretty sure the % 500 means how many colors and how fast?
  
    strokeWeight(0);
    fill(r, g, b, z);
    text("Grace Smith", 270, 390);
    strokeWeight(0);
    fill(r, g, b, z);
    textSize(20)
    text('cats delight',20,30);
   
  
    //plate
    stroke(10);
    strokeWeight(10);
    fill(100);
    rect (100,50,300,200);
    
    //wasabi, this moves up with "w" and down with "s"
    strokeWeight(0);
    fill(144, 238, 144);
    circle(wa, was, wasa);

    //sushi shadow
    strokeWeight(0);
    fill(60);
    ellipse(260, 170, 210, 140);
    
    // Sushi rice
    strokeWeight(1);
    fill(255, 255, 255);
    ellipse(250, 150, 210, 140);
    
    //salmon
    fill(250, 128, 114);
    ellipse(250, 120, 200, 100);
    
    moveChopsticks();

    //chopstick2 shadow
    stroke(100);
    strokeWeight(10);
    line(65,50,70,chopstick2b);

    //chopstick2
    stroke(222, 184, 135);
    strokeWeight(10);
    line(65,50,65,chopstick2b);
    
    //chopstick1 shadow
    stroke(100);
    strokeWeight(10);
    line(20,50,25,chopstick1a);
    
     //chopstick1
    stroke(222, 184, 135);
    strokeWeight(10);
    line(20,50,20,chopstick1a);
  
  }
// this function took me way too long
  function keyPressed() {
    if (key == "w") {
      was -= 5;
    } else if (key == "s")  
    {
      was += 5;
    }
  }
// i think grouping the shadows so they also move is a cool look
  function moveChopsticks() {
      // Randomly update chopstick positions
      chopstick1a += random(-2,2); // Randomly move chopstick1 vertically
      chopstick2b -= random(-2,2); // Randomly move chopstick2 vertically

  }
  