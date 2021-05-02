
var canevas = document.getElementById('canvas1');
var ctx = canevas.getContext('2d');
ctx.beginPath();
//contexteCircle.lineWidth ='5';
ctx.fillStyle='white'
ctx.ellipse(270, 65, 45, 60, 0 * Math.PI/180, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='#e0e1f3'
ctx.moveTo(150, 100);
//ctx.quadraticCurveTo(300,320,450,120);
ctx.bezierCurveTo(300,220, 390, 95, 390, 100);
ctx.bezierCurveTo(270,0, 160, 80, 150, 100);
//ctx.quadraticCurveTo();


ctx.fill();
