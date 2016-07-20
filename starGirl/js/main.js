var can;
var ctx;

var w;
var h;

var lastTime;
var deltaTime;

var girlPic = new Image();
var starPic = new Image();

var num = 60;
var stars = [];

var switchy = false;
var life = 0;

function init()
{
	can = document.getElementById("canvas");
	ctx = can.getContext("2d");

	w = can.width;
	h = can.height;

	document.addEventListener("mousemove", mousemove, false);

	girlPic.src = "./img/girl.jpg";
	starPic.src = "./img/star.png";

	for(var i = 0; i < num; i++)
	{
		var obj = new starObj();
		stars.push(obj);
		stars[i].init();
	}

	lastTime = Date.now();
	deltaTime = 0;

	gameloop();
}

document.body.onload = init;

function drawBackground()
{
	ctx.fillStyle = "#393550";
	ctx.fillRect(0, 0, w, h);
}

function gameloop()
{
	requestAnimFrame(gameloop);

	deltaTime = Date.now() - lastTime;
	lastTime = Date.now();

	drawBackground();
	drawGirl();
	drawStars();
	updateDraw();
}

function drawGirl()
{
	//drawImage(img, x, y, width, height)
	ctx.drawImage(girlPic, 100, 150, 600, 300);
}

function mousemove(e)
{
	if(e.offsetX || e.layerX)
	{
		var mx = e.offsetX == undefined ? e.layerX : e.offsetX;
		var my = e.offsetY == undefined ? e.layerY : e.offsetY;

		//out switchy = false; in switchy = true
		if(100 < mx && mx < 700 && 150 < my && my < 450)
		{
			switchy = true;
		}else
		{
			switchy = false;
		}
	}
}