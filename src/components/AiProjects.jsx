import { useState } from "react";
import { motion } from "framer-motion";
import {
  Box, Chip, Collapse, Paper, Stack, Typography, alpha,
} from "@mui/material";
import { Bot, ChevronDown, ChevronUp, Code2, Rocket, Sparkles } from "lucide-react";

const TEAM = ["Tarun Tiwari", "Tushar", "Ranjeet", "Abhishek", "Sonu", "Prerna", "Kishan", "Satyam"];

const AI_PROJECTS = [
  {
    id: "chatbot",
    title: "AI Chatbot",
    lead: "Tarun Tiwari",
    level: "Beginner",
    description: "Build a React chatbot using OpenAI API with streaming responses.",
    stack: ["React", "OpenAI API", "Tailwind"],
    steps: ["Set up API key", "Create chat UI", "Stream responses", "Add message history"],
    code: `import { useState } from 'react';\n\nfunction Chatbot() {\n  const [messages, setMessages] = useState([]);\n  const [input, setInput] = useState('');\n\n  async function send() {\n    const res = await fetch('/api/chat', {\n      method: 'POST',\n      body: JSON.stringify({ message: input }),\n    });\n    const data = await res.json();\n    setMessages(m => [...m, { role: 'user', text: input }, { role: 'ai', text: data.reply }]);\n    setInput('');\n  }\n\n  return (\n    <div>\n      {messages.map((m, i) => <p key={i}>{m.role}: {m.text}</p>)}\n      <input value={input} onChange={e => setInput(e.target.value)} />\n      <button onClick={send}>Send</button>\n    </div>\n  );\n}`,
  },
  {
    id: "sentiment",
    title: "Sentiment Analysis",
    lead: "Tushar",
    level: "Beginner",
    description: "Classify text as positive, negative, or neutral using TensorFlow.js.",
    stack: ["TensorFlow.js", "React", "NLP"],
    steps: ["Load pre-trained model", "Tokenize input", "Run inference", "Display sentiment score"],
    code: `import * as tf from '@tensorflow/tfjs';\n\nasync function analyzeSentiment(text) {\n  const model = await tf.loadLayersModel('/models/sentiment/model.json');\n  const tensor = tf.tensor2d([[encode(text)]]);\n  const prediction = model.predict(tensor);\n  const score = (await prediction.data())[0];\n  return score > 0.5 ? 'Positive' : 'Negative';\n}\n// Tushar's sentiment analyzer`,
  },
  {
    id: "image-classifier",
    title: "Image Classifier",
    lead: "Ranjeet",
    level: "Intermediate",
    description: "Upload images and classify them using MobileNet in the browser.",
    stack: ["TensorFlow.js", "MobileNet", "React"],
    steps: ["Load MobileNet", "Handle file upload", "Preprocess image", "Show top-3 predictions"],
    code: `import * as mobilenet from '@tensorflow-models/mobilenet';\n\nasync function classifyImage(imgElement) {\n  const model = await mobilenet.load();\n  const predictions = await model.classify(imgElement);\n  return predictions; // [{className, probability}]\n}\n// Ranjeet's image classifier`,
  },
  {
    id: "recommendation",
    title: "Recommendation System",
    lead: "Abhishek",
    level: "Intermediate",
    description: "Content-based recommendation engine for a learning platform.",
    stack: ["JavaScript", "Cosine Similarity", "React"],
    steps: ["Build user profile vector", "Compute similarity", "Rank courses", "Display recommendations"],
    code: `function cosineSimilarity(a, b) {\n  const dot = a.reduce((s, v, i) => s + v * b[i], 0);\n  const magA = Math.sqrt(a.reduce((s, v) => s + v * v, 0));\n  const magB = Math.sqrt(b.reduce((s, v) => s + v * v, 0));\n  return dot / (magA * magB);\n}\n\nfunction recommend(userVec, courses) {\n  return courses\n    .map(c => ({ ...c, score: cosineSimilarity(userVec, c.vector) }))\n    .sort((a, b) => b.score - a.score)\n    .slice(0, 5);\n}\n// Abhishek's recommender`,
  },
  {
    id: "code-assistant",
    title: "AI Code Assistant",
    lead: "Sonu",
    level: "Advanced",
    description: "Monaco editor with AI-powered code suggestions and explanations.",
    stack: ["Monaco Editor", "OpenAI", "React"],
    steps: ["Integrate Monaco", "Send code context to AI", "Stream suggestions", "Apply diff patches"],
    code: `async function getCodeSuggestion(code, language) {\n  const res = await fetch('/api/complete', {\n    method: 'POST',\n    body: JSON.stringify({\n      prompt: \`Complete this \${language} code:\\n\${code}\`,\n      max_tokens: 200,\n    }),\n  });\n  return res.json();\n}\n// Sonu's AI code assistant`,
  },
  {
    id: "rag",
    title: "RAG Document Q&A",
    lead: "Prerna",
    level: "Advanced",
    description: "Retrieval-Augmented Generation — ask questions about uploaded documents.",
    stack: ["OpenAI Embeddings", "Vector DB", "React"],
    steps: ["Chunk documents", "Generate embeddings", "Store in vector DB", "Retrieve + generate answers"],
    code: `async function ragQuery(question, documents) {\n  const qEmbedding = await getEmbedding(question);\n  const relevant = documents\n    .map(d => ({ ...d, sim: cosineSim(qEmbedding, d.embedding) }))\n    .sort((a, b) => b.sim - a.sim)\n    .slice(0, 3);\n  const context = relevant.map(d => d.text).join('\\n');\n  return await generateAnswer(question, context);\n}\n// Prerna's RAG system`,
  },
  {
    id: "voice-assistant",
    title: "Voice AI Assistant",
    lead: "Kishan",
    level: "Intermediate",
    description: "Speech-to-text and text-to-speech AI assistant in the browser.",
    stack: ["Web Speech API", "OpenAI", "React"],
    steps: ["Capture microphone", "Transcribe speech", "Send to LLM", "Speak response"],
    code: `const recognition = new webkitSpeechRecognition();\nrecognition.onresult = async (e) => {\n  const transcript = e.results[0][0].transcript;\n  const reply = await askAI(transcript);\n  const utterance = new SpeechSynthesisUtterance(reply);\n  speechSynthesis.speak(utterance);\n};\nrecognition.start();\n// Kishan's voice assistant`,
  },
  {
    id: "ai-dashboard",
    title: "AI Analytics Dashboard",
    lead: "Satyam",
    level: "Expert",
    description: "Real-time AI model metrics dashboard with predictions visualization.",
    stack: ["React", "Chart.js", "TensorFlow.js", "WebSocket"],
    steps: ["Connect model API", "Stream predictions", "Visualize accuracy", "Alert on drift"],
    code: `function AIDashboard() {\n  const [metrics, setMetrics] = useState({ accuracy: 0, latency: 0 });\n\n  useEffect(() => {\n    const ws = new WebSocket('ws://localhost:3001/metrics');\n    ws.onmessage = (e) => setMetrics(JSON.parse(e.data));\n    return () => ws.close();\n  }, []);\n\n  return (\n    <div>\n      <h2>AI Model Metrics</h2>\n      <p>Accuracy: {(metrics.accuracy * 100).toFixed(1)}%</p>\n      <p>Latency: {metrics.latency}ms</p>\n    </div>\n  );\n}\n// Satyam's AI dashboard`,
  },
];

function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }}>
      <Paper elevation={0} sx={{ p: 3, borderRadius: 4, border: "1px solid", borderColor: open ? alpha("#8b5cf6", 0.4) : "divider", mb: 2 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start" onClick={() => setOpen(!open)} sx={{ cursor: "pointer" }}>
          <Box>
            <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
              <Chip icon={<Rocket size={14} />} label={project.level} size="small" sx={{ bgcolor: alpha("#8b5cf6", 0.1), color: "#8b5cf6" }} />
              <Chip label={`Lead: ${project.lead}`} size="small" variant="outlined" />
            </Stack>
            <Typography variant="h6" fontWeight={700}>{project.title}</Typography>
            <Typography color="text.secondary" sx={{ mt: 0.5 }}>{project.description}</Typography>
            <Stack direction="row" spacing={0.5} sx={{ mt: 1 }} flexWrap="wrap" useFlexGap>
              {project.stack.map((s) => <Chip key={s} label={s} size="small" variant="outlined" />)}
            </Stack>
          </Box>
          {open ? <ChevronUp /> : <ChevronDown />}
        </Stack>
        <Collapse in={open}>
          <Box sx={{ mt: 2 }}>
            <Typography fontWeight={600} gutterBottom>Steps:</Typography>
            <Stack spacing={0.5} sx={{ mb: 2 }}>
              {project.steps.map((step, i) => (
                <Typography key={i} variant="body2" color="text.secondary">{i + 1}. {step}</Typography>
              ))}
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
              <Code2 size={16} />
              <Typography fontWeight={600}>Starter Code</Typography>
            </Stack>
            <Box component="pre" sx={{ p: 2, borderRadius: 2, bgcolor: "#0f172a", color: "#e2e8f0", fontSize: "0.8rem", overflow: "auto" }}>
              {project.code}
            </Box>
          </Box>
        </Collapse>
      </Paper>
    </motion.div>
  );
}

export default function AiProjects() {
  return (
    <Stack spacing={3}>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <Paper sx={{ p: 3, borderRadius: 4, background: "linear-gradient(135deg, #8b5cf620, #fff)" }}>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
            <Bot size={24} color="#8b5cf6" />
            <Typography variant="h5" fontWeight={800}>AI Projects</Typography>
            <Sparkles size={18} color="#8b5cf6" />
          </Stack>
          <Typography color="text.secondary">
            Hands-on AI projects from beginner to expert. Built by Tarun Tiwari, Tushar, Ranjeet,
            Abhishek, Sonu, Prerna, Kishan, and Satyam.
          </Typography>
        </Paper>
      </motion.div>
      {AI_PROJECTS.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
    </Stack>
  );
}

export { AI_PROJECTS, TEAM as AI_TEAM };
