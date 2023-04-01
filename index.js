const inputName = document.getElementById("name");
inputName.addEventListener("blur", getRequiredField);
inputName.addEventListener("focus", putDataName);

function putDataName() {
	inputName.value = "";
	inputName.className = "usuallyState";
}

function getRequiredField() {
	if (inputName.value === "") {
		inputName.className = "required";
		inputName.value = "Обязательное поле";
	}
}
