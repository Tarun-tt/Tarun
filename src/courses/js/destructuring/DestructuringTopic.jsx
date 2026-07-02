import TopicLesson from "../../shared/TopicLesson.jsx";

/**
 * Destructuring — JavaScript
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = "Destructuring is a core JavaScript concept. It helps you write cleaner, more predictable code when building web applications. Mastering destructuring is essential before moving to React and modern frameworks.";
const syntax = "// Destructuring syntax\n// Used by Tarun Tiwari, Tushar, Ranjeet & team";
const examples = [
  {
    "person": "Tarun Tiwari",
    "title": "Destructuring — storing Tarun's data",
    "code": "// Tarun Tiwari's profile using Destructuring\nconst student_1 = {\n  name: \"Tarun Tiwari\",\n  course: \"React Mastery\",\n  topic: \"destructuring\"\n};\nconsole.log(student_1.name);",
    "output": "Tarun Tiwari",
    "explanation": "Tarun Tiwari uses destructuring to store and access learning profile data in JavaScript."
  },
  {
    "person": "Tushar",
    "title": "Destructuring — Tushar's function",
    "code": "function greet_2(name) {\n  return `Hi ${name}, let's learn Destructuring!`;\n}\nconsole.log(greet_2(\"Tushar\"));",
    "output": "Hi Tushar, let's learn Destructuring!",
    "explanation": "Tushar writes a reusable function demonstrating destructuring in practice."
  },
  {
    "person": "Ranjeet",
    "title": "Destructuring — team array for Ranjeet",
    "code": "const team_3 = [\"Ranjeet\", \"React\", \"Destructuring\"];\nconst result = team_3.map(m => m.toUpperCase());\nconsole.log(result);",
    "output": "[RANJEET, REACT, DESTRUCTURING]",
    "explanation": "Ranjeet transforms an array using destructuring concepts."
  },
  {
    "person": "Abhishek",
    "title": "Destructuring — Abhishek's object destructuring",
    "code": "const user_4 = { name: \"Abhishek\", role: \"Learner\" };\nconst { name, role } = user_4;\nconsole.log(name, \"-\", role);",
    "output": "Abhishek - Learner",
    "explanation": "Abhishek extracts values from objects — a key part of destructuring."
  },
  {
    "person": "Sonu",
    "title": "Destructuring — async for Sonu",
    "code": "async function fetch_5() {\n  return { member: \"Sonu\", status: \"learning\" };\n}\nfetch_5().then(d => console.log(d.member));",
    "output": "Sonu",
    "explanation": "Sonu handles asynchronous destructuring patterns like a pro."
  },
  {
    "person": "Prerna",
    "title": "Destructuring — Prerna's template literal",
    "code": "const msg_6 = `${\"Prerna\"} is mastering ${\"Destructuring\"} today`;\nconsole.log(msg_6);",
    "output": "Prerna is mastering Destructuring today",
    "explanation": "Prerna uses template literals with destructuring for dynamic strings."
  },
  {
    "person": "Kishan",
    "title": "Destructuring — Kishan's conditional",
    "code": "const score_7 = 95;\nconst grade_7 = score_7 >= 90 ? \"Excellent\" : \"Good\";\nconsole.log(\"Kishan:\", grade_7);",
    "output": "Kishan: Excellent",
    "explanation": "Kishan applies conditional logic — essential in destructuring."
  },
  {
    "person": "Satyam",
    "title": "Destructuring — Satyam's loop",
    "code": "const skills_8 = [\"JS\", \"React\", \"Destructuring\"];\nfor (const s of skills_8) {\n  console.log(\"Satyam learns:\", s);\n}",
    "output": "Satyam learns: JS / React / Destructuring",
    "explanation": "Satyam iterates over data using destructuring loop patterns."
  }
];

export default function DestructuringTopic() {
  return (
    <TopicLesson
      title="Destructuring"
      course="JavaScript"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#f59e0b"
    />
  );
}
