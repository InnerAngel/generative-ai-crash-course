# 1. Introduction and course goals

Audience: IT colleagues and interns. Prerequisites: none. Suggested teaching time: 5 minutes. Scope: existing crash course.

## What learners should be able to do

- Explain the difference between receiving AI-generated advice and allowing an AI system to act.
- Name the information and boundaries a technical task needs.
- Describe why someone must check the output and own the decision to use it.

## Lesson content

A large language model, or LLM, generates language using patterns learned during training and the information available for the current request. In a workplace application, it might help explain a piece of code, summarize an incident, draft documentation or propose troubleshooting steps.

The application around the model matters. One application only returns text. Another can retrieve documents, read files or call tools. An apparent capability in one product does not mean that every chatbot can perform it. Ask what information and permissions the particular system actually has.

The purpose of this course is to develop practical judgment, not to turn everyone into an AI researcher. A useful result is one that helps with a real task and can be checked. Polished writing is not enough, and saving drafting time is not valuable if the result creates more review or repair work.

Use five guiding questions throughout the course:

1. **Behaviour:** what is the model generating, and what could be wrong?
2. **Context:** what information does it need, and what is missing?
3. **Instructions:** what task, limits and output should I specify?
4. **Verification:** what evidence or test would establish that the result is usable?
5. **Action:** what may the system do, and where must a person decide?

## Worked example

An engineer asks for a summary of a fictional incident report. A useful output lists the observed symptoms, references the supplied evidence and separates unresolved questions from confirmed facts. The engineer compares the summary with the report before sharing it.

Now change the request to “resolve the incident.” This might involve production changes. A useful explanation is no longer enough: access boundaries, approval and verification of actions also matter.

## Suggested interaction

Show three cards: summarize a public manual, suggest causes from sanitized test logs, restart production. Ask learners to identify which produces advice and which can change a system. Discuss how the last card changes the required safeguards.

## Quick check

- **Does access to a chatbot imply access to company systems?** No. Access depends on the application, integrations and permissions.
- **Who remains responsible for deciding whether a technical result is usable?** The person or team accountable for the task; the generated response is not an approval.

## Curated references

- [Hugging Face — LLM Course introduction](https://huggingface.co/learn/llm-course/chapter1/1): optional orientation to the wider field. The full programming course is not a prerequisite for this crash course.
- [GitHub — Copilot tutorials](https://docs.github.com/en/copilot/tutorials): optional examples of AI assistance in software work. Focus on a familiar task rather than trying every tool.

Next: [LLM behaviour](02-behaviour.md).
