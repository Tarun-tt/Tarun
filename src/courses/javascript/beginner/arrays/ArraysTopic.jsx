import TopicLesson from "../../../shared/TopicLesson.jsx";

/**
 * Arrays — JavaScript
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = "Arrays is a core JavaScript concept. It helps you write cleaner, more predictable code when building web applications. Mastering arrays is essential before moving to React and modern frameworks.";
const syntax = "// Arrays syntax\n// Used by Tarun Tiwari, Tushar, Ranjeet & team";
const examples = [
  {
    "person": "Tarun Tiwari",
    "title": "Arrays — storing Tarun's data",
    "code": "// Tarun Tiwari's profile using Arrays\nconst student_1 = {\n  name: \"Tarun Tiwari\",\n  course: \"React Mastery\",\n  topic: \"arrays\"\n};\nconsole.log(student_1.name);",
    "output": "Tarun Tiwari",
    "explanation": "Tarun Tiwari uses arrays to store and access learning profile data in JavaScript."
  },
  {
    "person": "Tushar",
    "title": "Arrays — Tushar's function",
    "code": "function greet_2(name) {\n  return `Hi ${name}, let's learn Arrays!`;\n}\nconsole.log(greet_2(\"Tushar\"));",
    "output": "Hi Tushar, let's learn Arrays!",
    "explanation": "Tushar writes a reusable function demonstrating arrays in practice."
  },
  {
    "person": "Ranjeet",
    "title": "Arrays — team array for Ranjeet",
    "code": "const team_3 = [\"Ranjeet\", \"React\", \"Arrays\"];\nconst result = team_3.map(m => m.toUpperCase());\nconsole.log(result);",
    "output": "[RANJEET, REACT, ARRAYS]",
    "explanation": "Ranjeet transforms an array using arrays concepts."
  },
  {
    "person": "Abhishek",
    "title": "Arrays — Abhishek's object destructuring",
    "code": "const user_4 = { name: \"Abhishek\", role: \"Learner\" };\nconst { name, role } = user_4;\nconsole.log(name, \"-\", role);",
    "output": "Abhishek - Learner",
    "explanation": "Abhishek extracts values from objects — a key part of arrays."
  },
  {
    "person": "Sonu",
    "title": "Arrays — async for Sonu",
    "code": "async function fetch_5() {\n  return { member: \"Sonu\", status: \"learning\" };\n}\nfetch_5().then(d => console.log(d.member));",
    "output": "Sonu",
    "explanation": "Sonu handles asynchronous arrays patterns like a pro."
  },
  {
    "person": "Prerna",
    "title": "Arrays — Prerna's template literal",
    "code": "const msg_6 = `${\"Prerna\"} is mastering ${\"Arrays\"} today`;\nconsole.log(msg_6);",
    "output": "Prerna is mastering Arrays today",
    "explanation": "Prerna uses template literals with arrays for dynamic strings."
  },
  {
    "person": "Kishan",
    "title": "Arrays — Kishan's conditional",
    "code": "const score_7 = 95;\nconst grade_7 = score_7 >= 90 ? \"Excellent\" : \"Good\";\nconsole.log(\"Kishan:\", grade_7);",
    "output": "Kishan: Excellent",
    "explanation": "Kishan applies conditional logic — essential in arrays."
  },
  {
    "person": "Satyam",
    "title": "Arrays — Satyam's loop",
    "code": "const skills_8 = [\"JS\", \"React\", \"Arrays\"];\nfor (const s of skills_8) {\n  console.log(\"Satyam learns:\", s);\n}",
    "output": "Satyam learns: JS / React / Arrays",
    "explanation": "Satyam iterates over data using arrays loop patterns."
  }
];

export default function ArraysTopic() {
  return (
    <TopicLesson
      title="Arrays"
      course="JavaScript"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#f59e0b"
    />
  );
}
