export function renderSecurityCheck(lesson) {
  const container = document.querySelector("#interaction");
  const feedback = document.querySelector("#interaction-feedback");

  if (!container || !feedback || !lesson.interaction) {
    return;
  }

  lesson.interaction.items.forEach((item) => {
    const wrapper = document.createElement("div");

    const text = document.createElement("p");
    text.textContent = item.text;

    const safeButton = document.createElement("button");
    safeButton.type = "button";
    safeButton.textContent = "Safe to share";

    const unsafeButton = document.createElement("button");
    unsafeButton.type = "button";
    unsafeButton.textContent = "Be careful";

    safeButton.addEventListener("click", () => {
      showResult(item, true);
    });

    unsafeButton.addEventListener("click", () => {
      showResult(item, false);
    });

    wrapper.append(text, safeButton, unsafeButton);
    container.appendChild(wrapper);
  });

  function showResult(item, selectedSafe) {
    if (selectedSafe === item.safe) {
      feedback.textContent = `Correct. ${item.explanation}`;
    } else {
      feedback.textContent = `Not quite. ${item.explanation}`;
    }
  }
}