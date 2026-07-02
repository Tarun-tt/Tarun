import TopicLesson from "../../shared/TopicLesson.jsx";

/**
 * Scope — JavaScript
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = "Scope is a core JavaScript concept. It helps you write cleaner, more predictable code when building web applications. Mastering scope is essential before moving to React and modern frameworks.";
const syntax = "// Scope syntax\n// Used by Tarun Tiwari, Tushar, Ranjeet & team";
const examples = [
  {
    "person": "Tarun Tiwari",
    "title": "Scope — storing Tarun's data",
    "code": "// Tarun Tiwari's profile using Scope\nconst student_1 = {\n  name: \"Tarun Tiwari\",\n  course: \"React Mastery\",\n  topic: \"scope\"\n};\nconsole.log(student_1.name);",
    "output": "Tarun Tiwari",
    "explanation": "Tarun Tiwari uses scope to store and access learning profile data in JavaScript."
  },
  {
    "person": "Tushar",
    "title": "Scope — Tushar's function",
    "code": "function greet_2(name) {\n  return `Hi ${name}, let's learn Scope!`;\n}\nconsole.log(greet_2(\"Tushar\"));",
    "output": "Hi Tushar, let's learn Scope!",
    "explanation": "Tushar writes a reusable function demonstrating scope in practice."
  },
  {
    "person": "Ranjeet",
    "title": "Scope — team array for Ranjeet",
    "code": "const team_3 = [\"Ranjeet\", \"React\", \"Scope\"];\nconst result = team_3.map(m => m.toUpperCase());\nconsole.log(result);",
    "output": "[RANJEET, REACT, SCOPE]",
    "explanation": "Ranjeet transforms an array using scope concepts."
  },
  {
    "person": "Abhishek",
    "title": "Scope — Abhishek's object destructuring",
    "code": "const user_4 = { name: \"Abhishek\", role: \"Learner\" };\nconst { name, role } = user_4;\nconsole.log(name, \"-\", role);",
    "output": "Abhishek - Learner",
    "explanation": "Abhishek extracts values from objects — a key part of scope."
  },
  {
    "person": "Sonu",
    "title": "Scope — async for Sonu",
    "code": "async function fetch_5() {\n  return { member: \"Sonu\", status: \"learning\" };\n}\nfetch_5().then(d => console.log(d.member));",
    "output": "Sonu",
    "explanation": "Sonu handles asynchronous scope patterns like a pro."
  },
  {
    "person": "Prerna",
    "title": "Scope — Prerna's template literal",
    "code": "const msg_6 = `${\"Prerna\"} is mastering ${\"Scope\"} today`;\nconsole.log(msg_6);",
    "output": "Prerna is mastering Scope today",
    "explanation": "Prerna uses template literals with scope for dynamic strings."
  },
  {
    "person": "Kishan",
    "title": "Scope — Kishan's conditional",
    "code": "const score_7 = 95;\nconst grade_7 = score_7 >= 90 ? \"Excellent\" : \"Good\";\nconsole.log(\"Kishan:\", grade_7);",
    "output": "Kishan: Excellent",
    "explanation": "Kishan applies conditional logic — essential in scope."
  },
  {
    "person": "Satyam",
    "title": "Scope — Satyam's loop",
    "code": "const skills_8 = [\"JS\", \"React\", \"Scope\"];\nfor (const s of skills_8) {\n  console.log(\"Satyam learns:\", s);\n}",
    "output": "Satyam learns: JS / React / Scope",
    "explanation": "Satyam iterates over data using scope loop patterns."
  }
];

export default function ScopeTopic() {
  return (
    <TopicLesson
      title="Scope"
      course="JavaScript"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#f59e0b"
    />
  );
}
