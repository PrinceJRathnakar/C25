class Pig extends BaseClass {

  constructor(x,y){
super(x,y,50,50)
this.image=loadImage("sprites/enemy.png");

  }
    /*constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      this.image=("sprites/enemy.png");
      World.add(world, this.body);
    }
    
      display(){ 
        var pos =this.body.position; 
        var angle = this.body.angle; push(); 
        translate(pos.x, pos.y); 
        rotate(angle);
         imageMode(CENTER) 
        image(this.image,0, 0, this.width, this.height); 
        pop();
       }*/
    
  };
  