// Переключение темы
const themeBtn = document.getElementById("theme-btn");
const body = document.body;
const icon = themeBtn.querySelector("i");

themeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-theme");

    if (body.classList.contains("dark-theme")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});

// Печатающийся текст
const text = "Начинающий Frontend-разработчик";
let index = 0;
const speed = 70;
const typingEl = document.getElementById("typing-text");

function typeText() {
    if (index < text.length) {
        typingEl.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, speed);
    }
}

typeText();