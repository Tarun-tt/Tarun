import TopicModule from "../shared/TopicModule";

export default function ClosuresLesson() {
  return (
    <TopicModule
      title="Closures"
      subtitle="Functions remembering context"
      summary="A closure lets an inner function remember variables from the scope where it was created."
      concepts={["Lexical scope", "Private state", "Callbacks"]}
      examples={[
        {
          title: "Counter closure",
          code: `function makeCounter() {\n  let count = 0;\n  return () => {\n    count += 1;\n    return count;\n  };\n}`,
          explanation:
            "The returned function keeps access to the count variable.",
        },
        {
          title: "Factory function",
          code: `function createGreeter(name) {\n  return () => 'Hello ' + name;\n}`,
          explanation: "Closures are useful for creating customized helpers.",
        },
      ]}
      practice="Create a closure that returns a counter and test it a few times."
      challenge="Explain how closures help build private state without classes."
    />
  );
}
