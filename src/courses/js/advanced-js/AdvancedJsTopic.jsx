import TopicLesson from "../../shared/TopicLesson.jsx";

/**
 * Advanced JS — JavaScript
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = "Advanced JS is a core JavaScript concept. It helps you write cleaner, more predictable code when building web applications. Mastering advanced js is essential before moving to React and modern frameworks.";
const syntax = "// Advanced JS syntax\n// Used by Tarun Tiwari, Tushar, Ranjeet & team";
const examples = [
  {
    "person": "Tarun Tiwari",
    "title": "Advanced JS — storing Tarun's data",
    "code": "// Tarun Tiwari's profile using Advanced JS\nconst student_1 = {\n  name: \"Tarun Tiwari\",\n  course: \"React Mastery\",\n  topic: \"advanced-js\"\n};\nconsole.log(student_1.name);",
    "output": "Tarun Tiwari",
    "explanation": "Tarun Tiwari uses advanced js to store and access learning profile data in JavaScript."
  },
  {
    "person": "Tushar",
    "title": "Advanced JS — Tushar's function",
    "code": "function greet_2(name) {\n  return `Hi ${name}, let's learn Advanced JS!`;\n}\nconsole.log(greet_2(\"Tushar\"));",
    "output": "Hi Tushar, let's learn Advanced JS!",
    "explanation": "Tushar writes a reusable function demonstrating advanced js in practice."
  },
  {
    "person": "Ranjeet",
    "title": "Advanced JS — team array for Ranjeet",
    "code": "const team_3 = [\"Ranjeet\", \"React\", \"Advanced JS\"];\nconst result = team_3.map(m => m.toUpperCase());\nconsole.log(result);",
    "output": "[RANJEET, REACT, ADVANCED JS]",
    "explanation": "Ranjeet transforms an array using advanced js concepts."
  },
  {
    "person": "Abhishek",
    "title": "Advanced JS — Abhishek's object destructuring",
    "code": "const user_4 = { name: \"Abhishek\", role: \"Learner\" };\nconst { name, role } = user_4;\nconsole.log(name, \"-\", role);",
    "output": "Abhishek - Learner",
    "explanation": "Abhishek extracts values from objects — a key part of advanced js."
  },
  {
    "person": "Sonu",
    "title": "Advanced JS — async for Sonu",
    "code": "async function fetch_5() {\n  return { member: \"Sonu\", status: \"learning\" };\n}\nfetch_5().then(d => console.log(d.member));",
    "output": "Sonu",
    "explanation": "Sonu handles asynchronous advanced js patterns like a pro."
  },
  {
    "person": "Prerna",
    "title": "Advanced JS — Prerna's template literal",
    "code": "const msg_6 = `${\"Prerna\"} is mastering ${\"Advanced JS\"} today`;\nconsole.log(msg_6);",
    "output": "Prerna is mastering Advanced JS today",
    "explanation": "Prerna uses template literals with advanced js for dynamic strings."
  },
  {
    "person": "Kishan",
    "title": "Advanced JS — Kishan's conditional",
    "code": "const score_7 = 95;\nconst grade_7 = score_7 >= 90 ? \"Excellent\" : \"Good\";\nconsole.log(\"Kishan:\", grade_7);",
    "output": "Kishan: Excellent",
    "explanation": "Kishan applies conditional logic — essential in advanced js."
  },
  {
    "person": "Satyam",
    "title": "Advanced JS — Satyam's loop",
    "code": "const skills_8 = [\"JS\", \"React\", \"Advanced JS\"];\nfor (const s of skills_8) {\n  console.log(\"Satyam learns:\", s);\n}",
    "output": "Satyam learns: JS / React / Advanced JS",
    "explanation": "Satyam iterates over data using advanced js loop patterns."
  }
];

export default function AdvancedJsTopic() {
  return (
    <TopicLesson
      title="Advanced JS"
      course="JavaScript"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#f59e0b"
    />
  );
}
