---
title: Building a document assistant
date: 2026-09-29
summary: Turning documents into searchable text, useful answers, and traceable sources.
tags: [rag, open-source]
---

[Karyadhyaksha](https://github.com/godlykmathews/karyadhyaksha-rag-assistant)
is a document question-answering prototype for Malayalam and English. It connects
text and voice questions to answers with source-document and page references.

## Start with the documents

Before a model can answer a question, the document needs to be usable as text.
The pipeline extracts digital text and uses Tesseract OCR for scanned pages,
then normalizes the text and divides it into smaller chunks.

Chunk quality matters: the information available to the model depends on what
can be retrieved. BGE-M3 embeddings and Chroma provide semantic search across
those chunks, including when a question uses different wording from the document.

## Connect retrieval to the interface

I built the retrieval pipeline with FastAPI and connected it to text and voice
interfaces. The flow has five steps:

1. Extract and prepare document text.
2. Split it into chunks and generate embeddings.
3. Store the chunks for retrieval.
4. Retrieve relevant passages for a question.
5. Generate an answer and display its source references.

The React interface brings the response and its sources together. Locally deployed
language models use retrieved passages as context for the answer.

## Keep the limits visible

Source references make an answer easier to check; they do not guarantee it is
correct. The project remains a prototype. Broader Malayalam evaluation,
production security, monitoring, and performance benchmarking are further work.

The [repository](https://github.com/godlykmathews/karyadhyaksha-rag-assistant)
contains the source and setup instructions.
