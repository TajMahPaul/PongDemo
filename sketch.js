var ball;
var bg;
var right;
var left;
var right_sc = 0;
var left_sc = 0;

function setup() {
    createCanvas(812, 400);
    ball = new Ball();
    right = new Paddle(width-6);
    left = new Paddle(0+5);

}

function draw() {
    background(0);

    ball.checkPaddleRight(right);
    ball.checkPaddleLeft(left);

    right.show();
    left.show();
    right.update();
    left.update();

    ball.update();
    ball.edges();
    ball.show();

    fill(255,255,255,70);
    textAlign(CENTER);
    textSize(40);
    text(str(left_sc) + " | " + str(right_sc), width/2, height*(1/4));
    // console.log(str(left_sc) + " | " + str(right_sc))

    function keyPressed() {
        if (keyCode === UP_ARROW) {
            right.move(-10);
        } else if (keyCode === DOWN_ARROW) {
            right.move(10);
        }
        if (keyCode === 87) {
            left.move(-10);
        } else if (keyCode === 83) {
            left.move(10);
        }
    }
    

}

function keyReleased() {
    right.move(0); 
    left.move(0);
}
