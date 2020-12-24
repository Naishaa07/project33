var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var particle=null, count=0;

var divisionHeight=300;
var score =0;
var gameState="play";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  
  textSize(20)
  
  text("100",420,500)
  text("100",340,500)
  text("100",500,500)
  text("500",260,500)
  text("500",180,500)
  text("200",580,500)
  text("200",660,500)
  text("500",100,500)
  text("500",20,500)
  text("200",740,500)
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   //if(frameCount%60===0){
   //  particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   //  count++;
   //}
   
 
  //for (var j = 0; j < particles.length; j++) {
   
  //   particles[j].display();
  // }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();

   }
   console.log(count)
   if(particle!==null  ){
    particle.display();
    //count=count+1;
    if(particle.body.position.y>760){
      if(particle.body.position.x<320 && particle.body.position.x>0){
        score=score+500
        particle=null; 
        if(count>=5)
        gameState="end"
        
      }
     else if(particle.body.position.x>320 && particle.body.position.x<560){
       score=score+100
       particle=null;
       if(count>=5)
        gameState="end"
       
     }
     else if(particle.body.position.x>560 && particle.body.position.x<800){
       score=score+200
       particle=null;
       if(count>=5)
       gameState="end"
       
     }  
    }
  }
  text("Score : "+score,650,50);
  //mousePressed();
   
}
function mousePressed(){
  if(gameState!=="end"){
     count++;
     particle=new Particle(mouseX, 10, 10, 10)
  }
}