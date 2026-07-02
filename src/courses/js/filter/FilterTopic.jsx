import TopicLesson from "../../shared/TopicLesson.jsx";

/**
 * Filter — JavaScript
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = "Filter is a core JavaScript concept. It helps you write cleaner, more predictable code when building web applications. Mastering filter is essential before moving to React and modern frameworks.";
const syntax = "// Filter syntax\n// Used by Tarun Tiwari, Tushar, Ranjeet & team";
const examples = [
  {
    "person": "Tarun Tiwari",
    "title": "Filter — storing Tarun's data",
    "code": "// Tarun Tiwari's profile using Filter\nconst student_1 = {\n  name: \"Tarun Tiwari\",\n  course: \"React Mastery\",\n  topic: \"filter\"\n};\nconsole.log(student_1.name);",
    "output": "Tarun Tiwari",
    "explanation": "Tarun Tiwari uses filter to store and access learning profile data in JavaScript."
  },
  {
    "person": "Tushar",
    "title": "Filter — Tushar's function",
    "code": "function greet_2(name) {\n  return `Hi ${name}, let's learn Filter!`;\n}\nconsole.log(greet_2(\"Tushar\"));",
    "output": "Hi Tushar, let's learn Filter!",
    "explanation": "Tushar writes a reusable function demonstrating filter in practice."
  },
  {
    "person": "Ranjeet",
    "title": "Filter — team array for Ranjeet",
    "code": "const team_3 = [\"Ranjeet\", \"React\", \"Filter\"];\nconst result = team_3.map(m => m.toUpperCase());\nconsole.log(result);",
    "output": "[RANJEET, REACT, FILTER]",
    "explanation": "Ranjeet transforms an array using filter concepts."
  },
  {
    "person": "Abhishek",
    "title": "Filter — Abhishek's object destructuring",
    "code": "const user_4 = { name: \"Abhishek\", role: \"Learner\" };\nconst { name, role } = user_4;\nconsole.log(name, \"-\", role);",
    "output": "Abhishek - Learner",
    "explanation": "Abhishek extracts values from objects — a key part of filter."
  },
  {
    "person": "Sonu",
    "title": "Filter — async for Sonu",
    "code": "async function fetch_5() {\n  return { member: \"Sonu\", status: \"learning\" };\n}\nfetch_5().then(d => console.log(d.member));",
    "output": "Sonu",
    "explanation": "Sonu handles asynchronous filter patterns like a pro."
  },
  {
    "person": "Prerna",
    "title": "Filter — Prerna's template literal",
    "code": "const msg_6 = `${\"Prerna\"} is mastering ${\"Filter\"} today`;\nconsole.log(msg_6);",
    "output": "Prerna is mastering Filter today",
    "explanation": "Prerna uses template literals with filter for dynamic strings."
  },
  {
    "person": "Kishan",
    "title": "Filter — Kishan's conditional",
    "code": "const score_7 = 95;\nconst grade_7 = score_7 >= 90 ? \"Excellent\" : \"Good\";\nconsole.log(\"Kishan:\", grade_7);",
    "output": "Kishan: Excellent",
    "explanation": "Kishan applies conditional logic — essential in filter."
  },
  {
    "person": "Satyam",
    "title": "Filter — Satyam's loop",
    "code": "const skills_8 = [\"JS\", \"React\", \"Filter\"];\nfor (const s of skills_8) {\n  console.log(\"Satyam learns:\", s);\n}",
    "output": "Satyam learns: JS / React / Filter",
    "explanation": "Satyam iterates over data using filter loop patterns."
  }
];

export default function FilterTopic() {
  return (
    <TopicLesson
      title="Filter"
      course="JavaScript"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#f59e0b"
    />
  );
}
