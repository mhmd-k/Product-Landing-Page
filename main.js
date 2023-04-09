const menuBtn = document.querySelector("#nav-bar");
let isHidden = true;
menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  if (isHidden) {
    document.querySelector(".mobile-links").classList.add("show");
    isHidden = false;
    menuBtn.style.color = "black";
    document
      .querySelector("header .logo a img")
      .setAttribute("src", "./images/logo-b.png");
  } else {
    hideNavbar();
  }
});

document.addEventListener("click", () => {
  hideNavbar();
});

function hideNavbar() {
  document.querySelector(".mobile-links").classList.remove("show");
  if (window.scrollY === 0) {
    menuBtn.style.color = "white";
    document
      .querySelector("header .logo a img")
      .setAttribute("src", "./images/logo-w.png");
  }
  isHidden = true;
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    document.querySelector("header").classList.add("scroll");
    document
      .querySelector("header .logo a img")
      .setAttribute("src", "./images/logo-b.png");
    menuBtn.style.color = "black";
  } else {
    document.querySelector("header").classList.remove("scroll");
    document
      .querySelector("header .logo a img")
      .setAttribute("src", "./images/logo-w.png");
    menuBtn.style.color = "white";
  }
});
