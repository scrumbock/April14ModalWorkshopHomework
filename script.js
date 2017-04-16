// script to open the modal on page load after 3 secs

var modal =	document.getElementById("my-modal");
var openM;

function openModal() {
	window.onload = delayModal()
}

function delayModal() {
	openM = setTimeout(openFunc, 3000);
}

function openFunc() {
	modal.style.display = "block";
}

openModal()

// to close modal on esc key

function closeModal(event) {
	modal.style.display = "none";
}

document.addEventListener("keyup", function(e) {
	if (e.keyCode == 27) {
		closeModal();
	}
});

// for mobile, to close with the x 

var mobileModalClose = document.getElementsByClassName("close")[0];

mobileModalClose.addEventListener("click", function() {
	modal.style.display = "none";
})


