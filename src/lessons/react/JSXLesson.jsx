import TopicModule from "../shared/TopicModule";

export default function JSXLesson() {
  return (
    <TopicModule
      title="JSX"
      subtitle="Markup with JavaScript"
      summary="JSX looks like HTML, but it is really a syntax layer that React turns into elements under the hood."
      concepts={[
        "JSX syntax",
        "Expressions",
        "Fragments",
        "Conditional rendering",
      ]}
      examples={[
        {
          title: "Expression inside JSX",
          code: `const title = 'Learning';\nfunction Demo() {\n  return <h2>{title}</h2>;\n}`,
          explanation: "Curly braces let JSX render values from JavaScript.",
        },
        {
          title: "Fragment example",
          code: `function Demo() {\n  return (\n    <>\n      <h3>One</h3>\n      <h3>Two</h3>\n    </>\n  );\n}`,
          explanation:
            "Fragments keep markup grouped without adding extra wrappers.",
        },
        {
          title: "Conditional rendering",
          code: `function Status({ isReady }) {\n  return <p>{isReady ? 'Ready' : 'Wait'}</p>;\n}`,
          explanation: "You can decide which UI appears based on data.",
        },
      ]}
      practice="Render a list of three hobbies from an array using JSX."
      challenge="Add a small badge that only shows when a user is logged in."
    />
  );
}
