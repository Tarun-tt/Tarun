import TopicLesson from "../../../shared/TopicLesson.jsx";

/**
 * Parallel Queries — TanStack Query
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = "Parallel Queries is a TanStack Query feature for managing server state. It simplifies fetching, caching, and syncing remote data so your UI stays fast and up to date.";
const syntax = "// Parallel Queries syntax\n// Used by Tarun Tiwari, Tushar, Ranjeet & team";
const examples = [
  {
    "person": "Tarun Tiwari",
    "title": "Parallel Queries — fetch Tarun's data",
    "code": "const { data, isLoading } = useQuery({\n  queryKey: [\"member\", \"Tarun Tiwari\"],\n  queryFn: () => fetch(\"/api/tarun\").then(r => r.json())\n});",
    "output": "{ name: \"Tarun Tiwari\", topic: \"parallel-queries\" }",
    "explanation": "Tarun Tiwari's data is fetched and cached using parallel queries."
  },
  {
    "person": "Tushar",
    "title": "Parallel Queries — Tushar's query key",
    "code": "const queryKey_2 = [\"team\", \"Tushar\", \"parallel-queries\"];\n// Unique cache key for Tushar's parallel-queries data",
    "output": "[\"team\", \"Tushar\", \"parallel-queries\"]",
    "explanation": "Tushar gets a unique query key for parallel queries caching."
  },
  {
    "person": "Ranjeet",
    "title": "Parallel Queries — mutation for Ranjeet",
    "code": "const updateRanjeet = useMutation({\n  mutationFn: (data) => updateMember(\"Ranjeet\", data),\n  onSuccess: () => queryClient.invalidateQueries([\"team\"])\n});",
    "output": "Ranjeet updated successfully",
    "explanation": "Ranjeet's profile is updated via parallel queries mutation."
  },
  {
    "person": "Abhishek",
    "title": "Parallel Queries — staleTime for Abhishek",
    "code": "useQuery({\n  queryKey: [\"progress\", \"Abhishek\"],\n  queryFn: fetchProgress,\n  staleTime: 5 * 60 * 1000 // Abhishek's data fresh for 5 min\n});",
    "output": "Cached for 5 minutes",
    "explanation": "Abhishek's progress uses staleTime in parallel queries to reduce refetches."
  },
  {
    "person": "Sonu",
    "title": "Parallel Queries — prefetch Sonu's next lesson",
    "code": "queryClient.prefetchQuery({\n  queryKey: [\"lesson\", \"parallel-queries\"],\n  queryFn: () => fetchLesson(\"Sonu\")\n});",
    "output": "Next lesson prefetched for Sonu",
    "explanation": "Sonu's next lesson is prefetched using parallel queries."
  },
  {
    "person": "Prerna",
    "title": "Parallel Queries — infinite scroll for Prerna",
    "code": "const { data, fetchNextPage } = useInfiniteQuery({\n  queryKey: [\"posts\", \"Prerna\"],\n  queryFn: ({ pageParam }) => fetchPosts(\"Prerna\", pageParam)\n});",
    "output": "Paginated posts for Prerna",
    "explanation": "Prerna's feed uses infinite query with parallel queries."
  },
  {
    "person": "Kishan",
    "title": "Parallel Queries — optimistic update for Kishan",
    "code": "useMutation({\n  mutationFn: likePost,\n  onMutate: async () => {\n    // Optimistically update Kishan's UI\n    queryClient.setQueryData([\"likes\"], old => old + 1);\n  }\n});",
    "output": "UI updated instantly for Kishan",
    "explanation": "Kishan sees instant UI feedback via parallel queries optimistic updates."
  },
  {
    "person": "Satyam",
    "title": "Parallel Queries — offline cache for Satyam",
    "code": "useQuery({\n  queryKey: [\"notes\", \"Satyam\"],\n  queryFn: fetchNotes,\n  networkMode: \"offlineFirst\" // Satyam can read offline\n});",
    "output": "Satyam's notes available offline",
    "explanation": "Satyam's notes work offline thanks to parallel queries caching."
  }
];

export default function ParallelQueriesTopic() {
  return (
    <TopicLesson
      title="Parallel Queries"
      course="TanStack Query"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#0f766e"
    />
  );
}
