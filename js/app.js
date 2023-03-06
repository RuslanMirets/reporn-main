// Search textarea
(function () {
	const textarea = document.querySelector(".search__textarea");
	const reset = document.querySelector(".search__reset");

	function autosize() {
		setTimeout(function () {
			textarea.style.cssText = "height:auto;";
			textarea.style.cssText = "height:" + textarea.scrollHeight + "px";
		}, 0);
	}

	textarea.addEventListener("keydown", autosize);
	reset.addEventListener("click", (e) => {
		autosize();
	});
	window.addEventListener("resize", (e) => {
		autosize();
	});
})();

// Sort dropdown
(function () {
	const btn = document.querySelector(".sort__btn");
	const dropdown = document.querySelector(".sort__content");

	btn?.addEventListener("click", (e) => {
		btn.classList.toggle("active");
		if (dropdown.style.maxHeight) {
			dropdown.style.maxHeight = null;
		} else {
			dropdown.style.maxHeight = dropdown.scrollHeight + "px";
		}
		e.stopPropagation();
	});

	document.addEventListener("click", (e) => {
		btn?.classList.remove("active");
		dropdown.style.maxHeight = null;
	});
})();
