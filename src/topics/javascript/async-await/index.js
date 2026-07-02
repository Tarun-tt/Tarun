// Auto-generated topic: Async / Await
// Course: javascript

export default {
  "id": "async-await",
  "title": "Async / Await",
  "definition": "Async / Await is a fundamental concept in JavaScript that every developer should master.",
  "deepExplanation": "Understanding async / await deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "async function load() {\n  const res = await fetch('/api');\n  return res.json();\n}",
  "visualDiagram": "┌─────────────┐     ┌──────────────┐     ┌─────────────┐\n│   Source    │ ──► │  Async / Await │ ──► │   Output    │\n│   Code      │     │  Processing  │     │   Result    │\n└─────────────┘     └──────────────┘     └─────────────┘",
  "analogy": "Think of Async / Await as a toolbox — you pick the right tool for each job instead of using one hammer for everything.",
  "examples": [
    {
      "title": "Basic Async / Await",
      "code": "// Example 1: Basic usage\nconst value = \"async-await\";\nconsole.log(value);",
      "output": "async-await",
      "explanation": "Introduces the core idea behind async / await."
    },
    {
      "title": "Practical Async / Await",
      "code": "// Example 2: Real-world pattern\nfunction demo() {\n  return \"Async / Await works\";\n}\nconsole.log(demo());",
      "output": "Async / Await works",
      "explanation": "Shows how async / await appears in everyday code."
    },
    {
      "title": "With Variables",
      "code": "// Example 3: Combined with variables\nconst name = \"React Mastery\";\nconst msg = `Learning ${name} - Async / Await`;\nconsole.log(msg);",
      "output": "Learning React Mastery - Async / Await",
      "explanation": "Combines async / await with other JS fundamentals."
    },
    {
      "title": "Data Transformation",
      "code": "// Example 4: Transform data\nconst items = [1, 2, 3];\nconst result = items.map((n) => n * 2);\nconsole.log(result);",
      "output": "[2, 4, 6]",
      "explanation": "Demonstrates practical data handling related to async / await."
    },
    {
      "title": "Error-Safe Pattern",
      "code": "// Example 5: Safe usage\ntry {\n  const data = { topic: \"async-await\" };\n  console.log(data.topic);\n} catch (e) {\n  console.error(e.message);\n}",
      "output": "async-await",
      "explanation": "Shows defensive coding when working with async / await."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain async / await to a beginner.",
      "answer": "Async / Await is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use async / await?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with async / await?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does async / await compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for async / await.",
      "answer": "Production apps use async / await for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing async / await\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with async / await."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand async / await before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Async / Await Feature",
    "description": "Create a real-world component or module that demonstrates async / await in action.",
    "checklist": [
      "Implement core async / await functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of async / await?",
      "options": [
        "To style components",
        "To work with async / await concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with async / await concepts effectively",
      "explanation": "Async / Await is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for async / await?",
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
      "question": "When should you use async / await?",
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
      "question": "What is a common mistake with async / await?",
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
      "question": "How does async / await help in real projects?",
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
    "Async / Await: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what async / await is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Async / Await",
      "description": "Write a simple example demonstrating async / await.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Async / Await with Data",
      "description": "Use sample data to practice async / await.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Async / Await Output",
      "description": "Log the expected output for a async / await exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Async / Await",
      "description": "Combine async / await with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Async / Await",
      "description": "Refactor given code to use async / await properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Async / Await",
      "description": "Fix the bug related to async / await.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Async / Await",
      "description": "Build a small feature using async / await.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Async / Await Architecture",
      "description": "Design a scalable pattern with async / await.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "// Async / Await in JavaScript\nconst result = \"Hello from Async / Await\";\nconsole.log(result);",
    "solution": "// Async / Await in JavaScript\nconst result = \"Hello from Async / Await\";\nconsole.log(result);\n// Solution: see examples above",
    "hint": "Try modifying the async / await example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Async / Await Mini Challenge",
    "requirements": [
      "Demonstrate async / await in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
