import TopicLesson from "../../../shared/TopicLesson.jsx";

/**
 * Optimistic Updates — TanStack Query
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = "Optimistic Updates is a TanStack Query feature for managing server state. It simplifies fetching, caching, and syncing remote data so your UI stays fast and up to date.";
const syntax = "// Optimistic Updates syntax\n// Used by Tarun Tiwari, Tushar, Ranjeet & team";
const examples = [
  {
    "person": "Tarun Tiwari",
    "title": "Optimistic Updates — fetch Tarun's data",
    "code": "const { data, isLoading } = useQuery({\n  queryKey: [\"member\", \"Tarun Tiwari\"],\n  queryFn: () => fetch(\"/api/tarun\").then(r => r.json())\n});",
    "output": "{ name: \"Tarun Tiwari\", topic: \"optimistic-updates\" }",
    "explanation": "Tarun Tiwari's data is fetched and cached using optimistic updates."
  },
  {
    "person": "Tushar",
    "title": "Optimistic Updates — Tushar's query key",
    "code": "const queryKey_2 = [\"team\", \"Tushar\", \"optimistic-updates\"];\n// Unique cache key for Tushar's optimistic-updates data",
    "output": "[\"team\", \"Tushar\", \"optimistic-updates\"]",
    "explanation": "Tushar gets a unique query key for optimistic updates caching."
  },
  {
    "person": "Ranjeet",
    "title": "Optimistic Updates — mutation for Ranjeet",
    "code": "const updateRanjeet = useMutation({\n  mutationFn: (data) => updateMember(\"Ranjeet\", data),\n  onSuccess: () => queryClient.invalidateQueries([\"team\"])\n});",
    "output": "Ranjeet updated successfully",
    "explanation": "Ranjeet's profile is updated via optimistic updates mutation."
  },
  {
    "person": "Abhishek",
    "title": "Optimistic Updates — staleTime for Abhishek",
    "code": "useQuery({\n  queryKey: [\"progress\", \"Abhishek\"],\n  queryFn: fetchProgress,\n  staleTime: 5 * 60 * 1000 // Abhishek's data fresh for 5 min\n});",
    "output": "Cached for 5 minutes",
    "explanation": "Abhishek's progress uses staleTime in optimistic updates to reduce refetches."
  },
  {
    "person": "Sonu",
    "title": "Optimistic Updates — prefetch Sonu's next lesson",
    "code": "queryClient.prefetchQuery({\n  queryKey: [\"lesson\", \"optimistic-updates\"],\n  queryFn: () => fetchLesson(\"Sonu\")\n});",
    "output": "Next lesson prefetched for Sonu",
    "explanation": "Sonu's next lesson is prefetched using optimistic updates."
  },
  {
    "person": "Prerna",
    "title": "Optimistic Updates — infinite scroll for Prerna",
    "code": "const { data, fetchNextPage } = useInfiniteQuery({\n  queryKey: [\"posts\", \"Prerna\"],\n  queryFn: ({ pageParam }) => fetchPosts(\"Prerna\", pageParam)\n});",
    "output": "Paginated posts for Prerna",
    "explanation": "Prerna's feed uses infinite query with optimistic updates."
  },
  {
    "person": "Kishan",
    "title": "Optimistic Updates — optimistic update for Kishan",
    "code": "useMutation({\n  mutationFn: likePost,\n  onMutate: async () => {\n    // Optimistically update Kishan's UI\n    queryClient.setQueryData([\"likes\"], old => old + 1);\n  }\n});",
    "output": "UI updated instantly for Kishan",
    "explanation": "Kishan sees instant UI feedback via optimistic updates optimistic updates."
  },
  {
    "person": "Satyam",
    "title": "Optimistic Updates — offline cache for Satyam",
    "code": "useQuery({\n  queryKey: [\"notes\", \"Satyam\"],\n  queryFn: fetchNotes,\n  networkMode: \"offlineFirst\" // Satyam can read offline\n});",
    "output": "Satyam's notes available offline",
    "explanation": "Satyam's notes work offline thanks to optimistic updates caching."
  }
];

export default function OptimisticUpdatesTopic() {
  return (
    <TopicLesson
      title="Optimistic Updates"
      course="TanStack Query"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#0f766e"
    />
  );
}
