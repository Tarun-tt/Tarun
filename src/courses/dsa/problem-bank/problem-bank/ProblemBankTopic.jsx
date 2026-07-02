import DsaProblemBank from "../../../../components/DsaProblemBank.jsx";
import TopicLesson from "../../../../shared/TopicLesson.jsx";

const explanation =
  "This is the complete DSA problem bank with 105+ JavaScript solutions covering arrays, strings, trees, graphs, dynamic programming, and frontend-specific patterns like debounce, LRU cache, and virtual lists. Each problem includes starter code and a full solution by Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, or Satyam.";

export default function ProblemBankTopic() {
  return (
    <>
      <TopicLesson
        title="105+ Problems with Solutions"
        course="DSA for Frontend"
        explanation={explanation}
        syntax={`// 105+ problems across 9 categories\n// Easy → Medium → Hard\n// Filter by category, difficulty, or search`}
        examples={[]}
        accent="#dc2626"
      />
      <DsaProblemBank />
    </>
  );
}
