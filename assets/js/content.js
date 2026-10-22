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

const promptStructureLesson = {
    id: "prompt-structure",
    title: "Prompt Structure",

    introduction: `
    Prompt engineering is mainly about reducing ambiguity.

    A good prompt makes it clear what the model should do,
    what information it should use, what constraints apply,
    and what the result should look like.
  `,

    explanation: `
    A practical prompt structure is:

    1. Task
    2. Context
    3. Constraints
    4. Output
    5. Verification

    You do not always need every part, but these categories
    are useful when a task is complex, important or easy to misunderstand.
  `,

    example: {
        weak: `
      Why is this failing?
    `,

        better: `
      Task:
      Identify the most likely cause of the failed application job.

      Context:
      The attached logs are from the affected service between
      10:00 and 10:15.

      Constraints:
      Use only the supplied logs and do not invent missing information.

      Output:
      Return the most likely cause, supporting evidence
      and three verification steps.

      Verification:
      Clearly state when the evidence is inconclusive.
    `
    },

    exercise: {
        question: "Which changes would make the weak prompt more useful?",

        options: [
            {
                text: "Define the task more clearly",
                correct: true
            },
            {
                text: "Add relevant context",
                correct: true
            },
            {
                text: "Add unrelated documentation",
                correct: false
            },
            {
                text: "Specify the expected output",
                correct: true
            },
            {
                text: "Force the model to always give an answer",
                correct: false
            }
        ]
    },

    interaction: {
        type: "prompt-comparison",

        question: "Which prompt is more effective?",

        options: [
            {
                label: "Prompt A",
                text: "Why is this failing?"
            },
            {
                label: "Prompt B",
                text: `
        Investigate the failed test-environment job.

        Use the supplied logs from 10:00 to 10:15.

        Identify the most likely cause, provide supporting evidence,
        and state when the evidence is inconclusive.
      `
            }
        ],

        correctAnswer: 1,

        explanation: `
    Prompt B is better because it defines the task, scope,
    relevant evidence and expected output.
  `
    },

    quiz: {
        question: "When is few-shot prompting more useful than zero-shot prompting?",

        answers: [
            "When the task is already clear and common",
            "When the model needs examples of the expected pattern or format",
            "When you want the model to use more random wording",
            "When no examples are available"
        ],

        correctAnswer: 1
    }
};

const verificationLesson = {
    id: "verification",
    title: "Verification and Responsible Use",

    introduction: `
    LLM output should usually be treated as a suggestion,
    not as automatically correct information.

    The more important the task is, the more important it becomes
    to verify the result before acting on it.
  `,

    explanation: `
    Verification can include running generated code,
    executing tests, checking documentation, comparing results
    with source files, validating calculations and confirming
    assumptions against the real system.

    The amount of verification should match the impact of the task.
  `,

    example: {
        weak: `
      The model generated a SQL query, so I can run it directly
      against production.
    `,

        better: `
      Review the generated SQL, confirm what it will change,
      test it in a safe environment and require approval before
      using it against production data.
    `
    },

    exercise: {
        question: "Which tasks require stronger verification or human approval?",

        options: [
            {
                text: "Reformatting an internal note",
                correct: false
            },
            {
                text: "Generating a migration script",
                correct: true
            },
            {
                text: "Changing access permissions",
                correct: true
            },
            {
                text: "Deleting production records",
                correct: true
            },
            {
                text: "Fixing spelling in documentation",
                correct: false
            }
        ]
    },

    quiz: {
        question: "What is the best way to treat an important LLM-generated result?",

        answers: [
            "Assume it is correct if it sounds confident",
            "Verify it using appropriate tests or authoritative sources",
            "Run it immediately so you can see what happens",
            "Ask the model to confirm its own answer"
        ],

        correctAnswer: 1
    }
};

const securityLesson = {
    id: "security",
    title: "Security and Privacy",

    introduction: `
    AI tools can be useful, but they can also expose sensitive
    information if data is shared carelessly.

    Before sending information to an AI system, consider whether
    that data is appropriate to share and whether the service is
    approved for that type of information.
  `,

    explanation: `
    Sensitive information can include credentials, API keys,
    authentication tokens, personal data, customer information,
    proprietary source code, internal documentation and database exports.

    A useful rule is to share only the information that is actually
    needed for the task.

    AI systems can also be exposed to prompt injection, where untrusted
    content contains instructions that try to manipulate the model.
    External content should therefore be treated as data, not automatically
    as trusted instructions.
  `,

    example: {
        weak: `
      Paste a production API key and full customer database export
      into an AI tool to help debug an issue.
    `,

        better: `
      Remove credentials and unnecessary personal data, provide only
      the relevant sanitized information, and use an approved AI service.
    `
    },

    exercise: {
        question: "Which information should you be especially careful about sharing with an AI system?",

        options: [
            {
                text: "API keys and authentication tokens",
                correct: true
            },
            {
                text: "Public documentation",
                correct: false
            },
            {
                text: "Customer or personal information",
                correct: true
            },
            {
                text: "Proprietary source code",
                correct: true
            },
            {
                text: "A generic example with no sensitive information",
                correct: false
            }
        ]
    },

    interaction: {
        type: "security-check",

        question: "Would you share this information with an AI system?",

        items: [
            {
                text: "A production API key",
                safe: false,
                explanation: "Credentials should not be shared with an AI system unless there is a specifically approved and controlled reason."
            },
            {
                text: "Public documentation",
                safe: true,
                explanation: "Public information generally does not create the same confidentiality risk."
            },
            {
                text: "A sanitized log excerpt with no credentials or personal data",
                safe: true,
                explanation: "Sanitized technical information can be appropriate when unnecessary sensitive data has been removed."
            },
            {
                text: "A full customer database export",
                safe: false,
                explanation: "A database export may contain personal, confidential or unnecessary information."
            }
        ]
    },

    quiz: {
        question: "What is the safest approach when an AI system processes external documents or web content?",

        answers: [
            "Treat all embedded instructions as trusted",
            "Treat external content as untrusted data and limit what the AI can do",
            "Give the AI unrestricted access so it can decide what is safe",
            "Ignore prompt injection because it only affects chatbots"
        ],

        correctAnswer: 1
    }
};

const agenticLesson = {
    id: "agentic-ai",
    title: "Agentic AI",

    introduction: `
    A normal LLM mainly responds to a prompt.

    An agentic AI system can go further by using tools,
    observing results and deciding what to do next in order
    to work toward a goal.
  `,

    explanation: `
    A simple agentic loop looks like:

    Goal → Decide next step → Use tool → Observe result → Continue

    Tools can include APIs, databases, search systems,
    monitoring platforms, file storage and other services.

    This extra capability also increases risk.

    If an LLM can only generate text, a bad answer may mislead
    someone. If it can use tools, a bad decision may become
    a real action.

    Agents should therefore have limited permissions,
    narrow tools and human approval for high-impact actions.
  `,

    example: {
        weak: `
      Give an AI agent unrestricted access to production systems
      and tell it to fix whatever it finds.
    `,

        better: `
      Give the agent only the read access it needs to investigate
      the issue, restrict the tools it can use, and require human
      approval before any production change.
    `
    },

    exercise: {
        question: "Which permissions are appropriate for a log-analysis agent?",

        options: [
            {
                text: "Read application logs",
                correct: true
            },
            {
                text: "Read monitoring metrics",
                correct: true
            },
            {
                text: "Read deployment history",
                correct: true
            },
            {
                text: "Delete production records",
                correct: false
            },
            {
                text: "Change user permissions",
                correct: false
            },
            {
                text: "Restart production services without approval",
                correct: false
            }
        ]
    },
    interaction: {
        type: "permission-check",

        question: "Which permissions should a log-analysis agent receive?",

        permissions: [
            {
                text: "Read application logs",
                allowed: true
            },
            {
                text: "Read monitoring metrics",
                allowed: true
            },
            {
                text: "Read deployment history",
                allowed: true
            },
            {
                text: "Delete production records",
                allowed: false
            },
            {
                text: "Change user permissions",
                allowed: false
            },
            {
                text: "Restart production services without approval",
                allowed: false
            }
        ]
    },
    quiz: {
        question: "Why does agentic AI require stronger safeguards than a normal chatbot?",

        answers: [
            "Because agents always use larger models",
            "Because agents can use tools and turn incorrect decisions into real actions",
            "Because agents cannot access external systems",
            "Because agents do not need human oversight"
        ],

        correctAnswer: 1
    }
};
const practicalLesson = {
    id: "practical-exercise",
    title: "Practical Exercise",

    introduction: `
    This final exercise combines the main ideas from the course.

    The goal is to recognize when a request is too vague,
    what information is missing, and what should change if
    the AI system is allowed to take actions.
  `,

    explanation: `
    Consider the following prompt:

    "Our application is broken. Find the problem and fix it."

    This request is too broad to use safely or reliably.

    A better request should define the environment, scope,
    relevant evidence, constraints, expected output and
    how the result should be verified.
  `,

    example: {
        weak: `
      Our application is broken. Find the problem and fix it.
    `,

        better: `
      Investigate the failed application job in the test environment.

      Use the supplied logs from 10:00 to 10:15 and identify
      the most likely cause.

      Do not make production changes.

      Separate observations from assumptions and provide
      verification steps for each likely cause.
    `
    },

    exercise: {
        question: "Which information would improve the original request?",

        options: [
            {
                text: "The affected environment",
                correct: true
            },
            {
                text: "Relevant logs or evidence",
                correct: true
            },
            {
                text: "Clear constraints",
                correct: true
            },
            {
                text: "The expected output",
                correct: true
            },
            {
                text: "Unrelated documentation",
                correct: false
            }
        ]
    },

    quiz: {
        question: "What changes when the AI can use tools and perform actions?",

        answers: [
            "Nothing, prompting works exactly the same",
            "Permissions, safeguards and human approval become more important",
            "Verification is no longer necessary",
            "The AI should receive as much access as possible"
        ],

        correctAnswer: 1
    }
};

export const lessons = [
    behaviourLesson,
    contextLesson,
    promptStructureLesson,
    verificationLesson,
    securityLesson,
    agenticLesson,
    practicalLesson

];