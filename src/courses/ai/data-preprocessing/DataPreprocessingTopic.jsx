import TopicLesson from "../../shared/TopicLesson.jsx";

/**
 * Data Preprocessing — AI Projects
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = "Data Preprocessing covers modern AI concepts from beginner to expert. Learn with hands-on examples and real projects built by Tarun Tiwari, Prerna, Sonu, Kishan, Satyam, and the React Mastery team.";
const syntax = "// Data Preprocessing syntax\n// Used by Tarun Tiwari, Tushar, Ranjeet & team";
const examples = [
  {
    "person": "Tarun Tiwari",
    "title": "Data Preprocessing — Tarun's first model",
    "code": "// Tarun Tiwari's simple linear model\nconst weights = [0.5, -0.3, 0.8];\nfunction predict_1(features) {\n  return features.reduce((sum, f, i) => sum + f * weights[i], 0);\n}\n// Tarun Tiwari: predict_1([1, 0, 1])",
    "output": "1.3",
    "explanation": "Tarun Tiwari builds a basic linear model to learn data preprocessing."
  },
  {
    "person": "Tushar",
    "title": "Data Preprocessing — Tushar's training loop",
    "code": "// Tushar's training\nfunction train_2(data, epochs = 100) {\n  let w = 0;\n  for (let e = 0; e < epochs; e++) {\n    for (const [x, y] of data) {\n      const pred = w * x;\n      w += 0.01 * (y - pred) * x; // gradient descent\n    }\n  }\n  return w;\n}\n// Tushar",
    "output": "w ≈ 2.0",
    "explanation": "Tushar trains a model with gradient descent for data preprocessing."
  },
  {
    "person": "Ranjeet",
    "title": "Data Preprocessing — Ranjeet's neural net",
    "code": "// Ranjeet's simple neural network\nfunction relu_3(x) { return Math.max(0, x); }\nfunction forward_3(input, w1, w2) {\n  const hidden = relu_3(input * w1);\n  return hidden * w2;\n}\n// Ranjeet's forward pass",
    "output": "0.84",
    "explanation": "Ranjeet implements a forward pass for data preprocessing."
  },
  {
    "person": "Abhishek",
    "title": "Data Preprocessing — Abhishek's NLP tokenize",
    "code": "// Abhishek's tokenizer\nfunction tokenize_4(text) {\n  return text.toLowerCase().split(/\\s+/).map((w, i) => ({ token: w, id: i }));\n}\n// tokenize_4(\"Hello Abhishek\")",
    "output": "[{token:\"hello\",id:0},{token:\"${person.toLowerCase()}\",id:1}]",
    "explanation": "Abhishek tokenizes text for data preprocessing pipelines."
  },
  {
    "person": "Sonu",
    "title": "Data Preprocessing — Sonu's prompt",
    "code": "// Sonu's prompt engineering\nconst prompt_5 = `You are an AI tutor helping Sonu learn Data Preprocessing.\\nExplain simply with examples.`;\nconst response = await fetch('/api/chat', {\n  method: 'POST',\n  body: JSON.stringify({ prompt: prompt_5 })\n});\n// Sonu's LLM call",
    "output": "AI explanation of Data Preprocessing",
    "explanation": "Sonu crafts effective prompts for data preprocessing."
  },
  {
    "person": "Prerna",
    "title": "Data Preprocessing — Prerna's TF.js",
    "code": "// Prerna's TensorFlow.js\nimport * as tf from '@tensorflow/tfjs';\nconst model_6 = tf.sequential({\n  layers: [\n    tf.layers.dense({ units: 10, activation: 'relu', inputShape: [5] }),\n    tf.layers.dense({ units: 1, activation: 'sigmoid' })\n  ]\n});\nmodel_6.compile({ optimizer: 'adam', loss: 'binaryCrossentropy' });\n// Prerna",
    "output": "Model compiled",
    "explanation": "Prerna builds a TF.js model for data preprocessing in the browser."
  },
  {
    "person": "Kishan",
    "title": "Data Preprocessing — Kishan's embedding",
    "code": "// Kishan's vector embedding\nfunction cosineSim_7(a, b) {\n  const dot = a.reduce((s, v, i) => s + v * b[i], 0);\n  return dot / (Math.hypot(...a) * Math.hypot(...b));\n}\n// Compare \"Kishan\" vs \"Data Preprocessing\" vectors",
    "output": "0.87 similarity",
    "explanation": "Kishan computes embeddings similarity for data preprocessing."
  },
  {
    "person": "Satyam",
    "title": "Data Preprocessing — Satyam's AI React hook",
    "code": "// Satyam's custom AI hook\nfunction useAI_8(prompt) {\n  const [result, setResult] = useState(null);\n  const [loading, setLoading] = useState(false);\n  useEffect(() => {\n    setLoading(true);\n    fetchAI(prompt).then(setResult).finally(() => setLoading(false));\n  }, [prompt]);\n  return { result, loading };\n}\n// Satyam's React + Data Preprocessing",
    "output": "AI response in React",
    "explanation": "Satyam integrates data preprocessing into a React hook."
  }
];

export default function DataPreprocessingTopic() {
  return (
    <TopicLesson
      title="Data Preprocessing"
      course="AI Projects"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#8b5cf6"
    />
  );
}
