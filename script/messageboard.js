//create a new element to save message
function savaStorage(id) {
	var data = document.getElementById(id).value;
	var time = new Date().getTime();
	localStorage.setItem(time, data);
	alert("Message saved！");
	loadStorage('msg');
}
//load the message by cycles
function loadStorage(id) {
	var result = '<table border="1"><tr><td>' + 'Line' + '</td><td>' + 'Content' + '</td><td>' + 'Time:' + '</td></tr>';//set table format
	for (var i = 1; i < localStorage.length + 1; i++) {
		var key = localStorage.key(i);
		var value = localStorage.getItem(key);
		var date = new Date();
		date.setTime(key);
		result += '<tr><td>' + 'Number ' + i  + '</td><td>' + value + '</td><td>' + date + '</td></tr>'//output table
	}
	result += '</table>';
	var target = document.getElementById(id);
	target.innerHTML = result;
}
//delete all message
function clearStorage(id) {
	localStorage.clear();
	alert("Message all cleared！");
}
