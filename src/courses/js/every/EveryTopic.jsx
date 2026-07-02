import TopicLesson from "../../shared/TopicLesson.jsx";

/**
 * Every — JavaScript
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = "Every is a core JavaScript concept. It helps you write cleaner, more predictable code when building web applications. Mastering every is essential before moving to React and modern frameworks.";
const syntax = "// Every syntax\n// Used by Tarun Tiwari, Tushar, Ranjeet & team";
const examples = [
  {
    "person": "Tarun Tiwari",
    "title": "Every — storing Tarun's data",
    "code": "// Tarun Tiwari's profile using Every\nconst student_1 = {\n  name: \"Tarun Tiwari\",\n  course: \"React Mastery\",\n  topic: \"every\"\n};\nconsole.log(student_1.name);",
    "output": "Tarun Tiwari",
    "explanation": "Tarun Tiwari uses every to store and access learning profile data in JavaScript."
  },
  {
    "person": "Tushar",
    "title": "Every — Tushar's function",
    "code": "function greet_2(name) {\n  return `Hi ${name}, let's learn Every!`;\n}\nconsole.log(greet_2(\"Tushar\"));",
    "output": "Hi Tushar, let's learn Every!",
    "explanation": "Tushar writes a reusable function demonstrating every in practice."
  },
  {
    "person": "Ranjeet",
    "title": "Every — team array for Ranjeet",
    "code": "const team_3 = [\"Ranjeet\", \"React\", \"Every\"];\nconst result = team_3.map(m => m.toUpperCase());\nconsole.log(result);",
    "output": "[RANJEET, REACT, EVERY]",
    "explanation": "Ranjeet transforms an array using every concepts."
  },
  {
    "person": "Abhishek",
    "title": "Every — Abhishek's object destructuring",
    "code": "const user_4 = { name: \"Abhishek\", role: \"Learner\" };\nconst { name, role } = user_4;\nconsole.log(name, \"-\", role);",
    "output": "Abhishek - Learner",
    "explanation": "Abhishek extracts values from objects — a key part of every."
  },
  {
    "person": "Sonu",
    "title": "Every — async for Sonu",
    "code": "async function fetch_5() {\n  return { member: \"Sonu\", status: \"learning\" };\n}\nfetch_5().then(d => console.log(d.member));",
    "output": "Sonu",
    "explanation": "Sonu handles asynchronous every patterns like a pro."
  },
  {
    "person": "Prerna",
    "title": "Every — Prerna's template literal",
    "code": "const msg_6 = `${\"Prerna\"} is mastering ${\"Every\"} today`;\nconsole.log(msg_6);",
    "output": "Prerna is mastering Every today",
    "explanation": "Prerna uses template literals with every for dynamic strings."
  },
  {
    "person": "Kishan",
    "title": "Every — Kishan's conditional",
    "code": "const score_7 = 95;\nconst grade_7 = score_7 >= 90 ? \"Excellent\" : \"Good\";\nconsole.log(\"Kishan:\", grade_7);",
    "output": "Kishan: Excellent",
    "explanation": "Kishan applies conditional logic — essential in every."
  },
  {
    "person": "Satyam",
    "title": "Every — Satyam's loop",
    "code": "const skills_8 = [\"JS\", \"React\", \"Every\"];\nfor (const s of skills_8) {\n  console.log(\"Satyam learns:\", s);\n}",
    "output": "Satyam learns: JS / React / Every",
    "explanation": "Satyam iterates over data using every loop patterns."
  }
];

export default function EveryTopic() {
  return (
    <TopicLesson
      title="Every"
      course="JavaScript"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#f59e0b"
    />
  );
}
