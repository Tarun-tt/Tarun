// Auto-generated topic: Prompt Engineering
// Course: ai

export default {
  "id": "prompt-engineering",
  "title": "Prompt Engineering",
  "definition": "Prompt Engineering is a fundamental concept in TanStack Query that every developer should master.",
  "deepExplanation": "Understanding prompt engineering deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Prompt Engineering syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌──────────┐  train   ┌─────────────┐\n│   Data   │ ───────► │    Model    │\n│          │ ◄─────── │  Prompt E  │\n└──────────┘ predict  └─────────────┘",
  "analogy": "Prompt Engineering is like a recipe card — it tells you exactly what ingredients (data) and steps (logic) you need.",
  "examples": [
    {
      "title": "Getting Started with Prompt Engineering",
      "code": "// Prompt Engineering - Example 1\nconst config = { feature: \"prompt-engineering\" };\nconsole.log(config);",
      "output": "{ feature: \"prompt-engineering\" }",
      "explanation": "Foundation setup for prompt engineering."
    },
    {
      "title": "Common Pattern",
      "code": "// Prompt Engineering - Example 2\nconst state = { loaded: true, data: [] };\nconsole.log(state.loaded);",
      "output": "true",
      "explanation": "Typical state shape when using prompt engineering."
    },
    {
      "title": "Async Flow",
      "code": "// Prompt Engineering - Example 3\nasync function load() {\n  return { topic: \"prompt-engineering\" };\n}",
      "output": "{ topic: \"prompt-engineering\" }",
      "explanation": "Async patterns with prompt engineering."
    },
    {
      "title": "Error Handling",
      "code": "// Prompt Engineering - Example 4\ntry {\n  throw new Error(\"Demo error\");\n} catch (e) {\n  console.log(e.message);\n}",
      "output": "Demo error",
      "explanation": "Handle failures gracefully in prompt engineering."
    },
    {
      "title": "Best Practice",
      "code": "// Prompt Engineering - Example 5\nconst NAMESPACE = \"ai/prompt-engineering\";\nconsole.log(NAMESPACE);",
      "output": "ai/prompt-engineering",
      "explanation": "Organized naming for prompt engineering."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain prompt engineering to a beginner.",
      "answer": "Prompt Engineering is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use prompt engineering?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with prompt engineering?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does prompt engineering compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for prompt engineering.",
      "answer": "Production apps use prompt engineering for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing prompt engineering\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with prompt engineering."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand prompt engineering before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Prompt Engineering Feature",
    "description": "Create a real-world component or module that demonstrates prompt engineering in action.",
    "checklist": [
      "Implement core prompt engineering functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of prompt engineering?",
      "options": [
        "To style components",
        "To work with prompt engineering concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with prompt engineering concepts effectively",
      "explanation": "Prompt Engineering is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for prompt engineering?",
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
      "question": "When should you use prompt engineering?",
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
      "question": "What is a common mistake with prompt engineering?",
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
      "question": "How does prompt engineering help in real projects?",
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
    "Prompt Engineering: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what prompt engineering is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Prompt Engineering",
      "description": "Write a simple example demonstrating prompt engineering.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Prompt Engineering with Data",
      "description": "Use sample data to practice prompt engineering.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Prompt Engineering Output",
      "description": "Log the expected output for a prompt engineering exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Prompt Engineering",
      "description": "Combine prompt engineering with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Prompt Engineering",
      "description": "Refactor given code to use prompt engineering properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Prompt Engineering",
      "description": "Fix the bug related to prompt engineering.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Prompt Engineering",
      "description": "Build a small feature using prompt engineering.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Prompt Engineering Architecture",
      "description": "Design a scalable pattern with prompt engineering.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "// Prompt Engineering AI example\nasync function predict(input) {\n  const res = await fetch('/api/ai', { method: 'POST', body: JSON.stringify({ input }) });\n  return res.json();\n}",
    "solution": "// Prompt Engineering AI example\nasync function predict(input) {\n  const res = await fetch('/api/ai', { method: 'POST', body: JSON.stringify({ input }) });\n  return res.json();\n}\n// Solution: see examples above",
    "hint": "Try modifying the prompt engineering example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Prompt Engineering Mini Challenge",
    "requirements": [
      "Demonstrate prompt engineering in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
