// Auto-generated topic: Classes
// Course: javascript

export default {
  "id": "classes",
  "title": "Classes",
  "definition": "Classes is a fundamental concept in JavaScript that every developer should master.",
  "deepExplanation": "Understanding classes deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Classes syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌─────────────┐     ┌──────────────┐     ┌─────────────┐\n│   Source    │ ──► │  Classes    │ ──► │   Output    │\n│   Code      │     │  Processing  │     │   Result    │\n└─────────────┘     └──────────────┘     └─────────────┘",
  "analogy": "Think of Classes as a toolbox — you pick the right tool for each job instead of using one hammer for everything.",
  "examples": [
    {
      "title": "Basic Classes",
      "code": "// Example 1: Basic usage\nconst value = \"classes\";\nconsole.log(value);",
      "output": "classes",
      "explanation": "Introduces the core idea behind classes."
    },
    {
      "title": "Practical Classes",
      "code": "// Example 2: Real-world pattern\nfunction demo() {\n  return \"Classes works\";\n}\nconsole.log(demo());",
      "output": "Classes works",
      "explanation": "Shows how classes appears in everyday code."
    },
    {
      "title": "With Variables",
      "code": "// Example 3: Combined with variables\nconst name = \"React Mastery\";\nconst msg = `Learning ${name} - Classes`;\nconsole.log(msg);",
      "output": "Learning React Mastery - Classes",
      "explanation": "Combines classes with other JS fundamentals."
    },
    {
      "title": "Data Transformation",
      "code": "// Example 4: Transform data\nconst items = [1, 2, 3];\nconst result = items.map((n) => n * 2);\nconsole.log(result);",
      "output": "[2, 4, 6]",
      "explanation": "Demonstrates practical data handling related to classes."
    },
    {
      "title": "Error-Safe Pattern",
      "code": "// Example 5: Safe usage\ntry {\n  const data = { topic: \"classes\" };\n  console.log(data.topic);\n} catch (e) {\n  console.error(e.message);\n}",
      "output": "classes",
      "explanation": "Shows defensive coding when working with classes."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain classes to a beginner.",
      "answer": "Classes is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use classes?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with classes?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does classes compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for classes.",
      "answer": "Production apps use classes for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing classes\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with classes."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand classes before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Classes Feature",
    "description": "Create a real-world component or module that demonstrates classes in action.",
    "checklist": [
      "Implement core classes functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of classes?",
      "options": [
        "To style components",
        "To work with classes concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with classes concepts effectively",
      "explanation": "Classes is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for classes?",
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
      "question": "When should you use classes?",
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
      "question": "What is a common mistake with classes?",
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
      "question": "How does classes help in real projects?",
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
    "Classes: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what classes is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Classes",
      "description": "Write a simple example demonstrating classes.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Classes with Data",
      "description": "Use sample data to practice classes.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Classes Output",
      "description": "Log the expected output for a classes exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Classes",
      "description": "Combine classes with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Classes",
      "description": "Refactor given code to use classes properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Classes",
      "description": "Fix the bug related to classes.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Classes",
      "description": "Build a small feature using classes.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Classes Architecture",
      "description": "Design a scalable pattern with classes.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "// Classes in JavaScript\nconst result = \"Hello from Classes\";\nconsole.log(result);",
    "solution": "// Classes in JavaScript\nconst result = \"Hello from Classes\";\nconsole.log(result);\n// Solution: see examples above",
    "hint": "Try modifying the classes example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Classes Mini Challenge",
    "requirements": [
      "Demonstrate classes in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
