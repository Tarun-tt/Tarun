import TopicLesson from "../../../shared/TopicLesson.jsx";

/**
 * Async / Await — JavaScript
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = "Async / Await is a core JavaScript concept. It helps you write cleaner, more predictable code when building web applications. Mastering async / await is essential before moving to React and modern frameworks.";
const syntax = "async function loadTeam() {\n  const res = await fetch(\"/api/team\");\n  return res.json();\n}";
const examples = [
  {
    "person": "Tarun Tiwari",
    "title": "Async / Await — storing Tarun's data",
    "code": "// Tarun Tiwari's profile using Async / Await\nconst student_1 = {\n  name: \"Tarun Tiwari\",\n  course: \"React Mastery\",\n  topic: \"async-await\"\n};\nconsole.log(student_1.name);",
    "output": "Tarun Tiwari",
    "explanation": "Tarun Tiwari uses async / await to store and access learning profile data in JavaScript."
  },
  {
    "person": "Tushar",
    "title": "Async / Await — Tushar's function",
    "code": "function greet_2(name) {\n  return `Hi ${name}, let's learn Async / Await!`;\n}\nconsole.log(greet_2(\"Tushar\"));",
    "output": "Hi Tushar, let's learn Async / Await!",
    "explanation": "Tushar writes a reusable function demonstrating async / await in practice."
  },
  {
    "person": "Ranjeet",
    "title": "Async / Await — team array for Ranjeet",
    "code": "const team_3 = [\"Ranjeet\", \"React\", \"Async / Await\"];\nconst result = team_3.map(m => m.toUpperCase());\nconsole.log(result);",
    "output": "[RANJEET, REACT, ASYNC / AWAIT]",
    "explanation": "Ranjeet transforms an array using async / await concepts."
  },
  {
    "person": "Abhishek",
    "title": "Async / Await — Abhishek's object destructuring",
    "code": "const user_4 = { name: \"Abhishek\", role: \"Learner\" };\nconst { name, role } = user_4;\nconsole.log(name, \"-\", role);",
    "output": "Abhishek - Learner",
    "explanation": "Abhishek extracts values from objects — a key part of async / await."
  },
  {
    "person": "Sonu",
    "title": "Async / Await — async for Sonu",
    "code": "async function fetch_5() {\n  return { member: \"Sonu\", status: \"learning\" };\n}\nfetch_5().then(d => console.log(d.member));",
    "output": "Sonu",
    "explanation": "Sonu handles asynchronous async / await patterns like a pro."
  },
  {
    "person": "Prerna",
    "title": "Async / Await — Prerna's template literal",
    "code": "const msg_6 = `${\"Prerna\"} is mastering ${\"Async / Await\"} today`;\nconsole.log(msg_6);",
    "output": "Prerna is mastering Async / Await today",
    "explanation": "Prerna uses template literals with async / await for dynamic strings."
  },
  {
    "person": "Kishan",
    "title": "Async / Await — Kishan's conditional",
    "code": "const score_7 = 95;\nconst grade_7 = score_7 >= 90 ? \"Excellent\" : \"Good\";\nconsole.log(\"Kishan:\", grade_7);",
    "output": "Kishan: Excellent",
    "explanation": "Kishan applies conditional logic — essential in async / await."
  },
  {
    "person": "Satyam",
    "title": "Async / Await — Satyam's loop",
    "code": "const skills_8 = [\"JS\", \"React\", \"Async / Await\"];\nfor (const s of skills_8) {\n  console.log(\"Satyam learns:\", s);\n}",
    "output": "Satyam learns: JS / React / Async / Await",
    "explanation": "Satyam iterates over data using async / await loop patterns."
  }
];

export default function AsyncAwaitTopic() {
  return (
    <TopicLesson
      title="Async / Await"
      course="JavaScript"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#f59e0b"
    />
  );
}
