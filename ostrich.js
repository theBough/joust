function Ostrich(x,y,w,h){
  //declare your variables here
  this.isJumping = false;
  this.jumpStrength = 10;
  
  this.display = function(){
   
  
    
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
     
     this.animateImagesLt() 
    }//end if
    if(keyIsDown(39)){
      
     this.animateImagesRt()
    }//end if
    
  }//end update
  this.animateImagesRt = function(){
   
    }//end Switch
  }
  this.animateImagesLt = function(){
   
  }
}//end Ostrich
