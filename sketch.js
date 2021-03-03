var police;
var Alex;
var zombie1,zombie2,zombie3,zombie4;
var zombie5;
var gameState="start";
var arrowGroup,zombieGroup;
var score=0;
var win=2;
var Mickey;
var timer=1;
function preload(){
  title=loadImage("images/Rescue.png")
 Back=loadImage("images/background2.jpg")
 ShootingPolice=loadImage("images/shootingpolice.png")
 arch=loadImage("images/name.png")
 bullet=loadImage("images/bullet.png")
 JohnImage=loadImage("images/John.png")
 Zombie1=loadImage("images/download.png")
 Zombie2=loadImage("images/images.png")
Zombie3=loadImage("images/Zombie3.png")
Winning=loadImage("images/winning.jpg")
Sound=loadSound("images/background.mp3")
Mickey=loadImage("images/winner_mickey.png")
Design=loadImage("images/Design.png")
lost=loadImage("images/lost.jpg")
loserMickey=loadImage("images/unnamed.png")
thumbsUp=loadImage("images/thumbs.png")
thumbsDown=loadImage("images/thumbs_Down.png")
doreamon=loadImage("images/doreamon.png")
nobita=loadImage("images/nobi.png")
}
function setup() {
 var canvas= createCanvas(displayWidth,displayHeight);
 
 mickey=createSprite(displayWidth-500,499,39,40)
 mickey.addImage(Mickey)

  
 Police=createSprite(displayWidth-200,470,50,50)
  Police.addImage(ShootingPolice)
     
     archway=createSprite(800,100,20,30)
     archway.addImage(arch)
     archway.scale=0.6
     zombieGroup=createGroup();
     arrowGroup=createGroup();
   zombiesGroup=createGroup();
     vampireGroup=createGroup();

   
dora=createSprite(300,100,20,30)
dora.addImage(doreamon)
dora.scale=0.3
nobi=createSprite(1300,100,20,30)
nobi.addImage(nobita)
nobi.scale=0.3
thumb=createSprite(940,100,20,30)
thumb.addImage(thumbsUp)
thumb.scale=0.6
Loser=createSprite(displayWidth/2+400,displayHeight/2,39,40)
Loser.addImage(loserMickey)
Loser.scale=0.9
thumbs=createSprite(800,100,20,30)
     thumbs.addImage(thumbsDown)
     thumbs.scale=0.3
}

function draw() {
  if(gameState === "start"){
    background(title)
    stroke ("red")
    fill ("blue")
  textSize(50)
    text("Note : Please press space bar to start the game  ",displayWidth/2-500,displayHeight/2+200)
   
    if(keyDown("space")){
      
      
      gameState = "rules";
     }
  }
 if(gameState === "rules"){
    background(Design)
    textSize(15)
    stroke("black")
   fill("black")
   text("Story:There is a small family of husband, wife and son.The man's name is John.He is a police officer.His wife's name is Rubyand his son's name is Alex.",0,100)
   text("Today's is Alex's birthday and he has been kidnapped by some zombies and kept in an island.His father has gone to the island to save his son.So can you help John to save his son.Let us Find out",0,130)
   textSize(30);
   text("Rules of the game are",200,200)
   text("1: You have to press up arrow key to shoot the bullets",200,250)
   text("2: You have to kill zombies and score 50 points",200,300)
   text("3: There is a timer given beside the score whose value assigned will be 0.",200,350)
   text("4: If the timer reaches 5000 before you score 50 points then you will loose the game",200,400)
   text("5: If you score 50 points before the timer reaches 5000 then you will win the game",200,450)
   text("6: Move the mouse up and down to move the police",200,500)
   text("7: If the zombies touches the police then you will loose the game",200,550)
   text("Winning the game is not important.Hardwork is the key to success",200,600)
   text("Note:Press down arrow key to enter the game",200,700)
   text("This game is made by",1300,800)
  
   textSize(50)
   text(" Read all the instructions carefully to win the game ",200,750)
   fill(872,10,103)
   textSize(40)
   text("Himanshu Paul and Ritu Spall",1245,900)
   if(keyDown("down")){
     gameState = "play"
   }
 }
  

   if(gameState === "play"){
    background(Back)
     thumb.visible=false;
     archway.visible=true;
     dora.visible=false;
     nobi.visible=false;
    Loser.visible=false;
   mickey.visible=false;
   thumbs.visible=false
    timer=timer+1
   
   stroke("black")
   strokeWeight(9)
   fill("yellow")
   textSize(50)
   text("Time:"+timer,450,100)
   fill("red")
   stroke("yellow")
   textSize(50)
    text("Please press up arrow to shoot",500,910)
     text("Score:"+score+",",100,100)
     stroke("black")
     strokeWeight(8.9)
     fill(28,110,1911)
     console.log(timer)
     textSize(30);
     text("Score 50 points to win",1000,100)
     if(arrowGroup.isTouching(zombieGroup)){
       zombieGroup.destroyEach();
       arrowGroup.destroyEach();
       score=score+1
     }

     
     if(arrowGroup.isTouching(zombiesGroup)){
       zombiesGroup.destroyEach();
       arrowGroup.destroyEach();
       score=score+2
     }
     if(arrowGroup.isTouching(vampireGroup)){
       vampireGroup.destroyEach();
       arrowGroup.destroyEach();
       score=score+3
     }

     
  
     
     
  

    Police.y=World.mouseY


    if (keyDown("up")){
       createArrow();
       Sound.play();
     
       
   }
   if(score>50){
    gameState ="win";
  }
  if(timer === 5000 && score<50 || vampireGroup.isTouching(Police) || zombieGroup.isTouching(Police) || zombiesGroup.isTouching(Police)){
    gameState="loose"
  }
  
    spawnZombies();
    largeZombies();
    tallZombies();
    drawSprites();
   }
   
   if(gameState === "win"){
     background(Winning)
     mickey.visible=true;
     stroke("black")
     strokeWeight(6)
     fill("pink")
    textSize(60)
    text("HOT DOG!",500,450)
    text("YOU HAVE SAVED ALEX",500,500)
    text("YOU WON THE GAME",500,550)
    fill(290,100,28)
    text("PRESS LEFT ARROW KEY TO RESTART THE GAME",400,displayHeight/2+400)
    thumb.visible=true
    Police.visible=false
    
    archway.visible=false;
     
    if(keyDown("left")){
      reset();
      timer=0;
      score=0;
    
     
    }
     vampireGroup.destroyEach();
     arrowGroup.destroyEach();
     zombieGroup.destroyEach();
     zombiesGroup.destroyEach();
   
  
   drawSprites();
  }
   if(gameState === "loose"){
     background(lost)
      
     nobi.visible=true
     dora.visible=true
     Loser.visible=true
     Police.visible=false
     stroke("black")
     strokeWeight(9)
     fill(119,0,197)
     textSize(60)
     text("OH NO!",displayWidth/2-200,200)
     text("YOU LOST IT. ",displayWidth/2-300,300)
     text("YOU COULD NOT SAVE ALEX",displayWidth/2-600,400)
     text("YOU WERE PLAYING SO WELL",displayWidth/2-600,500)
     fill(290,100,89)
     textSize(30)
     text("PRESS RIGHT ARROW KEY TO RESTART THE GAME",50,displayHeight/2+300)
     thumbs.visible=true
     
  if(keyDown("right")){
    reset();
    timer=0;
    score=0;
    archway.visible=true;
  }
    archway.destroy();
     
     vampireGroup.destroyEach();
     arrowGroup.destroyEach();
     zombieGroup.destroyEach();
     zombiesGroup.destroyEach();
     drawSprites();
   }
  console.log(gameState)
 
 
}
function spawnZombies(){
if(frameCount % 80===0){

  zombie=createSprite(78,Math.round(random(200,900)),30,30)
  zombie.velocityX=12
  zombie.addImage(Zombie2)
  zombie.scale=0.5
  zombie.lifetime=700
  zombieGroup.add(zombie)
  
}
}

function largeZombies(){
  if(frameCount % 169===0){
    monsters=createSprite(68,Math.round(random(200,900)),30,30)
    monsters.velocityX=10
    monsters.addImage(Zombie1)
    monsters.scale=0.4
    monsters.lifetime=700
    zombiesGroup.add(monsters)
  }
}

function tallZombies(){
  if(frameCount % 129===0){
    vampire=createSprite(91,Math.round(random(200,900)),30,30)
    vampire.velocityX=10
    vampire.addImage(Zombie3)
    vampire.scale=0.3
    vampire.lifetime=700
    vampireGroup.add(vampire)
  }
}
function createArrow(){
  arrow= createSprite(displayWidth-200, Police.y, 5, 10);
  arrow.addImage(bullet);
  arrow.scale = 0.3;
  rotate(arrow)
  arrow.velocityX = -6;
  arrowGroup.add(arrow)

}





function reset(){
  gameState = "rules"
 
  //background(Back)
dora.visible=false;
Loser.visible=false;
nobi.visible=false;
thumb.visible=false;
Police.visible=true;

}
function resetWin(){
  gameState = "play"
  mickey.visible=false;
  Police.visible=true;
}
function restart(){
  gameState = "play"
  
  //background(Back)
}