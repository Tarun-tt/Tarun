// Auto-generated topic: Data Types
// Course: javascript

export default {
  "id": "datatypes",
  "title": "Data Types",
  "definition": "Data Types is a fundamental concept in JavaScript that every developer should master.",
  "deepExplanation": "Understanding data types deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Data Types syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌─────────────┐     ┌──────────────┐     ┌─────────────┐\n│   Source    │ ──► │  Data Types │ ──► │   Output    │\n│   Code      │     │  Processing  │     │   Result    │\n└─────────────┘     └──────────────┘     └─────────────┘",
  "analogy": "Think of Data Types as a toolbox — you pick the right tool for each job instead of using one hammer for everything.",
  "examples": [
    {
      "title": "Basic Data Types",
      "code": "// Example 1: Basic usage\nconst value = \"datatypes\";\nconsole.log(value);",
      "output": "datatypes",
      "explanation": "Introduces the core idea behind data types."
    },
    {
      "title": "Practical Data Types",
      "code": "// Example 2: Real-world pattern\nfunction demo() {\n  return \"Data Types works\";\n}\nconsole.log(demo());",
      "output": "Data Types works",
      "explanation": "Shows how data types appears in everyday code."
    },
    {
      "title": "With Variables",
      "code": "// Example 3: Combined with variables\nconst name = \"React Mastery\";\nconst msg = `Learning ${name} - Data Types`;\nconsole.log(msg);",
      "output": "Learning React Mastery - Data Types",
      "explanation": "Combines data types with other JS fundamentals."
    },
    {
      "title": "Data Transformation",
      "code": "// Example 4: Transform data\nconst items = [1, 2, 3];\nconst result = items.map((n) => n * 2);\nconsole.log(result);",
      "output": "[2, 4, 6]",
      "explanation": "Demonstrates practical data handling related to data types."
    },
    {
      "title": "Error-Safe Pattern",
      "code": "// Example 5: Safe usage\ntry {\n  const data = { topic: \"datatypes\" };\n  console.log(data.topic);\n} catch (e) {\n  console.error(e.message);\n}",
      "output": "datatypes",
      "explanation": "Shows defensive coding when working with data types."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain data types to a beginner.",
      "answer": "Data Types is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use data types?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with data types?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does data types compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for data types.",
      "answer": "Production apps use data types for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing data types\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with data types."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand data types before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Data Types Feature",
    "description": "Create a real-world component or module that demonstrates data types in action.",
    "checklist": [
      "Implement core data types functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of data types?",
      "options": [
        "To style components",
        "To work with data types concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with data types concepts effectively",
      "explanation": "Data Types is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for data types?",
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
      "question": "When should you use data types?",
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
      "question": "What is a common mistake with data types?",
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
      "question": "How does data types help in real projects?",
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
    "Data Types: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what data types is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Data Types",
      "description": "Write a simple example demonstrating data types.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Data Types with Data",
      "description": "Use sample data to practice data types.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Data Types Output",
      "description": "Log the expected output for a data types exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Data Types",
      "description": "Combine data types with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Data Types",
      "description": "Refactor given code to use data types properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Data Types",
      "description": "Fix the bug related to data types.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Data Types",
      "description": "Build a small feature using data types.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Data Types Architecture",
      "description": "Design a scalable pattern with data types.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "// Data Types in JavaScript\nconst result = \"Hello from Data Types\";\nconsole.log(result);",
    "solution": "// Data Types in JavaScript\nconst result = \"Hello from Data Types\";\nconsole.log(result);\n// Solution: see examples above",
    "hint": "Try modifying the data types example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Data Types Mini Challenge",
    "requirements": [
      "Demonstrate data types in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
