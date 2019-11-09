function Bird() {
    // bird init pos
    this.x = 64;
    this.y = height/2;

    // some parameter for moving
    this.gravity = 0.6;
    this.lift = -15;
    this.velocity = 0;

    // show bird
    this.show = function() {
        fill(255);
        ellipse(this.x, this.y, 32, 32);
    }

    // move bird
    this.update = function() {
        this.velocity += this.gravity;
        this.velocity *= 0.9;
        this.y += this.velocity;

        // stop at bottom
        if (this.y > height) {
            this.y = height;
            this.velocity = 0;
        }

        // stop at top
        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }
    }

    // change direction
    this.up = function() {
        this.velocity += this.lift;
    }
}