import TopicModule from "../shared/TopicModule";

export default function ReduxBasicsLesson() {
  return (
    <TopicModule
      title="Redux Basics"
      subtitle="Predictable state"
      summary="Redux centralizes shared data so your app state becomes predictable and easier to debug."
      concepts={["Store", "State", "Actions", "Reducers"]}
      examples={[
        {
          title: "Action object",
          code: `const increment = { type: 'counter/increment' };`,
          explanation: "Actions describe changes that should happen.",
        },
        {
          title: "Reducer",
          code: `function counterReducer(state = 0, action) {\n  switch (action.type) {\n    case 'counter/increment': return state + 1;\n    default: return state;\n  }\n}`,
          explanation: "Reducers update the state based on the action type.",
        },
      ]}
      practice="Create a simple reducer for a counter and dispatch an increment action."
      challenge="Think about why Redux encourages one source of truth for shared state."
    />
  );
}
