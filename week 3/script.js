
function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    backgroundrgb(80,173,195);
  
    //plate
    stroke(10)
    strokeWeight(10)
    fill(100)
    rect (100,50,300,200)
    
    //wasabi
    strokeWeight(0)
    fill(144, 238, 144)
    ellipse(130, 100, 40, 30);
    
    //sushi shadow
    strokeWeight(0)
    fill(60)
    ellipse(260, 170, 210, 140);
    
    // Sushi rice (rectangle)
    strokeWeight(1)
    fill(255, 255, 255);
    ellipse(250, 150, 210, 140);
    
    //salmon
    fill(250, 128, 114);
    ellipse(250, 120, 200, 100)
    
    //chopstick2 shadow
    stroke(100)
    strokeWeight(10)
    line(65,50,70,200) 
    
    //chopstick2
    stroke(222, 184, 135)
    strokeWeight(10)
    line(65,50,65,200)
    
    //chopstick1 shadow
    stroke(100)
    strokeWeight(10)
    line(20,50,25,200)
    
     //chopstick1
    stroke(222, 184, 135)
    strokeWeight(10)
    line(20,50,20,200)
  
  }