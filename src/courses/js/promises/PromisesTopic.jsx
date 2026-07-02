import TopicLesson from "../../shared/TopicLesson.jsx";

/**
 * Promises — JavaScript
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = "Promises is a core JavaScript concept. It helps you write cleaner, more predictable code when building web applications. Mastering promises is essential before moving to React and modern frameworks.";
const syntax = "fetch(\"/api/team\")\n  .then(res => res.json())\n  .then(data => console.log(data));";
const examples = [
  {
    "person": "Tarun Tiwari",
    "title": "Promises — storing Tarun's data",
    "code": "// Tarun Tiwari's profile using Promises\nconst student_1 = {\n  name: \"Tarun Tiwari\",\n  course: \"React Mastery\",\n  topic: \"promises\"\n};\nconsole.log(student_1.name);",
    "output": "Tarun Tiwari",
    "explanation": "Tarun Tiwari uses promises to store and access learning profile data in JavaScript."
  },
  {
    "person": "Tushar",
    "title": "Promises — Tushar's function",
    "code": "function greet_2(name) {\n  return `Hi ${name}, let's learn Promises!`;\n}\nconsole.log(greet_2(\"Tushar\"));",
    "output": "Hi Tushar, let's learn Promises!",
    "explanation": "Tushar writes a reusable function demonstrating promises in practice."
  },
  {
    "person": "Ranjeet",
    "title": "Promises — team array for Ranjeet",
    "code": "const team_3 = [\"Ranjeet\", \"React\", \"Promises\"];\nconst result = team_3.map(m => m.toUpperCase());\nconsole.log(result);",
    "output": "[RANJEET, REACT, PROMISES]",
    "explanation": "Ranjeet transforms an array using promises concepts."
  },
  {
    "person": "Abhishek",
    "title": "Promises — Abhishek's object destructuring",
    "code": "const user_4 = { name: \"Abhishek\", role: \"Learner\" };\nconst { name, role } = user_4;\nconsole.log(name, \"-\", role);",
    "output": "Abhishek - Learner",
    "explanation": "Abhishek extracts values from objects — a key part of promises."
  },
  {
    "person": "Sonu",
    "title": "Promises — async for Sonu",
    "code": "async function fetch_5() {\n  return { member: \"Sonu\", status: \"learning\" };\n}\nfetch_5().then(d => console.log(d.member));",
    "output": "Sonu",
    "explanation": "Sonu handles asynchronous promises patterns like a pro."
  },
  {
    "person": "Prerna",
    "title": "Promises — Prerna's template literal",
    "code": "const msg_6 = `${\"Prerna\"} is mastering ${\"Promises\"} today`;\nconsole.log(msg_6);",
    "output": "Prerna is mastering Promises today",
    "explanation": "Prerna uses template literals with promises for dynamic strings."
  },
  {
    "person": "Kishan",
    "title": "Promises — Kishan's conditional",
    "code": "const score_7 = 95;\nconst grade_7 = score_7 >= 90 ? \"Excellent\" : \"Good\";\nconsole.log(\"Kishan:\", grade_7);",
    "output": "Kishan: Excellent",
    "explanation": "Kishan applies conditional logic — essential in promises."
  },
  {
    "person": "Satyam",
    "title": "Promises — Satyam's loop",
    "code": "const skills_8 = [\"JS\", \"React\", \"Promises\"];\nfor (const s of skills_8) {\n  console.log(\"Satyam learns:\", s);\n}",
    "output": "Satyam learns: JS / React / Promises",
    "explanation": "Satyam iterates over data using promises loop patterns."
  }
];

export default function PromisesTopic() {
  return (
    <TopicLesson
      title="Promises"
      course="JavaScript"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#f59e0b"
    />
  );
}
