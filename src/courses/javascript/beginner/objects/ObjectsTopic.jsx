import TopicLesson from "../../../shared/TopicLesson.jsx";

/**
 * Objects — JavaScript
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = "Objects is a core JavaScript concept. It helps you write cleaner, more predictable code when building web applications. Mastering objects is essential before moving to React and modern frameworks.";
const syntax = "// Objects syntax\n// Used by Tarun Tiwari, Tushar, Ranjeet & team";
const examples = [
  {
    "person": "Tarun Tiwari",
    "title": "Objects — storing Tarun's data",
    "code": "// Tarun Tiwari's profile using Objects\nconst student_1 = {\n  name: \"Tarun Tiwari\",\n  course: \"React Mastery\",\n  topic: \"objects\"\n};\nconsole.log(student_1.name);",
    "output": "Tarun Tiwari",
    "explanation": "Tarun Tiwari uses objects to store and access learning profile data in JavaScript."
  },
  {
    "person": "Tushar",
    "title": "Objects — Tushar's function",
    "code": "function greet_2(name) {\n  return `Hi ${name}, let's learn Objects!`;\n}\nconsole.log(greet_2(\"Tushar\"));",
    "output": "Hi Tushar, let's learn Objects!",
    "explanation": "Tushar writes a reusable function demonstrating objects in practice."
  },
  {
    "person": "Ranjeet",
    "title": "Objects — team array for Ranjeet",
    "code": "const team_3 = [\"Ranjeet\", \"React\", \"Objects\"];\nconst result = team_3.map(m => m.toUpperCase());\nconsole.log(result);",
    "output": "[RANJEET, REACT, OBJECTS]",
    "explanation": "Ranjeet transforms an array using objects concepts."
  },
  {
    "person": "Abhishek",
    "title": "Objects — Abhishek's object destructuring",
    "code": "const user_4 = { name: \"Abhishek\", role: \"Learner\" };\nconst { name, role } = user_4;\nconsole.log(name, \"-\", role);",
    "output": "Abhishek - Learner",
    "explanation": "Abhishek extracts values from objects — a key part of objects."
  },
  {
    "person": "Sonu",
    "title": "Objects — async for Sonu",
    "code": "async function fetch_5() {\n  return { member: \"Sonu\", status: \"learning\" };\n}\nfetch_5().then(d => console.log(d.member));",
    "output": "Sonu",
    "explanation": "Sonu handles asynchronous objects patterns like a pro."
  },
  {
    "person": "Prerna",
    "title": "Objects — Prerna's template literal",
    "code": "const msg_6 = `${\"Prerna\"} is mastering ${\"Objects\"} today`;\nconsole.log(msg_6);",
    "output": "Prerna is mastering Objects today",
    "explanation": "Prerna uses template literals with objects for dynamic strings."
  },
  {
    "person": "Kishan",
    "title": "Objects — Kishan's conditional",
    "code": "const score_7 = 95;\nconst grade_7 = score_7 >= 90 ? \"Excellent\" : \"Good\";\nconsole.log(\"Kishan:\", grade_7);",
    "output": "Kishan: Excellent",
    "explanation": "Kishan applies conditional logic — essential in objects."
  },
  {
    "person": "Satyam",
    "title": "Objects — Satyam's loop",
    "code": "const skills_8 = [\"JS\", \"React\", \"Objects\"];\nfor (const s of skills_8) {\n  console.log(\"Satyam learns:\", s);\n}",
    "output": "Satyam learns: JS / React / Objects",
    "explanation": "Satyam iterates over data using objects loop patterns."
  }
];

export default function ObjectsTopic() {
  return (
    <TopicLesson
      title="Objects"
      course="JavaScript"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#f59e0b"
    />
  );
}
