
let switchImg = function () {
	document.getElementById("largeImg").src=this.id+".jpg";
}

document.getElementById("i1").addEventListener("click", switchImg);
document.getElementById("i2").addEventListener("click", switchImg);
document.getElementById("i3").addEventListener("click", switchImg);
document.getElementById("i4").addEventListener("click", switchImg);


