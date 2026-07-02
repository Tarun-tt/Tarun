import TopicLesson from "../../shared/TopicLesson.jsx";

/**
 * Rest — JavaScript
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = "Rest is a core JavaScript concept. It helps you write cleaner, more predictable code when building web applications. Mastering rest is essential before moving to React and modern frameworks.";
const syntax = "// Rest syntax\n// Used by Tarun Tiwari, Tushar, Ranjeet & team";
const examples = [
  {
    "person": "Tarun Tiwari",
    "title": "Rest — storing Tarun's data",
    "code": "// Tarun Tiwari's profile using Rest\nconst student_1 = {\n  name: \"Tarun Tiwari\",\n  course: \"React Mastery\",\n  topic: \"rest\"\n};\nconsole.log(student_1.name);",
    "output": "Tarun Tiwari",
    "explanation": "Tarun Tiwari uses rest to store and access learning profile data in JavaScript."
  },
  {
    "person": "Tushar",
    "title": "Rest — Tushar's function",
    "code": "function greet_2(name) {\n  return `Hi ${name}, let's learn Rest!`;\n}\nconsole.log(greet_2(\"Tushar\"));",
    "output": "Hi Tushar, let's learn Rest!",
    "explanation": "Tushar writes a reusable function demonstrating rest in practice."
  },
  {
    "person": "Ranjeet",
    "title": "Rest — team array for Ranjeet",
    "code": "const team_3 = [\"Ranjeet\", \"React\", \"Rest\"];\nconst result = team_3.map(m => m.toUpperCase());\nconsole.log(result);",
    "output": "[RANJEET, REACT, REST]",
    "explanation": "Ranjeet transforms an array using rest concepts."
  },
  {
    "person": "Abhishek",
    "title": "Rest — Abhishek's object destructuring",
    "code": "const user_4 = { name: \"Abhishek\", role: \"Learner\" };\nconst { name, role } = user_4;\nconsole.log(name, \"-\", role);",
    "output": "Abhishek - Learner",
    "explanation": "Abhishek extracts values from objects — a key part of rest."
  },
  {
    "person": "Sonu",
    "title": "Rest — async for Sonu",
    "code": "async function fetch_5() {\n  return { member: \"Sonu\", status: \"learning\" };\n}\nfetch_5().then(d => console.log(d.member));",
    "output": "Sonu",
    "explanation": "Sonu handles asynchronous rest patterns like a pro."
  },
  {
    "person": "Prerna",
    "title": "Rest — Prerna's template literal",
    "code": "const msg_6 = `${\"Prerna\"} is mastering ${\"Rest\"} today`;\nconsole.log(msg_6);",
    "output": "Prerna is mastering Rest today",
    "explanation": "Prerna uses template literals with rest for dynamic strings."
  },
  {
    "person": "Kishan",
    "title": "Rest — Kishan's conditional",
    "code": "const score_7 = 95;\nconst grade_7 = score_7 >= 90 ? \"Excellent\" : \"Good\";\nconsole.log(\"Kishan:\", grade_7);",
    "output": "Kishan: Excellent",
    "explanation": "Kishan applies conditional logic — essential in rest."
  },
  {
    "person": "Satyam",
    "title": "Rest — Satyam's loop",
    "code": "const skills_8 = [\"JS\", \"React\", \"Rest\"];\nfor (const s of skills_8) {\n  console.log(\"Satyam learns:\", s);\n}",
    "output": "Satyam learns: JS / React / Rest",
    "explanation": "Satyam iterates over data using rest loop patterns."
  }
];

export default function RestTopic() {
  return (
    <TopicLesson
      title="Rest"
      course="JavaScript"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#f59e0b"
    />
  );
}
