//your JS code here. If required.
var radios = document.getElementsByClassName('choose');

for (let i = 0; i < radios.length; i++) {
	if (i%2==0) {
		var label = document.querySelector(`label[for='${radios[i].id}']`);
		label.style.color = "red";
	}
}