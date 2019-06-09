function solution() {
	let str = '';
	let rows = document.getElementsByTagName('tr');

	for (let i = 0; i < rows.length; i++) {
		for (let j = 0; j < rows[i].childElementCount; j++) {
			if (
				rows[i].children[j].style.color !==
				rows[i].children[j].style.backgroundColor
			) {
				str = str + rows[i].children[j].innerText;
			}
		}
	}

	console.log(str);
	return str;
}

document.addEventListener('DOMContentLoaded', function() {
	solution();
});
