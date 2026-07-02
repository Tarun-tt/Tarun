import TopicLesson from "../../shared/TopicLesson.jsx";

/**
 * Arrow Functions — JavaScript
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = "Arrow Functions is a core JavaScript concept. It helps you write cleaner, more predictable code when building web applications. Mastering arrow functions is essential before moving to React and modern frameworks.";
const syntax = "// Arrow Functions syntax\n// Used by Tarun Tiwari, Tushar, Ranjeet & team";
const examples = [
  {
    "person": "Tarun Tiwari",
    "title": "Arrow Functions — storing Tarun's data",
    "code": "// Tarun Tiwari's profile using Arrow Functions\nconst student_1 = {\n  name: \"Tarun Tiwari\",\n  course: \"React Mastery\",\n  topic: \"arrow-functions\"\n};\nconsole.log(student_1.name);",
    "output": "Tarun Tiwari",
    "explanation": "Tarun Tiwari uses arrow functions to store and access learning profile data in JavaScript."
  },
  {
    "person": "Tushar",
    "title": "Arrow Functions — Tushar's function",
    "code": "function greet_2(name) {\n  return `Hi ${name}, let's learn Arrow Functions!`;\n}\nconsole.log(greet_2(\"Tushar\"));",
    "output": "Hi Tushar, let's learn Arrow Functions!",
    "explanation": "Tushar writes a reusable function demonstrating arrow functions in practice."
  },
  {
    "person": "Ranjeet",
    "title": "Arrow Functions — team array for Ranjeet",
    "code": "const team_3 = [\"Ranjeet\", \"React\", \"Arrow Functions\"];\nconst result = team_3.map(m => m.toUpperCase());\nconsole.log(result);",
    "output": "[RANJEET, REACT, ARROW FUNCTIONS]",
    "explanation": "Ranjeet transforms an array using arrow functions concepts."
  },
  {
    "person": "Abhishek",
    "title": "Arrow Functions — Abhishek's object destructuring",
    "code": "const user_4 = { name: \"Abhishek\", role: \"Learner\" };\nconst { name, role } = user_4;\nconsole.log(name, \"-\", role);",
    "output": "Abhishek - Learner",
    "explanation": "Abhishek extracts values from objects — a key part of arrow functions."
  },
  {
    "person": "Sonu",
    "title": "Arrow Functions — async for Sonu",
    "code": "async function fetch_5() {\n  return { member: \"Sonu\", status: \"learning\" };\n}\nfetch_5().then(d => console.log(d.member));",
    "output": "Sonu",
    "explanation": "Sonu handles asynchronous arrow functions patterns like a pro."
  },
  {
    "person": "Prerna",
    "title": "Arrow Functions — Prerna's template literal",
    "code": "const msg_6 = `${\"Prerna\"} is mastering ${\"Arrow Functions\"} today`;\nconsole.log(msg_6);",
    "output": "Prerna is mastering Arrow Functions today",
    "explanation": "Prerna uses template literals with arrow functions for dynamic strings."
  },
  {
    "person": "Kishan",
    "title": "Arrow Functions — Kishan's conditional",
    "code": "const score_7 = 95;\nconst grade_7 = score_7 >= 90 ? \"Excellent\" : \"Good\";\nconsole.log(\"Kishan:\", grade_7);",
    "output": "Kishan: Excellent",
    "explanation": "Kishan applies conditional logic — essential in arrow functions."
  },
  {
    "person": "Satyam",
    "title": "Arrow Functions — Satyam's loop",
    "code": "const skills_8 = [\"JS\", \"React\", \"Arrow Functions\"];\nfor (const s of skills_8) {\n  console.log(\"Satyam learns:\", s);\n}",
    "output": "Satyam learns: JS / React / Arrow Functions",
    "explanation": "Satyam iterates over data using arrow functions loop patterns."
  }
];

export default function ArrowFunctionsTopic() {
  return (
    <TopicLesson
      title="Arrow Functions"
      course="JavaScript"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#f59e0b"
    />
  );
}
