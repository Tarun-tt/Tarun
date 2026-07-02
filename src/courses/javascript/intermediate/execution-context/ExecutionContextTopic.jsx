import TopicLesson from "../../../shared/TopicLesson.jsx";

/**
 * Execution Context — JavaScript
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = "Execution Context is a core JavaScript concept. It helps you write cleaner, more predictable code when building web applications. Mastering execution context is essential before moving to React and modern frameworks.";
const syntax = "// Execution Context syntax\n// Used by Tarun Tiwari, Tushar, Ranjeet & team";
const examples = [
  {
    "person": "Tarun Tiwari",
    "title": "Execution Context — storing Tarun's data",
    "code": "// Tarun Tiwari's profile using Execution Context\nconst student_1 = {\n  name: \"Tarun Tiwari\",\n  course: \"React Mastery\",\n  topic: \"execution-context\"\n};\nconsole.log(student_1.name);",
    "output": "Tarun Tiwari",
    "explanation": "Tarun Tiwari uses execution context to store and access learning profile data in JavaScript."
  },
  {
    "person": "Tushar",
    "title": "Execution Context — Tushar's function",
    "code": "function greet_2(name) {\n  return `Hi ${name}, let's learn Execution Context!`;\n}\nconsole.log(greet_2(\"Tushar\"));",
    "output": "Hi Tushar, let's learn Execution Context!",
    "explanation": "Tushar writes a reusable function demonstrating execution context in practice."
  },
  {
    "person": "Ranjeet",
    "title": "Execution Context — team array for Ranjeet",
    "code": "const team_3 = [\"Ranjeet\", \"React\", \"Execution Context\"];\nconst result = team_3.map(m => m.toUpperCase());\nconsole.log(result);",
    "output": "[RANJEET, REACT, EXECUTION CONTEXT]",
    "explanation": "Ranjeet transforms an array using execution context concepts."
  },
  {
    "person": "Abhishek",
    "title": "Execution Context — Abhishek's object destructuring",
    "code": "const user_4 = { name: \"Abhishek\", role: \"Learner\" };\nconst { name, role } = user_4;\nconsole.log(name, \"-\", role);",
    "output": "Abhishek - Learner",
    "explanation": "Abhishek extracts values from objects — a key part of execution context."
  },
  {
    "person": "Sonu",
    "title": "Execution Context — async for Sonu",
    "code": "async function fetch_5() {\n  return { member: \"Sonu\", status: \"learning\" };\n}\nfetch_5().then(d => console.log(d.member));",
    "output": "Sonu",
    "explanation": "Sonu handles asynchronous execution context patterns like a pro."
  },
  {
    "person": "Prerna",
    "title": "Execution Context — Prerna's template literal",
    "code": "const msg_6 = `${\"Prerna\"} is mastering ${\"Execution Context\"} today`;\nconsole.log(msg_6);",
    "output": "Prerna is mastering Execution Context today",
    "explanation": "Prerna uses template literals with execution context for dynamic strings."
  },
  {
    "person": "Kishan",
    "title": "Execution Context — Kishan's conditional",
    "code": "const score_7 = 95;\nconst grade_7 = score_7 >= 90 ? \"Excellent\" : \"Good\";\nconsole.log(\"Kishan:\", grade_7);",
    "output": "Kishan: Excellent",
    "explanation": "Kishan applies conditional logic — essential in execution context."
  },
  {
    "person": "Satyam",
    "title": "Execution Context — Satyam's loop",
    "code": "const skills_8 = [\"JS\", \"React\", \"Execution Context\"];\nfor (const s of skills_8) {\n  console.log(\"Satyam learns:\", s);\n}",
    "output": "Satyam learns: JS / React / Execution Context",
    "explanation": "Satyam iterates over data using execution context loop patterns."
  }
];

export default function ExecutionContextTopic() {
  return (
    <TopicLesson
      title="Execution Context"
      course="JavaScript"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#f59e0b"
    />
  );
}
