var momObj = function()
{
	this.x;
	this.y;
	this.angle;   //大鱼的角度

	this.bigTailTimer = 0;
	this.bigTailCount = 0;

	this.bigEyeTimer = 0;
	this.bigEyeCount = 0;
	this.bigEyeInterval = 1000;

	this.bigBodyCount = 0;
}
momObj.prototype.init = function()
{
	this.x = canWidth * 0.5;
	this.y = canHeight * 0.5;
	this.angle = 0;
}
momObj.prototype.draw = function()
{
	//lerp x, y  某个点趋于目标点的距离    大鱼的坐标趋向于鼠标的坐标
	this.x = lerpDistance(mx, this.x, 0.98);
	this.y = lerpDistance(my, this.y, 0.98);

	//delta angle
	//Math.atan2(y, x)    beta为大鱼和鼠标之间的角度
	var deltaY = my - this.y;
	var deltaX = mx - this.x;
	beta = Math.atan2(deltaY, deltaX) + Math.PI;   //-PI, PI  之间

	//lerp angle  大鱼的角度趋向于鼠标的坐标
	this.angle = lerpAngle(beta, this.angle, 0.6);

	//big tail count
	this.bigTailTimer += deltaTime;
	if(this.bigTailTimer > 50)
	{
		this.bigTailCount = (this.bigTailCount + 1) % 8;
		this.bigTailTimer %= 50;
	}	

	//big eye count
	this.bigEyeTimer += deltaTime;
	if(this.bigEyeTimer > this.bigEyeInterval)
	{
		this.bigEyeCount = (this.bigEyeCount + 1) % 2;
		this.bigEyeTimer %= this.bigEyeInterval;
		if(this.bigEyeCount == 1)
		{
			this.bigEyeInterval = 200;
		}else
		{
			this.bigEyeInterval = Math.random() * 1500 + 2000;   //[2000, 3500)
		}
	}

	ctx1.save();
	ctx1.translate(this.x, this.y);
	ctx1.rotate(this.angle);
	var bigTailCount = this.bigTailCount;
	var bigEyeCount = this.bigEyeCount;
	var bigBodyCount = this.bigBodyCount;
	ctx1.drawImage(bigTail[bigTailCount], -bigTail[bigTailCount].width * 0.5 + 30, -bigTail[bigTailCount].height * 0.5);
	if(data.double == 1)
	{
		ctx1.drawImage(bigBodyOra[bigBodyCount], -bigBodyOra[bigBodyCount].width * 0.5, -bigBodyOra[bigBodyCount].height * 0.5);	
	}else
	{
		ctx1.drawImage(bigBodyBlue[bigBodyCount], -bigBodyBlue[bigBodyCount].width * 0.5, -bigBodyBlue[bigBodyCount].height * 0.5);	
	}
	ctx1.drawImage(bigEye[bigEyeCount], -bigEye[bigEyeCount].width * 0.5, -bigEye[bigEyeCount].height * 0.5);
	ctx1.restore();
}