import TopicLesson from "../../../shared/TopicLesson.jsx";

/**
 * Sentiment Analysis Project — AI Projects
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = "Sentiment Analysis Project covers modern AI concepts from beginner to expert. Learn with hands-on examples and real projects built by Tarun Tiwari, Prerna, Sonu, Kishan, Satyam, and the React Mastery team.";
const syntax = "// Sentiment Analysis Project syntax\n// Used by Tarun Tiwari, Tushar, Ranjeet & team";
const examples = [
  {
    "person": "Tarun Tiwari",
    "title": "Sentiment Analysis Project — Tarun's first model",
    "code": "// Tarun Tiwari's simple linear model\nconst weights = [0.5, -0.3, 0.8];\nfunction predict_1(features) {\n  return features.reduce((sum, f, i) => sum + f * weights[i], 0);\n}\n// Tarun Tiwari: predict_1([1, 0, 1])",
    "output": "1.3",
    "explanation": "Tarun Tiwari builds a basic linear model to learn sentiment analysis project."
  },
  {
    "person": "Tushar",
    "title": "Sentiment Analysis Project — Tushar's training loop",
    "code": "// Tushar's training\nfunction train_2(data, epochs = 100) {\n  let w = 0;\n  for (let e = 0; e < epochs; e++) {\n    for (const [x, y] of data) {\n      const pred = w * x;\n      w += 0.01 * (y - pred) * x; // gradient descent\n    }\n  }\n  return w;\n}\n// Tushar",
    "output": "w ≈ 2.0",
    "explanation": "Tushar trains a model with gradient descent for sentiment analysis project."
  },
  {
    "person": "Ranjeet",
    "title": "Sentiment Analysis Project — Ranjeet's neural net",
    "code": "// Ranjeet's simple neural network\nfunction relu_3(x) { return Math.max(0, x); }\nfunction forward_3(input, w1, w2) {\n  const hidden = relu_3(input * w1);\n  return hidden * w2;\n}\n// Ranjeet's forward pass",
    "output": "0.84",
    "explanation": "Ranjeet implements a forward pass for sentiment analysis project."
  },
  {
    "person": "Abhishek",
    "title": "Sentiment Analysis Project — Abhishek's NLP tokenize",
    "code": "// Abhishek's tokenizer\nfunction tokenize_4(text) {\n  return text.toLowerCase().split(/\\s+/).map((w, i) => ({ token: w, id: i }));\n}\n// tokenize_4(\"Hello Abhishek\")",
    "output": "[{token:\"hello\",id:0},{token:\"${person.toLowerCase()}\",id:1}]",
    "explanation": "Abhishek tokenizes text for sentiment analysis project pipelines."
  },
  {
    "person": "Sonu",
    "title": "Sentiment Analysis Project — Sonu's prompt",
    "code": "// Sonu's prompt engineering\nconst prompt_5 = `You are an AI tutor helping Sonu learn Sentiment Analysis Project.\\nExplain simply with examples.`;\nconst response = await fetch('/api/chat', {\n  method: 'POST',\n  body: JSON.stringify({ prompt: prompt_5 })\n});\n// Sonu's LLM call",
    "output": "AI explanation of Sentiment Analysis Project",
    "explanation": "Sonu crafts effective prompts for sentiment analysis project."
  },
  {
    "person": "Prerna",
    "title": "Sentiment Analysis Project — Prerna's TF.js",
    "code": "// Prerna's TensorFlow.js\nimport * as tf from '@tensorflow/tfjs';\nconst model_6 = tf.sequential({\n  layers: [\n    tf.layers.dense({ units: 10, activation: 'relu', inputShape: [5] }),\n    tf.layers.dense({ units: 1, activation: 'sigmoid' })\n  ]\n});\nmodel_6.compile({ optimizer: 'adam', loss: 'binaryCrossentropy' });\n// Prerna",
    "output": "Model compiled",
    "explanation": "Prerna builds a TF.js model for sentiment analysis project in the browser."
  },
  {
    "person": "Kishan",
    "title": "Sentiment Analysis Project — Kishan's embedding",
    "code": "// Kishan's vector embedding\nfunction cosineSim_7(a, b) {\n  const dot = a.reduce((s, v, i) => s + v * b[i], 0);\n  return dot / (Math.hypot(...a) * Math.hypot(...b));\n}\n// Compare \"Kishan\" vs \"Sentiment Analysis Project\" vectors",
    "output": "0.87 similarity",
    "explanation": "Kishan computes embeddings similarity for sentiment analysis project."
  },
  {
    "person": "Satyam",
    "title": "Sentiment Analysis Project — Satyam's AI React hook",
    "code": "// Satyam's custom AI hook\nfunction useAI_8(prompt) {\n  const [result, setResult] = useState(null);\n  const [loading, setLoading] = useState(false);\n  useEffect(() => {\n    setLoading(true);\n    fetchAI(prompt).then(setResult).finally(() => setLoading(false));\n  }, [prompt]);\n  return { result, loading };\n}\n// Satyam's React + Sentiment Analysis Project",
    "output": "AI response in React",
    "explanation": "Satyam integrates sentiment analysis project into a React hook."
  }
];

export default function ProjectSentimentTopic() {
  return (
    <TopicLesson
      title="Sentiment Analysis Project"
      course="AI Projects"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#8b5cf6"
    />
  );
}
