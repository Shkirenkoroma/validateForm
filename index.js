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

const inputDate = document.getElementById("birthday");
inputDate.addEventListener("input", getDate);
inputDate.addEventListener("blur", getFieldDate);
inputDate.addEventListener("focus", putDataDate);

function getDate() {
	const currentValue = inputDate.value;
	const regExp = /^\d{1,2}\.\d{1,2}\.\d{4}$/;
	if (!regExp.test(currentValue) && !!currentValue) {
		inputDate.className = "errorBorder";
	} else inputDate.className = "usuallyState";
}

function getFieldDate() {
	const reg = /^\d{1,2}\.\d{1,2}\.\d{4}$/;
	const touchDate = new Date(inputDate.value);
	const currentDate = new Date();
	if (inputDate.value === "") {
		inputDate.className = "required";
		inputDate.value = "Обязательное поле";
	} else if (inputDate.value !== "" && !reg.test(inputDate.value)) {
		inputDate.value = "Неверный формат даты";
		inputDate.className = "required";
	} else if (currentDate <= touchDate) {
		inputDate.value = "Дата еще не наступила";
		inputDate.className = "required";
	}
}

function putDataDate() {
	if (
		inputDate.value === "Обязательное поле" ||
		inputDate.value === "Неверный формат даты"
	) {
		inputDate.value = "";
	}
	inputDate.className = "usuallyState";
}

const inputMail = document.getElementById("email");
inputMail.addEventListener("input", getMail);
inputMail.addEventListener("blur", getFieldMail);
inputMail.addEventListener("focus", putDataMail);

function getMail() {
	if (inputMail.className === "required") {
		inputMail.className = "usuallyState";
	}
	console.log("ada");
}

function getFieldMail() {
	const regExp =
		/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

	if (inputMail.value === "") {
		inputMail.className = "required";
		inputMail.value = "Обязательное поле";
	} else if (!regExp.test(String(inputMail.value).toLowerCase())) {
		inputMail.className = "required";
		inputMail.value = "Неверный формат записи";
	}
}

function putDataMail() {
	if (
		inputMail.value === "Обязательное поле" ||
		inputMail.value === "Неверный формат записи"
	) {
		inputMail.value = "";
	}
}
