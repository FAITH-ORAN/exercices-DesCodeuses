//rect 1
var canvas = document.getElementById("canvas1");
var contexte = canvas.getContext("2d");
contexte.fillStyle ='green';
contexte.fillRect(110,100,280,80);
//rect 2
var canvasRect = document.getElementById("canvas1");
var contexte = canvasRect.getContext("2d");
contexte.fillRect(25,180,450,75);
//rond 1
var canvasCircle1 =document.getElementById("canvas1");
var contexteCircle = canvasCircle1.getContext("2d");
contexteCircle.beginPath();
contexteCircle.lineWidth ='5';
contexteCircle.fillStyle='gray';
contexteCircle.arc(60,295,40,0,2*Math.PI);
contexteCircle.fill();

//rond 2
var canvasCircle1 =document.getElementById("canvas1");
var contexteCircle = canvasCircle1.getContext("2d");
contexteCircle.beginPath();
contexteCircle.lineWidth ='5';
contexteCircle.fillStyle='gray';
contexteCircle.arc(440,295,40,0,2*Math.PI);
contexteCircle.fill();
