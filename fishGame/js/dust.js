//漂浮物，重点是sin函数
var dustObj = function()
{
	this.x = [];
	this.y = [];
	this.amp = [];
	this.NO = [];

	//果实的频率要跟海葵的摆动频率值一样
	this.alpha;
}
dustObj.prototype.num = 35;
dustObj.prototype.init = function()
{
	for(var i = 0; i < this.num; i++)
	{
		this.x[i] = Math.random() * canWidth;
		this.y[i] = Math.random() * canHeight;
		this.amp[i] = Math.random() * 25 + 20;   
		this.NO[i] = Math.floor(Math.random() * 7); //[0, 7)
	}
	this.alpha = 0;
}
dustObj.prototype.draw = function()
{
	this.alpha += deltaTime * 0.0006;
	var l = Math.sin(this.alpha); //[-1, 1]
	for(var i = 0; i < this.num; i++)
	{
		var no = this.NO[i];
		ctx1.drawImage(dustPic[no], this.x[i] + this.amp[i] * l, this.y[i]);
	}
}