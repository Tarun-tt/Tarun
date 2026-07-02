import TopicModule from "../shared/TopicModule";

export default function IntroductionLesson() {
  return (
    <TopicModule
      title="React Introduction"
      subtitle="Foundation"
      summary="React makes interfaces feel fast because it lets you describe what the UI should look like and updates it efficiently when data changes."
      concepts={[
        "Components",
        "Declarative UI",
        "Reusable pieces",
        "Virtual DOM",
      ]}
      examples={[
        {
          title: "A tiny component",
          code: `function Welcome() {\n  return <h1>Hello React</h1>;\n}`,
          explanation: "A component describes its output with JSX.",
        },
        {
          title: "Render a component",
          code: `function App() {\n  return <Welcome />;\n}`,
          explanation: "Components can be nested and composed into larger UIs.",
        },
        {
          title: "Dynamic values",
          code: `const name = 'Ava';\nfunction Greeting() {\n  return <p>Hi {name}</p>;\n}`,
          explanation:
            "React can inject values from JavaScript into the markup.",
        },
      ]}
      practice="Create a small welcome card that shows the user name and a short tagline."
      challenge="Try rendering three items from an array with the map method."
    />
  );
}
