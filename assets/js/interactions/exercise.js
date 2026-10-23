export function renderExercise(lesson) {
    const optionsContainer = document.querySelector("#exercise-options");
    const checkButton = document.querySelector("#check-exercise");
    const feedback = document.querySelector("#exercise-feedback");

    if (
        !optionsContainer || !checkButton || !feedback || !lesson.exercise
    ) {
        return;
    }

    lesson.exercise.options.forEach((option, index) => {
        const label = document.createElement("label");

        const checkbox = document.createElement("input");

        checkbox.type = "checkbox";
        checkbox.value = index;

        label.appendChild(checkbox);
        label.append(` ${option.text}`);

        optionsContainer.appendChild(label);
    });

    checkButton.addEventListener("click", () => {
        const checkboxes = optionsContainer.querySelectorAll(
            'input[type="checkbox"]'
        );

        let allCorrect = true;

        checkboxes.forEach((checkbox, index) => {
            const shouldBeSelected =
                lesson.exercise.options[index].correct;

            if (checkbox.checked !== shouldBeSelected) {
                allCorrect = false;
            }
        });

        if (allCorrect) {
            feedback.textContent =
                "Correct. You selected the appropriate answers!";
        } else {
            feedback.textContent =
                "Not quite. Try again.";
        }
    });
}