
function Ball() {

    this.pos = createVector(width/2, height/2);
    this.vel = createVector();
    this.acc = createVector();
    this.r = 5;

    this.checkPaddleLeft = function(p){
        if (this.pos.y < p.pos.y + p.h/2 && this.pos.y > p.pos.y - p.h/2 && this.pos.x - this.r < p.pos.x + p.w/2 + 1 ){
            if(this.pos.x > p.pos.x ){
                if (abs(p.vel.y) > 0){
                    this.acc.y = -p.vel.y*(.01);
                }
                this.vel.x *= -1;
            }
        }
        

            
    }

    this.checkPaddleRight = function(p){
        if (this.pos.y < p.pos.y + p.h/2 && this.pos.y > p.pos.y - p.h/2 && this.pos.x + this.r > p.pos.x - p.w/2 - 1 ){
            if(this.pos.x < p.pos.x ){
                if (abs(p.vel.y) > 0){
                    this.acc.y = -p.vel.y*(.01);
                    console.log(this.acc);
                }
                
                this.vel.x *= -1;
            }
        }
            
    }

    this.show = function() {
        push();
        translate(this.pos.x,this.pos.y);
        fill(255);
        rotate(this.vel.heading());
        ellipseMode(CENTER);
        ellipse(0,0,this.r*2,this.r*2);
        pop();
    }

    this.applyForce = function(force){
        this.acc.add(force);
    }

    this.reset = function(){
        this.acc.mult(0);   
        this.pos.x = width/2;
        this.pos.y = height/2;
        angleMode(DEGREES);
        var rand_angle = random(-45,45);
        var rand_direction = random([-1,1]);
        this.vel.x = rand_direction*cos(rand_angle);
        this.vel.y = sin(rand_angle);   
        this.vel.mult(7);
    }

    this.update = function(){
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(.999)

    }

    this.edges = function() {
        if(this.pos.y - this.r < 0 || this.pos.y + this.r > height){
            this.vel.y *= -1;
        }
        if (this.pos.x > width){
            this.reset();
            left_sc++;
        }
        if (this.pos.x < 0){
            this.reset();
            right_sc++;
        }
    }
    this.reset();
}
