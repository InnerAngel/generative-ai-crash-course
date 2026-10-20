const behaviourLesson = {
    id: "behaviour",
    title: "Behaviour",

    introduction: `
    A Large Language Model generates text by predicting likely
    continuations based on the input and context it receives.
  `,

    explanation: `
    LLM output is probabilistic rather than deterministic.
    That means the same prompt can produce slightly different
    responses, and fluent output is not automatically correct.
  `,

    example: {
        weak: "Assume every answer from the model is factual.",

        better: `
      Treat the model's output as generated information that may
      need verification, especially when accuracy matters.
    `
    },

    quiz: {
        question: "Which statement best describes LLM output?",

        answers: [
            "It is always deterministic.",
            "It is generated probabilistically.",
            "It always retrieves facts from a database.",
            "It always produces the same answer."
        ],

        correctAnswer: 1
    }
};

const contextLesson = {
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
                text: "Company lunch menu",
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
                text: "500 pages of unrelated documentation",
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
    }
};

export const lessons = [
    behaviourLesson,
    contextLesson
];