// Auto-generated topic: Memory
// Course: javascript

export default {
  "id": "memory",
  "title": "Memory",
  "definition": "Memory is a fundamental concept in JavaScript that every developer should master.",
  "deepExplanation": "Understanding memory deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// Memory syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌─────────────┐     ┌──────────────┐     ┌─────────────┐\n│   Source    │ ──► │  Memory     │ ──► │   Output    │\n│   Code      │     │  Processing  │     │   Result    │\n└─────────────┘     └──────────────┘     └─────────────┘",
  "analogy": "Memory is like a recipe card — it tells you exactly what ingredients (data) and steps (logic) you need.",
  "examples": [
    {
      "title": "Basic Memory",
      "code": "// Example 1: Basic usage\nconst value = \"memory\";\nconsole.log(value);",
      "output": "memory",
      "explanation": "Introduces the core idea behind memory."
    },
    {
      "title": "Practical Memory",
      "code": "// Example 2: Real-world pattern\nfunction demo() {\n  return \"Memory works\";\n}\nconsole.log(demo());",
      "output": "Memory works",
      "explanation": "Shows how memory appears in everyday code."
    },
    {
      "title": "With Variables",
      "code": "// Example 3: Combined with variables\nconst name = \"React Mastery\";\nconst msg = `Learning ${name} - Memory`;\nconsole.log(msg);",
      "output": "Learning React Mastery - Memory",
      "explanation": "Combines memory with other JS fundamentals."
    },
    {
      "title": "Data Transformation",
      "code": "// Example 4: Transform data\nconst items = [1, 2, 3];\nconst result = items.map((n) => n * 2);\nconsole.log(result);",
      "output": "[2, 4, 6]",
      "explanation": "Demonstrates practical data handling related to memory."
    },
    {
      "title": "Error-Safe Pattern",
      "code": "// Example 5: Safe usage\ntry {\n  const data = { topic: \"memory\" };\n  console.log(data.topic);\n} catch (e) {\n  console.error(e.message);\n}",
      "output": "memory",
      "explanation": "Shows defensive coding when working with memory."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain memory to a beginner.",
      "answer": "Memory is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use memory?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with memory?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does memory compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for memory.",
      "answer": "Production apps use memory for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing memory\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with memory."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand memory before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a Memory Feature",
    "description": "Create a real-world component or module that demonstrates memory in action.",
    "checklist": [
      "Implement core memory functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of memory?",
      "options": [
        "To style components",
        "To work with memory concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with memory concepts effectively",
      "explanation": "Memory is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for memory?",
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
      "question": "When should you use memory?",
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
      "question": "What is a common mistake with memory?",
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
      "question": "How does memory help in real projects?",
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
    "Memory: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what memory is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic Memory",
      "description": "Write a simple example demonstrating memory.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "Memory with Data",
      "description": "Use sample data to practice memory.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "Memory Output",
      "description": "Log the expected output for a memory exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine Memory",
      "description": "Combine memory with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor Memory",
      "description": "Refactor given code to use memory properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug Memory",
      "description": "Fix the bug related to memory.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with Memory",
      "description": "Build a small feature using memory.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "Memory Architecture",
      "description": "Design a scalable pattern with memory.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "// Memory in JavaScript\nconst result = \"Hello from Memory\";\nconsole.log(result);",
    "solution": "// Memory in JavaScript\nconst result = \"Hello from Memory\";\nconsole.log(result);\n// Solution: see examples above",
    "hint": "Try modifying the memory example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "Memory Mini Challenge",
    "requirements": [
      "Demonstrate memory in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
