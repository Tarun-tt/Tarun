import TopicLesson from "../../shared/TopicLesson.jsx";

/**
 * Time & Space Complexity — DSA for Frontend
 * Team examples: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam
 */

const explanation = "Time & Space Complexity is essential for frontend interviews and building performant web apps. Tarun Tiwari, Tushar, Ranjeet, and the team solve these using pure JavaScript — from brute force to optimal solutions.";
const syntax = "// Time & Space Complexity syntax\n// Used by Tarun Tiwari, Tushar, Ranjeet & team";
const examples = [
  {
    "person": "Tarun Tiwari",
    "title": "Time & Space Complexity — Tarun's brute force",
    "code": "// Tarun Tiwari's brute force for Time & Space Complexity\nfunction solveBrute_1(arr) {\n  for (let i = 0; i < arr.length; i++) {\n    for (let j = i + 1; j < arr.length; j++) {\n      if (arr[i] + arr[j] === 0) return [i, j];\n    }\n  }\n}\n// O(n²) — Tarun Tiwari",
    "output": "[0, 1]",
    "explanation": "Tarun Tiwari starts with brute force to understand time & space complexity."
  },
  {
    "person": "Tushar",
    "title": "Time & Space Complexity — Tushar's optimal",
    "code": "// Tushar's optimized Time & Space Complexity\nfunction solveOpt_2(arr) {\n  const map = new Map();\n  for (let i = 0; i < arr.length; i++) {\n    const need = -arr[i];\n    if (map.has(need)) return [map.get(need), i];\n    map.set(arr[i], i);\n  }\n}\n// O(n) — Tushar",
    "output": "[0, 1]",
    "explanation": "Tushar optimizes to O(n) using hash map for time & space complexity."
  },
  {
    "person": "Ranjeet",
    "title": "Time & Space Complexity — Ranjeet's two-pointer",
    "code": "// Ranjeet's two-pointer\nfunction twoPointer_3(arr, target) {\n  let l = 0, r = arr.length - 1;\n  while (l < r) {\n    const sum = arr[l] + arr[r];\n    if (sum === target) return [l, r];\n    sum < target ? l++ : r--;\n  }\n}\n// Ranjeet",
    "output": "[1, 3]",
    "explanation": "Ranjeet uses two pointers — key pattern in time & space complexity."
  },
  {
    "person": "Abhishek",
    "title": "Time & Space Complexity — Abhishek's sliding window",
    "code": "// Abhishek's sliding window\nfunction slidingWindow_4(s) {\n  const set = new Set();\n  let max = 0, l = 0;\n  for (let r = 0; r < s.length; r++) {\n    while (set.has(s[r])) set.delete(s[l++]);\n    set.add(s[r]);\n    max = Math.max(max, r - l + 1);\n  }\n  return max;\n}\n// Abhishek",
    "output": "3",
    "explanation": "Abhishek applies sliding window for time & space complexity problems."
  },
  {
    "person": "Sonu",
    "title": "Time & Space Complexity — Sonu's recursion",
    "code": "// Sonu's recursive approach\nfunction recurse_5(n) {\n  if (n <= 1) return n;\n  return recurse_5(n - 1) + recurse_5(n - 2);\n}\n// Fibonacci — Sonu",
    "output": "8",
    "explanation": "Sonu solves time & space complexity with recursion and base cases."
  },
  {
    "person": "Prerna",
    "title": "Time & Space Complexity — Prerna's BFS",
    "code": "// Prerna's BFS traversal\nfunction bfs_6(graph, start) {\n  const queue = [start], visited = new Set([start]);\n  while (queue.length) {\n    const node = queue.shift();\n    for (const next of graph[node] || []) {\n      if (!visited.has(next)) { visited.add(next); queue.push(next); }\n    }\n  }\n  return [...visited];\n}\n// Prerna",
    "output": "[A, B, C, D]",
    "explanation": "Prerna uses BFS for graph problems in time & space complexity."
  },
  {
    "person": "Kishan",
    "title": "Time & Space Complexity — Kishan's DFS",
    "code": "// Kishan's DFS\nfunction dfs_7(node, visited = new Set()) {\n  visited.add(node);\n  for (const child of children[node] || []) {\n    if (!visited.has(child)) dfs_7(child, visited);\n  }\n  return visited;\n}\n// Kishan",
    "output": "All nodes visited",
    "explanation": "Kishan explores trees/graphs with DFS in time & space complexity."
  },
  {
    "person": "Satyam",
    "title": "Time & Space Complexity — Satyam's DP",
    "code": "// Satyam's dynamic programming\nfunction dp_8(n) {\n  const dp = Array(n + 1).fill(0);\n  dp[1] = 1;\n  for (let i = 2; i <= n; i++) dp[i] = dp[i-1] + dp[i-2];\n  return dp[n];\n}\n// Satyam's bottom-up DP",
    "output": "34",
    "explanation": "Satyam uses DP tabulation for time & space complexity optimization."
  }
];

export default function ComplexityTopic() {
  return (
    <TopicLesson
      title="Time & Space Complexity"
      course="DSA for Frontend"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#dc2626"
    />
  );
}
