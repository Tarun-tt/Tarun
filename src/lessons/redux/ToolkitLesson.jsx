import TopicModule from "../shared/TopicModule";

export default function ToolkitLesson() {
  return (
    <TopicModule
      title="Redux Toolkit"
      subtitle="Less boilerplate"
      summary="Redux Toolkit bundles the common Redux patterns into a cleaner API so you spend less time wiring up state."
      concepts={["createSlice", "configureStore", "Action creators"]}
      examples={[
        {
          title: "createSlice",
          code: `const counterSlice = createSlice({\n  name: 'counter',\n  initialState: 0,\n  reducers: { increment: (state) => state + 1 }\n});`,
          explanation:
            "createSlice generates reducers and action creators together.",
        },
        {
          title: "Store setup",
          code: `const store = configureStore({ reducer: counterSlice.reducer });`,
          explanation:
            "configureStore gives you a ready-to-use store with defaults enabled.",
        },
      ]}
      practice="Create a slice that manages a todo list and exposes an add action."
      challenge="Compare the boilerplate in classic Redux versus Redux Toolkit."
    />
  );
}
