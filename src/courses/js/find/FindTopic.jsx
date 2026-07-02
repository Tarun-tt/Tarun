import TopicLesson from "../../shared/TopicLesson.jsx";

/**
 * Find — JavaScript
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = "Find is a core JavaScript concept. It helps you write cleaner, more predictable code when building web applications. Mastering find is essential before moving to React and modern frameworks.";
const syntax = "// Find syntax\n// Used by Tarun Tiwari, Tushar, Ranjeet & team";
const examples = [
  {
    "person": "Tarun Tiwari",
    "title": "Find — storing Tarun's data",
    "code": "// Tarun Tiwari's profile using Find\nconst student_1 = {\n  name: \"Tarun Tiwari\",\n  course: \"React Mastery\",\n  topic: \"find\"\n};\nconsole.log(student_1.name);",
    "output": "Tarun Tiwari",
    "explanation": "Tarun Tiwari uses find to store and access learning profile data in JavaScript."
  },
  {
    "person": "Tushar",
    "title": "Find — Tushar's function",
    "code": "function greet_2(name) {\n  return `Hi ${name}, let's learn Find!`;\n}\nconsole.log(greet_2(\"Tushar\"));",
    "output": "Hi Tushar, let's learn Find!",
    "explanation": "Tushar writes a reusable function demonstrating find in practice."
  },
  {
    "person": "Ranjeet",
    "title": "Find — team array for Ranjeet",
    "code": "const team_3 = [\"Ranjeet\", \"React\", \"Find\"];\nconst result = team_3.map(m => m.toUpperCase());\nconsole.log(result);",
    "output": "[RANJEET, REACT, FIND]",
    "explanation": "Ranjeet transforms an array using find concepts."
  },
  {
    "person": "Abhishek",
    "title": "Find — Abhishek's object destructuring",
    "code": "const user_4 = { name: \"Abhishek\", role: \"Learner\" };\nconst { name, role } = user_4;\nconsole.log(name, \"-\", role);",
    "output": "Abhishek - Learner",
    "explanation": "Abhishek extracts values from objects — a key part of find."
  },
  {
    "person": "Sonu",
    "title": "Find — async for Sonu",
    "code": "async function fetch_5() {\n  return { member: \"Sonu\", status: \"learning\" };\n}\nfetch_5().then(d => console.log(d.member));",
    "output": "Sonu",
    "explanation": "Sonu handles asynchronous find patterns like a pro."
  },
  {
    "person": "Prerna",
    "title": "Find — Prerna's template literal",
    "code": "const msg_6 = `${\"Prerna\"} is mastering ${\"Find\"} today`;\nconsole.log(msg_6);",
    "output": "Prerna is mastering Find today",
    "explanation": "Prerna uses template literals with find for dynamic strings."
  },
  {
    "person": "Kishan",
    "title": "Find — Kishan's conditional",
    "code": "const score_7 = 95;\nconst grade_7 = score_7 >= 90 ? \"Excellent\" : \"Good\";\nconsole.log(\"Kishan:\", grade_7);",
    "output": "Kishan: Excellent",
    "explanation": "Kishan applies conditional logic — essential in find."
  },
  {
    "person": "Satyam",
    "title": "Find — Satyam's loop",
    "code": "const skills_8 = [\"JS\", \"React\", \"Find\"];\nfor (const s of skills_8) {\n  console.log(\"Satyam learns:\", s);\n}",
    "output": "Satyam learns: JS / React / Find",
    "explanation": "Satyam iterates over data using find loop patterns."
  }
];

export default function FindTopic() {
  return (
    <TopicLesson
      title="Find"
      course="JavaScript"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#f59e0b"
    />
  );
}
