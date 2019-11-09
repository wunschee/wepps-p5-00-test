let bird;
let pipes = [];

// happens only once
function setup() {
    createCanvas(400, 600);
    bird = new Bird();
    pipes.push(new Pipe());
}

// continous loop
function draw() {
    background(0);

    for (i = pipes.length-1; i >= 0; i--) {
        pipes[i].show();
        pipes[i].update();

        if (pipes[i].hits(bird)) {
            console.log('HIT');
        }

        if (pipes[i].offscreen()) {
            pipes.slice(i, 1);
        }
    }

    bird.update();
    bird.show();

    if (frameCount % 100 == 0) {
        pipes.push(new Pipe());
    }
}

// listen to keyPressed event
function keyPressed() {
    if (key == ' ') {
        bird.up();
    }
}