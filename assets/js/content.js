export const contextLesson = {
    id: "context",
    title: "Context",

    introduction: `
    A context window is the information an LLM can actively
    consider while generating a response.
  `,

    explanation: `
    Context can include your prompt, previous messages,
    documents, code, examples and information retrieved
    through tools.

    The model can only reliably reason about information
    it has access to.
  `,

    example: {
        weak: "Here are 50,000 log lines. What is wrong?",

        better: `
      These logs cover a failed application job between
      14:00 and 14:15. Focus on ERROR and WARN events and
      identify the earliest event that may explain the failure.
    `
    },

    exercise: {
        question: "Which information would be useful context when investigating a failed application job?",

        options: [
            {
                text: "Error logs from the affected service",
                correct: true
            },
            {
                text: "Which soups the menu had at the cafetaria today",
                correct: false
            },
            {
                text: "Time range of the incident",
                correct: true
            },
            {
                text: "Relevant configuration",
                correct: true
            },
            {
                text: "500 pages of unrelated documentation, because why not",
                correct: false
            }
        ]
    },

    quiz: {
        question: "Which statement about context is most accurate?",

        answers: [
            "More context always produces a better answer.",
            "Relevant context is usually more useful than simply providing more information.",
            "Context and memory are the same thing.",
            "An LLM automatically has access to your internal systems."
        ],

        correctAnswer: 1
    },

};