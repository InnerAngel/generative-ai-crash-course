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