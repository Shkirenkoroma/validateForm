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
		inputDate.value === "Неверный формат даты" ||
		inputDate.value === "Дата еще не наступила"
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

const inputPassword = document.getElementById("password");
inputPassword.addEventListener("input", getPassword);
inputPassword.addEventListener("blur", getFieldPassword);
inputPassword.addEventListener("focus", putDataPassword);

function getPassword() {
	inputPassword.type = "password";
}

function getFieldPassword() {
	const isCapital = (letter) => !(letter === letter.toLowerCase());
	const regExpNumber = /[0-9]/;
	const regExpSymbol = /[!@#$%]/;
	if (inputPassword.value === "") {
		inputPassword.type = "text";
		inputPassword.value = "Обязательное поле";
		inputPassword.className = "required";
	} else if (inputPassword.value.length < 8) {
		inputPassword.type = "text";
		inputPassword.value = "Необходимо ввести не менее 8 символов";
		inputPassword.className = "required";
	} else if (!isCapital(inputPassword.value)) {
		inputPassword.type = "text";
		inputPassword.value = "Минимум 1 символ в верхнем регистре";
		inputPassword.className = "required";
	} else if (!regExpNumber.test(inputPassword.value)) {
		inputPassword.type = "text";
		inputPassword.value = "Минимум одна цифра 1-9";
		inputPassword.className = "required";
	} else if (!regExpSymbol.test(inputPassword.value)) {
		inputPassword.type = "text";
		inputPassword.value = "Минимум 1 символ из перечисленных !@#$%";
		inputPassword.className = "required";
	}
}

function putDataPassword() {
	if (
		(inputPassword.value =
			"Обязательное поле" ||
			inputPassword.value === "Необходимо ввести не менее 8 символов" ||
			inputPassword.value === "Минимум 1 символ в верхнем регистре") ||
		inputPassword.value === "Минимум одна цифра 1-9" ||
		inputPassword.value === "Минимум 1 символ из перечисленных !@#$%"
	) {
		inputPassword.value = "";
		inputPassword.className = "usuallyState";
	}
}

const inputDoublePassword = document.getElementById("doublepassword");
inputDoublePassword.addEventListener("input", getDoublePassword);
inputDoublePassword.addEventListener("blur", getFieldDoublePassword);
inputDoublePassword.addEventListener("focus", putDataDoublePassword);

function getDoublePassword() {
	inputDoublePassword.type = "password";
}

function getFieldDoublePassword() {
	if (inputDoublePassword.value === "") {
		inputDoublePassword.type = "text";
		inputDoublePassword.value = "Обязательное поле";
		inputDoublePassword.className = "required";
	}
	if (inputDoublePassword.value !== inputPassword.value) {
		inputDoublePassword.type = "text";
		inputDoublePassword.value = "Пароль не соответствует";
		inputDoublePassword.className = "required";
	}
}

function putDataDoublePassword() {
	if (
		inputDoublePassword.value === "Обязательное поле" ||
		inputDoublePassword.value === "Пароль не соответствует"
	) {
		inputDoublePassword.value = "";
		inputDoublePassword.className = "usuallyState";
	}
}

const sentData = async () => {
	const url = "https://jsonplaceholder.typicode.com/posts";
	let newPerson = {
		title: "person",
		body: `name:${inputName.value},surname:${inputSurName.value}, date:${inputDate.value}, email:${inputMail.value},password:${inputPassword.value},
	doublepassword:${inputDoublePassword.value}`,
		userId: 2,
	};
	console.log("body of request", newPerson);
	const response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(newPerson),
	});
	if (!response.ok) {
		throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response}`);
	}
	return await response.json();
};

const form = document.getElementById("formElem");
form.addEventListener("submit", (e) => {
	if (
		inputName.value !== "Обязательное поле" &&
		inputSurName.value !== "Обязательное поле" &&
		inputDate.value !== "Обязательное поле" &&
		inputMail.value !== "Обязательное поле" &&
		inputPassword.value !== "Обязательное поле" &&
		inputDoublePassword.value !== "Обязательное поле"
	) {
		e.preventDefault();
		sentData();
	} else {
		e.preventDefault();
		alert("Необходимо заполнить все поля");
	}
});
