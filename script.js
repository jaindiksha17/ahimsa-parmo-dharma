const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  siteNav.classList.toggle("is-open", !isOpen);
});

siteNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    siteNav.classList.remove("is-open");
  }
});

const reflections = [
  "Where might you make a little more room for another point of view?",
  "What is one small way you could reduce harm in your day?",
  "Is there something you can appreciate without needing to possess?",
  "What changes when you pause before responding?",
  "Which living beings share the space around you right now?",
];

const reflectionPrompt = document.querySelector("#reflection-prompt");
const reflectionButton = document.querySelector("#new-reflection");
let previousReflection = 0;

reflectionButton.addEventListener("click", () => {
  let nextReflection = Math.floor(Math.random() * reflections.length);
  while (reflections.length > 1 && nextReflection === previousReflection) {
    nextReflection = Math.floor(Math.random() * reflections.length);
  }
  previousReflection = nextReflection;
  reflectionPrompt.textContent = reflections[nextReflection];
});
