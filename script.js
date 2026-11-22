const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function() {
    document.body.classList.toggle("light-theme");

    const isLightTheme = document.body.classList.contains("light-theme");
    if(isLightTheme) {
        themeButton.textContent = "Dark Mode";
    } else {
        themeButton.textContent = "Light Mode";
    }
});