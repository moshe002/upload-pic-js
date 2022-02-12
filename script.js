const img = document.querySelector("#img");
var upload = "";

img.addEventListener("change", function(){
	const reader = new FileReader();
	reader.addEventListener("load", () => {
		upload = reader.result;
			document.querySelector("#picture").style.backgroundImage = `url(${upload})`;
	});
	reader.readAsDataURL(this.files[0]);
});