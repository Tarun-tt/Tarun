import TopicLesson from "../../shared/TopicLesson.jsx";

/**
 * Mutations — TanStack Query
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = "Mutations is a TanStack Query feature for managing server state. It simplifies fetching, caching, and syncing remote data so your UI stays fast and up to date.";
const syntax = "const mutation = useMutation({\n  mutationFn: addMember,\n});";
const examples = [
  {
    "person": "Tarun Tiwari",
    "title": "Mutations — fetch Tarun's data",
    "code": "const { data, isLoading } = useQuery({\n  queryKey: [\"member\", \"Tarun Tiwari\"],\n  queryFn: () => fetch(\"/api/tarun\").then(r => r.json())\n});",
    "output": "{ name: \"Tarun Tiwari\", topic: \"mutations\" }",
    "explanation": "Tarun Tiwari's data is fetched and cached using mutations."
  },
  {
    "person": "Tushar",
    "title": "Mutations — Tushar's query key",
    "code": "const queryKey_2 = [\"team\", \"Tushar\", \"mutations\"];\n// Unique cache key for Tushar's mutations data",
    "output": "[\"team\", \"Tushar\", \"mutations\"]",
    "explanation": "Tushar gets a unique query key for mutations caching."
  },
  {
    "person": "Ranjeet",
    "title": "Mutations — mutation for Ranjeet",
    "code": "const updateRanjeet = useMutation({\n  mutationFn: (data) => updateMember(\"Ranjeet\", data),\n  onSuccess: () => queryClient.invalidateQueries([\"team\"])\n});",
    "output": "Ranjeet updated successfully",
    "explanation": "Ranjeet's profile is updated via mutations mutation."
  },
  {
    "person": "Abhishek",
    "title": "Mutations — staleTime for Abhishek",
    "code": "useQuery({\n  queryKey: [\"progress\", \"Abhishek\"],\n  queryFn: fetchProgress,\n  staleTime: 5 * 60 * 1000 // Abhishek's data fresh for 5 min\n});",
    "output": "Cached for 5 minutes",
    "explanation": "Abhishek's progress uses staleTime in mutations to reduce refetches."
  },
  {
    "person": "Sonu",
    "title": "Mutations — prefetch Sonu's next lesson",
    "code": "queryClient.prefetchQuery({\n  queryKey: [\"lesson\", \"mutations\"],\n  queryFn: () => fetchLesson(\"Sonu\")\n});",
    "output": "Next lesson prefetched for Sonu",
    "explanation": "Sonu's next lesson is prefetched using mutations."
  },
  {
    "person": "Prerna",
    "title": "Mutations — infinite scroll for Prerna",
    "code": "const { data, fetchNextPage } = useInfiniteQuery({\n  queryKey: [\"posts\", \"Prerna\"],\n  queryFn: ({ pageParam }) => fetchPosts(\"Prerna\", pageParam)\n});",
    "output": "Paginated posts for Prerna",
    "explanation": "Prerna's feed uses infinite query with mutations."
  },
  {
    "person": "Kishan",
    "title": "Mutations — optimistic update for Kishan",
    "code": "useMutation({\n  mutationFn: likePost,\n  onMutate: async () => {\n    // Optimistically update Kishan's UI\n    queryClient.setQueryData([\"likes\"], old => old + 1);\n  }\n});",
    "output": "UI updated instantly for Kishan",
    "explanation": "Kishan sees instant UI feedback via mutations optimistic updates."
  },
  {
    "person": "Satyam",
    "title": "Mutations — offline cache for Satyam",
    "code": "useQuery({\n  queryKey: [\"notes\", \"Satyam\"],\n  queryFn: fetchNotes,\n  networkMode: \"offlineFirst\" // Satyam can read offline\n});",
    "output": "Satyam's notes available offline",
    "explanation": "Satyam's notes work offline thanks to mutations caching."
  }
];

export default function MutationsTopic() {
  return (
    <TopicLesson
      title="Mutations"
      course="TanStack Query"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#0f766e"
    />
  );
}
