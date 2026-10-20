import { contextLesson } from "./content.js";

const main = document.querySelector("#main");
const lessonsNavigation = document.querySelector("#lessons");

function renderNavigation() {
    const button = document.createElement("button");

    button.textContent = contextLesson.title;

    button.addEventListener("click", () => {
        renderLesson();
    });

    lessonsNavigation.appendChild(button);
}

function renderLesson() {
    main.innerHTML = `
    <article>
      <h1>${contextLesson.title}</h1>

      <p>${contextLesson.introduction}</p>

      <p>${contextLesson.explanation}</p>

        <section class="lesson-example">
        <h2>Example</h2>

        <h3>Weak</h3>
        <p>${contextLesson.example.weak}</p>

        <h3>Better</h3>
        <p>${contextLesson.example.better}</p>
        </section>

        <section class="exercise">
        <h2>Try it yourself</h2>

        <p>${contextLesson.exercise.question}</p>
        
        <div id="exercise-options"></div>
        <button id="check-exercise">Check answers</button>
        <p id="exercise-feedback"></p>
        </section>

        <section class="quiz">
        <h2>Quick check</h2>

        <p>${contextLesson.quiz.question}</p>

        <div id="quiz-answers"></div>

        <p id="quiz-feedback"></p>
        </section>
    </article>
  `;
    renderExercise();
    renderQuiz();
}

function renderQuiz() {
    const answersContainer = document.querySelector("#quiz-answers");
    const feedback = document.querySelector("#quiz-feedback");

    contextLesson.quiz.answers.forEach((answer, index) => {
        const button = document.createElement("button");

        button.textContent = answer;

        button.addEventListener("click", () => {
            if (index === contextLesson.quiz.correctAnswer) {
                feedback.textContent = "Correct.";
            } else {
                feedback.textContent = "Not quite. Try again.";
            }
        });

        answersContainer.appendChild(button);
    });
}

function renderExercise() {
    const optionsContainer = document.querySelector("#exercise-options");
    const checkButton = document.querySelector("#check-exercise");
    const feedback = document.querySelector("#exercise-feedback");

    contextLesson.exercise.options.forEach((option, index) => {
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
                contextLesson.exercise.options[index].correct;

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

renderNavigation();
renderLesson();