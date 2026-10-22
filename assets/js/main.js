import { lessons } from "./content.js";
import { renderLesson } from "./components/lesson.js";

const main = document.querySelector("#main");
const lessonsNavigation = document.querySelector("#lessons");

let currentLessonIndex = 0;

function renderNavigation() {
    lessonsNavigation.innerHTML = "";

    lessons.forEach((lesson, index) => {
        const button = document.createElement("button");

        button.type = "button";
        button.textContent = lesson.title;

        if (index === currentLessonIndex) {
            button.classList.add("active");
        }

        button.addEventListener("click", () => {
            currentLessonIndex = index;

            renderCurrentLesson();
        });

        lessonsNavigation.appendChild(button);
    });
}

function setupLessonNavigation() {
    const previousButton =
        document.querySelector("#previous-lesson");

    const nextButton =
        document.querySelector("#next-lesson");

    previousButton.disabled =
        currentLessonIndex === 0;

    nextButton.disabled =
        currentLessonIndex === lessons.length - 1;

    previousButton.addEventListener("click", () => {
        if (currentLessonIndex > 0) {
            currentLessonIndex--;

            renderCurrentLesson();
        }
    });

    nextButton.addEventListener("click", () => {
        if (currentLessonIndex < lessons.length - 1) {
            currentLessonIndex++;

            renderCurrentLesson();
        }
    });
}

function renderCurrentLesson() {
    const lesson = lessons[currentLessonIndex];

    renderLesson(lesson, main);

    setupLessonNavigation();
    renderNavigation();
}

renderCurrentLesson();