import { renderQuiz } from "./quiz.js";
import { renderExercise } from "./exercise.js";
import { renderPromptComparison } from "./promptcomparison.js";

export function renderLesson(lesson, mainElement) {
    const exerciseSection = lesson.exercise
        ? `
      <section class="exercise">
        <h2>Try it yourself</h2>

        <p>${lesson.exercise.question}</p>

        <div id="exercise-options"></div>

        <button type="button" id="check-exercise">
          Check answers
        </button>

        <p id="exercise-feedback" aria-live="polite"></p>
      </section>
    `
        : "";

    const interactionSection = lesson.interaction
        ? `
    <section class="interaction">
      <h2>Try it yourself</h2>

      <p>${lesson.interaction.question}</p>

      <div id="interaction"></div>

      <p
        id="interaction-feedback"
        aria-live="polite"
      ></p>
    </section>
  `
        : "";

    const quizSection = lesson.quiz
        ? `
      <section class="quiz">
        <h2>Quick check</h2>

        <p>${lesson.quiz.question}</p>

        <div id="quiz-answers"></div>

        <p id="quiz-feedback" aria-live="polite"></p>
      </section>
    `
        : "";

    mainElement.innerHTML = `
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

      ${exerciseSection}
      ${interactionSection}
      ${quizSection}
      
      <nav
        class="lesson-navigation"
        aria-label="Lesson navigation"
      >
        <button type="button" id="previous-lesson">
          Previous
        </button>

        <button type="button" id="next-lesson">
          Next
        </button>
      </nav>
    </article>
  `;

    if (lesson.exercise) {
        renderExercise(lesson);
    }

    if (lesson.quiz) {
        renderQuiz(lesson);
    }

    if (lesson.interaction?.type === "prompt-comparison") {
        renderPromptComparison(lesson);
    }
}