export function renderPromptComparison(lesson) {
  const container = document.querySelector("#interaction");
  const feedback = document.querySelector("#interaction-feedback");

  if (!container || !feedback || !lesson.interaction) {
    return;
  }

  lesson.interaction.options.forEach((option, index) => {
    const button = document.createElement("button");

    button.type = "button";

    button.innerHTML = `
      <strong>${option.label}</strong>
      <span>${option.text}</span>
    `;

    button.addEventListener("click", () => {
      if (index === lesson.interaction.correctAnswer) {
        feedback.textContent =
          `Correct. ${lesson.interaction.explanation}`;
      } else {
        feedback.textContent =
          `Not quite. ${lesson.interaction.explanation}`;
      }
    });

    container.appendChild(button);
  });
}