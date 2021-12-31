function buttons(a,alphaV,shft){
  // create buttons
  push()
  fill(10)
  noStroke()
  //up
  fill(10,alphaV[0])
  ellipse(120,60 + shft,40)
  
  //down
  fill(10,alphaV[1])
  ellipse(120,130 + shft,40)
  
  //left
  fill(10,alphaV[2])
  ellipse(80,95 + shft,40)
  
  //right
  fill(10,alphaV[3])
  ellipse(160,95 + shft,40)
  
  //x
  fill(10,alphaV[4])
  ellipse(360,60 + shft,40)
  
  //b
  fill(10,alphaV[5])
  ellipse(360,130 + shft,40)
  
  //y
  fill(10,alphaV[6])
  ellipse(320,95 + shft,40)
  
  //a
  fill(10,alphaV[7])
  ellipse(400,95 + shft,40)
  pop()
  
    // create buttons
  push()
  //fill(191, 34, 34)
  //stroke(191, 34, 34)
  fill(220, 0, 0)
  stroke(220, 0, 0)
  strokeWeight(1)
  
  //up
  triangle(112,65-a + shft,128,65-a + shft,120,52-a + shft)
  
  //down
  triangle(112,125+a + shft,128,125+a + shft,120,138+a + shft)
  
  //left
  triangle(85-a,87 + shft,85-a,103 + shft,72-a,95 + shft)
  
  //right
  triangle(155+a,87 + shft,155+a,103 + shft,168+a,95 + shft)
  
  
  textAlign(CENTER,CENTER)
  textSize(22)
  //x
  //ellipse(360,60,40)
  text('X',360,60 + shft)
  
  //b
  //ellipse(360,130,40)
  text('B',360,130 + shft)
  
  
  //y
  //ellipse(320,95,40)
  text('Y',320,95 + shft)
  
  
  //a
  //ellipse(400,95,40)
  text('A',400,95 + shft)
  
  
  pop()
}