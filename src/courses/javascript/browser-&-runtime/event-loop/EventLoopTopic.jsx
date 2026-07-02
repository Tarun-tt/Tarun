import TopicLesson from "../../../shared/TopicLesson.jsx";

/**
 * Event Loop — JavaScript
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = "Event Loop is a core JavaScript concept. It helps you write cleaner, more predictable code when building web applications. Mastering event loop is essential before moving to React and modern frameworks.";
const syntax = "// Event Loop syntax\n// Used by Tarun Tiwari, Tushar, Ranjeet & team";
const examples = [
  {
    "person": "Tarun Tiwari",
    "title": "Event Loop — storing Tarun's data",
    "code": "// Tarun Tiwari's profile using Event Loop\nconst student_1 = {\n  name: \"Tarun Tiwari\",\n  course: \"React Mastery\",\n  topic: \"event-loop\"\n};\nconsole.log(student_1.name);",
    "output": "Tarun Tiwari",
    "explanation": "Tarun Tiwari uses event loop to store and access learning profile data in JavaScript."
  },
  {
    "person": "Tushar",
    "title": "Event Loop — Tushar's function",
    "code": "function greet_2(name) {\n  return `Hi ${name}, let's learn Event Loop!`;\n}\nconsole.log(greet_2(\"Tushar\"));",
    "output": "Hi Tushar, let's learn Event Loop!",
    "explanation": "Tushar writes a reusable function demonstrating event loop in practice."
  },
  {
    "person": "Ranjeet",
    "title": "Event Loop — team array for Ranjeet",
    "code": "const team_3 = [\"Ranjeet\", \"React\", \"Event Loop\"];\nconst result = team_3.map(m => m.toUpperCase());\nconsole.log(result);",
    "output": "[RANJEET, REACT, EVENT LOOP]",
    "explanation": "Ranjeet transforms an array using event loop concepts."
  },
  {
    "person": "Abhishek",
    "title": "Event Loop — Abhishek's object destructuring",
    "code": "const user_4 = { name: \"Abhishek\", role: \"Learner\" };\nconst { name, role } = user_4;\nconsole.log(name, \"-\", role);",
    "output": "Abhishek - Learner",
    "explanation": "Abhishek extracts values from objects — a key part of event loop."
  },
  {
    "person": "Sonu",
    "title": "Event Loop — async for Sonu",
    "code": "async function fetch_5() {\n  return { member: \"Sonu\", status: \"learning\" };\n}\nfetch_5().then(d => console.log(d.member));",
    "output": "Sonu",
    "explanation": "Sonu handles asynchronous event loop patterns like a pro."
  },
  {
    "person": "Prerna",
    "title": "Event Loop — Prerna's template literal",
    "code": "const msg_6 = `${\"Prerna\"} is mastering ${\"Event Loop\"} today`;\nconsole.log(msg_6);",
    "output": "Prerna is mastering Event Loop today",
    "explanation": "Prerna uses template literals with event loop for dynamic strings."
  },
  {
    "person": "Kishan",
    "title": "Event Loop — Kishan's conditional",
    "code": "const score_7 = 95;\nconst grade_7 = score_7 >= 90 ? \"Excellent\" : \"Good\";\nconsole.log(\"Kishan:\", grade_7);",
    "output": "Kishan: Excellent",
    "explanation": "Kishan applies conditional logic — essential in event loop."
  },
  {
    "person": "Satyam",
    "title": "Event Loop — Satyam's loop",
    "code": "const skills_8 = [\"JS\", \"React\", \"Event Loop\"];\nfor (const s of skills_8) {\n  console.log(\"Satyam learns:\", s);\n}",
    "output": "Satyam learns: JS / React / Event Loop",
    "explanation": "Satyam iterates over data using event loop loop patterns."
  }
];

export default function EventLoopTopic() {
  return (
    <TopicLesson
      title="Event Loop"
      course="JavaScript"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#f59e0b"
    />
  );
}
