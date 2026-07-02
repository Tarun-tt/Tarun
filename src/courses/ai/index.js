export { default as IntroToAiTopic } from "./intro-to-ai/IntroToAiTopic.jsx";
export { default as MlBasicsTopic } from "./ml-basics/MlBasicsTopic.jsx";
export { default as DataPreprocessingTopic } from "./data-preprocessing/DataPreprocessingTopic.jsx";
export { default as ModelEvaluationTopic } from "./model-evaluation/ModelEvaluationTopic.jsx";
export { default as NeuralNetworksTopic } from "./neural-networks/NeuralNetworksTopic.jsx";
export { default as DeepLearningTopic } from "./deep-learning/DeepLearningTopic.jsx";
export { default as CnnTopic } from "./cnn/CnnTopic.jsx";
export { default as RnnLstmTopic } from "./rnn-lstm/RnnLstmTopic.jsx";
export { default as NlpBasicsTopic } from "./nlp-basics/NlpBasicsTopic.jsx";
export { default as TransformersTopic } from "./transformers/TransformersTopic.jsx";
export { default as LlmsTopic } from "./llms/LlmsTopic.jsx";
export { default as PromptEngineeringTopic } from "./prompt-engineering/PromptEngineeringTopic.jsx";
export { default as GenerativeAiTopic } from "./generative-ai/GenerativeAiTopic.jsx";
export { default as TensorflowJsTopic } from "./tensorflow-js/TensorflowJsTopic.jsx";
export { default as OpenaiApiTopic } from "./openai-api/OpenaiApiTopic.jsx";
export { default as AiReactTopic } from "./ai-react/AiReactTopic.jsx";
export { default as VectorEmbeddingsTopic } from "./vector-embeddings/VectorEmbeddingsTopic.jsx";
export { default as ProjectChatbotTopic } from "./project-chatbot/ProjectChatbotTopic.jsx";
export { default as ProjectSentimentTopic } from "./project-sentiment/ProjectSentimentTopic.jsx";
export { default as ProjectImageClassifierTopic } from "./project-image-classifier/ProjectImageClassifierTopic.jsx";
export { default as ProjectRecommendationTopic } from "./project-recommendation/ProjectRecommendationTopic.jsx";
export { default as ProjectCodeAssistantTopic } from "./project-code-assistant/ProjectCodeAssistantTopic.jsx";
export { default as ProjectRagTopic } from "./project-rag/ProjectRagTopic.jsx";

export const topicRegistry = {
  "intro-to-ai": () => import("./intro-to-ai/IntroToAiTopic.jsx"),
  "ml-basics": () => import("./ml-basics/MlBasicsTopic.jsx"),
  "data-preprocessing": () => import("./data-preprocessing/DataPreprocessingTopic.jsx"),
  "model-evaluation": () => import("./model-evaluation/ModelEvaluationTopic.jsx"),
  "neural-networks": () => import("./neural-networks/NeuralNetworksTopic.jsx"),
  "deep-learning": () => import("./deep-learning/DeepLearningTopic.jsx"),
  "cnn": () => import("./cnn/CnnTopic.jsx"),
  "rnn-lstm": () => import("./rnn-lstm/RnnLstmTopic.jsx"),
  "nlp-basics": () => import("./nlp-basics/NlpBasicsTopic.jsx"),
  "transformers": () => import("./transformers/TransformersTopic.jsx"),
  "llms": () => import("./llms/LlmsTopic.jsx"),
  "prompt-engineering": () => import("./prompt-engineering/PromptEngineeringTopic.jsx"),
  "generative-ai": () => import("./generative-ai/GenerativeAiTopic.jsx"),
  "tensorflow-js": () => import("./tensorflow-js/TensorflowJsTopic.jsx"),
  "openai-api": () => import("./openai-api/OpenaiApiTopic.jsx"),
  "ai-react": () => import("./ai-react/AiReactTopic.jsx"),
  "vector-embeddings": () => import("./vector-embeddings/VectorEmbeddingsTopic.jsx"),
  "project-chatbot": () => import("./project-chatbot/ProjectChatbotTopic.jsx"),
  "project-sentiment": () => import("./project-sentiment/ProjectSentimentTopic.jsx"),
  "project-image-classifier": () => import("./project-image-classifier/ProjectImageClassifierTopic.jsx"),
  "project-recommendation": () => import("./project-recommendation/ProjectRecommendationTopic.jsx"),
  "project-code-assistant": () => import("./project-code-assistant/ProjectCodeAssistantTopic.jsx"),
  "project-rag": () => import("./project-rag/ProjectRagTopic.jsx"),
};
