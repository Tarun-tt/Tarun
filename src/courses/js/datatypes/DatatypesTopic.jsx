import TopicLesson from "../../shared/TopicLesson.jsx";

/**
 * Data Types — JavaScript
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = "Data Types is a core JavaScript concept. It helps you write cleaner, more predictable code when building web applications. Mastering data types is essential before moving to React and modern frameworks.";
const syntax = "// Data Types syntax\n// Used by Tarun Tiwari, Tushar, Ranjeet & team";
const examples = [
  {
    "person": "Tarun Tiwari",
    "title": "Data Types — storing Tarun's data",
    "code": "// Tarun Tiwari's profile using Data Types\nconst student_1 = {\n  name: \"Tarun Tiwari\",\n  course: \"React Mastery\",\n  topic: \"datatypes\"\n};\nconsole.log(student_1.name);",
    "output": "Tarun Tiwari",
    "explanation": "Tarun Tiwari uses data types to store and access learning profile data in JavaScript."
  },
  {
    "person": "Tushar",
    "title": "Data Types — Tushar's function",
    "code": "function greet_2(name) {\n  return `Hi ${name}, let's learn Data Types!`;\n}\nconsole.log(greet_2(\"Tushar\"));",
    "output": "Hi Tushar, let's learn Data Types!",
    "explanation": "Tushar writes a reusable function demonstrating data types in practice."
  },
  {
    "person": "Ranjeet",
    "title": "Data Types — team array for Ranjeet",
    "code": "const team_3 = [\"Ranjeet\", \"React\", \"Data Types\"];\nconst result = team_3.map(m => m.toUpperCase());\nconsole.log(result);",
    "output": "[RANJEET, REACT, DATA TYPES]",
    "explanation": "Ranjeet transforms an array using data types concepts."
  },
  {
    "person": "Abhishek",
    "title": "Data Types — Abhishek's object destructuring",
    "code": "const user_4 = { name: \"Abhishek\", role: \"Learner\" };\nconst { name, role } = user_4;\nconsole.log(name, \"-\", role);",
    "output": "Abhishek - Learner",
    "explanation": "Abhishek extracts values from objects — a key part of data types."
  },
  {
    "person": "Sonu",
    "title": "Data Types — async for Sonu",
    "code": "async function fetch_5() {\n  return { member: \"Sonu\", status: \"learning\" };\n}\nfetch_5().then(d => console.log(d.member));",
    "output": "Sonu",
    "explanation": "Sonu handles asynchronous data types patterns like a pro."
  },
  {
    "person": "Prerna",
    "title": "Data Types — Prerna's template literal",
    "code": "const msg_6 = `${\"Prerna\"} is mastering ${\"Data Types\"} today`;\nconsole.log(msg_6);",
    "output": "Prerna is mastering Data Types today",
    "explanation": "Prerna uses template literals with data types for dynamic strings."
  },
  {
    "person": "Kishan",
    "title": "Data Types — Kishan's conditional",
    "code": "const score_7 = 95;\nconst grade_7 = score_7 >= 90 ? \"Excellent\" : \"Good\";\nconsole.log(\"Kishan:\", grade_7);",
    "output": "Kishan: Excellent",
    "explanation": "Kishan applies conditional logic — essential in data types."
  },
  {
    "person": "Satyam",
    "title": "Data Types — Satyam's loop",
    "code": "const skills_8 = [\"JS\", \"React\", \"Data Types\"];\nfor (const s of skills_8) {\n  console.log(\"Satyam learns:\", s);\n}",
    "output": "Satyam learns: JS / React / Data Types",
    "explanation": "Satyam iterates over data using data types loop patterns."
  }
];

export default function DatatypesTopic() {
  return (
    <TopicLesson
      title="Data Types"
      course="JavaScript"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#f59e0b"
    />
  );
}
