function hover(alphaV){
  shft = 272
  
    push()
  
  noFill()
  stroke(220, 0, 0)
  strokeWeight(3)
    //up button
  if(dist(mouseX,mouseY,120,60 + shft)<20){
    ellipse(120,60 + shft,40);
  }
  //down button
  if(dist(mouseX,mouseY,120,130 + shft)<20){
    ellipse(120,130 + shft,40);
  }
  //left button
  if(dist(mouseX,mouseY,80,95 + shft)<20){
    ellipse(80,95 + shft,40);
  }
  //right button
  if(dist(mouseX,mouseY,160,95 + shft)<20){
    ellipse(160,95 + shft,40);
  }
  //x button
  if(dist(mouseX,mouseY,360,60 + shft)<20){
    ellipse(360,60 + shft,40);
  }
  //b button
  if(dist(mouseX,mouseY,360,130 + shft)<20){
    ellipse(360,130 + shft,40);
  }
  
  //y button
  if(dist(mouseX,mouseY,320,95 + shft)<20){
    ellipse(320,95 + shft,40);
  }
  
  //a button
  if(dist(mouseX,mouseY,400,95 + shft)<20){
    ellipse(400,95 + shft,40);
  }
  pop()
}