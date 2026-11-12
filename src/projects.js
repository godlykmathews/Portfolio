// The owner confirmed these six projects. Keep new additions subject to review.
export const projects = [
  {
    id: "karyadhyaksha",
    number: "01",
    name: "Karyadhyaksha",
    category: "Applied AI",
    summary:
      "A Malayalam and English document assistant that connects questions to answers, source documents, and page references.",
    stack: ["FastAPI", "React", "BGE-M3", "Chroma"],
    contribution:
      "Built the document-processing and retrieval pipeline: OCR, text extraction, normalization, chunking, embeddings, and semantic search. Connected it to text and voice interfaces.",
    status:
      "Working prototype. Broader Malayalam evaluation, production security, monitoring, and performance benchmarking remain further work.",
    links: [
      {
        label: "Source code",
        url: "https://github.com/godlykmathews/karyadhyaksha-rag-assistant",
      },
    ],
  },
  {
    id: "delivery",
    number: "02",
    name: "Digital Delivery",
    category: "Web & mobile",
    summary:
      "A connected delivery workflow: a Flutter driver app, a React admin dashboard, and a Python backend.",
    stack: ["Flutter", "React", "Python"],
    contribution:
      "Co-developed the driver app with offline synchronization and digital proof of delivery, alongside an admin dashboard for CSV uploads, invoice handling, and driver assignments.",
    links: [
      {
        label: "Driver app",
        url: "https://github.com/godlykmathews/Dlive-Driver-App",
      },
      {
        label: "Admin dashboard",
        url: "https://github.com/godlykmathews/Driver-Admin-Portal",
      },
      {
        label: "Backend",
        url: "https://github.com/godlykmathews/Driver-Backend",
      },
    ],
  },
  {
    id: "run-all-apps",
    number: "03",
    name: "Run All Apps",
    category: "Developer tools",
    summary:
      "Workspace commands, one click away. A VS Code extension that puts development commands in the status bar.",
    stack: ["TypeScript", "VS Code API"],
    contribution:
      "Built configurable status-bar buttons with support for custom commands, npm scripts, working directories, and terminal reuse.",
    links: [
      {
        label: "Source code",
        url: "https://github.com/godlykmathews/Run-All-Apps",
      },
    ],
  },
  {
    id: "khojbeen",
    number: "04",
    name: "Khojbeen Mandali",
    category: "Web",
    summary:
      "A custom Ghost theme for the NGO Khojbeen Mandali, with space for stories, resources, and the organisation’s work.",
    stack: ["Ghost", "Handlebars", "CSS"],
    contribution:
      "Built templates for posts, resources, and the organisation’s work, with contact and footer details configurable through Ghost.",
    links: [
      {
        label: "Source code",
        url: "https://github.com/godlykmathews/khojbeen-mandali-theme",
      },
    ],
  },
  {
    id: "agriculture",
    number: "05",
    name: "Plant Monitoring",
    category: "Applied AI & hardware",
    summary:
      "Plant Disease Detection & Smart Spray Assistant: software connecting plant monitoring, treatment guidance, and spray controls.",
    stack: ["Python", "React", "Raspberry Pi", "ESP32"],
    contribution:
      "Built the software backend and dashboard, working with teammates on the hardware. The dashboard displays disease events, Gemma-generated treatment guidance, and spray status, with controls to trigger treatment.",
    links: [
      {
        label: "Source code",
        url: "https://github.com/godlykmathews/plant-monitoring-system",
      },
    ],
  },
  {
    id: "prabhatha-vachanam",
    number: "06",
    name: "Prabhatha Vachanam",
    category: "Mobile",
    summary:
      "An app for daily and random Bible verses, with saved favourites and shareable verse images.",
    stack: ["Flutter", "Dart"],
    contribution:
      "Built a mobile experience for reading verses, keeping favourites locally, and creating images to share.",
    links: [
      {
        label: "Source code",
        url: "https://github.com/godlykmathews/prabhatha-vachanam",
      },
    ],
  },
];
