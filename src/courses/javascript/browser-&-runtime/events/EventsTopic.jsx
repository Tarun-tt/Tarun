import TopicLesson from "../../../shared/TopicLesson.jsx";

/**
 * Events — JavaScript
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = "Events is a core JavaScript concept. It helps you write cleaner, more predictable code when building web applications. Mastering events is essential before moving to React and modern frameworks.";
const syntax = "// Events syntax\n// Used by Tarun Tiwari, Tushar, Ranjeet & team";
const examples = [
  {
    "person": "Tarun Tiwari",
    "title": "Events — storing Tarun's data",
    "code": "// Tarun Tiwari's profile using Events\nconst student_1 = {\n  name: \"Tarun Tiwari\",\n  course: \"React Mastery\",\n  topic: \"events\"\n};\nconsole.log(student_1.name);",
    "output": "Tarun Tiwari",
    "explanation": "Tarun Tiwari uses events to store and access learning profile data in JavaScript."
  },
  {
    "person": "Tushar",
    "title": "Events — Tushar's function",
    "code": "function greet_2(name) {\n  return `Hi ${name}, let's learn Events!`;\n}\nconsole.log(greet_2(\"Tushar\"));",
    "output": "Hi Tushar, let's learn Events!",
    "explanation": "Tushar writes a reusable function demonstrating events in practice."
  },
  {
    "person": "Ranjeet",
    "title": "Events — team array for Ranjeet",
    "code": "const team_3 = [\"Ranjeet\", \"React\", \"Events\"];\nconst result = team_3.map(m => m.toUpperCase());\nconsole.log(result);",
    "output": "[RANJEET, REACT, EVENTS]",
    "explanation": "Ranjeet transforms an array using events concepts."
  },
  {
    "person": "Abhishek",
    "title": "Events — Abhishek's object destructuring",
    "code": "const user_4 = { name: \"Abhishek\", role: \"Learner\" };\nconst { name, role } = user_4;\nconsole.log(name, \"-\", role);",
    "output": "Abhishek - Learner",
    "explanation": "Abhishek extracts values from objects — a key part of events."
  },
  {
    "person": "Sonu",
    "title": "Events — async for Sonu",
    "code": "async function fetch_5() {\n  return { member: \"Sonu\", status: \"learning\" };\n}\nfetch_5().then(d => console.log(d.member));",
    "output": "Sonu",
    "explanation": "Sonu handles asynchronous events patterns like a pro."
  },
  {
    "person": "Prerna",
    "title": "Events — Prerna's template literal",
    "code": "const msg_6 = `${\"Prerna\"} is mastering ${\"Events\"} today`;\nconsole.log(msg_6);",
    "output": "Prerna is mastering Events today",
    "explanation": "Prerna uses template literals with events for dynamic strings."
  },
  {
    "person": "Kishan",
    "title": "Events — Kishan's conditional",
    "code": "const score_7 = 95;\nconst grade_7 = score_7 >= 90 ? \"Excellent\" : \"Good\";\nconsole.log(\"Kishan:\", grade_7);",
    "output": "Kishan: Excellent",
    "explanation": "Kishan applies conditional logic — essential in events."
  },
  {
    "person": "Satyam",
    "title": "Events — Satyam's loop",
    "code": "const skills_8 = [\"JS\", \"React\", \"Events\"];\nfor (const s of skills_8) {\n  console.log(\"Satyam learns:\", s);\n}",
    "output": "Satyam learns: JS / React / Events",
    "explanation": "Satyam iterates over data using events loop patterns."
  }
];

export default function EventsTopic() {
  return (
    <TopicLesson
      title="Events"
      course="JavaScript"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#f59e0b"
    />
  );
}
