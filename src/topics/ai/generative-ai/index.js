// Auto-generated topic: Generative AI
// Course: ai

export default {
  "id": "generative-ai",
  "title": "Generative AI",
  "definition": "Generative AI is a fundamental concept in TanStack Query that every developer should master.",
  "deepExplanation": "Understanding generative ai deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Generative AI syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌──────────┐  train   ┌─────────────┐\n│   Data   │ ───────► │    Model    │\n│          │ ◄─────── │  Generati  │\n└──────────┘ predict  └─────────────┘",
  "analogy": "Think of Generative AI as a toolbox — you pick the right tool for each job instead of using one hammer for everything.",
  "examples": [
    {
      "title": "Getting Started with Generative AI",
      "code": "// Generative AI - Example 1\nconst config = { feature: \"generative-ai\" };\nconsole.log(config);",
      "output": "{ feature: \"generative-ai\" }",
      "explanation": "Foundation setup for generative ai."
    },
    {
      "title": "Common Pattern",
      "code": "// Generative AI - Example 2\nconst state = { loaded: true, data: [] };\nconsole.log(state.loaded);",
      "output": "true",
      "explanation": "Typical state shape when using generative ai."
    },
    {
      "title": "Async Flow",
      "code": "// Generative AI - Example 3\nasync function load() {\n  return { topic: \"generative-ai\" };\n}",
      "output": "{ topic: \"generative-ai\" }",
      "explanation": "Async patterns with generative ai."
    },
    {
      "title": "Error Handling",
      "code": "// Generative AI - Example 4\ntry {\n  throw new Error(\"Demo error\");\n} catch (e) {\n  console.log(e.message);\n}",
      "output": "Demo error",
      "explanation": "Handle failures gracefully in generative ai."
    },
    {
      "title": "Best Practice",
      "code": "// Generative AI - Example 5\nconst NAMESPACE = \"ai/generative-ai\";\nconsole.log(NAMESPACE);",
      "output": "ai/generative-ai",
      "explanation": "Organized naming for generative ai."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain generative ai to a beginner.",
      "answer": "Generative AI is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use generative ai?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with generative ai?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does generative ai compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for generative ai.",
      "answer": "Production apps use generative ai for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing generative ai\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with generative ai."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand generative ai before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Generative AI Feature",
    "description": "Create a real-world component or module that demonstrates generative ai in action.",
    "checklist": [
      "Implement core generative ai functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of generative ai?",
      "options": [
        "To style components",
        "To work with generative ai concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with generative ai concepts effectively",
      "explanation": "Generative AI is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for generative ai?",
      "options": [
        "Ignore documentation",
        "Write clear, predictable code",
        "Avoid testing",
        "Use global variables everywhere"
      ],
      "answer": "Write clear, predictable code",
      "explanation": "Clean code makes debugging and scaling easier."
    },
    {
      "question": "When should you use generative ai?",
      "options": [
        "Never in production",
        "When the problem calls for it",
        "Only in class components",
        "Only on weekends"
      ],
      "answer": "When the problem calls for it",
      "explanation": "Use the right tool for the right job."
    },
    {
      "question": "What is a common mistake with generative ai?",
      "options": [
        "Reading documentation",
        "Overcomplicating simple cases",
        "Using TypeScript",
        "Writing tests"
      ],
      "answer": "Overcomplicating simple cases",
      "explanation": "Start simple, then add complexity when needed."
    },
    {
      "question": "How does generative ai help in real projects?",
      "options": [
        "It doesn't",
        "Improves maintainability and clarity",
        "Slows development",
        "Replaces the browser"
      ],
      "answer": "Improves maintainability and clarity",
      "explanation": "Good patterns scale with your application."
    }
  ],
  "cheatSheet": [
    "Generative AI: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what generative ai is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Generative AI",
      "description": "Write a simple example demonstrating generative ai.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Generative AI with Data",
      "description": "Use sample data to practice generative ai.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Generative AI Output",
      "description": "Log the expected output for a generative ai exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Generative AI",
      "description": "Combine generative ai with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Generative AI",
      "description": "Refactor given code to use generative ai properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Generative AI",
      "description": "Fix the bug related to generative ai.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Generative AI",
      "description": "Build a small feature using generative ai.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Generative AI Architecture",
      "description": "Design a scalable pattern with generative ai.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "// Generative AI AI example\nasync function predict(input) {\n  const res = await fetch('/api/ai', { method: 'POST', body: JSON.stringify({ input }) });\n  return res.json();\n}",
    "solution": "// Generative AI AI example\nasync function predict(input) {\n  const res = await fetch('/api/ai', { method: 'POST', body: JSON.stringify({ input }) });\n  return res.json();\n}\n// Solution: see examples above",
    "hint": "Try modifying the generative ai example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Generative AI Mini Challenge",
    "requirements": [
      "Demonstrate generative ai in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
