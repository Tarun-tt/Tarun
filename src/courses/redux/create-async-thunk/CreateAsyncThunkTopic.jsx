import TopicLesson from "../../shared/TopicLesson.jsx";

/**
 * createAsyncThunk — Redux Toolkit
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = "createAsyncThunk is part of Redux Toolkit's predictable state management. It helps teams like ours — Tarun, Tushar, Ranjeet, and the crew — share application state across components safely.";
const syntax = "// createAsyncThunk syntax\n// Used by Tarun Tiwari, Tushar, Ranjeet & team";
const examples = [
  {
    "person": "Tarun Tiwari",
    "title": "createAsyncThunk — Tarun's store state",
    "code": "const initialState_1 = {\n  lead: \"Tarun Tiwari\",\n  topic: \"create-async-thunk\",\n  progress: 0\n};",
    "output": "{ lead: \"Tarun Tiwari\", topic: \"create-async-thunk\", progress: 0 }",
    "explanation": "Tarun Tiwari is stored in Redux state using createasyncthunk."
  },
  {
    "person": "Tushar",
    "title": "createAsyncThunk — dispatch for Tushar",
    "code": "dispatch({ type: \"team/setLead\", payload: \"Tushar\" });\n// Updates store with Tushar as team lead",
    "output": "Lead set to Tushar",
    "explanation": "Tushar's data is updated via dispatch — core to createasyncthunk."
  },
  {
    "person": "Ranjeet",
    "title": "createAsyncThunk — Ranjeet's slice",
    "code": "const ranjeetSlice = createSlice({\n  name: \"ranjeet\",\n  initialState: { name: \"Ranjeet\" },\n  reducers: {\n    update(state, action) { state.name = action.payload; }\n  }\n});",
    "output": "Slice for Ranjeet",
    "explanation": "Ranjeet gets a dedicated slice demonstrating createasyncthunk."
  },
  {
    "person": "Abhishek",
    "title": "createAsyncThunk — selector for Abhishek",
    "code": "const selectAbhishek = (state) => state.team.members[\"Abhishek\"];\nconst member = useSelector(selectAbhishek);",
    "output": "Abhishek's data from store",
    "explanation": "Abhishek's data is read using a selector with createasyncthunk."
  },
  {
    "person": "Sonu",
    "title": "createAsyncThunk — async thunk for Sonu",
    "code": "const fetchSonu = createAsyncThunk(\n  \"team/fetchSonu\",\n  async () => ({ name: \"Sonu\", role: \"Learner\" })\n);",
    "output": "{ name: \"Sonu\", role: \"Learner\" }",
    "explanation": "Sonu's profile is loaded asynchronously via createasyncthunk."
  },
  {
    "person": "Prerna",
    "title": "createAsyncThunk — Prerna's middleware",
    "code": "const logger = (store) => (next) => (action) => {\n  console.log(\"Prerna dispatched:\", action.type);\n  return next(action);\n};",
    "output": "Prerna dispatched: team/update",
    "explanation": "Prerna's actions are logged through createasyncthunk middleware."
  },
  {
    "person": "Kishan",
    "title": "createAsyncThunk — normalized state for Kishan",
    "code": "const entities_7 = {\n  members: { \"Kishan\": { id: 1, name: \"Kishan\" } },\n  ids: [1]\n};",
    "output": "Normalized Kishan in store",
    "explanation": "Kishan's data is normalized for efficient createasyncthunk lookups."
  },
  {
    "person": "Satyam",
    "title": "createAsyncThunk — persist Satyam's progress",
    "code": "persistReducer(\n  { key: \"satyam\", storage },\n  satyamReducer\n);\n// Saves Satyam's progress locally",
    "output": "Satyam's progress persisted",
    "explanation": "Satyam's learning progress is saved using createasyncthunk."
  }
];

export default function CreateAsyncThunkTopic() {
  return (
    <TopicLesson
      title="createAsyncThunk"
      course="Redux Toolkit"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#7c3aed"
    />
  );
}
