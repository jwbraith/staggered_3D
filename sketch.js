let angle = 0.0;
let spacing = 0.0;
let b = 0.0;
let rates = [];




function setup() {
	createCanvas(400, 400);
	background(0);
}

function draw() {
	background(0);
	let offset = 0;
	translate(width/2,height/2)
	for (let i = 0;i < 6;i++) {
		let a = angle + offset;
		let s = spacing+offset;
		let oss = 20 * sin(s)
		let x = 100 * sin(a);
		let y = 100 * cos(a) + (i*oss);
		ellipse(x,y,40);
		offset += 0.23;

	}
	angle += 0.05;
	spacing += 0.01;
}
