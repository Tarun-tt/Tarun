import TopicLesson from "../../shared/TopicLesson.jsx";

/**
 * useQuery — TanStack Query
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = "useQuery is a TanStack Query feature for managing server state. It simplifies fetching, caching, and syncing remote data so your UI stays fast and up to date.";
const syntax = "const { data } = useQuery({\n  queryKey: [\"team\"],\n  queryFn: () => fetch(\"/api/team\"),\n});";
const examples = [
  {
    "person": "Tarun Tiwari",
    "title": "useQuery — fetch Tarun's data",
    "code": "const { data, isLoading } = useQuery({\n  queryKey: [\"member\", \"Tarun Tiwari\"],\n  queryFn: () => fetch(\"/api/tarun\").then(r => r.json())\n});",
    "output": "{ name: \"Tarun Tiwari\", topic: \"use-query\" }",
    "explanation": "Tarun Tiwari's data is fetched and cached using usequery."
  },
  {
    "person": "Tushar",
    "title": "useQuery — Tushar's query key",
    "code": "const queryKey_2 = [\"team\", \"Tushar\", \"use-query\"];\n// Unique cache key for Tushar's use-query data",
    "output": "[\"team\", \"Tushar\", \"use-query\"]",
    "explanation": "Tushar gets a unique query key for usequery caching."
  },
  {
    "person": "Ranjeet",
    "title": "useQuery — mutation for Ranjeet",
    "code": "const updateRanjeet = useMutation({\n  mutationFn: (data) => updateMember(\"Ranjeet\", data),\n  onSuccess: () => queryClient.invalidateQueries([\"team\"])\n});",
    "output": "Ranjeet updated successfully",
    "explanation": "Ranjeet's profile is updated via usequery mutation."
  },
  {
    "person": "Abhishek",
    "title": "useQuery — staleTime for Abhishek",
    "code": "useQuery({\n  queryKey: [\"progress\", \"Abhishek\"],\n  queryFn: fetchProgress,\n  staleTime: 5 * 60 * 1000 // Abhishek's data fresh for 5 min\n});",
    "output": "Cached for 5 minutes",
    "explanation": "Abhishek's progress uses staleTime in usequery to reduce refetches."
  },
  {
    "person": "Sonu",
    "title": "useQuery — prefetch Sonu's next lesson",
    "code": "queryClient.prefetchQuery({\n  queryKey: [\"lesson\", \"use-query\"],\n  queryFn: () => fetchLesson(\"Sonu\")\n});",
    "output": "Next lesson prefetched for Sonu",
    "explanation": "Sonu's next lesson is prefetched using usequery."
  },
  {
    "person": "Prerna",
    "title": "useQuery — infinite scroll for Prerna",
    "code": "const { data, fetchNextPage } = useInfiniteQuery({\n  queryKey: [\"posts\", \"Prerna\"],\n  queryFn: ({ pageParam }) => fetchPosts(\"Prerna\", pageParam)\n});",
    "output": "Paginated posts for Prerna",
    "explanation": "Prerna's feed uses infinite query with usequery."
  },
  {
    "person": "Kishan",
    "title": "useQuery — optimistic update for Kishan",
    "code": "useMutation({\n  mutationFn: likePost,\n  onMutate: async () => {\n    // Optimistically update Kishan's UI\n    queryClient.setQueryData([\"likes\"], old => old + 1);\n  }\n});",
    "output": "UI updated instantly for Kishan",
    "explanation": "Kishan sees instant UI feedback via usequery optimistic updates."
  },
  {
    "person": "Satyam",
    "title": "useQuery — offline cache for Satyam",
    "code": "useQuery({\n  queryKey: [\"notes\", \"Satyam\"],\n  queryFn: fetchNotes,\n  networkMode: \"offlineFirst\" // Satyam can read offline\n});",
    "output": "Satyam's notes available offline",
    "explanation": "Satyam's notes work offline thanks to usequery caching."
  }
];

export default function UseQueryTopic() {
  return (
    <TopicLesson
      title="useQuery"
      course="TanStack Query"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#0f766e"
    />
  );
}
