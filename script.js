const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");

    const isDarkTheme = document.body.classList.contains("dark-theme");
    if(isDarkTheme) {
        themeButton.textContent = "Light Mode";
    } else {
        themeButton.textContent = "Dark Mode";
    }
});