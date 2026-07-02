// Auto-generated topic: Rest
// Course: javascript

export default {
  "id": "rest",
  "title": "Rest",
  "definition": "Rest is a fundamental concept in JavaScript that every developer should master.",
  "deepExplanation": "Understanding rest deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Rest syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌─────────────┐     ┌──────────────┐     ┌─────────────┐\n│   Source    │ ──► │  Rest       │ ──► │   Output    │\n│   Code      │     │  Processing  │     │   Result    │\n└─────────────┘     └──────────────┘     └─────────────┘",
  "analogy": "Think of Rest as a toolbox — you pick the right tool for each job instead of using one hammer for everything.",
  "examples": [
    {
      "title": "Basic Rest",
      "code": "// Example 1: Basic usage\nconst value = \"rest\";\nconsole.log(value);",
      "output": "rest",
      "explanation": "Introduces the core idea behind rest."
    },
    {
      "title": "Practical Rest",
      "code": "// Example 2: Real-world pattern\nfunction demo() {\n  return \"Rest works\";\n}\nconsole.log(demo());",
      "output": "Rest works",
      "explanation": "Shows how rest appears in everyday code."
    },
    {
      "title": "With Variables",
      "code": "// Example 3: Combined with variables\nconst name = \"React Mastery\";\nconst msg = `Learning ${name} - Rest`;\nconsole.log(msg);",
      "output": "Learning React Mastery - Rest",
      "explanation": "Combines rest with other JS fundamentals."
    },
    {
      "title": "Data Transformation",
      "code": "// Example 4: Transform data\nconst items = [1, 2, 3];\nconst result = items.map((n) => n * 2);\nconsole.log(result);",
      "output": "[2, 4, 6]",
      "explanation": "Demonstrates practical data handling related to rest."
    },
    {
      "title": "Error-Safe Pattern",
      "code": "// Example 5: Safe usage\ntry {\n  const data = { topic: \"rest\" };\n  console.log(data.topic);\n} catch (e) {\n  console.error(e.message);\n}",
      "output": "rest",
      "explanation": "Shows defensive coding when working with rest."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain rest to a beginner.",
      "answer": "Rest is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use rest?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with rest?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does rest compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for rest.",
      "answer": "Production apps use rest for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing rest\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with rest."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand rest before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Rest Feature",
    "description": "Create a real-world component or module that demonstrates rest in action.",
    "checklist": [
      "Implement core rest functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of rest?",
      "options": [
        "To style components",
        "To work with rest concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with rest concepts effectively",
      "explanation": "Rest is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for rest?",
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
      "question": "When should you use rest?",
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
      "question": "What is a common mistake with rest?",
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
      "question": "How does rest help in real projects?",
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
    "Rest: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what rest is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Rest",
      "description": "Write a simple example demonstrating rest.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Rest with Data",
      "description": "Use sample data to practice rest.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Rest Output",
      "description": "Log the expected output for a rest exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Rest",
      "description": "Combine rest with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Rest",
      "description": "Refactor given code to use rest properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Rest",
      "description": "Fix the bug related to rest.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Rest",
      "description": "Build a small feature using rest.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Rest Architecture",
      "description": "Design a scalable pattern with rest.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "// Rest in JavaScript\nconst result = \"Hello from Rest\";\nconsole.log(result);",
    "solution": "// Rest in JavaScript\nconst result = \"Hello from Rest\";\nconsole.log(result);\n// Solution: see examples above",
    "hint": "Try modifying the rest example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Rest Mini Challenge",
    "requirements": [
      "Demonstrate rest in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
