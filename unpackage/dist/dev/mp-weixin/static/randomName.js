 function createPic(){
	 	var now=new Date(); 
	 	 var year = now.getFullYear(); //得到年份
		  var month = now.getMonth();//得到月份
		  var date = now.getDate();//得到日期
		  var hour = now.getHours();//得到小时
		  var minu = now.getMinutes();//得到分钟
		  month = month + 1;
		  if (month < 10) month = "0" + month;
		  if (date < 10) date = "0" + date;
	    var number = now.getSeconds()%43; //这将产生一个基于目前时间的0到42的整数。
	    var time = year + month + date+hour+minu;
	    return time+"_"+number;
	}

export default createPic