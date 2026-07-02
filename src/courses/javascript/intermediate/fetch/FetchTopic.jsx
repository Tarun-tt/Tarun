import TopicLesson from "../../../shared/TopicLesson.jsx";

/**
 * Fetch — JavaScript
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = "Fetch is a core JavaScript concept. It helps you write cleaner, more predictable code when building web applications. Mastering fetch is essential before moving to React and modern frameworks.";
const syntax = "// Fetch syntax\n// Used by Tarun Tiwari, Tushar, Ranjeet & team";
const examples = [
  {
    "person": "Tarun Tiwari",
    "title": "Fetch — storing Tarun's data",
    "code": "// Tarun Tiwari's profile using Fetch\nconst student_1 = {\n  name: \"Tarun Tiwari\",\n  course: \"React Mastery\",\n  topic: \"fetch\"\n};\nconsole.log(student_1.name);",
    "output": "Tarun Tiwari",
    "explanation": "Tarun Tiwari uses fetch to store and access learning profile data in JavaScript."
  },
  {
    "person": "Tushar",
    "title": "Fetch — Tushar's function",
    "code": "function greet_2(name) {\n  return `Hi ${name}, let's learn Fetch!`;\n}\nconsole.log(greet_2(\"Tushar\"));",
    "output": "Hi Tushar, let's learn Fetch!",
    "explanation": "Tushar writes a reusable function demonstrating fetch in practice."
  },
  {
    "person": "Ranjeet",
    "title": "Fetch — team array for Ranjeet",
    "code": "const team_3 = [\"Ranjeet\", \"React\", \"Fetch\"];\nconst result = team_3.map(m => m.toUpperCase());\nconsole.log(result);",
    "output": "[RANJEET, REACT, FETCH]",
    "explanation": "Ranjeet transforms an array using fetch concepts."
  },
  {
    "person": "Abhishek",
    "title": "Fetch — Abhishek's object destructuring",
    "code": "const user_4 = { name: \"Abhishek\", role: \"Learner\" };\nconst { name, role } = user_4;\nconsole.log(name, \"-\", role);",
    "output": "Abhishek - Learner",
    "explanation": "Abhishek extracts values from objects — a key part of fetch."
  },
  {
    "person": "Sonu",
    "title": "Fetch — async for Sonu",
    "code": "async function fetch_5() {\n  return { member: \"Sonu\", status: \"learning\" };\n}\nfetch_5().then(d => console.log(d.member));",
    "output": "Sonu",
    "explanation": "Sonu handles asynchronous fetch patterns like a pro."
  },
  {
    "person": "Prerna",
    "title": "Fetch — Prerna's template literal",
    "code": "const msg_6 = `${\"Prerna\"} is mastering ${\"Fetch\"} today`;\nconsole.log(msg_6);",
    "output": "Prerna is mastering Fetch today",
    "explanation": "Prerna uses template literals with fetch for dynamic strings."
  },
  {
    "person": "Kishan",
    "title": "Fetch — Kishan's conditional",
    "code": "const score_7 = 95;\nconst grade_7 = score_7 >= 90 ? \"Excellent\" : \"Good\";\nconsole.log(\"Kishan:\", grade_7);",
    "output": "Kishan: Excellent",
    "explanation": "Kishan applies conditional logic — essential in fetch."
  },
  {
    "person": "Satyam",
    "title": "Fetch — Satyam's loop",
    "code": "const skills_8 = [\"JS\", \"React\", \"Fetch\"];\nfor (const s of skills_8) {\n  console.log(\"Satyam learns:\", s);\n}",
    "output": "Satyam learns: JS / React / Fetch",
    "explanation": "Satyam iterates over data using fetch loop patterns."
  }
];

export default function FetchTopic() {
  return (
    <TopicLesson
      title="Fetch"
      course="JavaScript"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#f59e0b"
    />
  );
}
