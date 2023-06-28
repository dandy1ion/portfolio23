//toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
	menuIcon.classList.toggle("bx-x");
	navbar.classList.toggle("active");
};

//scroll sections
//tweak this more...
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
	sections.forEach((sec) => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 100;
		let height = sec.offsetHeight;
		let id = sec.getAttribute("id");

		if (top >= offset && top < offset + height) {
			//active navbar link
			navLinks.forEach((links) => {
				links.classList.remove("active");
				document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
			});
		}
	});

	//remove toggle icon and navbar when click navbar link
	menuIcon.classList.remove("bx-x");
	navbar.classList.remove("active");
};

// email functionality
function sendMail() {
	let params = {
		name: document.getElementById("name").value,
		email: document.getElementById("email").value,
		number: document.getElementById("number").value,
		subject: document.getElementById("subject").value,
		message: document.getElementById("message").value,
	};

	const serviceID = "service_4j1t30m";
	const templateID = "template_8le21od";

	emailjs
		.send(serviceID, templateID, params)
		.then((res) => {
			document.getElementById("name").value = "";
			document.getElementById("email").value = "";
			document.getElementById("number").value = "";
			document.getElementById("subject").value = "";
			document.getElementById("message").value = "";
			console.log(res);
			alert("your message sent successfully");
		})
		.catch((err) => console.log(err));
}
