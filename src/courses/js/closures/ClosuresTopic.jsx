import TopicLesson from "../../shared/TopicLesson.jsx";

/**
 * Closures — JavaScript
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = "Closures is a core JavaScript concept. It helps you write cleaner, more predictable code when building web applications. Mastering closures is essential before moving to React and modern frameworks.";
const syntax = "function createCounter(name) {\n  let count = 0;\n  return () => ++count;\n}\nconst ranjeetCounter = createCounter(\"Ranjeet\");";
const examples = [
  {
    "person": "Tarun Tiwari",
    "title": "Closures — storing Tarun's data",
    "code": "// Tarun Tiwari's profile using Closures\nconst student_1 = {\n  name: \"Tarun Tiwari\",\n  course: \"React Mastery\",\n  topic: \"closures\"\n};\nconsole.log(student_1.name);",
    "output": "Tarun Tiwari",
    "explanation": "Tarun Tiwari uses closures to store and access learning profile data in JavaScript."
  },
  {
    "person": "Tushar",
    "title": "Closures — Tushar's function",
    "code": "function greet_2(name) {\n  return `Hi ${name}, let's learn Closures!`;\n}\nconsole.log(greet_2(\"Tushar\"));",
    "output": "Hi Tushar, let's learn Closures!",
    "explanation": "Tushar writes a reusable function demonstrating closures in practice."
  },
  {
    "person": "Ranjeet",
    "title": "Closures — team array for Ranjeet",
    "code": "const team_3 = [\"Ranjeet\", \"React\", \"Closures\"];\nconst result = team_3.map(m => m.toUpperCase());\nconsole.log(result);",
    "output": "[RANJEET, REACT, CLOSURES]",
    "explanation": "Ranjeet transforms an array using closures concepts."
  },
  {
    "person": "Abhishek",
    "title": "Closures — Abhishek's object destructuring",
    "code": "const user_4 = { name: \"Abhishek\", role: \"Learner\" };\nconst { name, role } = user_4;\nconsole.log(name, \"-\", role);",
    "output": "Abhishek - Learner",
    "explanation": "Abhishek extracts values from objects — a key part of closures."
  },
  {
    "person": "Sonu",
    "title": "Closures — async for Sonu",
    "code": "async function fetch_5() {\n  return { member: \"Sonu\", status: \"learning\" };\n}\nfetch_5().then(d => console.log(d.member));",
    "output": "Sonu",
    "explanation": "Sonu handles asynchronous closures patterns like a pro."
  },
  {
    "person": "Prerna",
    "title": "Closures — Prerna's template literal",
    "code": "const msg_6 = `${\"Prerna\"} is mastering ${\"Closures\"} today`;\nconsole.log(msg_6);",
    "output": "Prerna is mastering Closures today",
    "explanation": "Prerna uses template literals with closures for dynamic strings."
  },
  {
    "person": "Kishan",
    "title": "Closures — Kishan's conditional",
    "code": "const score_7 = 95;\nconst grade_7 = score_7 >= 90 ? \"Excellent\" : \"Good\";\nconsole.log(\"Kishan:\", grade_7);",
    "output": "Kishan: Excellent",
    "explanation": "Kishan applies conditional logic — essential in closures."
  },
  {
    "person": "Satyam",
    "title": "Closures — Satyam's loop",
    "code": "const skills_8 = [\"JS\", \"React\", \"Closures\"];\nfor (const s of skills_8) {\n  console.log(\"Satyam learns:\", s);\n}",
    "output": "Satyam learns: JS / React / Closures",
    "explanation": "Satyam iterates over data using closures loop patterns."
  }
];

export default function ClosuresTopic() {
  return (
    <TopicLesson
      title="Closures"
      course="JavaScript"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#f59e0b"
    />
  );
}
