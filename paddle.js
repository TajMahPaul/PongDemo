function Paddle(_x){
    this.pos = createVector(_x, height/2);
    console.log(this.pos);  
    this.h = 70;
    this.w = 10;

    this.vel = createVector();

    this.update = function(){
        this.pos.add(this.vel);
        this.pos.y = constrain(this.pos.y,this.h/2,height - this.h/2);
    }

    this.show = function(){
        push();
        translate(this.pos.x,this.pos.y);
        fill(255);
        rectMode(CENTER);
        rect(0,0,this.w,this.h);  
        pop();
    }
    this.move = function(steps){
        this.vel.y = steps;
    }
}