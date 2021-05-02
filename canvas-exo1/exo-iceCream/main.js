var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");
 // rocket/Trac
 ctx.save();
 ctx.beginPath();
 ctx.moveTo(1.4, 69.4);
 ctx.bezierCurveTo(1.4, 69.4, 59.0, -86.8, 120.8, 69.4);
 ctx.lineTo(1.4, 69.4);
 ctx.closePath();
 ctx.fillStyle = "rgb(137, 8, 7)";
 ctx.fill();

 // rocket/Trac
 ctx.beginPath();
 ctx.moveTo(0.0, 69.4);
 ctx.bezierCurveTo(2.1, 74.3, 60.0, 217.4, 60.0, 217.4);
 ctx.lineTo(122.2, 69.4);
 ctx.lineTo(0.0, 69.4);
 ctx.closePath();
 ctx.fillStyle = "rgb(169, 100, 33)";
 ctx.fill();
 ctx.restore();