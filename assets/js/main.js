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

      <section class="quiz">
        <h2>Quick check</h2>

        <p>${contextLesson.quiz.question}</p>

        <div id="quiz-answers"></div>

        <p id="quiz-feedback"></p>
      </section>
    </article>
  `;

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

renderNavigation();
renderLesson();