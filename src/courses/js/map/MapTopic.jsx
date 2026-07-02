import TopicLesson from "../../shared/TopicLesson.jsx";

/**
 * Map — JavaScript
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = "Map is a core JavaScript concept. It helps you write cleaner, more predictable code when building web applications. Mastering map is essential before moving to React and modern frameworks.";
const syntax = "// Map syntax\n// Used by Tarun Tiwari, Tushar, Ranjeet & team";
const examples = [
  {
    "person": "Tarun Tiwari",
    "title": "Map — storing Tarun's data",
    "code": "// Tarun Tiwari's profile using Map\nconst student_1 = {\n  name: \"Tarun Tiwari\",\n  course: \"React Mastery\",\n  topic: \"map\"\n};\nconsole.log(student_1.name);",
    "output": "Tarun Tiwari",
    "explanation": "Tarun Tiwari uses map to store and access learning profile data in JavaScript."
  },
  {
    "person": "Tushar",
    "title": "Map — Tushar's function",
    "code": "function greet_2(name) {\n  return `Hi ${name}, let's learn Map!`;\n}\nconsole.log(greet_2(\"Tushar\"));",
    "output": "Hi Tushar, let's learn Map!",
    "explanation": "Tushar writes a reusable function demonstrating map in practice."
  },
  {
    "person": "Ranjeet",
    "title": "Map — team array for Ranjeet",
    "code": "const team_3 = [\"Ranjeet\", \"React\", \"Map\"];\nconst result = team_3.map(m => m.toUpperCase());\nconsole.log(result);",
    "output": "[RANJEET, REACT, MAP]",
    "explanation": "Ranjeet transforms an array using map concepts."
  },
  {
    "person": "Abhishek",
    "title": "Map — Abhishek's object destructuring",
    "code": "const user_4 = { name: \"Abhishek\", role: \"Learner\" };\nconst { name, role } = user_4;\nconsole.log(name, \"-\", role);",
    "output": "Abhishek - Learner",
    "explanation": "Abhishek extracts values from objects — a key part of map."
  },
  {
    "person": "Sonu",
    "title": "Map — async for Sonu",
    "code": "async function fetch_5() {\n  return { member: \"Sonu\", status: \"learning\" };\n}\nfetch_5().then(d => console.log(d.member));",
    "output": "Sonu",
    "explanation": "Sonu handles asynchronous map patterns like a pro."
  },
  {
    "person": "Prerna",
    "title": "Map — Prerna's template literal",
    "code": "const msg_6 = `${\"Prerna\"} is mastering ${\"Map\"} today`;\nconsole.log(msg_6);",
    "output": "Prerna is mastering Map today",
    "explanation": "Prerna uses template literals with map for dynamic strings."
  },
  {
    "person": "Kishan",
    "title": "Map — Kishan's conditional",
    "code": "const score_7 = 95;\nconst grade_7 = score_7 >= 90 ? \"Excellent\" : \"Good\";\nconsole.log(\"Kishan:\", grade_7);",
    "output": "Kishan: Excellent",
    "explanation": "Kishan applies conditional logic — essential in map."
  },
  {
    "person": "Satyam",
    "title": "Map — Satyam's loop",
    "code": "const skills_8 = [\"JS\", \"React\", \"Map\"];\nfor (const s of skills_8) {\n  console.log(\"Satyam learns:\", s);\n}",
    "output": "Satyam learns: JS / React / Map",
    "explanation": "Satyam iterates over data using map loop patterns."
  }
];

export default function MapTopic() {
  return (
    <TopicLesson
      title="Map"
      course="JavaScript"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#f59e0b"
    />
  );
}
