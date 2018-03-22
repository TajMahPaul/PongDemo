function Paddle(_x){
    this.x = _x;
    this.y = height/2;
    this.h = 70;
    this.w = 10;

    this.velocity = 0;

    this.update = function(){
        this.y += this.velocity;
        this.y = constrain(this.y,this.h/2,height - this.h/2);
    }

    this.show = function(){
        push();
        fill(255);
        rectMode(CENTER);
        rect(this.x,this.y,this.w,this.h);  
        pop();
    }
    this.move = function(steps){
        this.velocity = steps;
    }
}