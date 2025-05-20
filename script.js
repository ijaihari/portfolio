/* Menu */
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const navbg = document.querySelector(".navbg");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
  navbg.classList.toggle("active");
});

/* Footer Section */

let year = new Date();
year = year.getFullYear();
const footer = document.querySelector(".footer");
footer.innerHTML = `Created by Jai Hari Nataraj | &copy; ${year} All Rights Reserved.`;

//scroll indicator

const proBar= document.querySelector('.pro-bar');

function handleScroll() {
  const scrollTop = document.documentElement.scrollTop; 
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;

  const scrollableHeight = scrollHeight - clientHeight;
  const scrollPercentage = (scrollTop / scrollableHeight) * 100;
  proBar.style.width = `${scrollPercentage}%`
/*   console.log(`Scrolled: ${scrollPercentage.toFixed(2)}%`); */
}

window.addEventListener("scroll", handleScroll);
