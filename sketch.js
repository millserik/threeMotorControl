function setup() {
  createCanvas(480, 272*2);
  
  angle1 = 0;
  angle2 = 0;
  angle3 = 0;
  
  active1 = 0;
  active2 = 0;
  active3 = 0;
  
  onOff1 = 0;
  onOff2 = 0;
  onOff3 = 0;
  
  cst1 = 1;
  cst2 = 1;
  cst3 = 1;
  
  
  a = 1;
  delAng = 0.03;
  cst = 1;
  alphaV = [255,255,255,255,255,255,255,255];
  shft = 272;
  
  time = 0;
  mins = 0;
  
  grid = [
    [angle1,active1,onOff1,cst1,time],
    [angle2,active2,onOff2,cst2,mins],
    [angle3,active3,onOff3,cst3,0]
  ];

}

function draw() {
  background(220);
  
  topScreen(grid)
  time = grid[0][4]
  mins = grid[1][4]
  
  /*
  push()
  fill(255)
  strokeWeight(3)
  if(click==1){
    stroke(21,161,60)
  }else{
    stroke(220,0,0)
  }
  rectMode(CENTER)
  rect(240,40,60,40,5)
  
  strokeWeight(1)
  if(click==1){
    stroke(21,161,60)
    fill(21,161,60)
  }else{
    stroke(220,0,0)
    fill(220,0,0) 
  }
  
  textAlign(CENTER,CENTER)
  textSize(18)
  g = cst*10 + '%'
  text(g,240,40)
  
  */
  
  //create buttons
  buttons(a,alphaV,shft)
  
  // create axles
  axles(grid)
  
  angle1 = grid[0][0]
  angle2 = grid[1][0]
  angle3 = grid[2][0]
  
  //highlight cursor over
  hover(alphaV)
  
}

function mousePressed(){
  //up button
  if(dist(mouseX,mouseY,120,60 + shft)<20){
    alphaV[0] = 150;
    
    // check for active and increase speed
    for(i = 0;i<3;i++){
      if(grid[i][1] == 1){
        grid[i][3] = grid[i][3] + 1
          
        //max of 10
        if(grid[i][3] > 10){
            grid[i][3] = 10;
            }
         }
      }
    
    cst1 = grid[0][3]
    cst2 = grid[1][3]
    cst3 = grid[2][3]
    
  }
  
  //down button
  if(dist(mouseX,mouseY,120,130 + shft)<20){
    alphaV[1] = 150;

    // check for active and decrease speed
    for(i = 0;i<3;i++){
      if(grid[i][1] == 1){
        grid[i][3] = grid[i][3] - 1
          
        //min of -10
        if(grid[i][3] < -10){
            grid[i][3] = -10;
            }
         }
      }
    
    cst1 = grid[0][3]
    cst2 = grid[1][3]
    cst3 = grid[2][3]
  }
  
  //left button
  if(dist(mouseX,mouseY,80,95 + shft)<20){
    alphaV[2] = 150;
  }
  //right button
  if(dist(mouseX,mouseY,160,95 + shft)<20){
    alphaV[3] = 150;
  }
  //x button
  if(dist(mouseX,mouseY,360,60 + shft)<20){
    alphaV[4] = 150;
  }
  //b button
  if(dist(mouseX,mouseY,360,130 + shft)<20){
    alphaV[5] = 150;
    
    //turn off active motors
    for(i = 0;i<3;i++){
      if(grid[i][1] == 1){
          grid[i][2] = 0
         } 
    }
    
    onOff1 = grid[0][2]
    onOff2 = grid[1][2]
    onOff3 = grid[2][2]
  }
  
  //y button
  if(dist(mouseX,mouseY,320,95 + shft)<20){
    alphaV[6] = 150;
    
  }
  
  //a button
  if(dist(mouseX,mouseY,400,95 + shft)<20){
    
   //check for active and turn on 
    for(i = 0;i<3;i++){
      if(grid[i][1] == 1){
          grid[i][2] = 1
         }
    }
    
    onOff1 = grid[0][2]
    onOff2 = grid[1][2]
    onOff3 = grid[2][2]
    
    alphaV[7] = 150;
  }
  
  if (mouseY < 272 && mouseY > 32){
    //grid[2][4] = 1 //top screen is being pressed
    
    //switch active mode for each row button
    if(mouseY < (32+80)){
        if(grid[0][1] == 0){
          grid[0][1] = 1
        }else{
          grid[0][1] = 0 //inactive
          //grid[0][2] = 0 //off
        }    
    }else if(mouseY< (32+160)){
        if(grid[1][1] == 0){
          grid[1][1] = 1
        }else{
          grid[1][1] = 0 //inactive
          //grid[1][2] = 0 //off
        }
    }else{
        if(grid[2][1] == 0){
          grid[2][1] = 1
        }else{
          grid[2][1] = 0 //inactive
          //grid[2][2] = 0 //turn off
        }
    }
    
    active1 = grid[0][1]
    active2 = grid[1][1]
    active3 = grid[2][1]
    
    onOff1 = grid[0][2]
    onOff2 = grid[1][2]
    onOff3 = grid[2][2]
    
  }  
  
}

function mouseReleased(){
  //click = 0
  alphaV = [255,255,255,255,255,255,255,255];
  grid = [
    [angle1,active1,onOff1,cst1,time],
    [angle2,active2,onOff2,cst2,mins],
    [angle3,active3,onOff3,cst3,0]
  ];
}