export function renderQuiz(lesson) {
    const answersContainer = document.querySelector("#quiz-answers");
    const feedback = document.querySelector("#quiz-feedback");

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
            } else {
                feedback.textContent = "Not quite. Try again.";
            }
        });

        answersContainer.appendChild(button);
    });
}