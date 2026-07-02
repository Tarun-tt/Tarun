import TopicLesson from "../../../shared/TopicLesson.jsx";

/**
 * Caching — TanStack Query
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = "Caching is a TanStack Query feature for managing server state. It simplifies fetching, caching, and syncing remote data so your UI stays fast and up to date.";
const syntax = "// Caching syntax\n// Used by Tarun Tiwari, Tushar, Ranjeet & team";
const examples = [
  {
    "person": "Tarun Tiwari",
    "title": "Caching — fetch Tarun's data",
    "code": "const { data, isLoading } = useQuery({\n  queryKey: [\"member\", \"Tarun Tiwari\"],\n  queryFn: () => fetch(\"/api/tarun\").then(r => r.json())\n});",
    "output": "{ name: \"Tarun Tiwari\", topic: \"caching\" }",
    "explanation": "Tarun Tiwari's data is fetched and cached using caching."
  },
  {
    "person": "Tushar",
    "title": "Caching — Tushar's query key",
    "code": "const queryKey_2 = [\"team\", \"Tushar\", \"caching\"];\n// Unique cache key for Tushar's caching data",
    "output": "[\"team\", \"Tushar\", \"caching\"]",
    "explanation": "Tushar gets a unique query key for caching caching."
  },
  {
    "person": "Ranjeet",
    "title": "Caching — mutation for Ranjeet",
    "code": "const updateRanjeet = useMutation({\n  mutationFn: (data) => updateMember(\"Ranjeet\", data),\n  onSuccess: () => queryClient.invalidateQueries([\"team\"])\n});",
    "output": "Ranjeet updated successfully",
    "explanation": "Ranjeet's profile is updated via caching mutation."
  },
  {
    "person": "Abhishek",
    "title": "Caching — staleTime for Abhishek",
    "code": "useQuery({\n  queryKey: [\"progress\", \"Abhishek\"],\n  queryFn: fetchProgress,\n  staleTime: 5 * 60 * 1000 // Abhishek's data fresh for 5 min\n});",
    "output": "Cached for 5 minutes",
    "explanation": "Abhishek's progress uses staleTime in caching to reduce refetches."
  },
  {
    "person": "Sonu",
    "title": "Caching — prefetch Sonu's next lesson",
    "code": "queryClient.prefetchQuery({\n  queryKey: [\"lesson\", \"caching\"],\n  queryFn: () => fetchLesson(\"Sonu\")\n});",
    "output": "Next lesson prefetched for Sonu",
    "explanation": "Sonu's next lesson is prefetched using caching."
  },
  {
    "person": "Prerna",
    "title": "Caching — infinite scroll for Prerna",
    "code": "const { data, fetchNextPage } = useInfiniteQuery({\n  queryKey: [\"posts\", \"Prerna\"],\n  queryFn: ({ pageParam }) => fetchPosts(\"Prerna\", pageParam)\n});",
    "output": "Paginated posts for Prerna",
    "explanation": "Prerna's feed uses infinite query with caching."
  },
  {
    "person": "Kishan",
    "title": "Caching — optimistic update for Kishan",
    "code": "useMutation({\n  mutationFn: likePost,\n  onMutate: async () => {\n    // Optimistically update Kishan's UI\n    queryClient.setQueryData([\"likes\"], old => old + 1);\n  }\n});",
    "output": "UI updated instantly for Kishan",
    "explanation": "Kishan sees instant UI feedback via caching optimistic updates."
  },
  {
    "person": "Satyam",
    "title": "Caching — offline cache for Satyam",
    "code": "useQuery({\n  queryKey: [\"notes\", \"Satyam\"],\n  queryFn: fetchNotes,\n  networkMode: \"offlineFirst\" // Satyam can read offline\n});",
    "output": "Satyam's notes available offline",
    "explanation": "Satyam's notes work offline thanks to caching caching."
  }
];

export default function CachingTopic() {
  return (
    <TopicLesson
      title="Caching"
      course="TanStack Query"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#0f766e"
    />
  );
}
