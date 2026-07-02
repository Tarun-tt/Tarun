import TopicLesson from "../../../shared/TopicLesson.jsx";

/**
 * State — React
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = "State is a fundamental React concept used in every real-world application. It helps you build reusable UI components and manage how your interface behaves when data changes.";
const syntax = "const [score, setScore] = useState(0);\n<button onClick={() => setScore(s => s + 1)}>+</button>";
const examples = [
  {
    "person": "Tarun Tiwari",
    "title": "State — greeting Tarun",
    "code": "function Greeting_1({ name }) {\n  return <h2>Hello, {name}!</h2>;\n}\n// <Greeting_1 name=\"Tarun Tiwari\" />",
    "output": "Hello, Tarun Tiwari!",
    "explanation": "Tarun Tiwari's name is passed as a prop to demonstrate state in React."
  },
  {
    "person": "Tushar",
    "title": "State — Tushar's profile card",
    "code": "function Profile_2({ user }) {\n  return (\n    <div>\n      <h3>{user.name}</h3>\n      <p>{user.role}</p>\n    </div>\n  );\n}\n// user={{ name: \"Tushar\", role: \"Developer\" }}",
    "output": "Tushar / Developer",
    "explanation": "Tushar's profile is rendered using state with an object prop."
  },
  {
    "person": "Ranjeet",
    "title": "State — Ranjeet's skill list",
    "code": "function Skills_3({ skills }) {\n  return (\n    <ul>\n      {skills.map(s => <li key={s}>{s}</li>)}\n    </ul>\n  );\n}\n// skills={[\"React\", \"State\", \"JS\"]} // Ranjeet",
    "output": "React, State, JS",
    "explanation": "Ranjeet renders a list of skills using state and map()."
  },
  {
    "person": "Abhishek",
    "title": "State — Abhishek's button",
    "code": "function Button_4({ label, onClick }) {\n  return <button onClick={onClick}>{label}</button>;\n}\n// <Button_4 label=\"Abhishek's Button\" onClick={() => alert(\"Hi!\")} />",
    "output": "Abhishek's Button (clickable)",
    "explanation": "Abhishek passes a callback function via state for interactivity."
  },
  {
    "person": "Sonu",
    "title": "State — Sonu's layout",
    "code": "function Card_5({ title, children }) {\n  return (\n    <section>\n      <h4>{title}</h4>\n      {children}\n    </section>\n  );\n}\n// <Card_5 title=\"Sonu\"><p>Learning state</p></Card_5>",
    "output": "Sonu / Learning state",
    "explanation": "Sonu uses children prop with state for composition."
  },
  {
    "person": "Prerna",
    "title": "State — Prerna's counter",
    "code": "function Counter_6() {\n  const [count, setCount] = useState(0);\n  return (\n    <button onClick={() => setCount(c => c + 1)}>\n      Prerna: {count}\n    </button>\n  );\n}",
    "output": "Prerna: 0 (clickable)",
    "explanation": "Prerna's counter uses state to manage changing UI state."
  },
  {
    "person": "Kishan",
    "title": "State — Kishan's conditional UI",
    "code": "function Status_7({ isOnline }) {\n  return <p>{isOnline ? \"Kishan is online\" : \"Kishan is away\"}</p>;\n}\n// <Status_7 isOnline={true} />",
    "output": "Kishan is online",
    "explanation": "Kishan's online status uses state for conditional rendering."
  },
  {
    "person": "Satyam",
    "title": "State — Satyam's form",
    "code": "function Input_8({ value, onChange }) {\n  return <input value={value} onChange={onChange} placeholder=\"Satyam's input\" />;\n}\n// Controlled input for Satyam",
    "output": "Input field for Satyam",
    "explanation": "Satyam's form field demonstrates state with controlled components."
  }
];

export default function StateTopic() {
  return (
    <TopicLesson
      title="State"
      course="React"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#2563eb"
    />
  );
}
