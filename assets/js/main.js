import { lessons } from "./content.js";
import { renderLesson } from "./lesson.js";

const STORAGE_KEY = "genai-course-ski-v1";
const main = document.querySelector("#main");
const lessonsNavigation = document.querySelector("#lessons");
const resetButton = document.querySelector("#reset");


let currentLessonIndex = 0;
const savedProgress = JSON.parse(
  localStorage.getItem(STORAGE_KEY) || "[]"
);

const completedLessons = new Set(savedProgress);

function renderNavigation() {
    lessonsNavigation.innerHTML = "";

    lessons.forEach((lesson, index) => {
        const button = document.createElement("button");

        button.type = "button";
        button.textContent = lesson.title;

        if (index === currentLessonIndex) {
            button.classList.add("active");
        }
        if (completedLessons.has(lesson.id)) {
            button.classList.add("completed");
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

    renderLesson(
        lesson,
        main,
        () => completeLesson(lesson.id)
    );

    setupLessonNavigation();
    renderNavigation();
}

renderCurrentLesson();

function updateProgress() {
    const progress = document.querySelector("#progress");
    const progressLabel = document.querySelector("#progress-label");

    progress.max = lessons.length;
    progress.value = completedLessons.size;

    progressLabel.textContent =
        `${completedLessons.size} / ${lessons.length}`;
}

function completeLesson(lessonId) {
  completedLessons.add(lessonId);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify([...completedLessons])
  );

  updateProgress();
  renderNavigation();
}

resetButton.addEventListener("click", () => {
  completedLessons.clear();

  localStorage.removeItem(STORAGE_KEY);

  updateProgress();
  renderNavigation();
});

updateProgress();
renderCurrentLesson();