import TopicLesson from "../../shared/TopicLesson.jsx";

/**
 * Some — JavaScript
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = "Some is a core JavaScript concept. It helps you write cleaner, more predictable code when building web applications. Mastering some is essential before moving to React and modern frameworks.";
const syntax = "// Some syntax\n// Used by Tarun Tiwari, Tushar, Ranjeet & team";
const examples = [
  {
    "person": "Tarun Tiwari",
    "title": "Some — storing Tarun's data",
    "code": "// Tarun Tiwari's profile using Some\nconst student_1 = {\n  name: \"Tarun Tiwari\",\n  course: \"React Mastery\",\n  topic: \"some\"\n};\nconsole.log(student_1.name);",
    "output": "Tarun Tiwari",
    "explanation": "Tarun Tiwari uses some to store and access learning profile data in JavaScript."
  },
  {
    "person": "Tushar",
    "title": "Some — Tushar's function",
    "code": "function greet_2(name) {\n  return `Hi ${name}, let's learn Some!`;\n}\nconsole.log(greet_2(\"Tushar\"));",
    "output": "Hi Tushar, let's learn Some!",
    "explanation": "Tushar writes a reusable function demonstrating some in practice."
  },
  {
    "person": "Ranjeet",
    "title": "Some — team array for Ranjeet",
    "code": "const team_3 = [\"Ranjeet\", \"React\", \"Some\"];\nconst result = team_3.map(m => m.toUpperCase());\nconsole.log(result);",
    "output": "[RANJEET, REACT, SOME]",
    "explanation": "Ranjeet transforms an array using some concepts."
  },
  {
    "person": "Abhishek",
    "title": "Some — Abhishek's object destructuring",
    "code": "const user_4 = { name: \"Abhishek\", role: \"Learner\" };\nconst { name, role } = user_4;\nconsole.log(name, \"-\", role);",
    "output": "Abhishek - Learner",
    "explanation": "Abhishek extracts values from objects — a key part of some."
  },
  {
    "person": "Sonu",
    "title": "Some — async for Sonu",
    "code": "async function fetch_5() {\n  return { member: \"Sonu\", status: \"learning\" };\n}\nfetch_5().then(d => console.log(d.member));",
    "output": "Sonu",
    "explanation": "Sonu handles asynchronous some patterns like a pro."
  },
  {
    "person": "Prerna",
    "title": "Some — Prerna's template literal",
    "code": "const msg_6 = `${\"Prerna\"} is mastering ${\"Some\"} today`;\nconsole.log(msg_6);",
    "output": "Prerna is mastering Some today",
    "explanation": "Prerna uses template literals with some for dynamic strings."
  },
  {
    "person": "Kishan",
    "title": "Some — Kishan's conditional",
    "code": "const score_7 = 95;\nconst grade_7 = score_7 >= 90 ? \"Excellent\" : \"Good\";\nconsole.log(\"Kishan:\", grade_7);",
    "output": "Kishan: Excellent",
    "explanation": "Kishan applies conditional logic — essential in some."
  },
  {
    "person": "Satyam",
    "title": "Some — Satyam's loop",
    "code": "const skills_8 = [\"JS\", \"React\", \"Some\"];\nfor (const s of skills_8) {\n  console.log(\"Satyam learns:\", s);\n}",
    "output": "Satyam learns: JS / React / Some",
    "explanation": "Satyam iterates over data using some loop patterns."
  }
];

export default function SomeTopic() {
  return (
    <TopicLesson
      title="Some"
      course="JavaScript"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#f59e0b"
    />
  );
}
