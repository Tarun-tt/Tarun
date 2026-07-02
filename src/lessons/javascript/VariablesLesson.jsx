import TopicModule from "../shared/TopicModule";

export default function VariablesLesson() {
  return (
    <TopicModule
      title="Variables"
      subtitle="The building blocks"
      summary="Variables let your program store values so it can reuse them, transform them, and respond to input."
      concepts={["let", "const", "var", "Scope"]}
      examples={[
        {
          title: "Let example",
          code: `let count = 1;\ncount = 2;\nconsole.log(count);`,
          explanation: "let allows reassignment.",
        },
        {
          title: "Const example",
          code: `const pi = 3.14;\nconsole.log(pi);`,
          explanation: "const keeps a value fixed after initialization.",
        },
        {
          title: "Block scope",
          code: `if (true) {\n  let message = 'Hello';\n  console.log(message);\n}`,
          explanation:
            "Block-scoped variables stay inside the block where they are declared.",
        },
      ]}
      practice="Create a script that stores a user profile object and logs its name and role."
      challenge="Explain why const is usually preferred for values that should not change."
    />
  );
}
