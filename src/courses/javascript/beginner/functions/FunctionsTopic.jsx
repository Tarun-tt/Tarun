import TopicLesson from "../../../shared/TopicLesson.jsx";

/**
 * Functions — JavaScript
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = "Functions is a core JavaScript concept. It helps you write cleaner, more predictable code when building web applications. Mastering functions is essential before moving to React and modern frameworks.";
const syntax = "function greet(name) {\n  return \"Hello, \" + name;\n}\nconsole.log(greet(\"Prerna\"));";
const examples = [
  {
    "person": "Tarun Tiwari",
    "title": "Functions — storing Tarun's data",
    "code": "// Tarun Tiwari's profile using Functions\nconst student_1 = {\n  name: \"Tarun Tiwari\",\n  course: \"React Mastery\",\n  topic: \"functions\"\n};\nconsole.log(student_1.name);",
    "output": "Tarun Tiwari",
    "explanation": "Tarun Tiwari uses functions to store and access learning profile data in JavaScript."
  },
  {
    "person": "Tushar",
    "title": "Functions — Tushar's function",
    "code": "function greet_2(name) {\n  return `Hi ${name}, let's learn Functions!`;\n}\nconsole.log(greet_2(\"Tushar\"));",
    "output": "Hi Tushar, let's learn Functions!",
    "explanation": "Tushar writes a reusable function demonstrating functions in practice."
  },
  {
    "person": "Ranjeet",
    "title": "Functions — team array for Ranjeet",
    "code": "const team_3 = [\"Ranjeet\", \"React\", \"Functions\"];\nconst result = team_3.map(m => m.toUpperCase());\nconsole.log(result);",
    "output": "[RANJEET, REACT, FUNCTIONS]",
    "explanation": "Ranjeet transforms an array using functions concepts."
  },
  {
    "person": "Abhishek",
    "title": "Functions — Abhishek's object destructuring",
    "code": "const user_4 = { name: \"Abhishek\", role: \"Learner\" };\nconst { name, role } = user_4;\nconsole.log(name, \"-\", role);",
    "output": "Abhishek - Learner",
    "explanation": "Abhishek extracts values from objects — a key part of functions."
  },
  {
    "person": "Sonu",
    "title": "Functions — async for Sonu",
    "code": "async function fetch_5() {\n  return { member: \"Sonu\", status: \"learning\" };\n}\nfetch_5().then(d => console.log(d.member));",
    "output": "Sonu",
    "explanation": "Sonu handles asynchronous functions patterns like a pro."
  },
  {
    "person": "Prerna",
    "title": "Functions — Prerna's template literal",
    "code": "const msg_6 = `${\"Prerna\"} is mastering ${\"Functions\"} today`;\nconsole.log(msg_6);",
    "output": "Prerna is mastering Functions today",
    "explanation": "Prerna uses template literals with functions for dynamic strings."
  },
  {
    "person": "Kishan",
    "title": "Functions — Kishan's conditional",
    "code": "const score_7 = 95;\nconst grade_7 = score_7 >= 90 ? \"Excellent\" : \"Good\";\nconsole.log(\"Kishan:\", grade_7);",
    "output": "Kishan: Excellent",
    "explanation": "Kishan applies conditional logic — essential in functions."
  },
  {
    "person": "Satyam",
    "title": "Functions — Satyam's loop",
    "code": "const skills_8 = [\"JS\", \"React\", \"Functions\"];\nfor (const s of skills_8) {\n  console.log(\"Satyam learns:\", s);\n}",
    "output": "Satyam learns: JS / React / Functions",
    "explanation": "Satyam iterates over data using functions loop patterns."
  }
];

export default function FunctionsTopic() {
  return (
    <TopicLesson
      title="Functions"
      course="JavaScript"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#f59e0b"
    />
  );
}
