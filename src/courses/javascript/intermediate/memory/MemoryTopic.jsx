import TopicLesson from "../../../shared/TopicLesson.jsx";

/**
 * Memory — JavaScript
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = "Memory is a core JavaScript concept. It helps you write cleaner, more predictable code when building web applications. Mastering memory is essential before moving to React and modern frameworks.";
const syntax = "// Memory syntax\n// Used by Tarun Tiwari, Tushar, Ranjeet & team";
const examples = [
  {
    "person": "Tarun Tiwari",
    "title": "Memory — storing Tarun's data",
    "code": "// Tarun Tiwari's profile using Memory\nconst student_1 = {\n  name: \"Tarun Tiwari\",\n  course: \"React Mastery\",\n  topic: \"memory\"\n};\nconsole.log(student_1.name);",
    "output": "Tarun Tiwari",
    "explanation": "Tarun Tiwari uses memory to store and access learning profile data in JavaScript."
  },
  {
    "person": "Tushar",
    "title": "Memory — Tushar's function",
    "code": "function greet_2(name) {\n  return `Hi ${name}, let's learn Memory!`;\n}\nconsole.log(greet_2(\"Tushar\"));",
    "output": "Hi Tushar, let's learn Memory!",
    "explanation": "Tushar writes a reusable function demonstrating memory in practice."
  },
  {
    "person": "Ranjeet",
    "title": "Memory — team array for Ranjeet",
    "code": "const team_3 = [\"Ranjeet\", \"React\", \"Memory\"];\nconst result = team_3.map(m => m.toUpperCase());\nconsole.log(result);",
    "output": "[RANJEET, REACT, MEMORY]",
    "explanation": "Ranjeet transforms an array using memory concepts."
  },
  {
    "person": "Abhishek",
    "title": "Memory — Abhishek's object destructuring",
    "code": "const user_4 = { name: \"Abhishek\", role: \"Learner\" };\nconst { name, role } = user_4;\nconsole.log(name, \"-\", role);",
    "output": "Abhishek - Learner",
    "explanation": "Abhishek extracts values from objects — a key part of memory."
  },
  {
    "person": "Sonu",
    "title": "Memory — async for Sonu",
    "code": "async function fetch_5() {\n  return { member: \"Sonu\", status: \"learning\" };\n}\nfetch_5().then(d => console.log(d.member));",
    "output": "Sonu",
    "explanation": "Sonu handles asynchronous memory patterns like a pro."
  },
  {
    "person": "Prerna",
    "title": "Memory — Prerna's template literal",
    "code": "const msg_6 = `${\"Prerna\"} is mastering ${\"Memory\"} today`;\nconsole.log(msg_6);",
    "output": "Prerna is mastering Memory today",
    "explanation": "Prerna uses template literals with memory for dynamic strings."
  },
  {
    "person": "Kishan",
    "title": "Memory — Kishan's conditional",
    "code": "const score_7 = 95;\nconst grade_7 = score_7 >= 90 ? \"Excellent\" : \"Good\";\nconsole.log(\"Kishan:\", grade_7);",
    "output": "Kishan: Excellent",
    "explanation": "Kishan applies conditional logic — essential in memory."
  },
  {
    "person": "Satyam",
    "title": "Memory — Satyam's loop",
    "code": "const skills_8 = [\"JS\", \"React\", \"Memory\"];\nfor (const s of skills_8) {\n  console.log(\"Satyam learns:\", s);\n}",
    "output": "Satyam learns: JS / React / Memory",
    "explanation": "Satyam iterates over data using memory loop patterns."
  }
];

export default function MemoryTopic() {
  return (
    <TopicLesson
      title="Memory"
      course="JavaScript"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#f59e0b"
    />
  );
}
