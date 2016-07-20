var can1;
var can2;

var ctx1;
var ctx2;

var lastTime;
var deltaTime;

var bgPic = new Image();

var canWidth;
var canHeight;

var ane;
var fruit;
var mom;
var baby;

var babyTail = [];
var babyEye = [];
var babyBody = [];

var bigTail = [];
var bigEye = [];
var bigBodyOra = [];
var bigBodyBlue = [];

//鼠标位置
var mx;
var my;

var data;
var wave;
var halo;

var dust;
var dustPic = [];

document.body.onload = game;
function game()
{
	//初始化
	init();
	lastTime = Date.now();
	deltaTime = 0;
	gameloop();
}

function init()
{
	//获得canvas context
	can1 = document.getElementById("canvas1");   //fishes, dust, UI, circle
	ctx1 = can1.getContext('2d');
	can2 = document.getElementById("canvas2");   //background, ane, fruits
	ctx2 = can2.getContext('2d');

	//给canvas添加检测鼠标移动的事件
	can1.addEventListener("mousemove", onMouseMove, false);

	bgPic.src = "./img/background.jpg";

	canWidth = can1.width;
	canHeight = can1.height;

	ane = new aneObj();
	ane.init();

	fruit = new fruitObj();
	fruit.init();

	mom = new momObj();
	mom.init();

	baby = new babyObj();
	baby.init();

	mx = canWidth * 0.5;
	my = canHeight * 0.5;

	//baby init
	for(var i = 0; i < 8; i++)
	{
		babyTail[i] = new Image();
		babyTail[i].src = "./img/babyTail" + i + ".png";
	}

	for(var i = 0; i < 2; i++)
	{
		babyEye[i] = new Image();
		babyEye[i].src = "./img/babyEye" + i + ".png";
	}

	for(var i = 0; i < 20; i++)
	{
		babyBody[i] = new Image();
		babyBody[i].src = "./img/babyFade" + i + ".png";
	}

	//mom init
	for(var i = 0; i < 8; i++)
	{
		bigTail[i] = new Image();
		bigTail[i].src = "./img/bigTail" + i + ".png";
	}

	for(var i = 0; i < 2; i++)
	{
		bigEye[i] = new Image();
		bigEye[i].src = "./img/bigEye" + i + ".png";
	}

	for(var i = 0; i < 8; i++)
	{
		bigBodyOra[i] = new Image();
		bigBodyBlue[i] = new Image();
		bigBodyOra[i].src = "./img/bigSwim" + i + ".png";
		bigBodyBlue[i].src = "./img/bigSwimBlue" + i + ".png";
	}

	data = new dataObj();
	ctx1.font = "30px Verdana";
	ctx1.textAlign = "center";  //left, center, right

	wave = new waveObj();
	wave.init();

	halo = new haloObj();
	halo.init();

	for(var i = 0; i < 7; i++)
	{
		dustPic[i] = new Image();
		dustPic[i].src = "./img/dust" + i + ".png";
	}
	dust = new dustObj();
	dust.init();
}

function gameloop()
{
	requestAnimFrame(gameloop);  //setInterval(), setTimeout(), fps=frame per second
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;
	if(deltaTime > 40) deltaTime = 40;

	drawBackground();
	ane.draw();
	fruitMonitor();
	fruit.draw();

	ctx1.clearRect(0, 0, canWidth, canHeight);
	baby.draw();
	mom.draw();

	momFruitCollision();
	momBabyCollision();

	data.draw();
	wave.draw();
	halo.draw();
	dust.draw();
}
function onMouseMove(e)
{
	if(e.offSetX || e.layerX)
	{
		mx = e.offSetX == undefined ? e.layerX : e.offSetX;
		my = e.offSetY == undefined ? e.layerY : e.offSetY;
	}
}