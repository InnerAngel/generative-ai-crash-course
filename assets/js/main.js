import { lessons } from "./content.js";
import { renderLesson } from "./lesson.js";

const STORAGE_KEY = "genai-course-skibidi-v1";

const main = document.querySelector("#main");
const lessonsNavigation = document.querySelector("#lessons");
const resetButton = document.querySelector("#reset");
const progress = document.querySelector("#progress");
const progressLabel = document.querySelector("#progress-label");

let currentLessonIndex = 0;

function loadProgress() {
    try {
        const savedProgress = JSON.parse(
            localStorage.getItem(STORAGE_KEY) || "[]"
        );

        const validLessonIds = new Set(
            lessons.map((lesson) => lesson.id)
        );

        return new Set(
            savedProgress.filter((lessonId) =>
                validLessonIds.has(lessonId)
            )
        );
    } catch {
        return new Set();
    }
}

const completedLessons = loadProgress();


function saveProgress() {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify([...completedLessons])
    );
}


function updateProgress() {
    progressLabel.textContent =
        `${completedLessons.size} / ${lessons.length}`;
}


function completeLesson(lessonId) {
    if (completedLessons.has(lessonId)) {
        return;
    }

    completedLessons.add(lessonId);

    saveProgress();
    updateProgress();
    renderNavigation();
}


function renderNavigation() {
    lessonsNavigation.innerHTML = "";

    lessons.forEach((lesson, index) => {
        const button = document.createElement("button");

        button.type = "button";

        const lessonNumber = String(index + 1).padStart(2, "0");
        const completed = completedLessons.has(lesson.id);

        button.textContent = completed
            ? `✓ ${lessonNumber} ${lesson.title}`
            : `${lessonNumber} ${lesson.title}`;

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

    const lesson = lessons[currentLessonIndex];

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
    // Because introduction has no quiz, "start" is sufficient for completion.
        if (lesson.type === "introduction") {
            completeLesson(lesson.id);
        }

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
        () => completeLesson(lesson.id),
        currentLessonIndex,
        lessons.length
    );

    setupLessonNavigation();
    renderNavigation();
}

resetButton.addEventListener("click", () => {
    const confirmed = window.confirm(
        "Are you sure you want to reset your course progress?"
    );

    if (!confirmed) {
        return;
    }

    completedLessons.clear();

    localStorage.removeItem(STORAGE_KEY);

    updateProgress();
    renderNavigation();
});

// LETS GOOOO
updateProgress();
renderCurrentLesson();