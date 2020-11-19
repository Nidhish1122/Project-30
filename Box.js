class Box {
  constructor(x,y,width,height) {
    this.Visibility=255;
    var options = {
        isStatic: false
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    
  }
  display(){
    if(this.body.speed<3){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      rectMode(CENTER);
      fill("blue");
      rect(0, 0, this.width, this.height);
      
      pop();
    }
    else{
      World.remove(world,this.body);
      push();
      this.Visibility=this.Visibility-1;
      tint(255,this.Visibility)
      pop();
    }
    //console.log(this.body.speed);

    
  }
};

