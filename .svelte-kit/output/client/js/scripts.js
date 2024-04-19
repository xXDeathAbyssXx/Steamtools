/*!
 * Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener('DOMContentLoaded', (event) => {
	// Navbar shrink function
	var navbarShrink = function () {
		const navbarCollapsible = document.body.querySelector('#mainNav');
		if (!navbarCollapsible) {
			return;
		}
		if (window.scrollY === 0) {
			navbarCollapsible.classList.remove('navbar-shrink');
		} else {
			navbarCollapsible.classList.add('navbar-shrink');
		}
	};

	// Shrink the navbar
	navbarShrink();

	// Shrink the navbar when page is scrolled
	document.addEventListener('scroll', navbarShrink);

	// Activate Bootstrap scrollspy on the main nav element
	const mainNav = document.body.querySelector('#mainNav');
	if (mainNav) {
		new bootstrap.ScrollSpy(document.body, {
			target: '#mainNav',
			rootMargin: '0px 0px -40%'
		});
	}

	// Collapse responsive navbar when toggler is visible
	const navbarToggler = document.body.querySelector('.navbar-toggler');
	const responsiveNavItems = [].slice.call(
		document.querySelectorAll('#navbarResponsive .nav-link')
	);
	responsiveNavItems.map(function (responsiveNavItem) {
		responsiveNavItem.addEventListener('click', () => {
			if (window.getComputedStyle(navbarToggler).display !== 'none') {
				navbarToggler.click();
			}
		});
	});

	// Activate SimpleLightbox plugin for portfolio items
	new SimpleLightbox({
		elements: '#portfolio a.portfolio-box'
	});
});

//* QUIZES *//
function score(quiz) {
	var button_label;
	if (quiz <= 14) {
		button_label = 'Cómics';
	} else if (quiz >= 15) {
		button_label = 'Cómicas';
	}

	function incrementQuizTrys() {
		quiz_trys++;
		localStorage.setItem('quiz_trys', quiz_trys);
	}

	function clearQuizTrys() {
		localStorage.setItem('quiz_trys', 1);
	}

	function displayBootstrapAlert(message, alertType, showButton) {
		var alertDiv = document.createElement('div');
		alertDiv.className = 'alert alert-' + alertType + ' alert-dismissible fade show';
		alertDiv.innerHTML = message;

		if (showButton) {
			var modalButton = document.createElement('button');
			modalButton.type = 'button';
			modalButton.className = 'btn btn-primary ml-4 my-2';
			modalButton.innerHTML = button_label;
			modalButton.setAttribute('data-toggle', 'modal');
			modalButton.setAttribute('data-target', '#exampleModal');

			alertDiv.appendChild(modalButton);
		}

		// Clear previous alerts
		var pElement = document.getElementById('form-modal-finished');
		while (pElement.firstChild) {
			pElement.removeChild(pElement.firstChild);
		}

		pElement.appendChild(alertDiv);
	}

	let answers;
	var result = false;
	var quiz_trys = parseInt(localStorage.getItem('quiz_trys')) || 0;
	var h = 1;

	// Answers for each question
	if (quiz === 1) {
		var q2_1 = document.forms.form['q2[]'][0].value;
		var q2_2 = document.forms.form['q2[]'][1].value;
		var q2_3 = document.forms.form['q2[]'][2].value;
		var q2_4 = document.forms.form['q2[]'][3].value;
		var q2_5 = document.forms.form['q2[]'][4].value;

		if (q2_1 == '2' && q2_2 == '5' && q2_3 == '3' && q2_4 == '1' && q2_5 == '4') {
			result = true;
			clearQuizTrys();
		} else {
			incrementQuizTrys();
		}

		if (result) {
			var elements = document.getElementById('questions').elements;
			for (var j = 0, len = elements.length; j < len; ++j) {
				elements[j].disabled = true;
			}
		}
	} else if (quiz === 2) {
		// Referencing the values of the questions
		var q1 = Array.from(document.forms.form['q1[]'])
			.filter((input) => input.checked)
			.map((input) => input.value);

		// Array for the questions
		let questions = [q1];

		answers = [['a', 'b']];
		for (var i = 0; i < h; i++) {
			var correctAnswers = answers[i];

			// Check if all correct answers are selected
			var isAllCorrect = correctAnswers.every((answer) => q1.includes(answer));

			if (isAllCorrect) {
				result = true;
				clearQuizTrys();
			} else {
				incrementQuizTrys();
			}
		}

		if (result) {
			var elements = document.getElementById('questions').elements;
			for (var j = 0, len = elements.length; j < len; ++j) {
				elements[j].disabled = true;
			}
		}
	} else if (quiz === 3) {
		// Referencing the values of the questions
		var q1 = Array.from(document.forms.form['q1[]'])
			.filter((input) => input.checked)
			.map((input) => input.value);

		// Array for the questions
		let questions = [q1];

		answers = [['b']];

		for (var i = 0; i < h; i++) {
			var correctAnswers = answers[i];

			// Check if all correct answers are selected
			var isAllCorrect = correctAnswers.every((answer) => q1.includes(answer));

			if (isAllCorrect) {
				result = true;
				clearQuizTrys();
			} else {
				incrementQuizTrys();
			}
		}

		if (result) {
			var elements = document.getElementById('questions').elements;
			for (var j = 0, len = elements.length; j < len; ++j) {
				elements[j].disabled = true;
			}
		}
	} else if (quiz === 4) {
		// Referencing the values of the questions
		var q1 = Array.from(document.forms.form['q1[]'])
			.filter((input) => input.checked)
			.map((input) => input.value);

		// Array for the questions
		let questions = [q1];

		answers = [['a']];
		for (var i = 0; i < h; i++) {
			var correctAnswers = answers[i];

			// Check if all correct answers are selected
			var isAllCorrect = correctAnswers.every((answer) => q1.includes(answer));

			if (isAllCorrect) {
				result = true;
				clearQuizTrys();
			} else {
				incrementQuizTrys();
			}
		}

		if (result) {
			var elements = document.getElementById('questions').elements;
			for (var j = 0, len = elements.length; j < len; ++j) {
				elements[j].disabled = true;
			}
		}
	} else if (quiz === 5) {
		// Referencing the values of the questions
		var q1 = Array.from(document.forms.form['q1[]'])
			.filter((input) => input.checked)
			.map((input) => input.value);

		// Array for the questions
		let questions = [q1];

		answers = [['b']];
		for (var i = 0; i < h; i++) {
			var correctAnswers = answers[i];

			// Check if all correct answers are selected
			var isAllCorrect = correctAnswers.every((answer) => q1.includes(answer));

			if (isAllCorrect) {
				result = true;
				clearQuizTrys();
			} else {
				incrementQuizTrys();
			}
		}

		if (result) {
			var elements = document.getElementById('questions').elements;
			for (var j = 0, len = elements.length; j < len; ++j) {
				elements[j].disabled = true;
			}
		}
	} else if (quiz === 6) {
		result = true;
		clearQuizTrys();
		if (result) {
			var elements = document.getElementById('questions').elements;
			for (var j = 0, len = elements.length; j < len; ++j) {
				elements[j].disabled = true;
			}
		}
	} else if (quiz === 7) {
		// Referencing the values of the questions
		var q1 = Array.from(document.forms.form['q1[]'])
			.filter((input) => input.checked)
			.map((input) => input.value);

		// Array for the questions
		let questions = [q1];

		answers = [['d']];
		for (var i = 0; i < h; i++) {
			var correctAnswers = answers[i];

			// Check if all correct answers are selected
			var isAllCorrect = correctAnswers.every((answer) => q1.includes(answer));

			if (isAllCorrect) {
				result = true;
				clearQuizTrys();
			} else {
				incrementQuizTrys();
			}
		}

		if (result) {
			var elements = document.getElementById('questions').elements;
			for (var j = 0, len = elements.length; j < len; ++j) {
				elements[j].disabled = true;
			}
		}
	} else if (quiz === 8) {
		// Referencing the values of the questions
		var q1 = Array.from(document.forms.form['q1[]'])
			.filter((input) => input.checked)
			.map((input) => input.value);

		// Array for the questions
		let questions = [q1];

		answers = [['a']];
		for (var i = 0; i < h; i++) {
			var correctAnswers = answers[i];

			// Check if all correct answers are selected
			var isAllCorrect = correctAnswers.every((answer) => q1.includes(answer));

			if (isAllCorrect) {
				result = true;
				clearQuizTrys();
			} else {
				incrementQuizTrys();
			}
		}

		if (result) {
			var elements = document.getElementById('questions').elements;
			for (var j = 0, len = elements.length; j < len; ++j) {
				elements[j].disabled = true;
			}
		}
	} else if (quiz === 9) {
		// Referencing the values of the questions
		var q1 = Array.from(document.forms.form['q1[]'])
			.filter((input) => input.checked)
			.map((input) => input.value);

		// Array for the questions
		let questions = [q1];

		answers = [['a']];
		for (var i = 0; i < h; i++) {
			var correctAnswers = answers[i];

			// Check if all correct answers are selected
			var isAllCorrect = correctAnswers.every((answer) => q1.includes(answer));

			if (isAllCorrect) {
				result = true;
				clearQuizTrys();
			} else {
				incrementQuizTrys();
			}
		}

		if (result) {
			var elements = document.getElementById('questions').elements;
			for (var j = 0, len = elements.length; j < len; ++j) {
				elements[j].disabled = true;
			}
		}
	} else if (quiz === 10) {
		// Referencing the values of the questions
		var q1 = Array.from(document.forms.form['q1[]'])
			.filter((input) => input.checked)
			.map((input) => input.value);

		// Array for the questions
		let questions = [q1];

		answers = [['c']];
		for (var i = 0; i < h; i++) {
			var correctAnswers = answers[i];

			// Check if all correct answers are selected
			var isAllCorrect = correctAnswers.every((answer) => q1.includes(answer));

			if (isAllCorrect) {
				result = true;
				clearQuizTrys();
			} else {
				incrementQuizTrys();
			}
		}

		if (result) {
			var elements = document.getElementById('questions').elements;
			for (var j = 0, len = elements.length; j < len; ++j) {
				elements[j].disabled = true;
			}
		}
	} else if (quiz === 11) {
		// Referencing the values of the questions
		var q1 = Array.from(document.forms.form['q1[]'])
			.filter((input) => input.checked)
			.map((input) => input.value);

		// Array for the questions
		let questions = [q1];

		answers = [['c']];
		for (var i = 0; i < h; i++) {
			var correctAnswers = answers[i];

			// Check if all correct answers are selected
			var isAllCorrect = correctAnswers.every((answer) => q1.includes(answer));

			if (isAllCorrect) {
				result = true;
				clearQuizTrys();
			} else {
				incrementQuizTrys();
			}
		}

		if (result) {
			var elements = document.getElementById('questions').elements;
			for (var j = 0, len = elements.length; j < len; ++j) {
				elements[j].disabled = true;
			}
		}
	} else if (quiz === 12) {
		result = true;
		clearQuizTrys();
		if (result) {
			var elements = document.getElementById('questions').elements;
			for (var j = 0, len = elements.length; j < len; ++j) {
				elements[j].disabled = true;
			}
		}
	} else if (quiz === 13) {
		// Referencing the values of the questions
		var q1 = Array.from(document.forms.form['q1[]'])
			.filter((input) => input.checked)
			.map((input) => input.value);

		// Array for the questions
		let questions = [q1];

		answers = [['a']];
		for (var i = 0; i < h; i++) {
			var correctAnswers = answers[i];

			// Check if all correct answers are selected
			var isAllCorrect = correctAnswers.every((answer) => q1.includes(answer));

			if (isAllCorrect) {
				result = true;
				clearQuizTrys();
			} else {
				incrementQuizTrys();
			}
		}

		if (result) {
			var elements = document.getElementById('questions').elements;
			for (var j = 0, len = elements.length; j < len; ++j) {
				elements[j].disabled = true;
			}
		}
	} else if (quiz === 14) {
		result = true;
		clearQuizTrys();
		if (result) {
			var elements = document.getElementById('questions').elements;
			for (var j = 0, len = elements.length; j < len; ++j) {
				elements[j].disabled = true;
			}
		}
	} else if (quiz === 15) {
		// Referencing the values of the questions
		var q1 = Array.from(document.forms.form['q1[]'])
			.filter((input) => input.checked)
			.map((input) => input.value);

		// Array for the questions
		let questions = [q1];

		answers = [['b']];
		for (var i = 0; i < h; i++) {
			var correctAnswers = answers[i];

			// Check if all correct answers are selected
			var isAllCorrect = correctAnswers.every((answer) => q1.includes(answer));

			if (isAllCorrect) {
				result = true;
				clearQuizTrys();
			} else {
				incrementQuizTrys();
			}
		}

		if (result) {
			var elements = document.getElementById('questions').elements;
			for (var j = 0, len = elements.length; j < len; ++j) {
				elements[j].disabled = true;
			}
		}
	} else if (quiz === 16) {
		// Referencing the values of the questions
		var q1 = Array.from(document.forms.form['q1[]'])
			.filter((input) => input.checked)
			.map((input) => input.value);

		// Array for the questions
		let questions = [q1];

		answers = [['d']];
		for (var i = 0; i < h; i++) {
			var correctAnswers = answers[i];

			// Check if all correct answers are selected
			var isAllCorrect = correctAnswers.every((answer) => q1.includes(answer));

			if (isAllCorrect) {
				result = true;
				clearQuizTrys();
			} else {
				incrementQuizTrys();
			}
		}

		if (result) {
			var elements = document.getElementById('questions').elements;
			for (var j = 0, len = elements.length; j < len; ++j) {
				elements[j].disabled = true;
			}
		}
	} else if (quiz === 17) {
		result = true;
		clearQuizTrys();
		if (result) {
			var elements = document.getElementById('questions').elements;
			for (var j = 0, len = elements.length; j < len; ++j) {
				elements[j].disabled = true;
			}
		}
	} else if (quiz === 18) {
		// Referencing the values of the questions
		var q1 = Array.from(document.forms.form['q1[]'])
			.filter((input) => input.checked)
			.map((input) => input.value);

		// Array for the questions
		let questions = [q1];

		answers = [['c', 'e', 'f']];
		for (var i = 0; i < h; i++) {
			var correctAnswers = answers[i];

			// Check if all correct answers are selected
			var isAllCorrect = correctAnswers.every((answer) => q1.includes(answer));

			if (isAllCorrect) {
				result = true;
				clearQuizTrys();
			} else {
				incrementQuizTrys();
			}
		}

		if (result) {
			var elements = document.getElementById('questions').elements;
			for (var j = 0, len = elements.length; j < len; ++j) {
				elements[j].disabled = true;
			}
		}
	} else if (quiz === 19) {
		// Referencing the values of the questions
		var q1 = Array.from(document.forms.form['q1[]'])
			.filter((input) => input.checked)
			.map((input) => input.value);

		// Array for the questions
		let questions = [q1];

		answers = [['b', 'c']];
		incorrects = ['a', 'd'];
		for (var i = 0; i < h; i++) {
			var correctAnswers = answers[i];
			var incorrectDetect;

			var someIsCorrect = correctAnswers.some((answer) => q1.includes(answer));
			if (someIsCorrect) {
				incorrectDetect = incorrects.some((answer) => q1.includes(answer));
			}

			if (incorrectDetect === false) {
				result = true;
				clearQuizTrys();
			} else {
				incrementQuizTrys();
			}
		}

		if (result) {
			var elements = document.getElementById('questions').elements;
			for (var j = 0, len = elements.length; j < len; ++j) {
				elements[j].disabled = true;
			}
		}
	} else if (quiz === 20) {
		result = true;
		clearQuizTrys();
		if (result) {
			var elements = document.getElementById('questions').elements;
			for (var j = 0, len = elements.length; j < len; ++j) {
				elements[j].disabled = true;
			}
		}
	} else if (quiz === 21) {
		var q21_1 = document.forms.form['q2[]'][0].value;
		var q21_2 = document.forms.form['q2[]'][1].value;
		var q21_3 = document.forms.form['q2[]'][2].value;
		var q21_4 = document.forms.form['q2[]'][3].value;

		if (q21_1 == '4' && q21_2 == '1' && q21_3 == '3' && q21_4 == '2') {
			result = true;
			clearQuizTrys();
		} else {
			incrementQuizTrys();
		}

		if (result) {
			var elements = document.getElementById('questions').elements;
			for (var j = 0, len = elements.length; j < len; ++j) {
				elements[j].disabled = true;
			}
		}
	} else if (quiz === 22) {
		// Referencing the values of the questions
		var q1 = Array.from(document.forms.form['q1[]'])
			.filter((input) => input.checked)
			.map((input) => input.value);

		// Array for the questions
		let questions = [q1];

		answers = [['c']];
		for (var i = 0; i < h; i++) {
			var correctAnswers = answers[i];

			// Check if all correct answers are selected
			var isAllCorrect = correctAnswers.every((answer) => q1.includes(answer));

			if (isAllCorrect) {
				result = true;
				clearQuizTrys();
			} else {
				incrementQuizTrys();
			}
		}

		if (result) {
			var elements = document.getElementById('questions').elements;
			for (var j = 0, len = elements.length; j < len; ++j) {
				elements[j].disabled = true;
			}
		}
	} else if (quiz === 23) {
		// Referencing the values of the questions
		var q1 = Array.from(document.forms.form['q1[]'])
			.filter((input) => input.checked)
			.map((input) => input.value);

		// Array for the questions
		let questions = [q1];

		answers = [['c']];
		for (var i = 0; i < h; i++) {
			var correctAnswers = answers[i];

			// Check if all correct answers are selected
			var isAllCorrect = correctAnswers.every((answer) => q1.includes(answer));

			if (isAllCorrect) {
				result = true;
				clearQuizTrys();
			} else {
				incrementQuizTrys();
			}
		}

		if (result) {
			var elements = document.getElementById('questions').elements;
			for (var j = 0, len = elements.length; j < len; ++j) {
				elements[j].disabled = true;
			}
		}
	} else if (quiz === 24) {
		// Referencing the values of the questions
		var q1 = Array.from(document.forms.form['q1[]'])
			.filter((input) => input.checked)
			.map((input) => input.value);

		// Array for the questions
		let questions = [q1];

		answers = [['d']];
		for (var i = 0; i < h; i++) {
			var correctAnswers = answers[i];

			// Check if all correct answers are selected
			var isAllCorrect = correctAnswers.every((answer) => q1.includes(answer));

			if (isAllCorrect) {
				result = true;
				clearQuizTrys();
			} else {
				incrementQuizTrys();
			}
		}

		if (result) {
			var elements = document.getElementById('questions').elements;
			for (var j = 0, len = elements.length; j < len; ++j) {
				elements[j].disabled = true;
			}
		}
	}

	var goodmsg = [
		'¡Increíble trabajo, campeón! 🌟 Completaste el quiz como un verdadero genio. ¡Eres asombroso! 🎉',
		'¡Woohoo! 🚀 ¡Eres un superhéroe del conocimiento! Completar el quiz demuestra lo inteligente que eres. ¡Bien hecho! 🌈',
		'¡Bravo, pequeño explorador! 🌍 Has conquistado el quiz con valentía y cerebro brillante. ¡Estoy muy orgulloso de ti! 🏆',
		'¡Fantástico! 🎈 Completaste el quiz con colores brillantes. Eres una estrella brillante en el mundo del aprendizaje. ¡Sigue así! 🌠',
		'¡Increíble! 🎓 Completar el quiz es solo el comienzo de tus grandes aventuras educativas. ¡Estoy emocionado por todo lo que aprenderás! 📚'
	];
	var badmsg = [
		'¡Vamos, campeón! 💪 ¡Inténtalo de nuevo y verás lo increíble que eres! 🌟',
		'¡No te preocupes, superhéroe! 🦸‍♂️ ¡Inténtalo otra vez y brillarás aún más fuerte! 💫',
		'¡No te rindas! 👏 ¡Tú puedes hacerlo! ¡Inténtalo de nuevo! 📚',
		'¡Ánimo, pequeño explorador! 🚀 ¡Una nueva aventura te espera, inténtalo de nuevo! 🌈',
		'¡No pasa nada! 🎈 ¡Inténtalo con más colores y verás lo que logras! 🌠'
	];

	function getGoodMsg(arr) {
		let randomIndex = Math.floor(Math.random() * arr.length);
		return arr[randomIndex];
	}

	function getBadMsg(arr) {
		let randomIndex = Math.floor(Math.random() * arr.length);
		return arr[randomIndex];
	}

	var randomGoodMsg = getGoodMsg(goodmsg);
	var randomBadMsg = getBadMsg(badmsg);

	if (result === true) {
		let intentos_word;
		if (quiz_trys == 1) {
			intentos_word = 'intento';
		} else if (quiz_trys > 1) {
			intentos_word = 'intentos';
		}
		displayBootstrapAlert(
			randomGoodMsg + ' ¡Completaste este quiz después de ' + quiz_trys + ' ' + intentos_word + '!',
			'success',
			true
		);
	} else if (result === false) {
		displayBootstrapAlert(randomBadMsg, 'danger', false);
		// Clear only incorrect checkboxes
		var elements = document.getElementById('questions').elements;
		for (var j = 0, len = elements.length; j < len; ++j) {
			var elementValue = elements[j].value;
			if (elementValue && !correctAnswers.includes(elementValue)) {
				elements[j].checked = false;
			}
		}
	}

	return false;
}

// Función para verificar si un valor es un número entre 1 y 5
function isValidNumber(value) {
	var num = parseInt(value, 10);
	return !isNaN(num) && num >= 1 && num <= 5;
}

function limitCheckboxes(checkbox, limit) {
	var checkboxes = document.forms.form['q1[]'];
	var checkedCheckboxes = Array.from(checkboxes).filter((chk) => chk.checked);

	if (checkedCheckboxes.length > limit) {
		checkbox.checked = false;
	}
}

function maxLengthCheck(object) {
	if (object.value.length > object.maxLength)
		object.value = object.value.slice(0, object.maxLength);
}

//Canvas
function detectPlatform(width) {
	if (width >= 320 && width < 480) {
		return 'phone_portrait';
	} else if (width >= 480 && width < 600) {
		return 'phone_landscape';
	} else if (width >= 600 && width < 900) {
		return 'tablet_portrait';
	} else if (width >= 900 && width < 1200) {
		return 'tablet_landscape';
	} else if (width >= 1200 && width < 1400) {
		return 'laptop';
	} else if (width >= 1400 && width < 1800) {
		return 'desktop';
	} else if (width >= 1800 && width < 3200) {
		return 'desktop_big';
	} else {
		return 'none';
	}
}

function DownloadCanvasAsImage(className) {
	let downloadLink = document.createElement('a');
	downloadLink.setAttribute('download', 'logo-del-rmb.png');
	let canvas = document.querySelector('.' + className); // Select the canvas by class
	let dataURL = canvas.toDataURL('image/png');
	let url = dataURL.replace(/^data:image\/png/, 'data:application/octet-stream');
	downloadLink.setAttribute('href', url);
	downloadLink.click();
}

//Remove keys inspect
function ctrlShiftKey(e, keyCode) {
	return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
	// Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
	if (
		event.keyCode === 123 ||
		ctrlShiftKey(e, 'I') ||
		ctrlShiftKey(e, 'J') ||
		ctrlShiftKey(e, 'C') ||
		(e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
	)
		return false;
};