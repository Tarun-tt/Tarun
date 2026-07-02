/**
 * Generates React topic components with team-member examples
 */

export const TEAM = [
  "Tarun Tiwari",
  "Tushar",
  "Ranjeet",
  "Abhishek",
  "Sonu",
  "Prerna",
  "Kishan",
  "Satyam",
];

const COURSE_LABELS = {
  javascript: "JavaScript",
  react: "React",
  redux: "Redux Toolkit",
  tanstack: "TanStack Query",
  dsa: "DSA for Frontend",
  ai: "AI Projects",
};

const COURSE_FOLDERS = {
  javascript: "js",
  react: "react",
  redux: "redux",
  tanstack: "tanstackquery",
  dsa: "dsa",
  ai: "ai",
};

const COURSE_ACCENTS = {
  javascript: "#f59e0b",
  react: "#2563eb",
  redux: "#7c3aed",
  tanstack: "#0f766e",
  dsa: "#dc2626",
  ai: "#8b5cf6",
};

function slugToPascal(slug) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
}

function slugToTitle(slug) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function getBriefExplanation(courseId, title) {
  const explanations = {
    javascript: `${title} is a core JavaScript concept. It helps you write cleaner, more predictable code when building web applications. Mastering ${title.toLowerCase()} is essential before moving to React and modern frameworks.`,
    react: `${title} is a fundamental React concept used in every real-world application. It helps you build reusable UI components and manage how your interface behaves when data changes.`,
    redux: `${title} is part of Redux Toolkit's predictable state management. It helps teams like ours — Tarun, Tushar, Ranjeet, and the crew — share application state across components safely.`,
    tanstack: `${title} is a TanStack Query feature for managing server state. It simplifies fetching, caching, and syncing remote data so your UI stays fast and up to date.`,
    dsa: `${title} is essential for frontend interviews and building performant web apps. Tarun Tiwari, Tushar, Ranjeet, and the team solve these using pure JavaScript — from brute force to optimal solutions.`,
    ai: `${title} covers modern AI concepts from beginner to expert. Learn with hands-on examples and real projects built by Tarun Tiwari, Prerna, Sonu, Kishan, Satyam, and the React Mastery team.`,
  };
  return explanations[courseId];
}

function getSyntax(courseId, topicId, title) {
  const map = {
    javascript: {
      variables: `let mentor = "Tarun Tiwari";\nconst team = "React Mastery";\nconsole.log(mentor, team);`,
      functions: `function greet(name) {\n  return "Hello, " + name;\n}\nconsole.log(greet("Prerna"));`,
      closures: `function createCounter(name) {\n  let count = 0;\n  return () => ++count;\n}\nconst ranjeetCounter = createCounter("Ranjeet");`,
      promises: `fetch("/api/team")\n  .then(res => res.json())\n  .then(data => console.log(data));`,
      "async-await": `async function loadTeam() {\n  const res = await fetch("/api/team");\n  return res.json();\n}`,
    },
    react: {
      props: `function Welcome({ name }) {\n  return <h1>Hello, {name}</h1>;\n}\n<Welcome name="Tarun Tiwari" />`,
      state: `const [score, setScore] = useState(0);\n<button onClick={() => setScore(s => s + 1)}>+</button>`,
      jsx: `const name = "Kishan";\nreturn <p>Welcome, {name}!</p>;`,
      "use-state": `const [name, setName] = useState("Satyam");\nsetName("Sonu");`,
      "use-effect": `useEffect(() => {\n  document.title = "Learning React";\n}, []);`,
    },
    redux: {
      "create-slice": `const teamSlice = createSlice({\n  name: "team",\n  initialState: { lead: "Tarun Tiwari" },\n  reducers: {},\n});`,
      "configure-store": `const store = configureStore({\n  reducer: { team: teamReducer },\n});`,
    },
    tanstack: {
      "use-query": `const { data } = useQuery({\n  queryKey: ["team"],\n  queryFn: () => fetch("/api/team"),\n});`,
      mutations: `const mutation = useMutation({\n  mutationFn: addMember,\n});`,
    },
  };
  return map[courseId]?.[topicId] || `// ${title} syntax\n// Used by Tarun Tiwari, Tushar, Ranjeet & team`;
}

function buildExamples(courseId, topicId, title) {
  return TEAM.map((person, i) => {
    const firstName = person.split(" ")[0];
    const exampleNum = i + 1;

    if (courseId === "javascript") {
      return buildJsExample(person, firstName, title, topicId, exampleNum);
    }
    if (courseId === "react") {
      return buildReactExample(person, firstName, title, topicId, exampleNum);
    }
    if (courseId === "redux") {
      return buildReduxExample(person, firstName, title, topicId, exampleNum);
    }
    if (courseId === "dsa") {
      return buildDsaExample(person, firstName, title, topicId, exampleNum);
    }
    if (courseId === "ai") {
      return buildAiExample(person, firstName, title, topicId, exampleNum);
    }
    return buildTanstackExample(person, firstName, title, topicId, exampleNum);
  });
}

function buildJsExample(person, firstName, title, topicId, n) {
  const templates = [
    {
      title: `${title} — storing ${firstName}'s data`,
      code: `// ${person}'s profile using ${title}\nconst student_${n} = {\n  name: "${person}",\n  course: "React Mastery",\n  topic: "${topicId}"\n};\nconsole.log(student_${n}.name);`,
      output: person,
      explanation: `${person} uses ${title.toLowerCase()} to store and access learning profile data in JavaScript.`,
    },
    {
      title: `${title} — ${firstName}'s function`,
      code: `function greet_${n}(name) {\n  return \`Hi \${name}, let's learn ${title}!\`;\n}\nconsole.log(greet_${n}("${person}"));`,
      output: `Hi ${person}, let's learn ${title}!`,
      explanation: `${person} writes a reusable function demonstrating ${title.toLowerCase()} in practice.`,
    },
    {
      title: `${title} — team array for ${firstName}`,
      code: `const team_${n} = ["${person}", "React", "${title}"];\nconst result = team_${n}.map(m => m.toUpperCase());\nconsole.log(result);`,
      output: `[${person.toUpperCase()}, REACT, ${title.toUpperCase()}]`,
      explanation: `${person} transforms an array using ${title.toLowerCase()} concepts.`,
    },
    {
      title: `${title} — ${firstName}'s object destructuring`,
      code: `const user_${n} = { name: "${person}", role: "Learner" };\nconst { name, role } = user_${n};\nconsole.log(name, "-", role);`,
      output: `${person} - Learner`,
      explanation: `${person} extracts values from objects — a key part of ${title.toLowerCase()}.`,
    },
    {
      title: `${title} — async for ${firstName}`,
      code: `async function fetch_${n}() {\n  return { member: "${person}", status: "learning" };\n}\nfetch_${n}().then(d => console.log(d.member));`,
      output: person,
      explanation: `${person} handles asynchronous ${title.toLowerCase()} patterns like a pro.`,
    },
    {
      title: `${title} — ${firstName}'s template literal`,
      code: `const msg_${n} = \`\${"${person}"} is mastering \${"${title}"} today\`;\nconsole.log(msg_${n});`,
      output: `${person} is mastering ${title} today`,
      explanation: `${person} uses template literals with ${title.toLowerCase()} for dynamic strings.`,
    },
    {
      title: `${title} — ${firstName}'s conditional`,
      code: `const score_${n} = 95;\nconst grade_${n} = score_${n} >= 90 ? "Excellent" : "Good";\nconsole.log("${person}:", grade_${n});`,
      output: `${person}: Excellent`,
      explanation: `${person} applies conditional logic — essential in ${title.toLowerCase()}.`,
    },
    {
      title: `${title} — ${firstName}'s loop`,
      code: `const skills_${n} = ["JS", "React", "${title}"];\nfor (const s of skills_${n}) {\n  console.log("${person} learns:", s);\n}`,
      output: `${person} learns: JS / React / ${title}`,
      explanation: `${person} iterates over data using ${title.toLowerCase()} loop patterns.`,
    },
  ];
  return { person, ...templates[n - 1] };
}

function buildReactExample(person, firstName, title, topicId, n) {
  const templates = [
    {
      title: `${title} — greeting ${firstName}`,
      code: `function Greeting_${n}({ name }) {\n  return <h2>Hello, {name}!</h2>;\n}\n// <Greeting_${n} name="${person}" />`,
      output: `Hello, ${person}!`,
      explanation: `${person}'s name is passed as a prop to demonstrate ${title.toLowerCase()} in React.`,
    },
    {
      title: `${title} — ${firstName}'s profile card`,
      code: `function Profile_${n}({ user }) {\n  return (\n    <div>\n      <h3>{user.name}</h3>\n      <p>{user.role}</p>\n    </div>\n  );\n}\n// user={{ name: "${person}", role: "Developer" }}`,
      output: `${person} / Developer`,
      explanation: `${person}'s profile is rendered using ${title.toLowerCase()} with an object prop.`,
    },
    {
      title: `${title} — ${firstName}'s skill list`,
      code: `function Skills_${n}({ skills }) {\n  return (\n    <ul>\n      {skills.map(s => <li key={s}>{s}</li>)}\n    </ul>\n  );\n}\n// skills={["React", "${title}", "JS"]} // ${person}`,
      output: `React, ${title}, JS`,
      explanation: `${person} renders a list of skills using ${title.toLowerCase()} and map().`,
    },
    {
      title: `${title} — ${firstName}'s button`,
      code: `function Button_${n}({ label, onClick }) {\n  return <button onClick={onClick}>{label}</button>;\n}\n// <Button_${n} label="${person}'s Button" onClick={() => alert("Hi!")} />`,
      output: `${person}'s Button (clickable)`,
      explanation: `${person} passes a callback function via ${title.toLowerCase()} for interactivity.`,
    },
    {
      title: `${title} — ${firstName}'s layout`,
      code: `function Card_${n}({ title, children }) {\n  return (\n    <section>\n      <h4>{title}</h4>\n      {children}\n    </section>\n  );\n}\n// <Card_${n} title="${person}"><p>Learning ${topicId}</p></Card_${n}>`,
      output: `${person} / Learning ${topicId}`,
      explanation: `${person} uses children prop with ${title.toLowerCase()} for composition.`,
    },
    {
      title: `${title} — ${firstName}'s counter`,
      code: `function Counter_${n}() {\n  const [count, setCount] = useState(0);\n  return (\n    <button onClick={() => setCount(c => c + 1)}>\n      ${person}: {count}\n    </button>\n  );\n}`,
      output: `${person}: 0 (clickable)`,
      explanation: `${person}'s counter uses ${title.toLowerCase()} to manage changing UI state.`,
    },
    {
      title: `${title} — ${firstName}'s conditional UI`,
      code: `function Status_${n}({ isOnline }) {\n  return <p>{isOnline ? "${person} is online" : "${person} is away"}</p>;\n}\n// <Status_${n} isOnline={true} />`,
      output: `${person} is online`,
      explanation: `${person}'s online status uses ${title.toLowerCase()} for conditional rendering.`,
    },
    {
      title: `${title} — ${firstName}'s form`,
      code: `function Input_${n}({ value, onChange }) {\n  return <input value={value} onChange={onChange} placeholder="${person}'s input" />;\n}\n// Controlled input for ${person}`,
      output: `Input field for ${person}`,
      explanation: `${person}'s form field demonstrates ${title.toLowerCase()} with controlled components.`,
    },
  ];
  return { person, ...templates[n - 1] };
}

function buildReduxExample(person, firstName, title, topicId, n) {
  const templates = [
    {
      title: `${title} — ${firstName}'s store state`,
      code: `const initialState_${n} = {\n  lead: "${person}",\n  topic: "${topicId}",\n  progress: 0\n};`,
      output: `{ lead: "${person}", topic: "${topicId}", progress: 0 }`,
      explanation: `${person} is stored in Redux state using ${title.toLowerCase()}.`,
    },
    {
      title: `${title} — dispatch for ${firstName}`,
      code: `dispatch({ type: "team/setLead", payload: "${person}" });\n// Updates store with ${person} as team lead`,
      output: `Lead set to ${person}`,
      explanation: `${person}'s data is updated via dispatch — core to ${title.toLowerCase()}.`,
    },
    {
      title: `${title} — ${firstName}'s slice`,
      code: `const ${firstName.toLowerCase()}Slice = createSlice({\n  name: "${firstName.toLowerCase()}",\n  initialState: { name: "${person}" },\n  reducers: {\n    update(state, action) { state.name = action.payload; }\n  }\n});`,
      output: `Slice for ${person}`,
      explanation: `${person} gets a dedicated slice demonstrating ${title.toLowerCase()}.`,
    },
    {
      title: `${title} — selector for ${firstName}`,
      code: `const select${firstName} = (state) => state.team.members["${person}"];\nconst member = useSelector(select${firstName});`,
      output: `${person}'s data from store`,
      explanation: `${person}'s data is read using a selector with ${title.toLowerCase()}.`,
    },
    {
      title: `${title} — async thunk for ${firstName}`,
      code: `const fetch${firstName} = createAsyncThunk(\n  "team/fetch${firstName}",\n  async () => ({ name: "${person}", role: "Learner" })\n);`,
      output: `{ name: "${person}", role: "Learner" }`,
      explanation: `${person}'s profile is loaded asynchronously via ${title.toLowerCase()}.`,
    },
    {
      title: `${title} — ${firstName}'s middleware`,
      code: `const logger = (store) => (next) => (action) => {\n  console.log("${person} dispatched:", action.type);\n  return next(action);\n};`,
      output: `${person} dispatched: team/update`,
      explanation: `${person}'s actions are logged through ${title.toLowerCase()} middleware.`,
    },
    {
      title: `${title} — normalized state for ${firstName}`,
      code: `const entities_${n} = {\n  members: { "${person}": { id: 1, name: "${person}" } },\n  ids: [1]\n};`,
      output: `Normalized ${person} in store`,
      explanation: `${person}'s data is normalized for efficient ${title.toLowerCase()} lookups.`,
    },
    {
      title: `${title} — persist ${firstName}'s progress`,
      code: `persistReducer(\n  { key: "${firstName.toLowerCase()}", storage },\n  ${firstName.toLowerCase()}Reducer\n);\n// Saves ${person}'s progress locally`,
      output: `${person}'s progress persisted`,
      explanation: `${person}'s learning progress is saved using ${title.toLowerCase()}.`,
    },
  ];
  return { person, ...templates[n - 1] };
}

function buildTanstackExample(person, firstName, title, topicId, n) {
  const templates = [
    {
      title: `${title} — fetch ${firstName}'s data`,
      code: `const { data, isLoading } = useQuery({\n  queryKey: ["member", "${person}"],\n  queryFn: () => fetch("/api/${firstName.toLowerCase()}").then(r => r.json())\n});`,
      output: `{ name: "${person}", topic: "${topicId}" }`,
      explanation: `${person}'s data is fetched and cached using ${title.toLowerCase()}.`,
    },
    {
      title: `${title} — ${firstName}'s query key`,
      code: `const queryKey_${n} = ["team", "${person}", "${topicId}"];\n// Unique cache key for ${person}'s ${topicId} data`,
      output: `["team", "${person}", "${topicId}"]`,
      explanation: `${person} gets a unique query key for ${title.toLowerCase()} caching.`,
    },
    {
      title: `${title} — mutation for ${firstName}`,
      code: `const update${firstName} = useMutation({\n  mutationFn: (data) => updateMember("${person}", data),\n  onSuccess: () => queryClient.invalidateQueries(["team"])\n});`,
      output: `${person} updated successfully`,
      explanation: `${person}'s profile is updated via ${title.toLowerCase()} mutation.`,
    },
    {
      title: `${title} — staleTime for ${firstName}`,
      code: `useQuery({\n  queryKey: ["progress", "${person}"],\n  queryFn: fetchProgress,\n  staleTime: 5 * 60 * 1000 // ${person}'s data fresh for 5 min\n});`,
      output: `Cached for 5 minutes`,
      explanation: `${person}'s progress uses staleTime in ${title.toLowerCase()} to reduce refetches.`,
    },
    {
      title: `${title} — prefetch ${firstName}'s next lesson`,
      code: `queryClient.prefetchQuery({\n  queryKey: ["lesson", "${topicId}"],\n  queryFn: () => fetchLesson("${person}")\n});`,
      output: `Next lesson prefetched for ${person}`,
      explanation: `${person}'s next lesson is prefetched using ${title.toLowerCase()}.`,
    },
    {
      title: `${title} — infinite scroll for ${firstName}`,
      code: `const { data, fetchNextPage } = useInfiniteQuery({\n  queryKey: ["posts", "${person}"],\n  queryFn: ({ pageParam }) => fetchPosts("${person}", pageParam)\n});`,
      output: `Paginated posts for ${person}`,
      explanation: `${person}'s feed uses infinite query with ${title.toLowerCase()}.`,
    },
    {
      title: `${title} — optimistic update for ${firstName}`,
      code: `useMutation({\n  mutationFn: likePost,\n  onMutate: async () => {\n    // Optimistically update ${person}'s UI\n    queryClient.setQueryData(["likes"], old => old + 1);\n  }\n});`,
      output: `UI updated instantly for ${person}`,
      explanation: `${person} sees instant UI feedback via ${title.toLowerCase()} optimistic updates.`,
    },
    {
      title: `${title} — offline cache for ${firstName}`,
      code: `useQuery({\n  queryKey: ["notes", "${person}"],\n  queryFn: fetchNotes,\n  networkMode: "offlineFirst" // ${person} can read offline\n});`,
      output: `${person}'s notes available offline`,
      explanation: `${person}'s notes work offline thanks to ${title.toLowerCase()} caching.`,
    },
  ];
  return { person, ...templates[n - 1] };
}

function buildDsaExample(person, firstName, title, topicId, n) {
  const templates = [
    { title: `${title} — ${firstName}'s brute force`, code: `// ${person}'s brute force for ${title}\nfunction solveBrute_${n}(arr) {\n  for (let i = 0; i < arr.length; i++) {\n    for (let j = i + 1; j < arr.length; j++) {\n      if (arr[i] + arr[j] === 0) return [i, j];\n    }\n  }\n}\n// O(n²) — ${person}`, output: "[0, 1]", explanation: `${person} starts with brute force to understand ${title.toLowerCase()}.` },
    { title: `${title} — ${firstName}'s optimal`, code: `// ${person}'s optimized ${title}\nfunction solveOpt_${n}(arr) {\n  const map = new Map();\n  for (let i = 0; i < arr.length; i++) {\n    const need = -arr[i];\n    if (map.has(need)) return [map.get(need), i];\n    map.set(arr[i], i);\n  }\n}\n// O(n) — ${person}`, output: "[0, 1]", explanation: `${person} optimizes to O(n) using hash map for ${title.toLowerCase()}.` },
    { title: `${title} — ${firstName}'s two-pointer`, code: `// ${person}'s two-pointer\nfunction twoPointer_${n}(arr, target) {\n  let l = 0, r = arr.length - 1;\n  while (l < r) {\n    const sum = arr[l] + arr[r];\n    if (sum === target) return [l, r];\n    sum < target ? l++ : r--;\n  }\n}\n// ${person}`, output: "[1, 3]", explanation: `${person} uses two pointers — key pattern in ${title.toLowerCase()}.` },
    { title: `${title} — ${firstName}'s sliding window`, code: `// ${person}'s sliding window\nfunction slidingWindow_${n}(s) {\n  const set = new Set();\n  let max = 0, l = 0;\n  for (let r = 0; r < s.length; r++) {\n    while (set.has(s[r])) set.delete(s[l++]);\n    set.add(s[r]);\n    max = Math.max(max, r - l + 1);\n  }\n  return max;\n}\n// ${person}`, output: "3", explanation: `${person} applies sliding window for ${title.toLowerCase()} problems.` },
    { title: `${title} — ${firstName}'s recursion`, code: `// ${person}'s recursive approach\nfunction recurse_${n}(n) {\n  if (n <= 1) return n;\n  return recurse_${n}(n - 1) + recurse_${n}(n - 2);\n}\n// Fibonacci — ${person}`, output: "8", explanation: `${person} solves ${title.toLowerCase()} with recursion and base cases.` },
    { title: `${title} — ${firstName}'s BFS`, code: `// ${person}'s BFS traversal\nfunction bfs_${n}(graph, start) {\n  const queue = [start], visited = new Set([start]);\n  while (queue.length) {\n    const node = queue.shift();\n    for (const next of graph[node] || []) {\n      if (!visited.has(next)) { visited.add(next); queue.push(next); }\n    }\n  }\n  return [...visited];\n}\n// ${person}`, output: "[A, B, C, D]", explanation: `${person} uses BFS for graph problems in ${title.toLowerCase()}.` },
    { title: `${title} — ${firstName}'s DFS`, code: `// ${person}'s DFS\nfunction dfs_${n}(node, visited = new Set()) {\n  visited.add(node);\n  for (const child of children[node] || []) {\n    if (!visited.has(child)) dfs_${n}(child, visited);\n  }\n  return visited;\n}\n// ${person}`, output: "All nodes visited", explanation: `${person} explores trees/graphs with DFS in ${title.toLowerCase()}.` },
    { title: `${title} — ${firstName}'s DP`, code: `// ${person}'s dynamic programming\nfunction dp_${n}(n) {\n  const dp = Array(n + 1).fill(0);\n  dp[1] = 1;\n  for (let i = 2; i <= n; i++) dp[i] = dp[i-1] + dp[i-2];\n  return dp[n];\n}\n// ${person}'s bottom-up DP`, output: "34", explanation: `${person} uses DP tabulation for ${title.toLowerCase()} optimization.` },
  ];
  return { person, ...templates[n - 1] };
}

function buildAiExample(person, firstName, title, topicId, n) {
  const templates = [
    { title: `${title} — ${firstName}'s first model`, code: `// ${person}'s simple linear model\nconst weights = [0.5, -0.3, 0.8];\nfunction predict_${n}(features) {\n  return features.reduce((sum, f, i) => sum + f * weights[i], 0);\n}\n// ${person}: predict_${n}([1, 0, 1])`, output: "1.3", explanation: `${person} builds a basic linear model to learn ${title.toLowerCase()}.` },
    { title: `${title} — ${firstName}'s training loop`, code: `// ${person}'s training\nfunction train_${n}(data, epochs = 100) {\n  let w = 0;\n  for (let e = 0; e < epochs; e++) {\n    for (const [x, y] of data) {\n      const pred = w * x;\n      w += 0.01 * (y - pred) * x; // gradient descent\n    }\n  }\n  return w;\n}\n// ${person}`, output: "w ≈ 2.0", explanation: `${person} trains a model with gradient descent for ${title.toLowerCase()}.` },
    { title: `${title} — ${firstName}'s neural net`, code: `// ${person}'s simple neural network\nfunction relu_${n}(x) { return Math.max(0, x); }\nfunction forward_${n}(input, w1, w2) {\n  const hidden = relu_${n}(input * w1);\n  return hidden * w2;\n}\n// ${person}'s forward pass`, output: "0.84", explanation: `${person} implements a forward pass for ${title.toLowerCase()}.` },
    { title: `${title} — ${firstName}'s NLP tokenize`, code: `// ${person}'s tokenizer\nfunction tokenize_${n}(text) {\n  return text.toLowerCase().split(/\\s+/).map((w, i) => ({ token: w, id: i }));\n}\n// tokenize_${n}("Hello ${person}")`, output: '[{token:"hello",id:0},{token:"${person.toLowerCase()}",id:1}]', explanation: `${person} tokenizes text for ${title.toLowerCase()} pipelines.` },
    { title: `${title} — ${firstName}'s prompt`, code: `// ${person}'s prompt engineering\nconst prompt_${n} = \`You are an AI tutor helping ${person} learn ${title}.\\nExplain simply with examples.\`;\nconst response = await fetch('/api/chat', {\n  method: 'POST',\n  body: JSON.stringify({ prompt: prompt_${n} })\n});\n// ${person}'s LLM call`, output: "AI explanation of " + title, explanation: `${person} crafts effective prompts for ${title.toLowerCase()}.` },
    { title: `${title} — ${firstName}'s TF.js`, code: `// ${person}'s TensorFlow.js\nimport * as tf from '@tensorflow/tfjs';\nconst model_${n} = tf.sequential({\n  layers: [\n    tf.layers.dense({ units: 10, activation: 'relu', inputShape: [5] }),\n    tf.layers.dense({ units: 1, activation: 'sigmoid' })\n  ]\n});\nmodel_${n}.compile({ optimizer: 'adam', loss: 'binaryCrossentropy' });\n// ${person}`, output: "Model compiled", explanation: `${person} builds a TF.js model for ${title.toLowerCase()} in the browser.` },
    { title: `${title} — ${firstName}'s embedding`, code: `// ${person}'s vector embedding\nfunction cosineSim_${n}(a, b) {\n  const dot = a.reduce((s, v, i) => s + v * b[i], 0);\n  return dot / (Math.hypot(...a) * Math.hypot(...b));\n}\n// Compare "${person}" vs "${title}" vectors`, output: "0.87 similarity", explanation: `${person} computes embeddings similarity for ${title.toLowerCase()}.` },
    { title: `${title} — ${firstName}'s AI React hook`, code: `// ${person}'s custom AI hook\nfunction useAI_${n}(prompt) {\n  const [result, setResult] = useState(null);\n  const [loading, setLoading] = useState(false);\n  useEffect(() => {\n    setLoading(true);\n    fetchAI(prompt).then(setResult).finally(() => setLoading(false));\n  }, [prompt]);\n  return { result, loading };\n}\n// ${person}'s React + ${title}`, output: "AI response in React", explanation: `${person} integrates ${title.toLowerCase()} into a React hook.` },
  ];
  return { person, ...templates[n - 1] };
}

export function createTopicComponentData(courseId, topicId, title) {
  const displayTitle = title || slugToTitle(topicId);
  return {
    courseId,
    topicId,
    folder: COURSE_FOLDERS[courseId],
    componentName: `${slugToPascal(topicId)}Topic`,
    title: displayTitle,
    course: COURSE_LABELS[courseId],
    accent: COURSE_ACCENTS[courseId],
    explanation: getBriefExplanation(courseId, displayTitle),
    syntax: getSyntax(courseId, topicId, displayTitle),
    examples: buildExamples(courseId, topicId, displayTitle),
  };
}

export { COURSE_FOLDERS, slugToPascal };
