/* menu burger*/
function toggleMenu() {
  const navbar = document.querySelector(".navbar");
  const menuOverlay = document.querySelector("menuOverlay");

  if (navbar.classList.contains("active")) {
    navbar.classList.remove("active");
    menuOverlay.classList.remove("active");
  } else {
    navbar.classList.add("active");
    menuOverlay.classList.add("active");
  }
}

const headerOn = document.querySelector(".headerMenu");
const headerOff = document.querySelector(".navbarClose");

headerOn.addEventListener("click", () => {
  if (getComputedStyle(headerOn).display != "none") {
    headerOn.style.display = "none";
  } else {
    headerOn.style.display = "block";
  }
});

headerOff.addEventListener("click", () => {
  if (getComputedStyle(headerOn).display === "none") {
    setTimeout(() => {
      headerOn.style.display = "block";
    }, 300);
  } else {
    headerOn.style.display = "none";
  }
});
/* fin du menu burger */

/* boutton scroll */
$(function () {
  $("a[href*=#]").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      { scrollTop: $($(this).attr("href")).offset().top },
      500,
      "linear"
    );
  });
});
/* fin boutton scroll */
