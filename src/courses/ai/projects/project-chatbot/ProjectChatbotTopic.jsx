import AiProjects from "../../../../components/AiProjects.jsx";
import TopicLesson from "../../../../shared/TopicLesson.jsx";

const explanation =
  "Build real AI applications from scratch. This section contains 8 hands-on projects led by Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, and Satyam — from beginner chatbots to expert RAG systems and AI dashboards.";

export default function ProjectChatbotTopic() {
  return (
    <>
      <TopicLesson
        title="AI Projects Hub"
        course="AI Projects"
        explanation={explanation}
        syntax={`// Projects: Chatbot, Sentiment, Image Classifier,\n// Recommendation, Code Assistant, RAG, Voice AI, Dashboard`}
        examples={[]}
        accent="#8b5cf6"
      />
      <AiProjects />
    </>
  );
}
