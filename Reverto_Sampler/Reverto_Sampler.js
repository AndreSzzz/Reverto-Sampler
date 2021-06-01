var multiplier = 0.1;

function preload() {
    font = loadFont('data/Reverto.otf');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(51);
 

    // Retrieve text points
    points = font.textToPoints('Reverto', 850, 650, 300, {
        sampleFactor: 0.1,
      
    });
}

// called every frame
function draw() {
    var trail = map(mouseY, 0, height, 1, 10);
    fill(0, trail);
    rect(0, 0, width, height);

    noStroke();
    for(let i= 0; i < points.length; i++) {
        // Set color
        fill(153, 102, 255);

        // Get locations
        var p = points[i];
        amt = map(mouseX, 0, width, 0, 80);
        var nX = noise(p.x + p.y + (frameCount * multiplier));
        var locX = map(nX, 0, 1, -amt, amt);
        var nY = noise(p.x + p.y + 2 + (frameCount * multiplier));
        var locY = map(nY, 0, 1, -amt, amt);
        // create ellipse
        ellipse(p.x + locX, p.y + locY, 2, 2);
    }
}
