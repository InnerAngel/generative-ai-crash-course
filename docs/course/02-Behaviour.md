# 2. LLM behaviour: fluent doesn't always mean factual

## One token, then another

Try finishing this sentence: “The server went down because…” You can probably imagine several endings. Maybe there was a power outage, a software error, or too much traffic.
A generative LLM also selects among possible continuations, although the process is mathematical rather than a person guessing a sentence.

Here's a useful simplified picture: 
(insert a pipeline picture)
input → available context → possible continuations → generated output.

## What is a token?

A token is a small piece of text. It can be a whole word, part of a word, or even punctuation.
For example, the sentence "The server crashed." might be split into several tokens.

At each step, the LLM calculates how likely different tokens are to come next. It then selects one and repeats the process.
This is how an LLM generates sentences, paragraphs, and even entire documents.

**Important:** It does not automatically check whether everything it generates is true.
Training develops patterns in the model's parameters. It doesn't guarantee that every sentence comes from a verified source. A response can mix useful knowledge with an assumption that quietly wandered in wearing a confident tone.
## What are hallucinations?

Sometimes an LLM generates information that sounds correct but is actually wrong or made up.

This is called a hallucination.

For example, an AI might:
- An invented citation
- Refer to a document that doesn't exist.
- Invent a feature in a software application.
- Give an incorrect explanation for why a system stopped working.

The tricky part is that these answers can sound just as confident as correct ones.
## QUIZ - Quick check

**1. An LLM gives a very confident answer and it does sound feasible. Should I trust it?**

> Yes. LLM's are all-knowing nowadays anyway. They are too powerful not to trust. 
> No. LLM's don't realize when they are confidently wrong, they just predict what might sound feasible.

**2. You ask the same question twice and get the same answer. Does that prove it's true?**
> Yes. Surely, when I word the same question differently, the LLM has thought twice. 
> No. An AI can consistently repeat the same mistake. Important information should still be checked against reliable sources.


Next: [Context](03-context.md).

