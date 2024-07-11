import "flowbite";
var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

// Change the icons inside the button based on previous settings
if (localStorage.getItem("color-theme") === "dark" || (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  themeToggleLightIcon.classList.remove("hidden");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
}

var themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // if set via local storage previously
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("roadmapButton");
  const loader = button.querySelector(".loader");
  const loadingText = button.querySelector(".loading-text");
  const loadingTextExtended = button.querySelector(".loading-text-extended");

  button.addEventListener("click", function (event) {
    event.preventDefault();

    loadingText.style.display = "none";
    loader.style.display = "inline-block";
    loadingTextExtended.style.display = "block"; // Show "Loading..." text

    setTimeout(() => {
      window.location.href = "/roadmap";
    }, 5000);
  });
});

if (localStorage.getItem("color-theme") === "dark" || (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".itemLeft");

  items.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      items.forEach((el) => (el.style.animationPlayState = "paused"));
    });

    item.addEventListener("mouseleave", () => {
      items.forEach((el) => (el.style.animationPlayState = "running"));
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".itemRight");

  items.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      items.forEach((el) => (el.style.animationPlayState = "paused"));
    });

    item.addEventListener("mouseleave", () => {
      items.forEach((el) => (el.style.animationPlayState = "running"));
    });
  });
});

let currentOpenIndex = null;

function toggleAnswer(index) {
  const answer = document.getElementById(`answer-${index}`);
  const icon = document.getElementById(`icon-${index}`);
  if (answer.classList.contains("show-answer")) {
    answer.classList.remove("show-answer");
    answer.classList.add("hidden-answer");
    icon.textContent = "+";
  } else {
    answer.classList.remove("hidden-answer");
    answer.classList.add("show-answer");
    icon.textContent = "−";
  }
}

var navbar = document.querySelector(".navbar");
var lastScrollTop = 0;
var delta = 5; // Besarnya jarak scroll sebelum menentukan arah scroll

window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (Math.abs(lastScrollTop - scrollTop) <= delta)
    // Tidak ada scroll yang signifikan
    return;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-100px"; // Scroll ke bawah, sembunyikan navbar
  } else {
    navbar.style.top = "0"; // Scroll ke atas atau di posisi paling atas, tampilkan navbar
  }

  lastScrollTop = scrollTop;
});

document.addEventListener("DOMContentLoaded", function () {
  fetch("../components/Navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-container").innerHTML = data;
    })
    .catch((error) => console.error("Error loading navbar:", error));
});
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".nav-button");
  const sections = document.querySelectorAll(".content-section > div");

  // Function to switch content
  function switchContent(target) {
    sections.forEach((section) => {
      section.classList.remove("active");
      section.classList.add("hidden");
    });

    const targetSection = document.getElementById(target);
    targetSection.classList.remove("hidden");
    setTimeout(() => {
      targetSection.classList.add("active");
    }, 10); // Timeout to allow transition to apply
  }

  // Set the "aboutContent" as the default active section
  switchContent("aboutContent");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const target = this.id.replace("Btn", "Content");
      switchContent(target);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("buttonContainer");

  container.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    container.scrollLeft += evt.deltaY;
  });
});
var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.getElementById("scrollable-buttons");
  let isDown = false;
  let startX;
  let scrollLeft;

  scrollContainer.addEventListener("mousedown", (e) => {
    isDown = true;
    scrollContainer.classList.add("active");
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
  });

  scrollContainer.addEventListener("mouseleave", () => {
    isDown = false;
    scrollContainer.classList.remove("active");
  });

  scrollContainer.addEventListener("mouseup", () => {
    isDown = false;
    scrollContainer.classList.remove("active");
  });

  scrollContainer.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    scrollContainer.scrollLeft = scrollLeft - walk;
  });
});
