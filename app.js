const themeToggle = document.querySelector(".theme-toggle");
const toggleLabel = document.querySelector(".theme-toggle__label");
const savedTheme = localStorage.getItem("theme");

const applyThemeState = (isDark) => {
    if (isDark) {
        document.documentElement.setAttribute("data-theme", "dark");
        themeToggle.setAttribute("aria-pressed", "true");
        toggleLabel.textContent = "LIGHT";
    } else {
        document.documentElement.removeAttribute("data-theme");
        themeToggle.setAttribute("aria-pressed", "false");
        toggleLabel.textContent = "DARK";
    }
};

if (savedTheme === "light") {
    applyThemeState(false);
} else {
    applyThemeState(true);
}

themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    applyThemeState(!isDark);
    localStorage.setItem("theme", !isDark ? "dark" : "light");
});
