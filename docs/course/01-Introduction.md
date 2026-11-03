# 1. Welcome aboard

For IT colleagues and interns. No AI experience needed.

## What you'll take away

By the end, you'll know the difference between asking AI for advice and letting it act, what a useful technical request needs, and why checking the result is still part of the job.

## A very fast drafting partner

Ever opened an unfamiliar script and thought, “A little explanation would be nice”? That's a useful place to start with AI. A large language model, or LLM, generates language using patterns learned during training and information available for your current request. It can help explain code, summarize an incident, draft documentation or suggest troubleshooting steps.

Think of it as a fast drafting partner whose work needs review. The analogy has limits: a model doesn't share your colleague's accountability or automatically know your workplace. It can produce something useful and occasionally something impressively wrong.

The application around the model matters, too. One chatbot only returns text. Another can retrieve documents, read files or call tools. Before asking it to investigate your system, check what it can actually access. “Sure, I can help!” is not an access-permission report.

You don't need a research lab to benefit from this course. You need a few good habits: give useful information, set boundaries and check the result. Saving five minutes of typing is less exciting if it creates an afternoon of repairs.

## Five questions to keep in your inner pocket

1. **Behaviour:** what is the model generating, and what could be wrong?
2. **Context:** what does it need to know, and what's missing?
3. **Instructions:** what task, limits and output should I specify?
4. **Verification:** what evidence or test would show that the result is usable?
5. **Action:** what may the system do, and where must a person decide?

We'll return to these throughout the course.

## A small request with a big difference

You ask for a summary of a fictional incident report. 

(Insert two chats, llm style)

| "Give me x,y,z"                       | "Resolve the incident please." |
| ------------------------------------- | ------------------------------ |
| > Returns observed symptoms           | > Asks for permission          |
| > Points to evidence                  | > Asks for approval            |
| > Separates facts from open questions | > Checks effects of actions    |

A useful answer lists observed symptoms, points to evidence and separates confirmed facts from open questions. You compare it with the report before sharing it.

Now change the request to “resolve the incident.” That could involve production changes. Suddenly, permissions, approval and checking the effects of actions are part of the task.

## EXERCISE - Your turn: advice or action?

(insert two columns "advice" or "action" draggable cards)

Which return advice, and which can change a system? 

| Situation                           |
| ----------------------------------- |
| 1: Summarize a document             |
| 2: Suggest why something went wrong |
| 3: Restart a company system         |
| 4: Send an email                    |
| 5: Update a shared document         |

## QUIZ - Quick check

- **Does a chatbot automatically have access to company systems?** 
> Yes. Upon sign-up and download, it gets all access. 
> No. That depends on the application, integrations and permissions.
- **Who decides whether a technical result is usable?** 
> The LLM I used to generate the result with. It seems to know what it is talking about.
> The person or team responsible for the task. A generated answer isn't an approval.

Next: [LLM behaviour](02-behaviour.md).

