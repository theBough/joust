function Ostrich(x,y,w,h){
  //declare your variables here
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.img = loadImage("images/rtOne.png")
  this.isJumping = false;
  this.jumpStrength = 10;
  this.speed = 5;
  this.imageCycleRt = 0;
  
  this.display = function(){
   this.img.resize(this.w, this.h);
    image(this.img, this.x, this.y)  
  }
  
  this.update = function(){
   //this if-block will be our gravity.
    if(this.y<  260){
      this.y += 4
      this.isJumping = true;
    }else{
      this.isJumping = false;
    }
    
    if(keyIsDown(38)){
      this.y -= this.jumpStrength;
    }//end if
    if(keyIsDown(37)){
     this.x -= this.speed
     this.animateImagesLt() 
    }//end if
    if(keyIsDown(39)){
      this.x += this.speed
     
     this.animateImagesRt()
    }//end if
    
  }//end update
  this.animateImagesRt = function(){
    /*every 5 interations of this functions
    we will change the image of the ostrich to give
    the illusion of an animation*/
   
    this.imageCycleRt +=1;
    console.log(this.imageCycleRt)
    switch(this.imageCycleRt){
         
      case 1:
        this.img = loadImage("images/rtOne.png");
        //console.log("Hello")
        break;
      case 5:
        this.img = loadImage("images/rtTwo.png");
        break;
      case 10:
        this.img = loadImage("images/rtThree.png");
        break;
      case 15:
        this.img = loadImage("images/rtFour.png");
        this.imageCycleRt = -3
        break;
    }//end switch
   
    
  }
  this.animateImagesLt = function(){
   
  }
}//end Ostrich
