// Auto-generated topic: Functions
// Course: javascript

export default {
  "id": "functions",
  "title": "Functions",
  "definition": "Functions is a fundamental concept in JavaScript that every developer should master.",
  "deepExplanation": "Understanding functions deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "function greet(name) {\n  return `Hello, ${name}`;\n}\n\nconst add = (a, b) => a + b;",
  "visualDiagram": "┌─────────────┐     ┌──────────────┐     ┌─────────────┐\n│   Source    │ ──► │  Functions  │ ──► │   Output    │\n│   Code      │     │  Processing  │     │   Result    │\n└─────────────┘     └──────────────┘     └─────────────┘",
  "analogy": "Functions is like a recipe card — it tells you exactly what ingredients (data) and steps (logic) you need.",
  "examples": [
    {
      "title": "Basic Functions",
      "code": "// Example 1: Basic usage\nconst value = \"functions\";\nconsole.log(value);",
      "output": "functions",
      "explanation": "Introduces the core idea behind functions."
    },
    {
      "title": "Practical Functions",
      "code": "// Example 2: Real-world pattern\nfunction demo() {\n  return \"Functions works\";\n}\nconsole.log(demo());",
      "output": "Functions works",
      "explanation": "Shows how functions appears in everyday code."
    },
    {
      "title": "With Variables",
      "code": "// Example 3: Combined with variables\nconst name = \"React Mastery\";\nconst msg = `Learning ${name} - Functions`;\nconsole.log(msg);",
      "output": "Learning React Mastery - Functions",
      "explanation": "Combines functions with other JS fundamentals."
    },
    {
      "title": "Data Transformation",
      "code": "// Example 4: Transform data\nconst items = [1, 2, 3];\nconst result = items.map((n) => n * 2);\nconsole.log(result);",
      "output": "[2, 4, 6]",
      "explanation": "Demonstrates practical data handling related to functions."
    },
    {
      "title": "Error-Safe Pattern",
      "code": "// Example 5: Safe usage\ntry {\n  const data = { topic: \"functions\" };\n  console.log(data.topic);\n} catch (e) {\n  console.error(e.message);\n}",
      "output": "functions",
      "explanation": "Shows defensive coding when working with functions."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain functions to a beginner.",
      "answer": "Functions is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use functions?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with functions?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does functions compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for functions.",
      "answer": "Production apps use functions for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing functions\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with functions."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand functions before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Functions Feature",
    "description": "Create a real-world component or module that demonstrates functions in action.",
    "checklist": [
      "Implement core functions functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of functions?",
      "options": [
        "To style components",
        "To work with functions concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with functions concepts effectively",
      "explanation": "Functions is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for functions?",
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
      "question": "When should you use functions?",
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
      "question": "What is a common mistake with functions?",
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
      "question": "How does functions help in real projects?",
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
    "Functions: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what functions is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Functions",
      "description": "Write a simple example demonstrating functions.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Functions with Data",
      "description": "Use sample data to practice functions.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Functions Output",
      "description": "Log the expected output for a functions exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Functions",
      "description": "Combine functions with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Functions",
      "description": "Refactor given code to use functions properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Functions",
      "description": "Fix the bug related to functions.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Functions",
      "description": "Build a small feature using functions.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Functions Architecture",
      "description": "Design a scalable pattern with functions.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "// Functions in JavaScript\nconst result = \"Hello from Functions\";\nconsole.log(result);",
    "solution": "// Functions in JavaScript\nconst result = \"Hello from Functions\";\nconsole.log(result);\n// Solution: see examples above",
    "hint": "Try modifying the functions example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Functions Mini Challenge",
    "requirements": [
      "Demonstrate functions in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
