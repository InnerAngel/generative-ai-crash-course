export function renderPermissionCheck(lesson) {
  const container = document.querySelector("#interaction");
  const feedback = document.querySelector("#interaction-feedback");

  if (!container || !feedback || !lesson.interaction) {
    return;
  }

  lesson.interaction.permissions.forEach((permission, index) => {
    const label = document.createElement("label");
    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    checkbox.value = index;

    label.appendChild(checkbox);
    label.append(` ${permission.text}`);

    container.appendChild(label);
  });

  const checkButton = document.createElement("button");
  checkButton.type = "button";
  checkButton.textContent = "Check permissions";

  checkButton.addEventListener("click", () => {
    const checkboxes = container.querySelectorAll(
      'input[type="checkbox"]'
    );

    let allCorrect = true;

    checkboxes.forEach((checkbox, index) => {
      const shouldBeSelected =
        lesson.interaction.permissions[index].allowed;

      if (checkbox.checked !== shouldBeSelected) {
        allCorrect = false;
      }
    });

    feedback.textContent = allCorrect
      ? "Correct. The agent only has the permissions needed for its task."
      : "Not quite. Apply least privilege and avoid unnecessary write or administrative access.";
  });

  container.appendChild(checkButton);
}