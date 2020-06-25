timer();
setInterval(timer, 1000);

function timer() {
	let date = new Date();	//get current date
	let target = new Date(date.getFullYear() + 1, 0, 1, 0, 0, 0);	//get the date of the new year
	
	let diff = Math.ceil((target - date) / 1000);	//calculate the difference and translate in seconds

	let days = Math.floor(diff / (60 * 60 *24));	//calculate days
	diff = diff % (60 * 60 *24);

	let hours = Math.floor(diff / (60 * 60));	//calculate clock
	diff = diff % (60 * 60);

	let minuts = Math.floor(diff / 60);		//calculate minuts
	diff = diff % 60;

	let sec = diff;		//the rest is seconds

	let arr = [addZero(days), addZero(hours), addZero(minuts), addZero(sec)];

	let elems = document.getElementsByClassName('td2');
    for (var i = 0; i < elems.length; i ++) {
        elems[i].innerHTML = arr[i];
    };
};

//function to add zero before dates
function addZero(num) {		
	if (num <= 9) {
		return '0' + num
	} else {
		return num;
	};
};