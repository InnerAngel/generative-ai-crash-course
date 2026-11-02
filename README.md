# Generative AI Crash Course

A small interactive course about practical use of LLM, prompting, verification, security, privacy and agentic AI. 
The course is built for colleagues and interns and does not require prior AI knowledge.

## Features

- Sidebar lesson navigation
- Previous and next lesson controls
- Lesson numbering and completion indicators
- Progress tracking with `localStorage`
- Quizzes with immediate feedback
- Interactive exercises
- Reset progress option

## Tech stack

- HTML
- CSS
- Vanilla JavaScript
- GitHub Pages

No framework or backend is required.

## Project structure

```text
assets/
├── css/
│   ├── main.css
│   ├── base.css
│   ├── layout.css
│   └── components.css
│
├── js/
│   ├── main.js
│   ├── content.js
│   ├── lesson.js
│   ├── quiz.js
│   └── interactions/
│       ├── exercise.js
│       ├── promptComparison.js
│       ├── securityCheck.js
│       └── permissionCheck.js
│
└── images/
```

## Running locally

Use a simple local server:

` npx serve . ` 

## Adding content

Lessons are stored in:
    assets/js/content.js


New interaction types can be added in:
    assets/js/interactions/


## Deployment

The project is intended to be deployed with GitHub Pages.

## Status

The main course structure and interactions are implemented.
Course content is still being refined...