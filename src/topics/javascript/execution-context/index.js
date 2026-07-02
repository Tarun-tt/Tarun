// Auto-generated topic: Execution Context
// Course: javascript

export default {
  "id": "execution-context",
  "title": "Execution Context",
  "definition": "Execution Context is a fundamental concept in JavaScript that every developer should master.",
  "deepExplanation": "Understanding execution context deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Execution Context syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌─────────────┐     ┌──────────────┐     ┌─────────────┐\n│   Source    │ ──► │  Execution Context │ ──► │   Output    │\n│   Code      │     │  Processing  │     │   Result    │\n└─────────────┘     └──────────────┘     └─────────────┘",
  "analogy": "Execution Context works like a traffic controller — it directs data and actions so everything flows smoothly.",
  "examples": [
    {
      "title": "Basic Execution Context",
      "code": "// Example 1: Basic usage\nconst value = \"execution-context\";\nconsole.log(value);",
      "output": "execution-context",
      "explanation": "Introduces the core idea behind execution context."
    },
    {
      "title": "Practical Execution Context",
      "code": "// Example 2: Real-world pattern\nfunction demo() {\n  return \"Execution Context works\";\n}\nconsole.log(demo());",
      "output": "Execution Context works",
      "explanation": "Shows how execution context appears in everyday code."
    },
    {
      "title": "With Variables",
      "code": "// Example 3: Combined with variables\nconst name = \"React Mastery\";\nconst msg = `Learning ${name} - Execution Context`;\nconsole.log(msg);",
      "output": "Learning React Mastery - Execution Context",
      "explanation": "Combines execution context with other JS fundamentals."
    },
    {
      "title": "Data Transformation",
      "code": "// Example 4: Transform data\nconst items = [1, 2, 3];\nconst result = items.map((n) => n * 2);\nconsole.log(result);",
      "output": "[2, 4, 6]",
      "explanation": "Demonstrates practical data handling related to execution context."
    },
    {
      "title": "Error-Safe Pattern",
      "code": "// Example 5: Safe usage\ntry {\n  const data = { topic: \"execution-context\" };\n  console.log(data.topic);\n} catch (e) {\n  console.error(e.message);\n}",
      "output": "execution-context",
      "explanation": "Shows defensive coding when working with execution context."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain execution context to a beginner.",
      "answer": "Execution Context is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use execution context?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with execution context?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does execution context compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for execution context.",
      "answer": "Production apps use execution context for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing execution context\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with execution context."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand execution context before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Execution Context Feature",
    "description": "Create a real-world component or module that demonstrates execution context in action.",
    "checklist": [
      "Implement core execution context functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of execution context?",
      "options": [
        "To style components",
        "To work with execution context concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with execution context concepts effectively",
      "explanation": "Execution Context is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for execution context?",
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
      "question": "When should you use execution context?",
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
      "question": "What is a common mistake with execution context?",
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
      "question": "How does execution context help in real projects?",
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
    "Execution Context: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what execution context is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Execution Context",
      "description": "Write a simple example demonstrating execution context.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Execution Context with Data",
      "description": "Use sample data to practice execution context.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Execution Context Output",
      "description": "Log the expected output for a execution context exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Execution Context",
      "description": "Combine execution context with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Execution Context",
      "description": "Refactor given code to use execution context properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Execution Context",
      "description": "Fix the bug related to execution context.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Execution Context",
      "description": "Build a small feature using execution context.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Execution Context Architecture",
      "description": "Design a scalable pattern with execution context.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "// Execution Context in JavaScript\nconst result = \"Hello from Execution Context\";\nconsole.log(result);",
    "solution": "// Execution Context in JavaScript\nconst result = \"Hello from Execution Context\";\nconsole.log(result);\n// Solution: see examples above",
    "hint": "Try modifying the execution context example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Execution Context Mini Challenge",
    "requirements": [
      "Demonstrate execution context in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
