let x = document.getElementById("nav-list");
let menubtn = document.querySelector(".menubtn");
let closebtn = document.querySelector(".closebtn");

function openMenu() {
  x.style.display = "block";
  menubtn.style.display = "none";
  closebtn.style.display = "block";
}
function closeMenu() {
  x.style.display = "none";
  menubtn.style.display = "block";
  closebtn.style.display = "none";
}

gsap.from(".main", 1.5, { opacity: 0, y: -300, delay: 0.2 });
gsap.from(".main2", 1.5, { opacity: 0, y: -300, delay: 0.5 });
gsap.from(".main3", 1.5, { opacity: 0, y: -300, delay: 0.7 });
gsap.from(".main_heading", 1.5, { opacity: 0, y: -300, delay: 0.8 });
gsap.from(".logo", 1.5, { opacity: 0, x: -300, delay: 0.8 });
// gsap.from(".footer", 1.5, { opacity: 0, y: -300, delay: 0.7 });
