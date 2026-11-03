import { renderQuiz } from "./quiz.js";
import { renderExercise } from "./interactions/exercise.js";
import { renderPromptComparison } from "./interactions/promptcomparison.js";
import { renderSecurityCheck } from "./interactions/securitycheck.js";
import { renderPermissionCheck } from "./interactions/permissioncheck.js";

function renderIntroduction(lesson, mainElement, lessonIndex, totalLessons) {
    const lessonNumber = String(lessonIndex + 1).padStart(2, "0");
    const totalLessonNumber = String(totalLessons).padStart(2, "0");

    const goals = lesson.goals
        .map(goal => `<li>${goal}</li>`)
        .join("");

    mainElement.innerHTML = `
    <article class="introduction-page">
        <p class="course-label">Generative AI Crash Course</p>

        <p class="lesson-number">
            Lesson ${lessonNumber} / ${totalLessonNumber}
        </p>

    <h1>${lesson.title}</h1>

        <p class="introduction-lead">
            ${lesson.introduction}
        </p>

        <p>
        ${lesson.explanation}
        </p>

    <section class="course-goals">
    <h2>What you will learn</h2>

        <ul>
          ${goals}
        </ul>
    </section>

    <section class="course-start">
    <h2>i hope you're hungry</h2>

        <p>
          skibidi toilet
        </p>
    </section>

      <nav
        class="lesson-navigation"
        aria-label="Lesson navigation"
      >
        <button
          type="button"
          id="previous-lesson"
          disabled
        >
          Previous
        </button>

        <button
          type="button"
          id="next-lesson"
        >
          Start
        </button>
      </nav>
    </article>
  `;
}

export function renderLesson(lesson, mainElement, onComplete, lessonIndex, totalLessons) {
    if (lesson.type === "introduction") {
        renderIntroduction(lesson, mainElement, lessonIndex, totalLessons);
        return;
    }
    const lessonNumber = String(lessonIndex + 1).padStart(2, "0");
    const totalLessonNumber = String(totalLessons).padStart(2, "0");

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
        <p class="lesson-number">
        Lesson ${lessonNumber} / ${totalLessonNumber}
        </p>
      <h1>${lesson.title}</h1>
      <p>${lesson.introduction}</p>
      <p>${lesson.explanation}</p>

    <section class="lesson-example">
        <h2>Example</h2>

        <div class="example example-weak"> 
            <h3>Weak</h3>
            <p>${lesson.example.weak}</p>
        </div>

        <div class="example example-better">
            <h3>Better</h3>
            <p>${lesson.example.better}</p>
        </div>
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
        renderQuiz(lesson, onComplete);
    }

    if (lesson.interaction?.type === "prompt-comparison") {
        renderPromptComparison(lesson);
    }

    if (lesson.interaction?.type === "security-check") {
        renderSecurityCheck(lesson);
    }
    if (lesson.interaction?.type === "permission-check") {
        renderPermissionCheck(lesson);
    }
}