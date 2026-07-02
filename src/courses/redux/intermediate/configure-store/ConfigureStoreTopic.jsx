import TopicLesson from "../../../shared/TopicLesson.jsx";

/**
 * configureStore — Redux Toolkit
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = "configureStore is part of Redux Toolkit's predictable state management. It helps teams like ours — Tarun, Tushar, Ranjeet, and the crew — share application state across components safely.";
const syntax = "const store = configureStore({\n  reducer: { team: teamReducer },\n});";
const examples = [
  {
    "person": "Tarun Tiwari",
    "title": "configureStore — Tarun's store state",
    "code": "const initialState_1 = {\n  lead: \"Tarun Tiwari\",\n  topic: \"configure-store\",\n  progress: 0\n};",
    "output": "{ lead: \"Tarun Tiwari\", topic: \"configure-store\", progress: 0 }",
    "explanation": "Tarun Tiwari is stored in Redux state using configurestore."
  },
  {
    "person": "Tushar",
    "title": "configureStore — dispatch for Tushar",
    "code": "dispatch({ type: \"team/setLead\", payload: \"Tushar\" });\n// Updates store with Tushar as team lead",
    "output": "Lead set to Tushar",
    "explanation": "Tushar's data is updated via dispatch — core to configurestore."
  },
  {
    "person": "Ranjeet",
    "title": "configureStore — Ranjeet's slice",
    "code": "const ranjeetSlice = createSlice({\n  name: \"ranjeet\",\n  initialState: { name: \"Ranjeet\" },\n  reducers: {\n    update(state, action) { state.name = action.payload; }\n  }\n});",
    "output": "Slice for Ranjeet",
    "explanation": "Ranjeet gets a dedicated slice demonstrating configurestore."
  },
  {
    "person": "Abhishek",
    "title": "configureStore — selector for Abhishek",
    "code": "const selectAbhishek = (state) => state.team.members[\"Abhishek\"];\nconst member = useSelector(selectAbhishek);",
    "output": "Abhishek's data from store",
    "explanation": "Abhishek's data is read using a selector with configurestore."
  },
  {
    "person": "Sonu",
    "title": "configureStore — async thunk for Sonu",
    "code": "const fetchSonu = createAsyncThunk(\n  \"team/fetchSonu\",\n  async () => ({ name: \"Sonu\", role: \"Learner\" })\n);",
    "output": "{ name: \"Sonu\", role: \"Learner\" }",
    "explanation": "Sonu's profile is loaded asynchronously via configurestore."
  },
  {
    "person": "Prerna",
    "title": "configureStore — Prerna's middleware",
    "code": "const logger = (store) => (next) => (action) => {\n  console.log(\"Prerna dispatched:\", action.type);\n  return next(action);\n};",
    "output": "Prerna dispatched: team/update",
    "explanation": "Prerna's actions are logged through configurestore middleware."
  },
  {
    "person": "Kishan",
    "title": "configureStore — normalized state for Kishan",
    "code": "const entities_7 = {\n  members: { \"Kishan\": { id: 1, name: \"Kishan\" } },\n  ids: [1]\n};",
    "output": "Normalized Kishan in store",
    "explanation": "Kishan's data is normalized for efficient configurestore lookups."
  },
  {
    "person": "Satyam",
    "title": "configureStore — persist Satyam's progress",
    "code": "persistReducer(\n  { key: \"satyam\", storage },\n  satyamReducer\n);\n// Saves Satyam's progress locally",
    "output": "Satyam's progress persisted",
    "explanation": "Satyam's learning progress is saved using configurestore."
  }
];

export default function ConfigureStoreTopic() {
  return (
    <TopicLesson
      title="configureStore"
      course="Redux Toolkit"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#7c3aed"
    />
  );
}
