import TopicModule from "../shared/TopicModule";

export default function StateLesson() {
  return (
    <TopicModule
      title="State"
      subtitle="Reactive values"
      summary="State stores values that change over time, and React re-renders when those values update."
      concepts={[
        "useState",
        "Event handlers",
        "Re-rendering",
        "Derived values",
      ]}
      examples={[
        {
          title: "Counter",
          code: `import { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;\n}`,
          explanation: "A click updates state and the component re-renders.",
        },
        {
          title: "Toggle UI",
          code: `const [isOpen, setIsOpen] = useState(false);\n<button onClick={() => setIsOpen(!isOpen)}>Toggle</button>`,
          explanation: "Boolean state is useful for showing or hiding UI.",
        },
        {
          title: "Object state",
          code: `const [user, setUser] = useState({ name: 'Ava' });\nsetUser({ ...user, age: 21 });`,
          explanation:
            "Use spread syntax to update object state without mutating it.",
        },
      ]}
      practice="Build a simple counter with increment and decrement buttons."
      challenge="Refactor the counter to update using a functional state update."
    />
  );
}
