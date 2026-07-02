import TopicLesson from "../../shared/TopicLesson.jsx";

/**
 * Dependent Queries — TanStack Query
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = "Dependent Queries is a TanStack Query feature for managing server state. It simplifies fetching, caching, and syncing remote data so your UI stays fast and up to date.";
const syntax = "// Dependent Queries syntax\n// Used by Tarun Tiwari, Tushar, Ranjeet & team";
const examples = [
  {
    "person": "Tarun Tiwari",
    "title": "Dependent Queries — fetch Tarun's data",
    "code": "const { data, isLoading } = useQuery({\n  queryKey: [\"member\", \"Tarun Tiwari\"],\n  queryFn: () => fetch(\"/api/tarun\").then(r => r.json())\n});",
    "output": "{ name: \"Tarun Tiwari\", topic: \"dependent-queries\" }",
    "explanation": "Tarun Tiwari's data is fetched and cached using dependent queries."
  },
  {
    "person": "Tushar",
    "title": "Dependent Queries — Tushar's query key",
    "code": "const queryKey_2 = [\"team\", \"Tushar\", \"dependent-queries\"];\n// Unique cache key for Tushar's dependent-queries data",
    "output": "[\"team\", \"Tushar\", \"dependent-queries\"]",
    "explanation": "Tushar gets a unique query key for dependent queries caching."
  },
  {
    "person": "Ranjeet",
    "title": "Dependent Queries — mutation for Ranjeet",
    "code": "const updateRanjeet = useMutation({\n  mutationFn: (data) => updateMember(\"Ranjeet\", data),\n  onSuccess: () => queryClient.invalidateQueries([\"team\"])\n});",
    "output": "Ranjeet updated successfully",
    "explanation": "Ranjeet's profile is updated via dependent queries mutation."
  },
  {
    "person": "Abhishek",
    "title": "Dependent Queries — staleTime for Abhishek",
    "code": "useQuery({\n  queryKey: [\"progress\", \"Abhishek\"],\n  queryFn: fetchProgress,\n  staleTime: 5 * 60 * 1000 // Abhishek's data fresh for 5 min\n});",
    "output": "Cached for 5 minutes",
    "explanation": "Abhishek's progress uses staleTime in dependent queries to reduce refetches."
  },
  {
    "person": "Sonu",
    "title": "Dependent Queries — prefetch Sonu's next lesson",
    "code": "queryClient.prefetchQuery({\n  queryKey: [\"lesson\", \"dependent-queries\"],\n  queryFn: () => fetchLesson(\"Sonu\")\n});",
    "output": "Next lesson prefetched for Sonu",
    "explanation": "Sonu's next lesson is prefetched using dependent queries."
  },
  {
    "person": "Prerna",
    "title": "Dependent Queries — infinite scroll for Prerna",
    "code": "const { data, fetchNextPage } = useInfiniteQuery({\n  queryKey: [\"posts\", \"Prerna\"],\n  queryFn: ({ pageParam }) => fetchPosts(\"Prerna\", pageParam)\n});",
    "output": "Paginated posts for Prerna",
    "explanation": "Prerna's feed uses infinite query with dependent queries."
  },
  {
    "person": "Kishan",
    "title": "Dependent Queries — optimistic update for Kishan",
    "code": "useMutation({\n  mutationFn: likePost,\n  onMutate: async () => {\n    // Optimistically update Kishan's UI\n    queryClient.setQueryData([\"likes\"], old => old + 1);\n  }\n});",
    "output": "UI updated instantly for Kishan",
    "explanation": "Kishan sees instant UI feedback via dependent queries optimistic updates."
  },
  {
    "person": "Satyam",
    "title": "Dependent Queries — offline cache for Satyam",
    "code": "useQuery({\n  queryKey: [\"notes\", \"Satyam\"],\n  queryFn: fetchNotes,\n  networkMode: \"offlineFirst\" // Satyam can read offline\n});",
    "output": "Satyam's notes available offline",
    "explanation": "Satyam's notes work offline thanks to dependent queries caching."
  }
];

export default function DependentQueriesTopic() {
  return (
    <TopicLesson
      title="Dependent Queries"
      course="TanStack Query"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#0f766e"
    />
  );
}
