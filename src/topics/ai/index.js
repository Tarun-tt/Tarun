import introToAi from "./intro-to-ai/index.js";
import mlBasics from "./ml-basics/index.js";
import dataPreprocessing from "./data-preprocessing/index.js";
import modelEvaluation from "./model-evaluation/index.js";
import neuralNetworks from "./neural-networks/index.js";
import deepLearning from "./deep-learning/index.js";
import cnn from "./cnn/index.js";
import rnnLstm from "./rnn-lstm/index.js";
import nlpBasics from "./nlp-basics/index.js";
import transformers from "./transformers/index.js";
import llms from "./llms/index.js";
import promptEngineering from "./prompt-engineering/index.js";
import generativeAi from "./generative-ai/index.js";
import tensorflowJs from "./tensorflow-js/index.js";
import openaiApi from "./openai-api/index.js";
import aiReact from "./ai-react/index.js";
import vectorEmbeddings from "./vector-embeddings/index.js";
import projectChatbot from "./project-chatbot/index.js";
import projectSentiment from "./project-sentiment/index.js";
import projectImageClassifier from "./project-image-classifier/index.js";
import projectRecommendation from "./project-recommendation/index.js";
import projectCodeAssistant from "./project-code-assistant/index.js";
import projectRag from "./project-rag/index.js";

const topics = {
  "intro-to-ai": introToAi,
  "ml-basics": mlBasics,
  "data-preprocessing": dataPreprocessing,
  "model-evaluation": modelEvaluation,
  "neural-networks": neuralNetworks,
  "deep-learning": deepLearning,
  "cnn": cnn,
  "rnn-lstm": rnnLstm,
  "nlp-basics": nlpBasics,
  "transformers": transformers,
  "llms": llms,
  "prompt-engineering": promptEngineering,
  "generative-ai": generativeAi,
  "tensorflow-js": tensorflowJs,
  "openai-api": openaiApi,
  "ai-react": aiReact,
  "vector-embeddings": vectorEmbeddings,
  "project-chatbot": projectChatbot,
  "project-sentiment": projectSentiment,
  "project-image-classifier": projectImageClassifier,
  "project-recommendation": projectRecommendation,
  "project-code-assistant": projectCodeAssistant,
  "project-rag": projectRag,
};

export default topics;
export { topics };
