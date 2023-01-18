const modal_button = document.querySelector(".contact_button");

modal_button.addEventListener("click", displayModal());

function displayModal() {
    const modal = document.getElementById("contact_modal");
    console.log("test");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
