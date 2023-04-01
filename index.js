const inputName = document.getElementById("name");
inputName.addEventListener("blur", getRequiredField);
inputName.addEventListener("focus", putDataName);

function putDataName() {
	if (
		inputName.value === "Обязательное поле" ||
		inputName.value === "Допустимый диапазон от 2 до 25 символов"
	) {
		inputName.value = "";
	}
	inputName.className = "usuallyState";
}

function getRequiredField() {
	if (inputName.value === "") {
		inputName.className = "required";
		inputName.value = "Обязательное поле";
	} else if (inputName.value.length < 2 || inputName.value.length > 25) {
		inputName.className = "required";
		inputName.value = "Допустимый диапазон от 2 до 25 символов";
	}
}

const inputSurName = document.getElementById("surname");
inputSurName.addEventListener("blur", getField);
inputSurName.addEventListener("focus", putDataSurName);

function putDataSurName() {
	if (
		inputSurName.value === "Обязательное поле" ||
		inputSurName.value === "Допустимый диапазон от 2 до 25 символов"
	) {
		inputSurName.value = "";
	}
	inputSurName.className = "usuallyState";
}

function getField() {
	if (inputSurName.value === "") {
		inputSurName.className = "required";
		inputSurName.value = "Обязательное поле";
	} else if (inputSurName.value.length < 2 || inputSurName.value.length > 25) {
		inputSurName.className = "required";
		inputSurName.value = "Допустимый диапазон от 2 до 25 символов";
	}
}
