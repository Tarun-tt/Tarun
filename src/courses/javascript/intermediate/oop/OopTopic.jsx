import TopicLesson from "../../../shared/TopicLesson.jsx";

/**
 * OOP — JavaScript
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = "OOP is a core JavaScript concept. It helps you write cleaner, more predictable code when building web applications. Mastering oop is essential before moving to React and modern frameworks.";
const syntax = "// OOP syntax\n// Used by Tarun Tiwari, Tushar, Ranjeet & team";
const examples = [
  {
    "person": "Tarun Tiwari",
    "title": "OOP — storing Tarun's data",
    "code": "// Tarun Tiwari's profile using OOP\nconst student_1 = {\n  name: \"Tarun Tiwari\",\n  course: \"React Mastery\",\n  topic: \"oop\"\n};\nconsole.log(student_1.name);",
    "output": "Tarun Tiwari",
    "explanation": "Tarun Tiwari uses oop to store and access learning profile data in JavaScript."
  },
  {
    "person": "Tushar",
    "title": "OOP — Tushar's function",
    "code": "function greet_2(name) {\n  return `Hi ${name}, let's learn OOP!`;\n}\nconsole.log(greet_2(\"Tushar\"));",
    "output": "Hi Tushar, let's learn OOP!",
    "explanation": "Tushar writes a reusable function demonstrating oop in practice."
  },
  {
    "person": "Ranjeet",
    "title": "OOP — team array for Ranjeet",
    "code": "const team_3 = [\"Ranjeet\", \"React\", \"OOP\"];\nconst result = team_3.map(m => m.toUpperCase());\nconsole.log(result);",
    "output": "[RANJEET, REACT, OOP]",
    "explanation": "Ranjeet transforms an array using oop concepts."
  },
  {
    "person": "Abhishek",
    "title": "OOP — Abhishek's object destructuring",
    "code": "const user_4 = { name: \"Abhishek\", role: \"Learner\" };\nconst { name, role } = user_4;\nconsole.log(name, \"-\", role);",
    "output": "Abhishek - Learner",
    "explanation": "Abhishek extracts values from objects — a key part of oop."
  },
  {
    "person": "Sonu",
    "title": "OOP — async for Sonu",
    "code": "async function fetch_5() {\n  return { member: \"Sonu\", status: \"learning\" };\n}\nfetch_5().then(d => console.log(d.member));",
    "output": "Sonu",
    "explanation": "Sonu handles asynchronous oop patterns like a pro."
  },
  {
    "person": "Prerna",
    "title": "OOP — Prerna's template literal",
    "code": "const msg_6 = `${\"Prerna\"} is mastering ${\"OOP\"} today`;\nconsole.log(msg_6);",
    "output": "Prerna is mastering OOP today",
    "explanation": "Prerna uses template literals with oop for dynamic strings."
  },
  {
    "person": "Kishan",
    "title": "OOP — Kishan's conditional",
    "code": "const score_7 = 95;\nconst grade_7 = score_7 >= 90 ? \"Excellent\" : \"Good\";\nconsole.log(\"Kishan:\", grade_7);",
    "output": "Kishan: Excellent",
    "explanation": "Kishan applies conditional logic — essential in oop."
  },
  {
    "person": "Satyam",
    "title": "OOP — Satyam's loop",
    "code": "const skills_8 = [\"JS\", \"React\", \"OOP\"];\nfor (const s of skills_8) {\n  console.log(\"Satyam learns:\", s);\n}",
    "output": "Satyam learns: JS / React / OOP",
    "explanation": "Satyam iterates over data using oop loop patterns."
  }
];

export default function OopTopic() {
  return (
    <TopicLesson
      title="OOP"
      course="JavaScript"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#f59e0b"
    />
  );
}
