import TopicLesson from "../../../shared/TopicLesson.jsx";

/**
 * Infinite Query — TanStack Query
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = "Infinite Query is a TanStack Query feature for managing server state. It simplifies fetching, caching, and syncing remote data so your UI stays fast and up to date.";
const syntax = "// Infinite Query syntax\n// Used by Tarun Tiwari, Tushar, Ranjeet & team";
const examples = [
  {
    "person": "Tarun Tiwari",
    "title": "Infinite Query — fetch Tarun's data",
    "code": "const { data, isLoading } = useQuery({\n  queryKey: [\"member\", \"Tarun Tiwari\"],\n  queryFn: () => fetch(\"/api/tarun\").then(r => r.json())\n});",
    "output": "{ name: \"Tarun Tiwari\", topic: \"infinite-query\" }",
    "explanation": "Tarun Tiwari's data is fetched and cached using infinite query."
  },
  {
    "person": "Tushar",
    "title": "Infinite Query — Tushar's query key",
    "code": "const queryKey_2 = [\"team\", \"Tushar\", \"infinite-query\"];\n// Unique cache key for Tushar's infinite-query data",
    "output": "[\"team\", \"Tushar\", \"infinite-query\"]",
    "explanation": "Tushar gets a unique query key for infinite query caching."
  },
  {
    "person": "Ranjeet",
    "title": "Infinite Query — mutation for Ranjeet",
    "code": "const updateRanjeet = useMutation({\n  mutationFn: (data) => updateMember(\"Ranjeet\", data),\n  onSuccess: () => queryClient.invalidateQueries([\"team\"])\n});",
    "output": "Ranjeet updated successfully",
    "explanation": "Ranjeet's profile is updated via infinite query mutation."
  },
  {
    "person": "Abhishek",
    "title": "Infinite Query — staleTime for Abhishek",
    "code": "useQuery({\n  queryKey: [\"progress\", \"Abhishek\"],\n  queryFn: fetchProgress,\n  staleTime: 5 * 60 * 1000 // Abhishek's data fresh for 5 min\n});",
    "output": "Cached for 5 minutes",
    "explanation": "Abhishek's progress uses staleTime in infinite query to reduce refetches."
  },
  {
    "person": "Sonu",
    "title": "Infinite Query — prefetch Sonu's next lesson",
    "code": "queryClient.prefetchQuery({\n  queryKey: [\"lesson\", \"infinite-query\"],\n  queryFn: () => fetchLesson(\"Sonu\")\n});",
    "output": "Next lesson prefetched for Sonu",
    "explanation": "Sonu's next lesson is prefetched using infinite query."
  },
  {
    "person": "Prerna",
    "title": "Infinite Query — infinite scroll for Prerna",
    "code": "const { data, fetchNextPage } = useInfiniteQuery({\n  queryKey: [\"posts\", \"Prerna\"],\n  queryFn: ({ pageParam }) => fetchPosts(\"Prerna\", pageParam)\n});",
    "output": "Paginated posts for Prerna",
    "explanation": "Prerna's feed uses infinite query with infinite query."
  },
  {
    "person": "Kishan",
    "title": "Infinite Query — optimistic update for Kishan",
    "code": "useMutation({\n  mutationFn: likePost,\n  onMutate: async () => {\n    // Optimistically update Kishan's UI\n    queryClient.setQueryData([\"likes\"], old => old + 1);\n  }\n});",
    "output": "UI updated instantly for Kishan",
    "explanation": "Kishan sees instant UI feedback via infinite query optimistic updates."
  },
  {
    "person": "Satyam",
    "title": "Infinite Query — offline cache for Satyam",
    "code": "useQuery({\n  queryKey: [\"notes\", \"Satyam\"],\n  queryFn: fetchNotes,\n  networkMode: \"offlineFirst\" // Satyam can read offline\n});",
    "output": "Satyam's notes available offline",
    "explanation": "Satyam's notes work offline thanks to infinite query caching."
  }
];

export default function InfiniteQueryTopic() {
  return (
    <TopicLesson
      title="Infinite Query"
      course="TanStack Query"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#0f766e"
    />
  );
}
