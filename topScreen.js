function topScreen(grid){
  time = grid[0][4]
  mins = grid[1][4]
  
  fill(0)
  noStroke()
  rect(0,0,480,272)
  
  noStroke()
  fill(3,190,252)
  rect(0,0,480,32)

  textSize(20)
  stroke(0)
  fill(0)
  text('Three Motor',8,24)
  
  time = time + deltaTime;
  out_time = floor(time/1000)
  if(out_time == 60){
    mins = mins + 1
    time = 0
    out_time = 0
  }
  if(out_time < 10){
    print_time = '0'+ out_time
  } else{
    print_time = out_time
  }
  text(mins + ':' + print_time,240,24)
  
  fill(20)
  stroke(255)
  rect(0,32,480,80)
  rect(0,32+80,480,80)
  rect(0,32+160,480,80)
  

  push()
  stroke(255)
  for(i = 0;i<3;i++){
      if(grid[i][1] == 1){
        fill(5,226,255)
      }
      else{
        fill(20)
      }
    ellipse(60,72+i*80,40)
    }
  pop()
  
  push()
  textAlign(CENTER,CENTER)
  rectMode(CENTER)
  for(i = 0;i<3;i++){
      if(grid[i][2] == 1){
        //green if on
        strokeWeight(1)
        stroke(43,145,39)
        fill(43,145,39)
        text('ON',420,72+i*80)
        
        noFill()
        strokeWeight(3)
        rect(420,72+i*80,60,40)
      }
      else{
        // else red
        strokeWeight(1)
        stroke(166,46,46)
        fill(166,46,46)
        text('OFF',420,72+i*80)
        
        noFill()
        strokeWeight(3)
        rect(420,72+i*80,60,40)
      }
    }
  pop()
  
  push()
  textAlign(LEFT,CENTER)
  stroke(255)
  fill(255)
  for(i = 0;i<3;i++){
    q = 'motor_' + (i+1) + ' speed: ' + (grid[i][3]*10) + '%'
    text(q,120,72+i*80)
    }
  pop()
  
  grid[0][4] = time 
  grid[1][4] = mins
  
  return grid
}