
var1 = '<img src="MDK_R_LOGOv';
var2 = '.png" border="0" width="800" height="150" alt="MDK Releasez Logo">';

function printImage() {
	var nbr = Math.ceil(Math.random() * 7);
document.write(var1 + nbr + var2);
}
