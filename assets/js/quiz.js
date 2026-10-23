export function renderQuiz(lesson, onComplete) {
  const answersContainer =
    document.querySelector("#quiz-answers");

  const feedback =
    document.querySelector("#quiz-feedback");

  if (!answersContainer || !feedback || !lesson.quiz) {
    return;
  }

  lesson.quiz.answers.forEach((answer, index) => {
    const button = document.createElement("button");

    button.type = "button";
    button.textContent = answer;

    button.addEventListener("click", () => {
      if (index === lesson.quiz.correctAnswer) {
        feedback.textContent = "Correct.";

        if (onComplete) {
          onComplete();
        }
      } else {
        feedback.textContent =
          "Not quite. Try again.";
      }
    });

    answersContainer.appendChild(button);
  });
}