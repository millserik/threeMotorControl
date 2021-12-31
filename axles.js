function axles(grid){
  shft = 272
  
  
  angle1 = grid[0][0]
  angle2 = grid[1][0]
  angle3 = grid[2][0]
  
  
  //create axle models
    push();
    rectMode(CENTER);
    fill(125);
    stroke(20);
    strokeWeight(3);
    translate(120,210 + shft);
    rotate(angle1);
    rect(0,0,50,50,10);
    pop()
  
    push()
    translate(120,210 + shft)
    stroke(20)
    fill(20)
    strokeWeight(1)
    textAlign(CENTER,CENTER)
    textSize(19)
    text('motor_1',0,48)
    pop();
  
    push();
    rectMode(CENTER);
    fill(125);
    stroke(20);
    strokeWeight(3);
    translate(240,210 + shft);
    rotate(angle2);
    rect(0,0,50,50,10);
    pop();
  
    push()
    translate(240,210 + shft)
    stroke(20)
    fill(20)
    strokeWeight(1)
    textAlign(CENTER,CENTER)
    textSize(19)
    text('motor_2',0,48)
    pop();
  
    push();
    rectMode(CENTER);
    fill(125);
    stroke(20);
    strokeWeight(3);
    translate(360,210 + shft);
    rotate(angle3);
    rect(0,0,50,50,10);
    pop();
  
    push()
    translate(360,210 + shft)
    stroke(20)
    fill(20)
    strokeWeight(1)
    textAlign(CENTER,CENTER)
    textSize(19)
    text('motor_3',0,48)
    pop();
  
  
  for(i=0;i<3;i++){
    
    if (grid[i][2] == 1){
      grid[i][0] = grid[i][0] + grid[i][3]*delAng;
    } else {
      grid[i][0] = grid[i][0];    
    }
  
  }
  
  
  return grid
}