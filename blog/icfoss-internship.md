---
title: My internship at ICFOSS
date: 2026-09-29
summary: Work on Malayalam document retrieval, the Karyadhyaksha prototype, and local model access during my student internship.
tags: [internship, icfoss, foss, rag]
---

From **8 June to 16 July 2026**, I was a student intern at
[ICFOSS](https://icfoss.in/), the International Centre for Free and Open Source
Software. I worked in the Language Technology department on Malayalam document
processing and question answering, and on access to locally hosted language models.

The work covered several parts of an application: extracting text from documents,
preparing it for search, retrieving relevant passages, and connecting that information
to a language model and an interface.

## Starting with the documents

Before a model can answer a question about a document, the document has to be
usable as text. During the internship, I contributed to Malayalam OCR and
text-processing workflows, including extraction, preprocessing, normalization,
and chunking.

These steps have different jobs. OCR extracts text from scanned pages. Normalization
prepares that text for further processing. Chunking divides it into smaller pieces
that can be indexed and retrieved. The quality of those pieces affects the
information available when a question is asked.

I also experimented with embedding models and retrieval techniques for Malayalam
and multilingual content. Embeddings provide a way to search for passages related
to a question, including when the wording differs from the source document.

## Building Karyadhyaksha

One project from this work is
[Karyadhyaksha](https://github.com/godlykmathews/karyadhyaksha-rag-assistant), a
document question-answering and voice-assistant prototype. It supports Malayalam
and English documents, text and voice questions, and answers with source-document
and page references.

I built its retrieval-augmented generation, or **RAG**, pipeline using FastAPI,
BGE-M3 embeddings, a vector database, and locally deployed language models. RAG
retrieves relevant document passages and supplies them to the model as context
for an answer.

The project uses Tesseract for OCR and Chroma for vector storage, with a React
interface for voice interaction. Its document and question-answering flows connect
the processing steps into a working application:

1. Extract and prepare the document text.
2. Split it into chunks and generate embeddings.
3. Store those chunks for retrieval.
4. Retrieve relevant passages when a question arrives.
5. Generate an answer and display its source references.

Karyadhyaksha is a working prototype. Broader Malayalam evaluation, production
security, monitoring, and performance benchmarking remain further work. Source
references make answers easier to check against the documents; they do not remove
the need to evaluate the answers themselves.

## Giving employees access to local models

Alongside the document-assistant work, I deployed and configured OpenWebUI within
the organisation. The purpose was to give employees a central interface for
accessing locally hosted large language models.

This was a separate task from developing Karyadhyaksha. It involved configuring
an existing application for model access, while the assistant work involved
building the document-processing and retrieval pipeline. I also conducted
experiments with local model deployment during the internship.

## FOSS in the work

Free and open-source software was part of the implementation through tools such
as FastAPI, Tesseract, Chroma, and React. These provided components for the API,
document extraction, retrieval, and interface.

The internship gave me practical work across those components, from preparing
documents to deploying an interface for local models. The
[project repository](https://github.com/godlykmathews/karyadhyaksha-rag-assistant)
contains the source, setup instructions, and the prototype's current limitations.
