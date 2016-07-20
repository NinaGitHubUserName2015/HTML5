var aneObj = function()
{
	//静止的海葵
	// this.x = [];
	// this.len = [];

	//摆动的海葵
	//start point
	this.rootx = [];
	//control point
	//end point(sin)
	this.headx = [];
	this.heady = [];
	//正弦函数图的x坐标，随时间向前移动
	this.alpha = 0;

	//海葵的振幅
	this.amp = [];
}
aneObj.prototype.num = 50;
aneObj.prototype.init = function()
{
	//静止的海葵
	// for(var i = 0; i < this.num; i++)
	// {
	// 	this.x[i] = i * 16 + Math.random() * 20; //[0, 1)
	// 	this.len[i] = 200 + Math.random() * 40;
	// }

	//摆动的海葵
	for(var i = 0; i < this.num; i++)
	{
		this.rootx[i] = i * 16 + Math.random() * 20; //[0, 1)
		this.headx[i] = this.rootx[i];
		this.heady[i] = canHeight - (200 + Math.random() * 40);
		this.amp[i] = Math.random() * 50 + 50; 
	}
}

//静止的海葵
// aneObj.prototype.draw = function()
// {
// 	ctx2.save();
// 	ctx2.globalAlpha = 0.6;
// 	ctx2.strokeStyle = "#3b154e"
// 	ctx2.lineWidth = 20;
// 	ctx2.lineCap = "round";
// 	for(var i = 0; i < this.num; i++)
// 	{
// 		//beginPath, moveTo, lineTo, stroke, strokeStyle, lineWidth, lineCap, globalAlpha
// 		ctx2.beginPath();
// 		ctx2.moveTo(this.x[i], canHeight);
// 		ctx2.lineTo(this.x[i], canHeight - this.len[i]);	
// 		ctx2.stroke();
// 	}
// 	ctx2.restore();
// }

//摆动的海葵
//绘制二次贝塞尔曲线
//正弦函数
aneObj.prototype.draw = function()
{
	//计算x值，值越大，摆动越快
	this.alpha += deltaTime * 0.0006;
	//l是根据x坐标计算出的y值，在[-1, 1]之间来回摆动，计算频率
	var l = Math.sin(this.alpha); 
	ctx2.save();
	ctx2.globalAlpha = 0.6;
	ctx2.strokeStyle = "#3b154e"
	ctx2.lineWidth = 20;
	ctx2.lineCap = "round";
	for(var i = 0; i < this.num; i++)
	{
		//beginPath, moveTo, lineTo, stroke, strokeStyle, lineWidth, lineCap, globalAlpha
		ctx2.beginPath();
		ctx2.moveTo(this.rootx[i], canHeight);
		this.headx[i] = this.rootx[i] + l * this.amp[i];
		ctx2.quadraticCurveTo(this.rootx[i], canHeight - 100, this.headx[i], this.heady[i]);	
		ctx2.stroke();
	}
	ctx2.restore();
}