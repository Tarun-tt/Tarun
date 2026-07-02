import TopicLesson from "../../shared/TopicLesson.jsx";

/**
 * DOM — JavaScript
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = "DOM is a core JavaScript concept. It helps you write cleaner, more predictable code when building web applications. Mastering dom is essential before moving to React and modern frameworks.";
const syntax = "// DOM syntax\n// Used by Tarun Tiwari, Tushar, Ranjeet & team";
const examples = [
  {
    "person": "Tarun Tiwari",
    "title": "DOM — storing Tarun's data",
    "code": "// Tarun Tiwari's profile using DOM\nconst student_1 = {\n  name: \"Tarun Tiwari\",\n  course: \"React Mastery\",\n  topic: \"dom\"\n};\nconsole.log(student_1.name);",
    "output": "Tarun Tiwari",
    "explanation": "Tarun Tiwari uses dom to store and access learning profile data in JavaScript."
  },
  {
    "person": "Tushar",
    "title": "DOM — Tushar's function",
    "code": "function greet_2(name) {\n  return `Hi ${name}, let's learn DOM!`;\n}\nconsole.log(greet_2(\"Tushar\"));",
    "output": "Hi Tushar, let's learn DOM!",
    "explanation": "Tushar writes a reusable function demonstrating dom in practice."
  },
  {
    "person": "Ranjeet",
    "title": "DOM — team array for Ranjeet",
    "code": "const team_3 = [\"Ranjeet\", \"React\", \"DOM\"];\nconst result = team_3.map(m => m.toUpperCase());\nconsole.log(result);",
    "output": "[RANJEET, REACT, DOM]",
    "explanation": "Ranjeet transforms an array using dom concepts."
  },
  {
    "person": "Abhishek",
    "title": "DOM — Abhishek's object destructuring",
    "code": "const user_4 = { name: \"Abhishek\", role: \"Learner\" };\nconst { name, role } = user_4;\nconsole.log(name, \"-\", role);",
    "output": "Abhishek - Learner",
    "explanation": "Abhishek extracts values from objects — a key part of dom."
  },
  {
    "person": "Sonu",
    "title": "DOM — async for Sonu",
    "code": "async function fetch_5() {\n  return { member: \"Sonu\", status: \"learning\" };\n}\nfetch_5().then(d => console.log(d.member));",
    "output": "Sonu",
    "explanation": "Sonu handles asynchronous dom patterns like a pro."
  },
  {
    "person": "Prerna",
    "title": "DOM — Prerna's template literal",
    "code": "const msg_6 = `${\"Prerna\"} is mastering ${\"DOM\"} today`;\nconsole.log(msg_6);",
    "output": "Prerna is mastering DOM today",
    "explanation": "Prerna uses template literals with dom for dynamic strings."
  },
  {
    "person": "Kishan",
    "title": "DOM — Kishan's conditional",
    "code": "const score_7 = 95;\nconst grade_7 = score_7 >= 90 ? \"Excellent\" : \"Good\";\nconsole.log(\"Kishan:\", grade_7);",
    "output": "Kishan: Excellent",
    "explanation": "Kishan applies conditional logic — essential in dom."
  },
  {
    "person": "Satyam",
    "title": "DOM — Satyam's loop",
    "code": "const skills_8 = [\"JS\", \"React\", \"DOM\"];\nfor (const s of skills_8) {\n  console.log(\"Satyam learns:\", s);\n}",
    "output": "Satyam learns: JS / React / DOM",
    "explanation": "Satyam iterates over data using dom loop patterns."
  }
];

export default function DomTopic() {
  return (
    <TopicLesson
      title="DOM"
      course="JavaScript"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#f59e0b"
    />
  );
}
