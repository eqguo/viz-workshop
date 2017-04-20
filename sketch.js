function setup() {
  createCanvas(1000, 700);

}

function draw() {
  let red = random(255);
  let green = random(255);
  let blue = random(255);

  if (mouseIsPressed) {
    fill(0);
  } else {
    fill((mouseX / width) * 255, (mouseY / height) * 255, 0, 100);
  }
  rect(mouseX,mouseY,50,50);
}
