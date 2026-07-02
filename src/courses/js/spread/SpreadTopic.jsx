import TopicLesson from "../../shared/TopicLesson.jsx";

/**
 * Spread — JavaScript
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = "Spread is a core JavaScript concept. It helps you write cleaner, more predictable code when building web applications. Mastering spread is essential before moving to React and modern frameworks.";
const syntax = "// Spread syntax\n// Used by Tarun Tiwari, Tushar, Ranjeet & team";
const examples = [
  {
    "person": "Tarun Tiwari",
    "title": "Spread — storing Tarun's data",
    "code": "// Tarun Tiwari's profile using Spread\nconst student_1 = {\n  name: \"Tarun Tiwari\",\n  course: \"React Mastery\",\n  topic: \"spread\"\n};\nconsole.log(student_1.name);",
    "output": "Tarun Tiwari",
    "explanation": "Tarun Tiwari uses spread to store and access learning profile data in JavaScript."
  },
  {
    "person": "Tushar",
    "title": "Spread — Tushar's function",
    "code": "function greet_2(name) {\n  return `Hi ${name}, let's learn Spread!`;\n}\nconsole.log(greet_2(\"Tushar\"));",
    "output": "Hi Tushar, let's learn Spread!",
    "explanation": "Tushar writes a reusable function demonstrating spread in practice."
  },
  {
    "person": "Ranjeet",
    "title": "Spread — team array for Ranjeet",
    "code": "const team_3 = [\"Ranjeet\", \"React\", \"Spread\"];\nconst result = team_3.map(m => m.toUpperCase());\nconsole.log(result);",
    "output": "[RANJEET, REACT, SPREAD]",
    "explanation": "Ranjeet transforms an array using spread concepts."
  },
  {
    "person": "Abhishek",
    "title": "Spread — Abhishek's object destructuring",
    "code": "const user_4 = { name: \"Abhishek\", role: \"Learner\" };\nconst { name, role } = user_4;\nconsole.log(name, \"-\", role);",
    "output": "Abhishek - Learner",
    "explanation": "Abhishek extracts values from objects — a key part of spread."
  },
  {
    "person": "Sonu",
    "title": "Spread — async for Sonu",
    "code": "async function fetch_5() {\n  return { member: \"Sonu\", status: \"learning\" };\n}\nfetch_5().then(d => console.log(d.member));",
    "output": "Sonu",
    "explanation": "Sonu handles asynchronous spread patterns like a pro."
  },
  {
    "person": "Prerna",
    "title": "Spread — Prerna's template literal",
    "code": "const msg_6 = `${\"Prerna\"} is mastering ${\"Spread\"} today`;\nconsole.log(msg_6);",
    "output": "Prerna is mastering Spread today",
    "explanation": "Prerna uses template literals with spread for dynamic strings."
  },
  {
    "person": "Kishan",
    "title": "Spread — Kishan's conditional",
    "code": "const score_7 = 95;\nconst grade_7 = score_7 >= 90 ? \"Excellent\" : \"Good\";\nconsole.log(\"Kishan:\", grade_7);",
    "output": "Kishan: Excellent",
    "explanation": "Kishan applies conditional logic — essential in spread."
  },
  {
    "person": "Satyam",
    "title": "Spread — Satyam's loop",
    "code": "const skills_8 = [\"JS\", \"React\", \"Spread\"];\nfor (const s of skills_8) {\n  console.log(\"Satyam learns:\", s);\n}",
    "output": "Satyam learns: JS / React / Spread",
    "explanation": "Satyam iterates over data using spread loop patterns."
  }
];

export default function SpreadTopic() {
  return (
    <TopicLesson
      title="Spread"
      course="JavaScript"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#f59e0b"
    />
  );
}
