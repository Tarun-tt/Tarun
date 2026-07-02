import TopicLesson from "../../shared/TopicLesson.jsx";

/**
 * Best Practices — Redux Toolkit
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = "Best Practices is part of Redux Toolkit's predictable state management. It helps teams like ours — Tarun, Tushar, Ranjeet, and the crew — share application state across components safely.";
const syntax = "// Best Practices syntax\n// Used by Tarun Tiwari, Tushar, Ranjeet & team";
const examples = [
  {
    "person": "Tarun Tiwari",
    "title": "Best Practices — Tarun's store state",
    "code": "const initialState_1 = {\n  lead: \"Tarun Tiwari\",\n  topic: \"best-practices\",\n  progress: 0\n};",
    "output": "{ lead: \"Tarun Tiwari\", topic: \"best-practices\", progress: 0 }",
    "explanation": "Tarun Tiwari is stored in Redux state using best practices."
  },
  {
    "person": "Tushar",
    "title": "Best Practices — dispatch for Tushar",
    "code": "dispatch({ type: \"team/setLead\", payload: \"Tushar\" });\n// Updates store with Tushar as team lead",
    "output": "Lead set to Tushar",
    "explanation": "Tushar's data is updated via dispatch — core to best practices."
  },
  {
    "person": "Ranjeet",
    "title": "Best Practices — Ranjeet's slice",
    "code": "const ranjeetSlice = createSlice({\n  name: \"ranjeet\",\n  initialState: { name: \"Ranjeet\" },\n  reducers: {\n    update(state, action) { state.name = action.payload; }\n  }\n});",
    "output": "Slice for Ranjeet",
    "explanation": "Ranjeet gets a dedicated slice demonstrating best practices."
  },
  {
    "person": "Abhishek",
    "title": "Best Practices — selector for Abhishek",
    "code": "const selectAbhishek = (state) => state.team.members[\"Abhishek\"];\nconst member = useSelector(selectAbhishek);",
    "output": "Abhishek's data from store",
    "explanation": "Abhishek's data is read using a selector with best practices."
  },
  {
    "person": "Sonu",
    "title": "Best Practices — async thunk for Sonu",
    "code": "const fetchSonu = createAsyncThunk(\n  \"team/fetchSonu\",\n  async () => ({ name: \"Sonu\", role: \"Learner\" })\n);",
    "output": "{ name: \"Sonu\", role: \"Learner\" }",
    "explanation": "Sonu's profile is loaded asynchronously via best practices."
  },
  {
    "person": "Prerna",
    "title": "Best Practices — Prerna's middleware",
    "code": "const logger = (store) => (next) => (action) => {\n  console.log(\"Prerna dispatched:\", action.type);\n  return next(action);\n};",
    "output": "Prerna dispatched: team/update",
    "explanation": "Prerna's actions are logged through best practices middleware."
  },
  {
    "person": "Kishan",
    "title": "Best Practices — normalized state for Kishan",
    "code": "const entities_7 = {\n  members: { \"Kishan\": { id: 1, name: \"Kishan\" } },\n  ids: [1]\n};",
    "output": "Normalized Kishan in store",
    "explanation": "Kishan's data is normalized for efficient best practices lookups."
  },
  {
    "person": "Satyam",
    "title": "Best Practices — persist Satyam's progress",
    "code": "persistReducer(\n  { key: \"satyam\", storage },\n  satyamReducer\n);\n// Saves Satyam's progress locally",
    "output": "Satyam's progress persisted",
    "explanation": "Satyam's learning progress is saved using best practices."
  }
];

export default function BestPracticesTopic() {
  return (
    <TopicLesson
      title="Best Practices"
      course="Redux Toolkit"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#7c3aed"
    />
  );
}
