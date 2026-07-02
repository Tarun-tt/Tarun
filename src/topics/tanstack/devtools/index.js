// Auto-generated topic: DevTools
// Course: tanstack

export default {
  "id": "devtools",
  "title": "DevTools",
  "definition": "DevTools is a fundamental concept in TanStack Query that every developer should master.",
  "deepExplanation": "Understanding devtools deeply helps you write cleaner, more maintainable code. It connects to how modern applications are built, debugged, and scaled. You'll learn why it exists, when to use it, and how professionals apply it in production systems.",
  "syntax": "// DevTools syntax\n// See examples below for detailed usage",
  "visualDiagram": "┌──────────┐  query   ┌─────────────┐\n│ Component│ ───────► │ Query Cache │\n│          │ ◄─────── │  DevTools  │\n└──────────┘  data    └─────────────┘",
  "analogy": "DevTools works like a traffic controller — it directs data and actions so everything flows smoothly.",
  "examples": [
    {
      "title": "Getting Started with DevTools",
      "code": "// DevTools - Example 1\nconst config = { feature: \"devtools\" };\nconsole.log(config);",
      "output": "{ feature: \"devtools\" }",
      "explanation": "Foundation setup for devtools."
    },
    {
      "title": "Common Pattern",
      "code": "// DevTools - Example 2\nconst state = { loaded: true, data: [] };\nconsole.log(state.loaded);",
      "output": "true",
      "explanation": "Typical state shape when using devtools."
    },
    {
      "title": "Async Flow",
      "code": "// DevTools - Example 3\nasync function load() {\n  return { topic: \"devtools\" };\n}",
      "output": "{ topic: \"devtools\" }",
      "explanation": "Async patterns with devtools."
    },
    {
      "title": "Error Handling",
      "code": "// DevTools - Example 4\ntry {\n  throw new Error(\"Demo error\");\n} catch (e) {\n  console.log(e.message);\n}",
      "output": "Demo error",
      "explanation": "Handle failures gracefully in devtools."
    },
    {
      "title": "Best Practice",
      "code": "// DevTools - Example 5\nconst NAMESPACE = \"tanstack/devtools\";\nconsole.log(NAMESPACE);",
      "output": "tanstack/devtools",
      "explanation": "Organized naming for devtools."
    }
  ],
  "interviewQuestions": [
    {
      "question": "Explain devtools to a beginner.",
      "answer": "DevTools is a core building block. Start with what problem it solves, then show a minimal example."
    },
    {
      "question": "When would you NOT use devtools?",
      "answer": "When a simpler approach suffices, or when the overhead outweighs the benefit. Always match the tool to the problem."
    },
    {
      "question": "What are common pitfalls with devtools?",
      "answer": "Overuse, misunderstanding scope/lifecycle, and not following established patterns."
    },
    {
      "question": "How does devtools compare to alternatives?",
      "answer": "Each approach has trade-offs in complexity, performance, and maintainability. Choose based on team and project needs."
    },
    {
      "question": "Give a real-world use case for devtools.",
      "answer": "Production apps use devtools for user-facing features, data flow, and keeping code organized at scale."
    }
  ],
  "mistakes": [
    {
      "wrong": "// Wrong: misusing devtools\nvar x = undefined;\nconsole.log(x.property);",
      "correct": "// Correct: safe access\nconst x = { property: \"value\" };\nconsole.log(x?.property ?? \"default\");",
      "explanation": "Always validate data and use safe access patterns with devtools."
    },
    {
      "wrong": "// Wrong: overcomplicating\nfunction overlyComplex() { /* 100 lines */ }",
      "correct": "// Correct: simple and clear\nfunction focused() {\n  return \"single responsibility\";\n}",
      "explanation": "Keep implementations focused and readable."
    }
  ],
  "bestPractices": [
    "Understand devtools before using it in production.",
    "Start with minimal examples, then scale up.",
    "Write tests for critical paths.",
    "Follow official documentation and community patterns.",
    "Refactor when complexity grows."
  ],
  "assignment": {
    "title": "Build a DevTools Feature",
    "description": "Create a real-world component or module that demonstrates devtools in action.",
    "checklist": [
      "Implement core devtools functionality",
      "Handle edge cases",
      "Add clear comments",
      "Test with sample data",
      "Document your approach"
    ]
  },
  "quiz": [
    {
      "question": "What is the primary purpose of devtools?",
      "options": [
        "To style components",
        "To work with devtools concepts effectively",
        "To replace JavaScript",
        "To deploy apps"
      ],
      "answer": "To work with devtools concepts effectively",
      "explanation": "DevTools is a core concept you must understand deeply."
    },
    {
      "question": "Which is a best practice for devtools?",
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
      "question": "When should you use devtools?",
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
      "question": "What is a common mistake with devtools?",
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
      "question": "How does devtools help in real projects?",
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
    "DevTools: core concept",
    "Syntax: see Syntax section",
    "Use when: problem requires this pattern",
    "Avoid: over-engineering simple cases",
    "Pro tip: read docs, practice daily"
  ],
  "summary": "You learned what devtools is, why it matters, how to use it with syntax and examples, common mistakes to avoid, and best practices for production code.",
  "practiceQuestions": [
    {
      "difficulty": "Easy",
      "title": "Basic DevTools",
      "description": "Write a simple example demonstrating devtools.",
      "starterCode": "// Your code here"
    },
    {
      "difficulty": "Easy",
      "title": "DevTools with Data",
      "description": "Use sample data to practice devtools.",
      "starterCode": "const data = [];\n// Implement solution"
    },
    {
      "difficulty": "Easy",
      "title": "DevTools Output",
      "description": "Log the expected output for a devtools exercise.",
      "starterCode": "console.log(\"TODO\");"
    },
    {
      "difficulty": "Medium",
      "title": "Combine DevTools",
      "description": "Combine devtools with another concept.",
      "starterCode": "// Medium challenge"
    },
    {
      "difficulty": "Medium",
      "title": "Refactor DevTools",
      "description": "Refactor given code to use devtools properly.",
      "starterCode": "// Refactor this"
    },
    {
      "difficulty": "Medium",
      "title": "Debug DevTools",
      "description": "Fix the bug related to devtools.",
      "starterCode": "// Buggy code"
    },
    {
      "difficulty": "Hard",
      "title": "Build with DevTools",
      "description": "Build a small feature using devtools.",
      "starterCode": "// Hard challenge"
    },
    {
      "difficulty": "Hard",
      "title": "DevTools Architecture",
      "description": "Design a scalable pattern with devtools.",
      "starterCode": "// Architecture exercise"
    }
  ],
  "playground": {
    "starterCode": "import { useQuery } from '@tanstack/react-query';\n// DevTools example\nconst { data } = useQuery({ queryKey: ['DevTools'], queryFn: () => [] });",
    "solution": "import { useQuery } from '@tanstack/react-query';\n// DevTools example\nconst { data } = useQuery({ queryKey: ['DevTools'], queryFn: () => [] });\n// Solution: see examples above",
    "hint": "Try modifying the devtools example step by step. Check the 5-minute examples for guidance."
  },
  "miniChallenge": {
    "title": "DevTools Mini Challenge",
    "requirements": [
      "Demonstrate devtools in a small app",
      "Use meaningful variable names",
      "Show expected output"
    ]
  }
};
