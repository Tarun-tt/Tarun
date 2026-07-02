import TopicLesson from "../../../shared/TopicLesson.jsx";

/**
 * Testing — React
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = "Testing is a fundamental React concept used in every real-world application. It helps you build reusable UI components and manage how your interface behaves when data changes.";
const syntax = "// Testing syntax\n// Used by Tarun Tiwari, Tushar, Ranjeet & team";
const examples = [
  {
    "person": "Tarun Tiwari",
    "title": "Testing — greeting Tarun",
    "code": "function Greeting_1({ name }) {\n  return <h2>Hello, {name}!</h2>;\n}\n// <Greeting_1 name=\"Tarun Tiwari\" />",
    "output": "Hello, Tarun Tiwari!",
    "explanation": "Tarun Tiwari's name is passed as a prop to demonstrate testing in React."
  },
  {
    "person": "Tushar",
    "title": "Testing — Tushar's profile card",
    "code": "function Profile_2({ user }) {\n  return (\n    <div>\n      <h3>{user.name}</h3>\n      <p>{user.role}</p>\n    </div>\n  );\n}\n// user={{ name: \"Tushar\", role: \"Developer\" }}",
    "output": "Tushar / Developer",
    "explanation": "Tushar's profile is rendered using testing with an object prop."
  },
  {
    "person": "Ranjeet",
    "title": "Testing — Ranjeet's skill list",
    "code": "function Skills_3({ skills }) {\n  return (\n    <ul>\n      {skills.map(s => <li key={s}>{s}</li>)}\n    </ul>\n  );\n}\n// skills={[\"React\", \"Testing\", \"JS\"]} // Ranjeet",
    "output": "React, Testing, JS",
    "explanation": "Ranjeet renders a list of skills using testing and map()."
  },
  {
    "person": "Abhishek",
    "title": "Testing — Abhishek's button",
    "code": "function Button_4({ label, onClick }) {\n  return <button onClick={onClick}>{label}</button>;\n}\n// <Button_4 label=\"Abhishek's Button\" onClick={() => alert(\"Hi!\")} />",
    "output": "Abhishek's Button (clickable)",
    "explanation": "Abhishek passes a callback function via testing for interactivity."
  },
  {
    "person": "Sonu",
    "title": "Testing — Sonu's layout",
    "code": "function Card_5({ title, children }) {\n  return (\n    <section>\n      <h4>{title}</h4>\n      {children}\n    </section>\n  );\n}\n// <Card_5 title=\"Sonu\"><p>Learning testing</p></Card_5>",
    "output": "Sonu / Learning testing",
    "explanation": "Sonu uses children prop with testing for composition."
  },
  {
    "person": "Prerna",
    "title": "Testing — Prerna's counter",
    "code": "function Counter_6() {\n  const [count, setCount] = useState(0);\n  return (\n    <button onClick={() => setCount(c => c + 1)}>\n      Prerna: {count}\n    </button>\n  );\n}",
    "output": "Prerna: 0 (clickable)",
    "explanation": "Prerna's counter uses testing to manage changing UI state."
  },
  {
    "person": "Kishan",
    "title": "Testing — Kishan's conditional UI",
    "code": "function Status_7({ isOnline }) {\n  return <p>{isOnline ? \"Kishan is online\" : \"Kishan is away\"}</p>;\n}\n// <Status_7 isOnline={true} />",
    "output": "Kishan is online",
    "explanation": "Kishan's online status uses testing for conditional rendering."
  },
  {
    "person": "Satyam",
    "title": "Testing — Satyam's form",
    "code": "function Input_8({ value, onChange }) {\n  return <input value={value} onChange={onChange} placeholder=\"Satyam's input\" />;\n}\n// Controlled input for Satyam",
    "output": "Input field for Satyam",
    "explanation": "Satyam's form field demonstrates testing with controlled components."
  }
];

export default function TestingTopic() {
  return (
    <TopicLesson
      title="Testing"
      course="React"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#2563eb"
    />
  );
}
