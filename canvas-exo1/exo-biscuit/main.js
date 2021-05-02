
 

    var canvas = document.getElementById("canvas1");
    var ctx = canvas.getContext("2d");


    ctx.save();
    ctx.beginPath();
    ctx.moveTo(188.9, 77.6);
    ctx.bezierCurveTo(188.9, 103.7, 167.8, 124.8, 141.7, 124.8);
    ctx.bezierCurveTo(115.6, 124.8, 94.5, 103.7, 94.5, 77.6);
    ctx.bezierCurveTo(94.5, 51.5, 115.6, 30.4, 141.7, 30.4);
    ctx.bezierCurveTo(167.8, 30.4, 188.9, 51.5, 188.9, 77.6);
    ctx.closePath();
    ctx.fillStyle = "rgb(150, 110, 14)";
    ctx.fill();

    // rocket/Trac
    ctx.beginPath();
    ctx.moveTo(117.4, 50.9);
    ctx.bezierCurveTo(117.4, 50.9, 126.0, 43.9, 133.3, 53.0);
    ctx.strokeStyle = "rgb(255, 255, 255)";
    ctx.stroke();

    // rocket/Trac
    ctx.beginPath();
    ctx.moveTo(151.1, 50.7);
    ctx.bezierCurveTo(151.1, 50.7, 161.1, 42.3, 167.3, 53.0);
    ctx.stroke();

    // rocket/Ellipse
    ctx.beginPath();
    ctx.moveTo(132.4, 70.1);
    ctx.bezierCurveTo(132.4, 74.3, 129.0, 77.6, 124.9, 77.6);
    ctx.bezierCurveTo(120.8, 77.6, 117.4, 74.3, 117.4, 70.1);
    ctx.bezierCurveTo(117.4, 66.0, 120.8, 62.6, 124.9, 62.6);
    ctx.bezierCurveTo(129.0, 62.6, 132.4, 66.0, 132.4, 70.1);
    ctx.closePath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fill();

    // rocket/Ellipse
    ctx.beginPath();
    ctx.moveTo(166.6, 70.1);
    ctx.bezierCurveTo(166.6, 74.3, 163.3, 77.6, 159.2, 77.6);
    ctx.bezierCurveTo(155.0, 77.6, 151.7, 74.3, 151.7, 70.1);
    ctx.bezierCurveTo(151.7, 66.0, 155.0, 62.6, 159.2, 62.6);
    ctx.bezierCurveTo(163.3, 62.6, 166.6, 66.0, 166.6, 70.1);
    ctx.closePath();
    ctx.fill();

    // rocket/Trac
    ctx.beginPath();
    ctx.moveTo(121.4, 85.7);
    ctx.bezierCurveTo(121.4, 85.7, 136.4, 94.6, 163.3, 85.7);
    ctx.bezierCurveTo(163.3, 85.7, 145.5, 111.7, 121.4, 85.7);
    ctx.strokeStyle = "rgb(235, 19, 2)";
    ctx.stroke();

    // rocket/Trac
    ctx.beginPath();
    ctx.moveTo(39.5, 137.1);
    ctx.bezierCurveTo(39.5, 137.1, 20.8, 125.2, 39.5, 111.1);
    ctx.lineTo(242.2, 111.1);
    ctx.bezierCurveTo(242.2, 111.1, 259.3, 122.7, 244.3, 137.1);
    ctx.lineTo(39.5, 137.1);
    ctx.closePath();
    ctx.fillStyle = "rgb(150, 110, 14)";
    ctx.fill();

    // rocket/Trac
    ctx.beginPath();
    ctx.moveTo(134.8, 237.7);
    ctx.bezierCurveTo(134.8, 237.7, 140.0, 222.7, 149.2, 237.7);
    ctx.bezierCurveTo(149.2, 237.7, 151.1, 264.6, 151.1, 265.8);
    ctx.bezierCurveTo(151.1, 267.0, 165.7, 282.0, 185.3, 264.3);
    ctx.lineTo(184.1, 137.1);
    ctx.lineTo(99.4, 137.1);
    ctx.lineTo(99.4, 264.6);
    ctx.bezierCurveTo(99.4, 264.6, 111.9, 283.9, 134.8, 264.6);
    ctx.fill();

    // rocket/Ellipse
    ctx.beginPath();
    ctx.moveTo(149.5, 150.1);
    ctx.bezierCurveTo(149.5, 154.6, 145.9, 158.2, 141.4, 158.2);
    ctx.bezierCurveTo(136.9, 158.2, 133.3, 154.6, 133.3, 150.1);
    ctx.bezierCurveTo(133.3, 145.6, 136.9, 142.0, 141.4, 142.0);
    ctx.bezierCurveTo(145.9, 142.0, 149.5, 145.6, 149.5, 150.1);
    ctx.closePath();
    ctx.fillStyle = "rgb(121, 40, 117)";
    ctx.fill();

    // rocket/Ellipse
    ctx.beginPath();
    ctx.moveTo(149.8, 171.2);
    ctx.bezierCurveTo(149.8, 175.7, 146.2, 179.3, 141.7, 179.3);
    ctx.bezierCurveTo(137.2, 179.3, 133.6, 175.7, 133.6, 171.2);
    ctx.bezierCurveTo(133.6, 166.7, 137.2, 163.1, 141.7, 163.1);
    ctx.bezierCurveTo(146.2, 163.1, 149.8, 166.7, 149.8, 171.2);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
