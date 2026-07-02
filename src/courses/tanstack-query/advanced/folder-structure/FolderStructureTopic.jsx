import TopicLesson from "../../../shared/TopicLesson.jsx";

/**
 * Folder Structure — TanStack Query
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = "Folder Structure is a TanStack Query feature for managing server state. It simplifies fetching, caching, and syncing remote data so your UI stays fast and up to date.";
const syntax = "// Folder Structure syntax\n// Used by Tarun Tiwari, Tushar, Ranjeet & team";
const examples = [
  {
    "person": "Tarun Tiwari",
    "title": "Folder Structure — fetch Tarun's data",
    "code": "const { data, isLoading } = useQuery({\n  queryKey: [\"member\", \"Tarun Tiwari\"],\n  queryFn: () => fetch(\"/api/tarun\").then(r => r.json())\n});",
    "output": "{ name: \"Tarun Tiwari\", topic: \"folder-structure\" }",
    "explanation": "Tarun Tiwari's data is fetched and cached using folder structure."
  },
  {
    "person": "Tushar",
    "title": "Folder Structure — Tushar's query key",
    "code": "const queryKey_2 = [\"team\", \"Tushar\", \"folder-structure\"];\n// Unique cache key for Tushar's folder-structure data",
    "output": "[\"team\", \"Tushar\", \"folder-structure\"]",
    "explanation": "Tushar gets a unique query key for folder structure caching."
  },
  {
    "person": "Ranjeet",
    "title": "Folder Structure — mutation for Ranjeet",
    "code": "const updateRanjeet = useMutation({\n  mutationFn: (data) => updateMember(\"Ranjeet\", data),\n  onSuccess: () => queryClient.invalidateQueries([\"team\"])\n});",
    "output": "Ranjeet updated successfully",
    "explanation": "Ranjeet's profile is updated via folder structure mutation."
  },
  {
    "person": "Abhishek",
    "title": "Folder Structure — staleTime for Abhishek",
    "code": "useQuery({\n  queryKey: [\"progress\", \"Abhishek\"],\n  queryFn: fetchProgress,\n  staleTime: 5 * 60 * 1000 // Abhishek's data fresh for 5 min\n});",
    "output": "Cached for 5 minutes",
    "explanation": "Abhishek's progress uses staleTime in folder structure to reduce refetches."
  },
  {
    "person": "Sonu",
    "title": "Folder Structure — prefetch Sonu's next lesson",
    "code": "queryClient.prefetchQuery({\n  queryKey: [\"lesson\", \"folder-structure\"],\n  queryFn: () => fetchLesson(\"Sonu\")\n});",
    "output": "Next lesson prefetched for Sonu",
    "explanation": "Sonu's next lesson is prefetched using folder structure."
  },
  {
    "person": "Prerna",
    "title": "Folder Structure — infinite scroll for Prerna",
    "code": "const { data, fetchNextPage } = useInfiniteQuery({\n  queryKey: [\"posts\", \"Prerna\"],\n  queryFn: ({ pageParam }) => fetchPosts(\"Prerna\", pageParam)\n});",
    "output": "Paginated posts for Prerna",
    "explanation": "Prerna's feed uses infinite query with folder structure."
  },
  {
    "person": "Kishan",
    "title": "Folder Structure — optimistic update for Kishan",
    "code": "useMutation({\n  mutationFn: likePost,\n  onMutate: async () => {\n    // Optimistically update Kishan's UI\n    queryClient.setQueryData([\"likes\"], old => old + 1);\n  }\n});",
    "output": "UI updated instantly for Kishan",
    "explanation": "Kishan sees instant UI feedback via folder structure optimistic updates."
  },
  {
    "person": "Satyam",
    "title": "Folder Structure — offline cache for Satyam",
    "code": "useQuery({\n  queryKey: [\"notes\", \"Satyam\"],\n  queryFn: fetchNotes,\n  networkMode: \"offlineFirst\" // Satyam can read offline\n});",
    "output": "Satyam's notes available offline",
    "explanation": "Satyam's notes work offline thanks to folder structure caching."
  }
];

export default function FolderStructureTopic() {
  return (
    <TopicLesson
      title="Folder Structure"
      course="TanStack Query"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#0f766e"
    />
  );
}
