export const reduxTopics = [
  {
    title: "Redux Basics",
    description: "Learn the core ideas behind Redux state management.",
    summary:
      "Redux gives your app a single predictable source of truth for shared state.",
    bullets: ["Store", "State", "Actions", "Reducers", "Dispatch"],
    examples: [
      {
        title: "Action object",
        code: `const increment = { type: 'counter/increment' };`,
        output: '{ type: "counter/increment" }',
        explanation: "Actions describe what happened in the app.",
      },
      {
        title: "Reducer",
        code: `function counterReducer(state = 0, action) {\n  switch (action.type) {\n    case 'counter/increment': return state + 1;\n    default: return state;\n  }\n}`,
        output: "1",
        explanation: "Reducers update state based on the incoming action.",
      },
      {
        title: "Dispatch example",
        code: `store.dispatch({ type: 'counter/increment' });`,
        output: "Updated state",
        explanation: "Dispatch sends an action into the store.",
      },
      {
        title: "Store state",
        code: `console.log(store.getState());`,
        output: "Current state",
        explanation: "The store exposes the current application state.",
      },
      {
        title: "Middleware idea",
        code: `const logger = (store) => (next) => (action) => {\n  console.log(action);\n  return next(action);\n};`,
        output: "Logged action",
        explanation: "Middleware can observe and transform actions.",
      },
    ],
    practice:
      "Create a simple counter reducer and dispatch an increment action.",
    reason: "Redux helps keep shared state consistent across many components.",
    level: "Intermediate",
  },
  {
    title: "Redux Toolkit",
    description: "Use Redux Toolkit to write concise and modern Redux code.",
    summary:
      "Redux Toolkit simplifies reducers, actions, and store setup with createSlice and configureStore.",
    bullets: [
      "configureStore",
      "createSlice",
      "createAsyncThunk",
      "Extra Reducers",
    ],
    examples: [
      {
        title: "createSlice",
        code: `const counterSlice = createSlice({\n  name: 'counter',\n  initialState: 0,\n  reducers: { increment: (state) => state + 1 }\n});`,
        output: "slice created",
        explanation:
          "createSlice generates action creators and reducers together.",
      },
      {
        title: "Store setup",
        code: `const store = configureStore({ reducer: counterSlice.reducer });`,
        output: "Configured store",
        explanation: "configureStore wires up the reducer and middleware.",
      },
      {
        title: "Dispatch from slice",
        code: `store.dispatch(counterSlice.actions.increment());`,
        output: "Updated counter",
        explanation: "Action creators make dispatch calls simple.",
      },
      {
        title: "Async thunk",
        code: `export const fetchUser = createAsyncThunk('users/fetch', async () => {\n  const res = await fetch('/api/user');\n  return res.json();\n});`,
        output: "Promise-based async action",
        explanation:
          "createAsyncThunk handles async requests and pending/success/error states.",
      },
      {
        title: "Extra reducers",
        code: `extraReducers: { [fetchUser.fulfilled]: (state, action) => action.payload }`,
        output: "Updated state",
        explanation: "Extra reducers listen to thunk lifecycle actions.",
      },
    ],
    practice:
      "Create a slice that increments a counter and exposes an action creator.",
    reason:
      "Redux Toolkit reduces boilerplate and makes state updates easier to reason about.",
    level: "Intermediate",
  },
  {
    title: "React Redux",
    description: "Connect Redux state to React components.",
    summary:
      "React Redux provides Provider, useSelector, and useDispatch to bridge React and Redux.",
    bullets: ["Provider", "useSelector", "useDispatch", "Shared State"],
    examples: [
      {
        title: "Provider",
        code: `<Provider store={store}><App /></Provider>`,
        output: "App has access to Redux",
        explanation:
          "The Provider makes the store available to all descendants.",
      },
      {
        title: "useSelector",
        code: `const count = useSelector((state) => state.counter);`,
        output: "Current counter value",
        explanation: "useSelector reads data from the Redux store.",
      },
      {
        title: "useDispatch",
        code: `const dispatch = useDispatch();\ndispatch(increment());`,
        output: "State updates",
        explanation: "useDispatch gives you access to dispatch actions.",
      },
      {
        title: "Connected component",
        code: `function Counter() {\n  const count = useSelector((state) => state.counter);\n  const dispatch = useDispatch();\n  return <button onClick={() => dispatch(increment())}>{count}</button>;\n}`,
        output: "Interactive counter",
        explanation: "React Redux components can read and update store state.",
      },
      {
        title: "Derived values",
        code: `const isEven = useSelector((state) => state.counter % 2 === 0);`,
        output: "true/false",
        explanation:
          "Selectors make it easy to derive values from store state.",
      },
    ],
    practice:
      "Create a component that shows a counter and a button to increment it.",
    reason:
      "React Redux is the standard way to connect UI to shared store data.",
    level: "Intermediate",
  },
  {
    title: "Async Redux",
    description: "Handle loading, success, and error states for async flows.",
    summary:
      "Async Redux patterns are used for API requests, authentication, and background tasks.",
    bullets: ["Loading", "Success", "Error", "Thunks", "Caching"],
    examples: [
      {
        title: "Pending state",
        code: `state.status = 'loading';`,
        output: "Loading UI",
        explanation: "A loading state lets the UI show progress.",
      },
      {
        title: "Success state",
        code: `state.status = 'succeeded';\nstate.user = action.payload;`,
        output: "User loaded",
        explanation: "Successful requests update the state with data.",
      },
      {
        title: "Failure state",
        code: `state.status = 'failed';\nstate.error = action.error.message;`,
        output: "Error message",
        explanation: "Errors should be captured and displayed cleanly.",
      },
      {
        title: "Thunk dispatch",
        code: `dispatch(fetchUser());`,
        output: "Async flow begins",
        explanation: "A thunk can dispatch pending/success/error actions.",
      },
      {
        title: "Loading indicator",
        code: `if (status === 'loading') return <Spinner />;`,
        output: "Spinner shown",
        explanation: "The UI can respond based on the request status.",
      },
    ],
    practice: "Model a loading and error state for a user profile request.",
    reason: "Async flows are common in real-world Redux applications.",
    level: "Advanced",
  },
  {
    title: "Redux Best Practices",
    description: "Keep your Redux code scalable and maintainable.",
    summary: "Good organization makes Redux easier to debug, extend, and test.",
    bullets: [
      "Normalize State",
      "Memoized Selectors",
      "Slice Structure",
      "DevTools",
    ],
    examples: [
      {
        title: "Selector example",
        code: `const selectUserName = (state) => state.user.name;`,
        output: "User name",
        explanation: "Selectors keep state access centralized.",
      },
      {
        title: "Normalized state",
        code: `state = { usersById: { 1: { id: 1, name: 'Ava' } }, userIds: [1] }`,
        output: "Normalized structure",
        explanation: "Normalization avoids duplication and simplifies updates.",
      },
      {
        title: "Redux DevTools",
        code: `const store = configureStore({ reducer });`,
        output: "Inspect actions and state",
        explanation: "DevTools make debugging state transitions much easier.",
      },
      {
        title: "Small slices",
        code: `createSlice({ name: 'todos', initialState: [] })`,
        output: "Focused slice",
        explanation: "Splitting state into slices keeps modules focused.",
      },
      {
        title: "Memoized selector",
        code: `const selectVisibleTodos = createSelector([selectTodos, selectFilter], ...);`,
        output: "Filtered todos",
        explanation: "Memoized selectors avoid repeated computation.",
      },
    ],
    practice: "Create a selector that returns the number of completed todos.",
    reason: "Best practices help Redux scale cleanly as the app grows.",
    level: "Advanced",
  },
];
