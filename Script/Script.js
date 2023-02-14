// Start Header
const menuBar = document.querySelector(".header .menu-bar");
const navItems = document.querySelector(".header .nav-items");
menuBar.addEventListener("click", () => {
  navItems.classList.toggle("active");
});
// End Header
// Start Choose Video
const changeVideo = document.querySelectorAll(".dots .dot");
const videoSelect = document.querySelector(".choose .video video");
changeVideo.forEach((dot) => {
  const srcVideo = dot.getAttribute("data-src");
  dot.addEventListener("click", () => {
    videoSelect.src = srcVideo;
  });
});
// End Choose Video
