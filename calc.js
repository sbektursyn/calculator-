let answer = 0;
function plus(){
	var first = Number(document.getElementById("firstElement").value);
	//take the first number
	console.log(first)
	var second = Number(document.getElementById("secondElement").value);
	//take the second number
	console.log(second)

	answer = first + second;
	//doing sth u want
	console.log(answer)

	document.getElementById("answer").innerHTML = answer;
	//output to the screen
}

function minus(){
	var first = Number(document.getElementById("firstElement").value);
	console.log(first)
	var second = Number(document.getElementById("secondElement").value);
	console.log(second)

	answer = first - second;
	console.log(answer)

	document.getElementById("answer").innerHTML = answer;
}

function multiply(){
	var first = Number(document.getElementById("firstElement").value);
	console.log(first)
	var second = Number(document.getElementById("secondElement").value);
	console.log(second)

	answer = first * second;
	console.log(answer)

	document.getElementById("answer").innerHTML = answer;
}

function divide(){
	var first = Number(document.getElementById("firstElement").value);
	console.log(first)
	var second = Number(document.getElementById("secondElement").value);
	console.log(second)

	answer = first / second;
	console.log(answer)

	document.getElementById("answer").innerHTML = answer;
}
