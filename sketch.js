let angle = 0.0;
let spacing = 0.0;
let b = 0.0;
let rates = [];




function setup() {
	createCanvas(400, 400, WEBGL);
	background(0);

}

function draw() {
	background(0);
	translate(-200,0,-1000);

	rotateY(PI/6);
	normalMaterial();
	let offset = 0;
	// translate(width/2,height/2)
	for (let i = 0;i < 6;i++) {
		let a = angle + offset;
		let s = spacing+offset;
		let oss = 100 * sin(s)
		let x = 175 * sin(a);
		let y = 175 * cos(a) + (i*oss);
		let z = 175 * sin(a) + (i*150);
		push();
		translate(x,y,z);
		sphere(40);
		pop();
		offset += 0.55;

	}
	angle += 0.07;
	spacing += 0.01;
}
