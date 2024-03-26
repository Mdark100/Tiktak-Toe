function getValue(id) {
	return document.getElementById(id).value;
}


function disableAllButtons(exceptIds = []) {
	for (let i = 1; i <= 9; i++) {
let btn = document.getElementById(`b${i}`);
btn.disabled = !exceptIds.includes(i);
if (!exceptIds.includes(i)) {
		btn.style.color = "red";
    }
}
}

function checkWin() {
	const patterns = [
{ pattern: [1, 2, 3], message: "Horizontal pattern is made!" },
{ pattern: [4, 5, 6], message: "Horizontal pattern is made!" },
{ pattern: [7, 8, 9], message: "Horizontal pattern is made!" },
{ pattern: [1, 4, 7], message: "Vertical pattern is made!" },
{ pattern: [2, 5, 8], message: "Vertical pattern is made!" },
{ pattern: [3, 6, 9], message: "Vertical pattern is made!" },
{ pattern: [1, 5, 9], message: "Diagonal pattern is made!" },
{ pattern: [3, 5, 7], message: "Diagonal pattern is made!" },
{ pattern: [1, 3, 7, 9], message: "All corner pattern is made!" },
{ pattern: [2, 4, 6, 8], message: "Cross pattern is made!" },];

for (let {pattern, message} of patterns) {
if (pattern.every(id => getValue(`b${id}`).toUpperCase() === "X")) {
document.getElementById('print').innerHTML = message;
disableAllButtons(pattern);
return;

   }
 }
}


function myfunc() {
checkWin();
}


function myfunc_2() {
location.reload();
}

function markX(id) {
document.getElementById(id).value = "X";
checkWin();
}


for (let i = 1; i <= 9; i++) {
document.getElementById(`b${i}`).addEventListener('click', function() {
markX(`b${i}`);
});
}
