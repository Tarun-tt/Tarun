import TopicLesson from "../../shared/TopicLesson.jsx";

/**
 * Generators — JavaScript
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = "Generators is a core JavaScript concept. It helps you write cleaner, more predictable code when building web applications. Mastering generators is essential before moving to React and modern frameworks.";
const syntax = "// Generators syntax\n// Used by Tarun Tiwari, Tushar, Ranjeet & team";
const examples = [
  {
    "person": "Tarun Tiwari",
    "title": "Generators — storing Tarun's data",
    "code": "// Tarun Tiwari's profile using Generators\nconst student_1 = {\n  name: \"Tarun Tiwari\",\n  course: \"React Mastery\",\n  topic: \"generators\"\n};\nconsole.log(student_1.name);",
    "output": "Tarun Tiwari",
    "explanation": "Tarun Tiwari uses generators to store and access learning profile data in JavaScript."
  },
  {
    "person": "Tushar",
    "title": "Generators — Tushar's function",
    "code": "function greet_2(name) {\n  return `Hi ${name}, let's learn Generators!`;\n}\nconsole.log(greet_2(\"Tushar\"));",
    "output": "Hi Tushar, let's learn Generators!",
    "explanation": "Tushar writes a reusable function demonstrating generators in practice."
  },
  {
    "person": "Ranjeet",
    "title": "Generators — team array for Ranjeet",
    "code": "const team_3 = [\"Ranjeet\", \"React\", \"Generators\"];\nconst result = team_3.map(m => m.toUpperCase());\nconsole.log(result);",
    "output": "[RANJEET, REACT, GENERATORS]",
    "explanation": "Ranjeet transforms an array using generators concepts."
  },
  {
    "person": "Abhishek",
    "title": "Generators — Abhishek's object destructuring",
    "code": "const user_4 = { name: \"Abhishek\", role: \"Learner\" };\nconst { name, role } = user_4;\nconsole.log(name, \"-\", role);",
    "output": "Abhishek - Learner",
    "explanation": "Abhishek extracts values from objects — a key part of generators."
  },
  {
    "person": "Sonu",
    "title": "Generators — async for Sonu",
    "code": "async function fetch_5() {\n  return { member: \"Sonu\", status: \"learning\" };\n}\nfetch_5().then(d => console.log(d.member));",
    "output": "Sonu",
    "explanation": "Sonu handles asynchronous generators patterns like a pro."
  },
  {
    "person": "Prerna",
    "title": "Generators — Prerna's template literal",
    "code": "const msg_6 = `${\"Prerna\"} is mastering ${\"Generators\"} today`;\nconsole.log(msg_6);",
    "output": "Prerna is mastering Generators today",
    "explanation": "Prerna uses template literals with generators for dynamic strings."
  },
  {
    "person": "Kishan",
    "title": "Generators — Kishan's conditional",
    "code": "const score_7 = 95;\nconst grade_7 = score_7 >= 90 ? \"Excellent\" : \"Good\";\nconsole.log(\"Kishan:\", grade_7);",
    "output": "Kishan: Excellent",
    "explanation": "Kishan applies conditional logic — essential in generators."
  },
  {
    "person": "Satyam",
    "title": "Generators — Satyam's loop",
    "code": "const skills_8 = [\"JS\", \"React\", \"Generators\"];\nfor (const s of skills_8) {\n  console.log(\"Satyam learns:\", s);\n}",
    "output": "Satyam learns: JS / React / Generators",
    "explanation": "Satyam iterates over data using generators loop patterns."
  }
];

export default function GeneratorsTopic() {
  return (
    <TopicLesson
      title="Generators"
      course="JavaScript"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#f59e0b"
    />
  );
}
