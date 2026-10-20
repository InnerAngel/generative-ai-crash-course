import { lessons } from "./content.js";

let currentLessonIndex = 0;

const main = document.querySelector("#main");
const lessonsNavigation = document.querySelector("#lessons");

function renderNavigation() {
    lessonsNavigation.innerHTML = "";

    lessons.forEach((lesson, index) => {
        const button = document.createElement("button");

        button.textContent = lesson.title;

        button.addEventListener("click", () => {
            currentLessonIndex = index;
            renderLesson();
        });

        lessonsNavigation.appendChild(button);
    });
}

function renderLesson() {
    const lesson = lessons[currentLessonIndex];
    main.innerHTML = `
    <article>
      <h1>${lesson.title}</h1>

      <p>${lesson.introduction}</p>

      <p>${lesson.explanation}</p>

        <section class="lesson-example">
        <h2>Example</h2>

        <h3>Weak</h3>
        <p>${lesson.example.weak}</p>

        <h3>Better</h3>
        <p>${lesson.example.better}</p>
        </section>

        ${lesson.exercise ? `
        <section class="exercise">
        <h2>Try it yourself</h2>
        <p>${lesson.exercise.question}</p>
        <div id="exercise-options"></div>
        <button id="check-exercise">Check answers</button>
        <p id="exercise-feedback"></p>
        </section>
        ` : ""}

        <section class="quiz">
        <h2>Quick check</h2>

        <p>${lesson.quiz.question}</p>

        <div id="quiz-answers"></div>

        <p id="quiz-feedback"></p>
        </section>

        <nav class="lesson-navigation" aria-label="Lesson navigation">
        <button id="previous-lesson" disabled>Previous</button>
        <button id="next-lesson">Next</button>
        </nav>

    </article>
  `;
    renderExercise(lesson);
    renderQuiz(lesson);
    setupLessonNavigation();
}

function renderQuiz(lesson) {
    const answersContainer = document.querySelector("#quiz-answers");
    const feedback = document.querySelector("#quiz-feedback");

    lesson.quiz.answers.forEach((answer, index) => {
        const button = document.createElement("button");

        button.textContent = answer;

        button.addEventListener("click", () => {
            if (index === lesson.quiz.correctAnswer) {
                feedback.textContent = "Correct.";
            } else {
                feedback.textContent = "Not quite. Try again.";
            }
        });

        answersContainer.appendChild(button);
    });
}

function renderExercise(lesson) {
    const optionsContainer = document.querySelector("#exercise-options");
    const checkButton = document.querySelector("#check-exercise");
    const feedback = document.querySelector("#exercise-feedback");

    lesson.exercise.options.forEach((option, index) => {
        const label = document.createElement("label");

        label.innerHTML = `
      <input type="checkbox" value="${index}">
      ${option.text}
    `;

        optionsContainer.appendChild(label);
    });

    checkButton.addEventListener("click", () => {
        const checkboxes = optionsContainer.querySelectorAll("input");

        let allCorrect = true;

        checkboxes.forEach((checkbox, index) => {
            const shouldBeSelected =
                lesson.exercise.options[index].correct;

            if (checkbox.checked !== shouldBeSelected) {
                allCorrect = false;
            }
        });

        if (allCorrect) {
            feedback.textContent = "Correct. You selected the relevant context.";
        } else {
            feedback.textContent = "Not quite. Look for information directly related to the incident.";
        }
    });
}

function setupLessonNavigation() {
  const previousButton = document.querySelector("#previous-lesson");
  const nextButton = document.querySelector("#next-lesson");

  previousButton.disabled = currentLessonIndex === 0;
  nextButton.disabled = currentLessonIndex === lessons.length - 1;

  previousButton.addEventListener("click", () => {
    if (currentLessonIndex > 0) {
      currentLessonIndex--;
      renderLesson();
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentLessonIndex < lessons.length - 1) {
      currentLessonIndex++;
      renderLesson();
    }
  });
}

renderNavigation();
renderLesson();