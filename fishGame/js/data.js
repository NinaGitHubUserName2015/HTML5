var dataObj = function()
{
	this.fruitNum = 0;   //大鱼吃到的果实数目
	this.double = 1;     //吃到红色果实，蓝色果实为2
	this.score = 0;
	this.alpha = 0;
}
dataObj.prototype.reset = function()
{
	this.fruitNum = 0;
	this.double = 1;
	this.alpha = 0;
	this.gameOver = false;
}
dataObj.prototype.draw = function()
{
	var w = can1.width;
	var h = can1.height;

	ctx1.save();
	ctx1.shadowBlur = 10;
	ctx1.shadowColor = "white";
	ctx1.fillStyle = "white";
	//ctx1.fillText("Number: " + this.fruitNum, w * 0.5, h - 50);
	//ctx1.fillText("Double: " + this.double, w * 0.5, h - 80);
	ctx1.fillText("Score: " + this.score, w * 0.5, h - 20);

	if(this.gameOver)
	{
		this.score = 0;
		this.alpha += deltaTime * 0.0005;
		if(this.alpha > 1)
			this.alpha = 1;

		ctx1.fillStyle = "rgba(255, 255, 255," + this.alpha +")";
		ctx1.fillText("GAMEOVER", w * 0.5, h * 0.5);
	}
	ctx1.restore();
}
dataObj.prototype.addScore = function()
{
	this.score += this.fruitNum * 100;
}