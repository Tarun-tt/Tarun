// Auto-generated topic: Spread
// Course: javascript

export default {
  "id": "spread",
  "title": "Spread",
  "definition": "Spread is a fundamental concept in JavaScript that every developer should master.",
  "deepExplanation": "Understanding spread deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Spread syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌─────────────┐     ┌──────────────┐     ┌─────────────┐\n│   Source    │ ──► │  Spread     │ ──► │   Output    │\n│   Code      │     │  Processing  │     │   Result    │\n└─────────────┘     └──────────────┘     └─────────────┘",
  "analogy": "Spread is like a recipe card — it tells you exactly what ingredients (data) and steps (logic) you need.",
  "examples": [
    {
      "title": "Basic Spread",
      "code": "// Example 1: Basic usage\nconst value = \"spread\";\nconsole.log(value);",
      "output": "spread",
      "explanation": "Introduces the core idea behind spread."
    },
    {
      "title": "Practical Spread",
      "code": "// Example 2: Real-world pattern\nfunction demo() {\n  return \"Spread works\";\n}\nconsole.log(demo());",
      "output": "Spread works",
      "explanation": "Shows how spread appears in everyday code."
    },
    {
      "title": "With Variables",
      "code": "// Example 3: Combined with variables\nconst name = \"React Mastery\";\nconst msg = `Learning ${name} - Spread`;\nconsole.log(msg);",
      "output": "Learning React Mastery - Spread",
      "explanation": "Combines spread with other JS fundamentals."
    },
    {
      "title": "Data Transformation",
      "code": "// Example 4: Transform data\nconst items = [1, 2, 3];\nconst result = items.map((n) => n * 2);\nconsole.log(result);",
      "output": "[2, 4, 6]",
      "explanation": "Demonstrates practical data handling related to spread."
    },
    {
      "title": "Error-Safe Pattern",
      "code": "// Example 5: Safe usage\ntry {\n  const data = { topic: \"spread\" };\n  console.log(data.topic);\n} catch (e) {\n  console.error(e.message);\n}",
      "output": "spread",
      "explanation": "Shows defensive coding when working with spread."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain spread to a beginner.",
      "answer": "Spread is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use spread?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with spread?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does spread compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for spread.",
      "answer": "Production apps use spread for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing spread\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with spread."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand spread before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Spread Feature",
    "description": "Create a real-world component or module that demonstrates spread in action.",
    "checklist": [
      "Implement core spread functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of spread?",
      "options": [
        "To style components",
        "To work with spread concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with spread concepts effectively",
      "explanation": "Spread is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for spread?",
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
      "question": "When should you use spread?",
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
      "question": "What is a common mistake with spread?",
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
      "question": "How does spread help in real projects?",
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
    "Spread: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what spread is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Spread",
      "description": "Write a simple example demonstrating spread.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Spread with Data",
      "description": "Use sample data to practice spread.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Spread Output",
      "description": "Log the expected output for a spread exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Spread",
      "description": "Combine spread with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Spread",
      "description": "Refactor given code to use spread properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Spread",
      "description": "Fix the bug related to spread.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Spread",
      "description": "Build a small feature using spread.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Spread Architecture",
      "description": "Design a scalable pattern with spread.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "// Spread in JavaScript\nconst result = \"Hello from Spread\";\nconsole.log(result);",
    "solution": "// Spread in JavaScript\nconst result = \"Hello from Spread\";\nconsole.log(result);\n// Solution: see examples above",
    "hint": "Try modifying the spread example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Spread Mini Challenge",
    "requirements": [
      "Demonstrate spread in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
