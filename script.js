let item = document.querySelectorAll(".question")

for (i=0; i<item.length; i++){
	item[i].addEventListener("click", function(){

		//make active
		this.classList.toggle("active");

		//make next element show/hide
		let answer = this.nextElementSibling;

		if (answer.style.display === "block"){
			answer.style.display = "none";
		} else {
			answer.style.display ="block";
		}




	});

}
