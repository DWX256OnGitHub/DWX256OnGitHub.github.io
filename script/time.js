function time(){
		document.getElementById('time').innerHTML=Date();//get time
		setInterval("time()",1000);//wait 1 sec then refresh
	}
