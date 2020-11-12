let sq = 800; // width/height
let bars = 8; // num bars
let border = sq / 10; // x axis border
let space = sq - (border * 2); // workable space
let between = space / bars; // x-axis spacing

let data = [300, 400, 100, 405, 385, 950, 749, 333];
let data_max = Math.max(...data);

function setup() {
  pixelDensity(1);
  createCanvas(sq, sq);
  background(200);
}

function draw() {
  for (var i = 0; i < bars; i++) {
    var scaled_data = data[i] * (space / data_max);
    var x = border + (between * i);
    var y = sq - border;
    rect(x, y, 55, -scaled_data, 20, 15, 10, 5);
  }
}