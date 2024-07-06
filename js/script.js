// toggle class active //
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger-menu di klil //
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik di luar sidebar dan hamburger menu untuk menghilangkan nav //

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
