import TopicLesson from "../../../shared/TopicLesson.jsx";

/**
 * Search — React
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = "Search is a fundamental React concept used in every real-world application. It helps you build reusable UI components and manage how your interface behaves when data changes.";
const syntax = "// Search syntax\n// Used by Tarun Tiwari, Tushar, Ranjeet & team";
const examples = [
  {
    "person": "Tarun Tiwari",
    "title": "Search — greeting Tarun",
    "code": "function Greeting_1({ name }) {\n  return <h2>Hello, {name}!</h2>;\n}\n// <Greeting_1 name=\"Tarun Tiwari\" />",
    "output": "Hello, Tarun Tiwari!",
    "explanation": "Tarun Tiwari's name is passed as a prop to demonstrate search in React."
  },
  {
    "person": "Tushar",
    "title": "Search — Tushar's profile card",
    "code": "function Profile_2({ user }) {\n  return (\n    <div>\n      <h3>{user.name}</h3>\n      <p>{user.role}</p>\n    </div>\n  );\n}\n// user={{ name: \"Tushar\", role: \"Developer\" }}",
    "output": "Tushar / Developer",
    "explanation": "Tushar's profile is rendered using search with an object prop."
  },
  {
    "person": "Ranjeet",
    "title": "Search — Ranjeet's skill list",
    "code": "function Skills_3({ skills }) {\n  return (\n    <ul>\n      {skills.map(s => <li key={s}>{s}</li>)}\n    </ul>\n  );\n}\n// skills={[\"React\", \"Search\", \"JS\"]} // Ranjeet",
    "output": "React, Search, JS",
    "explanation": "Ranjeet renders a list of skills using search and map()."
  },
  {
    "person": "Abhishek",
    "title": "Search — Abhishek's button",
    "code": "function Button_4({ label, onClick }) {\n  return <button onClick={onClick}>{label}</button>;\n}\n// <Button_4 label=\"Abhishek's Button\" onClick={() => alert(\"Hi!\")} />",
    "output": "Abhishek's Button (clickable)",
    "explanation": "Abhishek passes a callback function via search for interactivity."
  },
  {
    "person": "Sonu",
    "title": "Search — Sonu's layout",
    "code": "function Card_5({ title, children }) {\n  return (\n    <section>\n      <h4>{title}</h4>\n      {children}\n    </section>\n  );\n}\n// <Card_5 title=\"Sonu\"><p>Learning search</p></Card_5>",
    "output": "Sonu / Learning search",
    "explanation": "Sonu uses children prop with search for composition."
  },
  {
    "person": "Prerna",
    "title": "Search — Prerna's counter",
    "code": "function Counter_6() {\n  const [count, setCount] = useState(0);\n  return (\n    <button onClick={() => setCount(c => c + 1)}>\n      Prerna: {count}\n    </button>\n  );\n}",
    "output": "Prerna: 0 (clickable)",
    "explanation": "Prerna's counter uses search to manage changing UI state."
  },
  {
    "person": "Kishan",
    "title": "Search — Kishan's conditional UI",
    "code": "function Status_7({ isOnline }) {\n  return <p>{isOnline ? \"Kishan is online\" : \"Kishan is away\"}</p>;\n}\n// <Status_7 isOnline={true} />",
    "output": "Kishan is online",
    "explanation": "Kishan's online status uses search for conditional rendering."
  },
  {
    "person": "Satyam",
    "title": "Search — Satyam's form",
    "code": "function Input_8({ value, onChange }) {\n  return <input value={value} onChange={onChange} placeholder=\"Satyam's input\" />;\n}\n// Controlled input for Satyam",
    "output": "Input field for Satyam",
    "explanation": "Satyam's form field demonstrates search with controlled components."
  }
];

export default function SearchTopic() {
  return (
    <TopicLesson
      title="Search"
      course="React"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#2563eb"
    />
  );
}
