//判断大鱼和果实的距离，如果大于某个值，果实继续运动，否则判断为大鱼吃了这个果实
function momFruitCollision()
{
	for(var i = 0; i < fruit.num; i++)
	{	
		if(fruit.alive[i])
		{	
			var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
			if(l < 400)
			{
				//果实被吃掉
				fruit.dead(i);
				data.fruitNum++;
				mom.bigBodyCount++;
				if(mom.bigBodyCount > 7)
					mom.bigBodyCount = 7;
				if(fruit.fruitType[i] == "blue")
				{
					data.double = 2;
					data.fruitNum++;
				}else
				{
					data.double = 1;
				}
				wave.born(fruit.x[i], fruit.y[i]);
			}
		}
	}
}

//判断大鱼和小鱼的距离，如果小于某个值，判断为大鱼喂了小鱼
function momBabyCollision()
{
	var l = calLength2(mom.x, mom.y, baby.x, baby.y);
	if(l < 200)
	{
		//大鱼喂小鱼, baby recover
		baby.babyBodyCount = 0;
		data.addScore();
		//data reset
		data.reset();
		//mom recover
		mom.bigBodyCount = 0;
		//draw halo
		halo.born(baby.x, baby.y);
	}
}