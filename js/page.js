let navBtn = document.querySelectorAll(".nav-btn");
let page = document.querySelectorAll(".page");
let home = document.querySelector("#home");
let about =  document.querySelector("#about");
let contact = document.querySelector("#contact");
let pages = [ home, about, contact ];

for(let r=0; r < pages.length; r++) {
	navBtn[r].addEventListener("click", () => {
		for(var page of pages) {
			page.style.zIndex = page == pages[r] ? 1 : 0;
		}
	});
}
