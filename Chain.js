class Chain{
    //defining the two bodies and the properties of chain
constructor( bodyA,bodyB){
    var options={
     bodyA:bodyA,
     bodyB:bodyB,
     stiffness:2,
     length:100
     
    }
    //creating the constraint and adding it to the World
    this.chain=Constraint.create(options);
    World.add(world,this.chain);

}

display(){
    //taking the two bodies'position to write the line command
var pointA=this.chain.bodyA.position;
var pointB=this.chain.bodyB.position;
//defines the thickness of the line/border
strokeWeight(3);
line(pointA.x,pointA.y,pointB.x,pointB.y);



}




}