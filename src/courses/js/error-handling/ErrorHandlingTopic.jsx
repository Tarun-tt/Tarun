import TopicLesson from "../../shared/TopicLesson.jsx";

/**
 * Error Handling — JavaScript
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = "Error Handling is a core JavaScript concept. It helps you write cleaner, more predictable code when building web applications. Mastering error handling is essential before moving to React and modern frameworks.";
const syntax = "// Error Handling syntax\n// Used by Tarun Tiwari, Tushar, Ranjeet & team";
const examples = [
  {
    "person": "Tarun Tiwari",
    "title": "Error Handling — storing Tarun's data",
    "code": "// Tarun Tiwari's profile using Error Handling\nconst student_1 = {\n  name: \"Tarun Tiwari\",\n  course: \"React Mastery\",\n  topic: \"error-handling\"\n};\nconsole.log(student_1.name);",
    "output": "Tarun Tiwari",
    "explanation": "Tarun Tiwari uses error handling to store and access learning profile data in JavaScript."
  },
  {
    "person": "Tushar",
    "title": "Error Handling — Tushar's function",
    "code": "function greet_2(name) {\n  return `Hi ${name}, let's learn Error Handling!`;\n}\nconsole.log(greet_2(\"Tushar\"));",
    "output": "Hi Tushar, let's learn Error Handling!",
    "explanation": "Tushar writes a reusable function demonstrating error handling in practice."
  },
  {
    "person": "Ranjeet",
    "title": "Error Handling — team array for Ranjeet",
    "code": "const team_3 = [\"Ranjeet\", \"React\", \"Error Handling\"];\nconst result = team_3.map(m => m.toUpperCase());\nconsole.log(result);",
    "output": "[RANJEET, REACT, ERROR HANDLING]",
    "explanation": "Ranjeet transforms an array using error handling concepts."
  },
  {
    "person": "Abhishek",
    "title": "Error Handling — Abhishek's object destructuring",
    "code": "const user_4 = { name: \"Abhishek\", role: \"Learner\" };\nconst { name, role } = user_4;\nconsole.log(name, \"-\", role);",
    "output": "Abhishek - Learner",
    "explanation": "Abhishek extracts values from objects — a key part of error handling."
  },
  {
    "person": "Sonu",
    "title": "Error Handling — async for Sonu",
    "code": "async function fetch_5() {\n  return { member: \"Sonu\", status: \"learning\" };\n}\nfetch_5().then(d => console.log(d.member));",
    "output": "Sonu",
    "explanation": "Sonu handles asynchronous error handling patterns like a pro."
  },
  {
    "person": "Prerna",
    "title": "Error Handling — Prerna's template literal",
    "code": "const msg_6 = `${\"Prerna\"} is mastering ${\"Error Handling\"} today`;\nconsole.log(msg_6);",
    "output": "Prerna is mastering Error Handling today",
    "explanation": "Prerna uses template literals with error handling for dynamic strings."
  },
  {
    "person": "Kishan",
    "title": "Error Handling — Kishan's conditional",
    "code": "const score_7 = 95;\nconst grade_7 = score_7 >= 90 ? \"Excellent\" : \"Good\";\nconsole.log(\"Kishan:\", grade_7);",
    "output": "Kishan: Excellent",
    "explanation": "Kishan applies conditional logic — essential in error handling."
  },
  {
    "person": "Satyam",
    "title": "Error Handling — Satyam's loop",
    "code": "const skills_8 = [\"JS\", \"React\", \"Error Handling\"];\nfor (const s of skills_8) {\n  console.log(\"Satyam learns:\", s);\n}",
    "output": "Satyam learns: JS / React / Error Handling",
    "explanation": "Satyam iterates over data using error handling loop patterns."
  }
];

export default function ErrorHandlingTopic() {
  return (
    <TopicLesson
      title="Error Handling"
      course="JavaScript"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#f59e0b"
    />
  );
}
