// Auto-generated: 105 DSA problems with solutions
export const dsaProblems = [
  {
    "id": "dsa-1",
    "number": 1,
    "category": "Arrays",
    "title": "Two Sum",
    "difficulty": "Easy",
    "description": "Find two indices that add to target. Solved by Tushar using JavaScript.",
    "starterCode": "// Problem 1: Two Sum\n// Author: Tushar\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function twoSum(nums, target) {\n  const map = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const need = target - nums[i];\n    if (map.has(need)) return [map.get(need), i];\n    map.set(nums[i], i);\n  }\n}\n// Tushar: twoSum([2,7,11,15], 9) => [0,1]",
    "author": "Tushar",
    "tags": [
      "arrays",
      "easy"
    ]
  },
  {
    "id": "dsa-2",
    "number": 2,
    "category": "Arrays",
    "title": "Best Time to Buy Stock",
    "difficulty": "Easy",
    "description": "Max profit from one buy and sell. Solved by Ranjeet using JavaScript.",
    "starterCode": "// Problem 2: Best Time to Buy Stock\n// Author: Ranjeet\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function maxProfit(prices) {\n  let min = Infinity, profit = 0;\n  for (const p of prices) {\n    min = Math.min(min, p);\n    profit = Math.max(profit, p - min);\n  }\n  return profit;\n}\n// Ranjeet's solution",
    "author": "Ranjeet",
    "tags": [
      "arrays",
      "easy"
    ]
  },
  {
    "id": "dsa-3",
    "number": 3,
    "category": "Arrays",
    "title": "Contains Duplicate",
    "difficulty": "Easy",
    "description": "Check if array has duplicates. Solved by Abhishek using JavaScript.",
    "starterCode": "// Problem 3: Contains Duplicate\n// Author: Abhishek\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function containsDuplicate(nums) {\n  return new Set(nums).size !== nums.length;\n}\n// Abhishek: containsDuplicate([1,2,3,1]) => true",
    "author": "Abhishek",
    "tags": [
      "arrays",
      "easy"
    ]
  },
  {
    "id": "dsa-4",
    "number": 4,
    "category": "Arrays",
    "title": "Product Except Self",
    "difficulty": "Medium",
    "description": "Return array of products except self. Solved by Sonu using JavaScript.",
    "starterCode": "// Problem 4: Product Except Self\n// Author: Sonu\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function productExceptSelf(nums) {\n  const res = Array(nums.length).fill(1);\n  let prefix = 1;\n  for (let i = 0; i < nums.length; i++) {\n    res[i] = prefix;\n    prefix *= nums[i];\n  }\n  let suffix = 1;\n  for (let i = nums.length - 1; i >= 0; i--) {\n    res[i] *= suffix;\n    suffix *= nums[i];\n  }\n  return res;\n}\n// Sonu's O(n) solution",
    "author": "Sonu",
    "tags": [
      "arrays",
      "medium"
    ]
  },
  {
    "id": "dsa-5",
    "number": 5,
    "category": "Arrays",
    "title": "Maximum Subarray",
    "difficulty": "Medium",
    "description": "Kadane's algorithm — max contiguous sum. Solved by Prerna using JavaScript.",
    "starterCode": "// Problem 5: Maximum Subarray\n// Author: Prerna\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function maxSubArray(nums) {\n  let max = nums[0], cur = nums[0];\n  for (let i = 1; i < nums.length; i++) {\n    cur = Math.max(nums[i], cur + nums[i]);\n    max = Math.max(max, cur);\n  }\n  return max;\n}\n// Prerna: maxSubArray([-2,1,-3,4,-1,2,1,-5,4]) => 6",
    "author": "Prerna",
    "tags": [
      "arrays",
      "medium"
    ]
  },
  {
    "id": "dsa-6",
    "number": 6,
    "category": "Arrays",
    "title": "Merge Sorted Arrays",
    "difficulty": "Easy",
    "description": "Merge two sorted arrays in-place. Solved by Kishan using JavaScript.",
    "starterCode": "// Problem 6: Merge Sorted Arrays\n// Author: Kishan\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function merge(nums1, m, nums2, n) {\n  let i = m - 1, j = n - 1, k = m + n - 1;\n  while (j >= 0) {\n    nums1[k--] = i >= 0 && nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];\n  }\n}\n// Kishan's merge",
    "author": "Kishan",
    "tags": [
      "arrays",
      "easy"
    ]
  },
  {
    "id": "dsa-7",
    "number": 7,
    "category": "Arrays",
    "title": "Rotate Array",
    "difficulty": "Medium",
    "description": "Rotate array k steps right. Solved by Satyam using JavaScript.",
    "starterCode": "// Problem 7: Rotate Array\n// Author: Satyam\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function rotate(nums, k) {\n  k %= nums.length;\n  const rev = (l, r) => {\n    while (l < r) [nums[l], nums[r]] = [nums[r], nums[l]], l++, r--;\n  };\n  rev(0, nums.length - 1);\n  rev(0, k - 1);\n  rev(k, nums.length - 1);\n}\n// Satyam's 3-reverse approach",
    "author": "Satyam",
    "tags": [
      "arrays",
      "medium"
    ]
  },
  {
    "id": "dsa-8",
    "number": 8,
    "category": "Arrays",
    "title": "Find Missing Number",
    "difficulty": "Easy",
    "description": "Find missing number in 0..n. Solved by Tarun Tiwari using JavaScript.",
    "starterCode": "// Problem 8: Find Missing Number\n// Author: Tarun Tiwari\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function missingNumber(nums) {\n  let sum = 0;\n  for (let i = 0; i < nums.length; i++) sum += nums[i];\n  const n = nums.length;\n  return (n * (n + 1)) / 2 - sum;\n}\n// Tarun Tiwari's math trick",
    "author": "Tarun Tiwari",
    "tags": [
      "arrays",
      "easy"
    ]
  },
  {
    "id": "dsa-9",
    "number": 9,
    "category": "Arrays",
    "title": "Move Zeroes",
    "difficulty": "Easy",
    "description": "Move all zeroes to end. Solved by Tushar using JavaScript.",
    "starterCode": "// Problem 9: Move Zeroes\n// Author: Tushar\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function moveZeroes(nums) {\n  let j = 0;\n  for (let i = 0; i < nums.length; i++) {\n    if (nums[i] !== 0) nums[j++] = nums[i];\n  }\n  while (j < nums.length) nums[j++] = 0;\n}\n// Tushar's two-pointer",
    "author": "Tushar",
    "tags": [
      "arrays",
      "easy"
    ]
  },
  {
    "id": "dsa-10",
    "number": 10,
    "category": "Arrays",
    "title": "Intersection of Arrays",
    "difficulty": "Easy",
    "description": "Find common elements. Solved by Ranjeet using JavaScript.",
    "starterCode": "// Problem 10: Intersection of Arrays\n// Author: Ranjeet\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function intersect(nums1, nums2) {\n  const map = new Map();\n  for (const n of nums1) map.set(n, (map.get(n) || 0) + 1);\n  const res = [];\n  for (const n of nums2) {\n    if (map.get(n) > 0) { res.push(n); map.set(n, map.get(n) - 1); }\n  }\n  return res;\n}\n// Ranjeet's hash map",
    "author": "Ranjeet",
    "tags": [
      "arrays",
      "easy"
    ]
  },
  {
    "id": "dsa-11",
    "number": 11,
    "category": "Strings",
    "title": "Valid Anagram",
    "difficulty": "Easy",
    "description": "Check if two strings are anagrams. Solved by Abhishek using JavaScript.",
    "starterCode": "// Problem 11: Valid Anagram\n// Author: Abhishek\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function isAnagram(s, t) {\n  if (s.length !== t.length) return false;\n  const count = {};\n  for (const c of s) count[c] = (count[c] || 0) + 1;\n  for (const c of t) {\n    if (!count[c]) return false;\n    count[c]--;\n  }\n  return true;\n}\n// Abhishek: isAnagram(\"listen\",\"silent\") => true",
    "author": "Abhishek",
    "tags": [
      "strings",
      "easy"
    ]
  },
  {
    "id": "dsa-12",
    "number": 12,
    "category": "Strings",
    "title": "Valid Palindrome",
    "difficulty": "Easy",
    "description": "Check palindrome ignoring non-alphanumeric. Solved by Sonu using JavaScript.",
    "starterCode": "// Problem 12: Valid Palindrome\n// Author: Sonu\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function isPalindrome(s) {\n  const clean = s.toLowerCase().replace(/[^a-z0-9]/g, \"\");\n  let l = 0, r = clean.length - 1;\n  while (l < r) {\n    if (clean[l] !== clean[r]) return false;\n    l++; r--;\n  }\n  return true;\n}\n// Sonu's two-pointer",
    "author": "Sonu",
    "tags": [
      "strings",
      "easy"
    ]
  },
  {
    "id": "dsa-13",
    "number": 13,
    "category": "Strings",
    "title": "Longest Substring Without Repeat",
    "difficulty": "Medium",
    "description": "Sliding window — longest unique substring. Solved by Prerna using JavaScript.",
    "starterCode": "// Problem 13: Longest Substring Without Repeat\n// Author: Prerna\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function lengthOfLongestSubstring(s) {\n  const set = new Set();\n  let max = 0, l = 0;\n  for (let r = 0; r < s.length; r++) {\n    while (set.has(s[r])) set.delete(s[l++]);\n    set.add(s[r]);\n    max = Math.max(max, r - l + 1);\n  }\n  return max;\n}\n// Prerna's sliding window",
    "author": "Prerna",
    "tags": [
      "strings",
      "medium"
    ]
  },
  {
    "id": "dsa-14",
    "number": 14,
    "category": "Strings",
    "title": "Group Anagrams",
    "difficulty": "Medium",
    "description": "Group strings that are anagrams. Solved by Kishan using JavaScript.",
    "starterCode": "// Problem 14: Group Anagrams\n// Author: Kishan\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function groupAnagrams(strs) {\n  const map = new Map();\n  for (const s of strs) {\n    const key = s.split(\"\").sort().join(\"\");\n    if (!map.has(key)) map.set(key, []);\n    map.get(key).push(s);\n  }\n  return [...map.values()];\n}\n// Kishan's sorted key",
    "author": "Kishan",
    "tags": [
      "strings",
      "medium"
    ]
  },
  {
    "id": "dsa-15",
    "number": 15,
    "category": "Strings",
    "title": "Reverse Words",
    "difficulty": "Medium",
    "description": "Reverse words in a string. Solved by Satyam using JavaScript.",
    "starterCode": "// Problem 15: Reverse Words\n// Author: Satyam\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function reverseWords(s) {\n  return s.trim().split(/\\s+/).reverse().join(\" \");\n}\n// Satyam: reverseWords(\"hello world\") => \"world hello\"",
    "author": "Satyam",
    "tags": [
      "strings",
      "medium"
    ]
  },
  {
    "id": "dsa-16",
    "number": 16,
    "category": "Hash Map",
    "title": "First Unique Character",
    "difficulty": "Easy",
    "description": "Index of first non-repeating char. Solved by Tarun Tiwari using JavaScript.",
    "starterCode": "// Problem 16: First Unique Character\n// Author: Tarun Tiwari\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function firstUniqChar(s) {\n  const map = new Map();\n  for (const c of s) map.set(c, (map.get(c) || 0) + 1);\n  for (let i = 0; i < s.length; i++) {\n    if (map.get(s[i]) === 1) return i;\n  }\n  return -1;\n}\n// Tarun Tiwari's solution",
    "author": "Tarun Tiwari",
    "tags": [
      "hash-map",
      "easy"
    ]
  },
  {
    "id": "dsa-17",
    "number": 17,
    "category": "Hash Map",
    "title": "Ransom Note",
    "difficulty": "Easy",
    "description": "Can construct ransom note from magazine. Solved by Tushar using JavaScript.",
    "starterCode": "// Problem 17: Ransom Note\n// Author: Tushar\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function canConstruct(ransom, magazine) {\n  const count = {};\n  for (const c of magazine) count[c] = (count[c] || 0) + 1;\n  for (const c of ransom) {\n    if (!count[c]) return false;\n    count[c]--;\n  }\n  return true;\n}\n// Tushar's char count",
    "author": "Tushar",
    "tags": [
      "hash-map",
      "easy"
    ]
  },
  {
    "id": "dsa-18",
    "number": 18,
    "category": "Hash Map",
    "title": "Top K Frequent Elements",
    "difficulty": "Medium",
    "description": "Return k most frequent elements. Solved by Ranjeet using JavaScript.",
    "starterCode": "// Problem 18: Top K Frequent Elements\n// Author: Ranjeet\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function topKFrequent(nums, k) {\n  const freq = new Map();\n  for (const n of nums) freq.set(n, (freq.get(n) || 0) + 1);\n  return [...freq.entries()]\n    .sort((a, b) => b[1] - a[1])\n    .slice(0, k)\n    .map(([n]) => n);\n}\n// Ranjeet's frequency map",
    "author": "Ranjeet",
    "tags": [
      "hash-map",
      "medium"
    ]
  },
  {
    "id": "dsa-19",
    "number": 19,
    "category": "Two Pointers",
    "title": "Valid Palindrome II",
    "difficulty": "Easy",
    "description": "Palindrome after deleting one char. Solved by Abhishek using JavaScript.",
    "starterCode": "// Problem 19: Valid Palindrome II\n// Author: Abhishek\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function validPalindrome(s) {\n  const check = (l, r) => {\n    while (l < r) {\n      if (s[l] !== s[r]) return false;\n      l++; r--;\n    }\n    return true;\n  };\n  let l = 0, r = s.length - 1;\n  while (l < r) {\n    if (s[l] !== s[r]) return check(l+1,r) || check(l,r-1);\n    l++; r--;\n  }\n  return true;\n}\n// Abhishek's two-pointer",
    "author": "Abhishek",
    "tags": [
      "two-pointers",
      "easy"
    ]
  },
  {
    "id": "dsa-20",
    "number": 20,
    "category": "Two Pointers",
    "title": "3Sum",
    "difficulty": "Medium",
    "description": "Find triplets that sum to zero. Solved by Sonu using JavaScript.",
    "starterCode": "// Problem 20: 3Sum\n// Author: Sonu\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function threeSum(nums) {\n  nums.sort((a,b) => a-b);\n  const res = [];\n  for (let i = 0; i < nums.length - 2; i++) {\n    if (i > 0 && nums[i] === nums[i-1]) continue;\n    let l = i+1, r = nums.length-1;\n    while (l < r) {\n      const sum = nums[i]+nums[l]+nums[r];\n      if (sum === 0) { res.push([nums[i],nums[l],nums[r]]); l++; r--; }\n      else if (sum < 0) l++; else r--;\n    }\n  }\n  return res;\n}\n// Sonu's sorted 3Sum",
    "author": "Sonu",
    "tags": [
      "two-pointers",
      "medium"
    ]
  },
  {
    "id": "dsa-21",
    "number": 21,
    "category": "Two Pointers",
    "title": "Container With Most Water",
    "difficulty": "Medium",
    "description": "Max area between two lines. Solved by Prerna using JavaScript.",
    "starterCode": "// Problem 21: Container With Most Water\n// Author: Prerna\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function maxArea(height) {\n  let l = 0, r = height.length-1, max = 0;\n  while (l < r) {\n    max = Math.max(max, Math.min(height[l], height[r]) * (r-l));\n    height[l] < height[r] ? l++ : r--;\n  }\n  return max;\n}\n// Prerna's two-pointer",
    "author": "Prerna",
    "tags": [
      "two-pointers",
      "medium"
    ]
  },
  {
    "id": "dsa-22",
    "number": 22,
    "category": "Stack",
    "title": "Valid Parentheses",
    "difficulty": "Easy",
    "description": "Check balanced brackets. Solved by Kishan using JavaScript.",
    "starterCode": "// Problem 22: Valid Parentheses\n// Author: Kishan\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function isValid(s) {\n  const stack = [], map = { \")\":\"(\", \"]\":\"[\", \"}\":\"{\" };\n  for (const c of s) {\n    if (c in map) {\n      if (stack.pop() !== map[c]) return false;\n    } else stack.push(c);\n  }\n  return stack.length === 0;\n}\n// Kishan: isValid(\"({[]})\") => true",
    "author": "Kishan",
    "tags": [
      "stack",
      "easy"
    ]
  },
  {
    "id": "dsa-23",
    "number": 23,
    "category": "Stack",
    "title": "Min Stack",
    "difficulty": "Medium",
    "description": "Stack with O(1) getMin. Solved by Satyam using JavaScript.",
    "starterCode": "// Problem 23: Min Stack\n// Author: Satyam\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "class MinStack {\n  constructor() { this.stack = []; this.mins = []; }\n  push(val) {\n    this.stack.push(val);\n    this.mins.push(Math.min(val, this.mins.at(-1) ?? Infinity));\n  }\n  pop() { this.stack.pop(); this.mins.pop(); }\n  top() { return this.stack.at(-1); }\n  getMin() { return this.mins.at(-1); }\n}\n// Satyam's dual stack",
    "author": "Satyam",
    "tags": [
      "stack",
      "medium"
    ]
  },
  {
    "id": "dsa-24",
    "number": 24,
    "category": "Stack",
    "title": "Daily Temperatures",
    "difficulty": "Medium",
    "description": "Days until warmer temperature. Solved by Tarun Tiwari using JavaScript.",
    "starterCode": "// Problem 24: Daily Temperatures\n// Author: Tarun Tiwari\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function dailyTemperatures(temps) {\n  const res = Array(temps.length).fill(0);\n  const stack = [];\n  for (let i = 0; i < temps.length; i++) {\n    while (stack.length && temps[i] > temps[stack.at(-1)]) {\n      const idx = stack.pop();\n      res[idx] = i - idx;\n    }\n    stack.push(i);\n  }\n  return res;\n}\n// Tarun Tiwari's monotonic stack",
    "author": "Tarun Tiwari",
    "tags": [
      "stack",
      "medium"
    ]
  },
  {
    "id": "dsa-25",
    "number": 25,
    "category": "Trees",
    "title": "Invert Binary Tree",
    "difficulty": "Easy",
    "description": "Mirror a binary tree. Solved by Tushar using JavaScript.",
    "starterCode": "// Problem 25: Invert Binary Tree\n// Author: Tushar\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function invertTree(root) {\n  if (!root) return null;\n  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];\n  return root;\n}\n// Tushar's recursive swap",
    "author": "Tushar",
    "tags": [
      "trees",
      "easy"
    ]
  },
  {
    "id": "dsa-26",
    "number": 26,
    "category": "Trees",
    "title": "Max Depth of Tree",
    "difficulty": "Easy",
    "description": "Maximum depth of binary tree. Solved by Ranjeet using JavaScript.",
    "starterCode": "// Problem 26: Max Depth of Tree\n// Author: Ranjeet\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function maxDepth(root) {\n  if (!root) return 0;\n  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));\n}\n// Ranjeet's recursion",
    "author": "Ranjeet",
    "tags": [
      "trees",
      "easy"
    ]
  },
  {
    "id": "dsa-27",
    "number": 27,
    "category": "Trees",
    "title": "Level Order Traversal",
    "difficulty": "Medium",
    "description": "BFS level-by-level. Solved by Abhishek using JavaScript.",
    "starterCode": "// Problem 27: Level Order Traversal\n// Author: Abhishek\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function levelOrder(root) {\n  if (!root) return [];\n  const res = [], queue = [root];\n  while (queue.length) {\n    const level = [], size = queue.length;\n    for (let i = 0; i < size; i++) {\n      const node = queue.shift();\n      level.push(node.val);\n      if (node.left) queue.push(node.left);\n      if (node.right) queue.push(node.right);\n    }\n    res.push(level);\n  }\n  return res;\n}\n// Abhishek's BFS",
    "author": "Abhishek",
    "tags": [
      "trees",
      "medium"
    ]
  },
  {
    "id": "dsa-28",
    "number": 28,
    "category": "Trees",
    "title": "Validate BST",
    "difficulty": "Medium",
    "description": "Check if tree is valid BST. Solved by Sonu using JavaScript.",
    "starterCode": "// Problem 28: Validate BST\n// Author: Sonu\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function isValidBST(root, min=-Infinity, max=Infinity) {\n  if (!root) return true;\n  if (root.val <= min || root.val >= max) return false;\n  return isValidBST(root.left, min, root.val) &&\n         isValidBST(root.right, root.val, max);\n}\n// Sonu's bounds check",
    "author": "Sonu",
    "tags": [
      "trees",
      "medium"
    ]
  },
  {
    "id": "dsa-29",
    "number": 29,
    "category": "Graphs",
    "title": "Number of Islands",
    "difficulty": "Medium",
    "description": "Count islands in 2D grid. Solved by Prerna using JavaScript.",
    "starterCode": "// Problem 29: Number of Islands\n// Author: Prerna\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function numIslands(grid) {\n  let count = 0;\n  const dfs = (r, c) => {\n    if (r<0||c<0||r>=grid.length||c>=grid[0].length||grid[r][c]===\"0\") return;\n    grid[r][c] = \"0\";\n    dfs(r+1,c); dfs(r-1,c); dfs(r,c+1); dfs(r,c-1);\n  };\n  for (let r=0;r<grid.length;r++)\n    for (let c=0;c<grid[0].length;c++)\n      if (grid[r][c]===\"1\") { count++; dfs(r,c); }\n  return count;\n}\n// Prerna's DFS flood fill",
    "author": "Prerna",
    "tags": [
      "graphs",
      "medium"
    ]
  },
  {
    "id": "dsa-30",
    "number": 30,
    "category": "Graphs",
    "title": "BFS Shortest Path",
    "difficulty": "Medium",
    "description": "Shortest path in unweighted graph. Solved by Kishan using JavaScript.",
    "starterCode": "// Problem 30: BFS Shortest Path\n// Author: Kishan\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function bfsShortest(graph, start, end) {\n  const queue = [[start, 0]];\n  const visited = new Set([start]);\n  while (queue.length) {\n    const [node, dist] = queue.shift();\n    if (node === end) return dist;\n    for (const next of graph[node] || []) {\n      if (!visited.has(next)) {\n        visited.add(next);\n        queue.push([next, dist + 1]);\n      }\n    }\n  }\n  return -1;\n}\n// Kishan's BFS",
    "author": "Kishan",
    "tags": [
      "graphs",
      "medium"
    ]
  },
  {
    "id": "dsa-31",
    "number": 31,
    "category": "Dynamic Programming",
    "title": "Climbing Stairs",
    "difficulty": "Easy",
    "description": "Ways to climb n stairs (1 or 2 steps). Solved by Satyam using JavaScript.",
    "starterCode": "// Problem 31: Climbing Stairs\n// Author: Satyam\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function climbStairs(n) {\n  if (n <= 2) return n;\n  let a = 1, b = 2;\n  for (let i = 3; i <= n; i++) {\n    [a, b] = [b, a + b];\n  }\n  return b;\n}\n// Satyam: climbStairs(5) => 8 (Fibonacci)",
    "author": "Satyam",
    "tags": [
      "dynamic-programming",
      "easy"
    ]
  },
  {
    "id": "dsa-32",
    "number": 32,
    "category": "Dynamic Programming",
    "title": "House Robber",
    "difficulty": "Medium",
    "description": "Max money without robbing adjacent. Solved by Tarun Tiwari using JavaScript.",
    "starterCode": "// Problem 32: House Robber\n// Author: Tarun Tiwari\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function rob(nums) {\n  let prev = 0, cur = 0;\n  for (const n of nums) {\n    [prev, cur] = [cur, Math.max(cur, prev + n)];\n  }\n  return cur;\n}\n// Tarun Tiwari's DP",
    "author": "Tarun Tiwari",
    "tags": [
      "dynamic-programming",
      "medium"
    ]
  },
  {
    "id": "dsa-33",
    "number": 33,
    "category": "Dynamic Programming",
    "title": "Coin Change",
    "difficulty": "Medium",
    "description": "Minimum coins to make amount. Solved by Tushar using JavaScript.",
    "starterCode": "// Problem 33: Coin Change\n// Author: Tushar\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function coinChange(coins, amount) {\n  const dp = Array(amount + 1).fill(Infinity);\n  dp[0] = 0;\n  for (const coin of coins)\n    for (let i = coin; i <= amount; i++)\n      dp[i] = Math.min(dp[i], dp[i - coin] + 1);\n  return dp[amount] === Infinity ? -1 : dp[amount];\n}\n// Tushar's bottom-up DP",
    "author": "Tushar",
    "tags": [
      "dynamic-programming",
      "medium"
    ]
  },
  {
    "id": "dsa-34",
    "number": 34,
    "category": "Frontend DSA",
    "title": "Debounce Function",
    "difficulty": "Medium",
    "description": "Debounce for search input. Solved by Ranjeet using JavaScript.",
    "starterCode": "// Problem 34: Debounce Function\n// Author: Ranjeet\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function debounce(fn, delay) {\n  let timer;\n  return function(...args) {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn.apply(this, args), delay);\n  };\n}\n// Ranjeet: debounce(searchAPI, 300)",
    "author": "Ranjeet",
    "tags": [
      "frontend-dsa",
      "medium"
    ]
  },
  {
    "id": "dsa-35",
    "number": 35,
    "category": "Frontend DSA",
    "title": "Throttle Function",
    "difficulty": "Medium",
    "description": "Throttle scroll handler. Solved by Abhishek using JavaScript.",
    "starterCode": "// Problem 35: Throttle Function\n// Author: Abhishek\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function throttle(fn, limit) {\n  let inThrottle;\n  return function(...args) {\n    if (!inThrottle) {\n      fn.apply(this, args);\n      inThrottle = true;\n      setTimeout(() => inThrottle = false, limit);\n    }\n  };\n}\n// Abhishek: throttle(onScroll, 100)",
    "author": "Abhishek",
    "tags": [
      "frontend-dsa",
      "medium"
    ]
  },
  {
    "id": "dsa-36",
    "number": 36,
    "category": "Frontend DSA",
    "title": "Deep Clone Object",
    "difficulty": "Medium",
    "description": "Deep copy nested object. Solved by Sonu using JavaScript.",
    "starterCode": "// Problem 36: Deep Clone Object\n// Author: Sonu\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function deepClone(obj) {\n  if (obj === null || typeof obj !== \"object\") return obj;\n  if (Array.isArray(obj)) return obj.map(deepClone);\n  const clone = {};\n  for (const key in obj) clone[key] = deepClone(obj[key]);\n  return clone;\n}\n// Sonu's recursive clone",
    "author": "Sonu",
    "tags": [
      "frontend-dsa",
      "medium"
    ]
  },
  {
    "id": "dsa-37",
    "number": 37,
    "category": "Frontend DSA",
    "title": "Flatten Array",
    "difficulty": "Easy",
    "description": "Flatten nested array. Solved by Prerna using JavaScript.",
    "starterCode": "// Problem 37: Flatten Array\n// Author: Prerna\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function flatten(arr) {\n  return arr.reduce((acc, val) =>\n    acc.concat(Array.isArray(val) ? flatten(val) : val), []);\n}\n// Prerna: flatten([1,[2,[3]]]) => [1,2,3]",
    "author": "Prerna",
    "tags": [
      "frontend-dsa",
      "easy"
    ]
  },
  {
    "id": "dsa-38",
    "number": 38,
    "category": "Frontend DSA",
    "title": "LRU Cache",
    "difficulty": "Hard",
    "description": "Least Recently Used cache. Solved by Kishan using JavaScript.",
    "starterCode": "// Problem 38: LRU Cache\n// Author: Kishan\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "class LRUCache {\n  constructor(cap) {\n    this.cap = cap;\n    this.map = new Map();\n  }\n  get(key) {\n    if (!this.map.has(key)) return -1;\n    const val = this.map.get(key);\n    this.map.delete(key);\n    this.map.set(key, val);\n    return val;\n  }\n  put(key, val) {\n    if (this.map.has(key)) this.map.delete(key);\n    this.map.set(key, val);\n    if (this.map.size > this.cap) this.map.delete(this.map.keys().next().value);\n  }\n}\n// Kishan's Map-based LRU",
    "author": "Kishan",
    "tags": [
      "frontend-dsa",
      "hard"
    ]
  },
  {
    "id": "dsa-39",
    "number": 39,
    "category": "Frontend DSA",
    "title": "Trie Autocomplete",
    "difficulty": "Hard",
    "description": "Trie for search autocomplete. Solved by Satyam using JavaScript.",
    "starterCode": "// Problem 39: Trie Autocomplete\n// Author: Satyam\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "class TrieNode {\n  constructor() { this.children = {}; this.end = false; }\n}\nclass Trie {\n  constructor() { this.root = new TrieNode(); }\n  insert(word) {\n    let node = this.root;\n    for (const c of word) {\n      if (!node.children[c]) node.children[c] = new TrieNode();\n      node = node.children[c];\n    }\n    node.end = true;\n  }\n  search(word) {\n    let node = this.root;\n    for (const c of word) {\n      if (!node.children[c]) return false;\n      node = node.children[c];\n    }\n    return node.end;\n  }\n}\n// Satyam's Trie for Satyam's search bar",
    "author": "Satyam",
    "tags": [
      "frontend-dsa",
      "hard"
    ]
  },
  {
    "id": "dsa-40",
    "number": 40,
    "category": "Frontend DSA",
    "title": "Virtual List Window",
    "difficulty": "Hard",
    "description": "Render visible items only. Solved by Tarun Tiwari using JavaScript.",
    "starterCode": "// Problem 40: Virtual List Window\n// Author: Tarun Tiwari\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function getVisibleRange(scrollTop, itemHeight, containerHeight, total) {\n  const start = Math.floor(scrollTop / itemHeight);\n  const visible = Math.ceil(containerHeight / itemHeight) + 1;\n  const end = Math.min(start + visible, total);\n  return { start, end, offsetY: start * itemHeight };\n}\n// Tarun Tiwari's virtual scroll math",
    "author": "Tarun Tiwari",
    "tags": [
      "frontend-dsa",
      "hard"
    ]
  },
  {
    "id": "dsa-41",
    "number": 41,
    "category": "Frontend DSA",
    "title": "Event Emitter",
    "difficulty": "Medium",
    "description": "Pub/sub pattern. Solved by Tushar using JavaScript.",
    "starterCode": "// Problem 41: Event Emitter\n// Author: Tushar\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "class EventEmitter {\n  constructor() { this.events = {}; }\n  on(event, cb) {\n    (this.events[event] ||= []).push(cb);\n  }\n  emit(event, ...args) {\n    (this.events[event] || []).forEach(cb => cb(...args));\n  }\n  off(event, cb) {\n    this.events[event] = (this.events[event] || []).filter(f => f !== cb);\n  }\n}\n// Tushar's event bus",
    "author": "Tushar",
    "tags": [
      "frontend-dsa",
      "medium"
    ]
  },
  {
    "id": "dsa-42",
    "number": 42,
    "category": "Arrays",
    "title": "Two Sum (Variant 2)",
    "difficulty": "Easy",
    "description": "Find two indices that add to target. Solved by Ranjeet using JavaScript.",
    "starterCode": "// Problem 42: Two Sum\n// Author: Ranjeet\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function twoSum(nums, target) {\n  const map = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const need = target - nums[i];\n    if (map.has(need)) return [map.get(need), i];\n    map.set(nums[i], i);\n  }\n}\n// Ranjeet: twoSum([2,7,11,15], 9) => [0,1]",
    "author": "Ranjeet",
    "tags": [
      "arrays",
      "easy"
    ]
  },
  {
    "id": "dsa-43",
    "number": 43,
    "category": "Arrays",
    "title": "Best Time to Buy Stock (Variant 2)",
    "difficulty": "Easy",
    "description": "Max profit from one buy and sell. Solved by Abhishek using JavaScript.",
    "starterCode": "// Problem 43: Best Time to Buy Stock\n// Author: Abhishek\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function maxProfit(prices) {\n  let min = Infinity, profit = 0;\n  for (const p of prices) {\n    min = Math.min(min, p);\n    profit = Math.max(profit, p - min);\n  }\n  return profit;\n}\n// Abhishek's solution",
    "author": "Abhishek",
    "tags": [
      "arrays",
      "easy"
    ]
  },
  {
    "id": "dsa-44",
    "number": 44,
    "category": "Arrays",
    "title": "Contains Duplicate (Variant 2)",
    "difficulty": "Easy",
    "description": "Check if array has duplicates. Solved by Sonu using JavaScript.",
    "starterCode": "// Problem 44: Contains Duplicate\n// Author: Sonu\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function containsDuplicate(nums) {\n  return new Set(nums).size !== nums.length;\n}\n// Sonu: containsDuplicate([1,2,3,1]) => true",
    "author": "Sonu",
    "tags": [
      "arrays",
      "easy"
    ]
  },
  {
    "id": "dsa-45",
    "number": 45,
    "category": "Arrays",
    "title": "Product Except Self (Variant 2)",
    "difficulty": "Medium",
    "description": "Return array of products except self. Solved by Prerna using JavaScript.",
    "starterCode": "// Problem 45: Product Except Self\n// Author: Prerna\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function productExceptSelf(nums) {\n  const res = Array(nums.length).fill(1);\n  let prefix = 1;\n  for (let i = 0; i < nums.length; i++) {\n    res[i] = prefix;\n    prefix *= nums[i];\n  }\n  let suffix = 1;\n  for (let i = nums.length - 1; i >= 0; i--) {\n    res[i] *= suffix;\n    suffix *= nums[i];\n  }\n  return res;\n}\n// Prerna's O(n) solution",
    "author": "Prerna",
    "tags": [
      "arrays",
      "medium"
    ]
  },
  {
    "id": "dsa-46",
    "number": 46,
    "category": "Arrays",
    "title": "Maximum Subarray (Variant 2)",
    "difficulty": "Medium",
    "description": "Kadane's algorithm — max contiguous sum. Solved by Kishan using JavaScript.",
    "starterCode": "// Problem 46: Maximum Subarray\n// Author: Kishan\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function maxSubArray(nums) {\n  let max = nums[0], cur = nums[0];\n  for (let i = 1; i < nums.length; i++) {\n    cur = Math.max(nums[i], cur + nums[i]);\n    max = Math.max(max, cur);\n  }\n  return max;\n}\n// Kishan: maxSubArray([-2,1,-3,4,-1,2,1,-5,4]) => 6",
    "author": "Kishan",
    "tags": [
      "arrays",
      "medium"
    ]
  },
  {
    "id": "dsa-47",
    "number": 47,
    "category": "Arrays",
    "title": "Merge Sorted Arrays (Variant 2)",
    "difficulty": "Easy",
    "description": "Merge two sorted arrays in-place. Solved by Satyam using JavaScript.",
    "starterCode": "// Problem 47: Merge Sorted Arrays\n// Author: Satyam\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function merge(nums1, m, nums2, n) {\n  let i = m - 1, j = n - 1, k = m + n - 1;\n  while (j >= 0) {\n    nums1[k--] = i >= 0 && nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];\n  }\n}\n// Satyam's merge",
    "author": "Satyam",
    "tags": [
      "arrays",
      "easy"
    ]
  },
  {
    "id": "dsa-48",
    "number": 48,
    "category": "Arrays",
    "title": "Rotate Array (Variant 2)",
    "difficulty": "Medium",
    "description": "Rotate array k steps right. Solved by Tarun Tiwari using JavaScript.",
    "starterCode": "// Problem 48: Rotate Array\n// Author: Tarun Tiwari\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function rotate(nums, k) {\n  k %= nums.length;\n  const rev = (l, r) => {\n    while (l < r) [nums[l], nums[r]] = [nums[r], nums[l]], l++, r--;\n  };\n  rev(0, nums.length - 1);\n  rev(0, k - 1);\n  rev(k, nums.length - 1);\n}\n// Tarun Tiwari's 3-reverse approach",
    "author": "Tarun Tiwari",
    "tags": [
      "arrays",
      "medium"
    ]
  },
  {
    "id": "dsa-49",
    "number": 49,
    "category": "Arrays",
    "title": "Find Missing Number (Variant 2)",
    "difficulty": "Easy",
    "description": "Find missing number in 0..n. Solved by Tushar using JavaScript.",
    "starterCode": "// Problem 49: Find Missing Number\n// Author: Tushar\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function missingNumber(nums) {\n  let sum = 0;\n  for (let i = 0; i < nums.length; i++) sum += nums[i];\n  const n = nums.length;\n  return (n * (n + 1)) / 2 - sum;\n}\n// Tushar's math trick",
    "author": "Tushar",
    "tags": [
      "arrays",
      "easy"
    ]
  },
  {
    "id": "dsa-50",
    "number": 50,
    "category": "Arrays",
    "title": "Move Zeroes (Variant 2)",
    "difficulty": "Easy",
    "description": "Move all zeroes to end. Solved by Ranjeet using JavaScript.",
    "starterCode": "// Problem 50: Move Zeroes\n// Author: Ranjeet\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function moveZeroes(nums) {\n  let j = 0;\n  for (let i = 0; i < nums.length; i++) {\n    if (nums[i] !== 0) nums[j++] = nums[i];\n  }\n  while (j < nums.length) nums[j++] = 0;\n}\n// Ranjeet's two-pointer",
    "author": "Ranjeet",
    "tags": [
      "arrays",
      "easy"
    ]
  },
  {
    "id": "dsa-51",
    "number": 51,
    "category": "Arrays",
    "title": "Intersection of Arrays (Variant 2)",
    "difficulty": "Easy",
    "description": "Find common elements. Solved by Abhishek using JavaScript.",
    "starterCode": "// Problem 51: Intersection of Arrays\n// Author: Abhishek\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function intersect(nums1, nums2) {\n  const map = new Map();\n  for (const n of nums1) map.set(n, (map.get(n) || 0) + 1);\n  const res = [];\n  for (const n of nums2) {\n    if (map.get(n) > 0) { res.push(n); map.set(n, map.get(n) - 1); }\n  }\n  return res;\n}\n// Abhishek's hash map",
    "author": "Abhishek",
    "tags": [
      "arrays",
      "easy"
    ]
  },
  {
    "id": "dsa-52",
    "number": 52,
    "category": "Strings",
    "title": "Valid Anagram (Variant 2)",
    "difficulty": "Easy",
    "description": "Check if two strings are anagrams. Solved by Sonu using JavaScript.",
    "starterCode": "// Problem 52: Valid Anagram\n// Author: Sonu\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function isAnagram(s, t) {\n  if (s.length !== t.length) return false;\n  const count = {};\n  for (const c of s) count[c] = (count[c] || 0) + 1;\n  for (const c of t) {\n    if (!count[c]) return false;\n    count[c]--;\n  }\n  return true;\n}\n// Sonu: isAnagram(\"listen\",\"silent\") => true",
    "author": "Sonu",
    "tags": [
      "strings",
      "easy"
    ]
  },
  {
    "id": "dsa-53",
    "number": 53,
    "category": "Strings",
    "title": "Valid Palindrome (Variant 2)",
    "difficulty": "Easy",
    "description": "Check palindrome ignoring non-alphanumeric. Solved by Prerna using JavaScript.",
    "starterCode": "// Problem 53: Valid Palindrome\n// Author: Prerna\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function isPalindrome(s) {\n  const clean = s.toLowerCase().replace(/[^a-z0-9]/g, \"\");\n  let l = 0, r = clean.length - 1;\n  while (l < r) {\n    if (clean[l] !== clean[r]) return false;\n    l++; r--;\n  }\n  return true;\n}\n// Prerna's two-pointer",
    "author": "Prerna",
    "tags": [
      "strings",
      "easy"
    ]
  },
  {
    "id": "dsa-54",
    "number": 54,
    "category": "Strings",
    "title": "Longest Substring Without Repeat (Variant 2)",
    "difficulty": "Medium",
    "description": "Sliding window — longest unique substring. Solved by Kishan using JavaScript.",
    "starterCode": "// Problem 54: Longest Substring Without Repeat\n// Author: Kishan\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function lengthOfLongestSubstring(s) {\n  const set = new Set();\n  let max = 0, l = 0;\n  for (let r = 0; r < s.length; r++) {\n    while (set.has(s[r])) set.delete(s[l++]);\n    set.add(s[r]);\n    max = Math.max(max, r - l + 1);\n  }\n  return max;\n}\n// Kishan's sliding window",
    "author": "Kishan",
    "tags": [
      "strings",
      "medium"
    ]
  },
  {
    "id": "dsa-55",
    "number": 55,
    "category": "Strings",
    "title": "Group Anagrams (Variant 2)",
    "difficulty": "Medium",
    "description": "Group strings that are anagrams. Solved by Satyam using JavaScript.",
    "starterCode": "// Problem 55: Group Anagrams\n// Author: Satyam\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function groupAnagrams(strs) {\n  const map = new Map();\n  for (const s of strs) {\n    const key = s.split(\"\").sort().join(\"\");\n    if (!map.has(key)) map.set(key, []);\n    map.get(key).push(s);\n  }\n  return [...map.values()];\n}\n// Satyam's sorted key",
    "author": "Satyam",
    "tags": [
      "strings",
      "medium"
    ]
  },
  {
    "id": "dsa-56",
    "number": 56,
    "category": "Strings",
    "title": "Reverse Words (Variant 2)",
    "difficulty": "Medium",
    "description": "Reverse words in a string. Solved by Tarun Tiwari using JavaScript.",
    "starterCode": "// Problem 56: Reverse Words\n// Author: Tarun Tiwari\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function reverseWords(s) {\n  return s.trim().split(/\\s+/).reverse().join(\" \");\n}\n// Tarun Tiwari: reverseWords(\"hello world\") => \"world hello\"",
    "author": "Tarun Tiwari",
    "tags": [
      "strings",
      "medium"
    ]
  },
  {
    "id": "dsa-57",
    "number": 57,
    "category": "Hash Map",
    "title": "First Unique Character (Variant 2)",
    "difficulty": "Easy",
    "description": "Index of first non-repeating char. Solved by Tushar using JavaScript.",
    "starterCode": "// Problem 57: First Unique Character\n// Author: Tushar\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function firstUniqChar(s) {\n  const map = new Map();\n  for (const c of s) map.set(c, (map.get(c) || 0) + 1);\n  for (let i = 0; i < s.length; i++) {\n    if (map.get(s[i]) === 1) return i;\n  }\n  return -1;\n}\n// Tushar's solution",
    "author": "Tushar",
    "tags": [
      "hash-map",
      "easy"
    ]
  },
  {
    "id": "dsa-58",
    "number": 58,
    "category": "Hash Map",
    "title": "Ransom Note (Variant 2)",
    "difficulty": "Easy",
    "description": "Can construct ransom note from magazine. Solved by Ranjeet using JavaScript.",
    "starterCode": "// Problem 58: Ransom Note\n// Author: Ranjeet\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function canConstruct(ransom, magazine) {\n  const count = {};\n  for (const c of magazine) count[c] = (count[c] || 0) + 1;\n  for (const c of ransom) {\n    if (!count[c]) return false;\n    count[c]--;\n  }\n  return true;\n}\n// Ranjeet's char count",
    "author": "Ranjeet",
    "tags": [
      "hash-map",
      "easy"
    ]
  },
  {
    "id": "dsa-59",
    "number": 59,
    "category": "Hash Map",
    "title": "Top K Frequent Elements (Variant 2)",
    "difficulty": "Medium",
    "description": "Return k most frequent elements. Solved by Abhishek using JavaScript.",
    "starterCode": "// Problem 59: Top K Frequent Elements\n// Author: Abhishek\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function topKFrequent(nums, k) {\n  const freq = new Map();\n  for (const n of nums) freq.set(n, (freq.get(n) || 0) + 1);\n  return [...freq.entries()]\n    .sort((a, b) => b[1] - a[1])\n    .slice(0, k)\n    .map(([n]) => n);\n}\n// Abhishek's frequency map",
    "author": "Abhishek",
    "tags": [
      "hash-map",
      "medium"
    ]
  },
  {
    "id": "dsa-60",
    "number": 60,
    "category": "Two Pointers",
    "title": "Valid Palindrome II (Variant 2)",
    "difficulty": "Easy",
    "description": "Palindrome after deleting one char. Solved by Sonu using JavaScript.",
    "starterCode": "// Problem 60: Valid Palindrome II\n// Author: Sonu\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function validPalindrome(s) {\n  const check = (l, r) => {\n    while (l < r) {\n      if (s[l] !== s[r]) return false;\n      l++; r--;\n    }\n    return true;\n  };\n  let l = 0, r = s.length - 1;\n  while (l < r) {\n    if (s[l] !== s[r]) return check(l+1,r) || check(l,r-1);\n    l++; r--;\n  }\n  return true;\n}\n// Sonu's two-pointer",
    "author": "Sonu",
    "tags": [
      "two-pointers",
      "easy"
    ]
  },
  {
    "id": "dsa-61",
    "number": 61,
    "category": "Two Pointers",
    "title": "3Sum (Variant 2)",
    "difficulty": "Medium",
    "description": "Find triplets that sum to zero. Solved by Prerna using JavaScript.",
    "starterCode": "// Problem 61: 3Sum\n// Author: Prerna\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function threeSum(nums) {\n  nums.sort((a,b) => a-b);\n  const res = [];\n  for (let i = 0; i < nums.length - 2; i++) {\n    if (i > 0 && nums[i] === nums[i-1]) continue;\n    let l = i+1, r = nums.length-1;\n    while (l < r) {\n      const sum = nums[i]+nums[l]+nums[r];\n      if (sum === 0) { res.push([nums[i],nums[l],nums[r]]); l++; r--; }\n      else if (sum < 0) l++; else r--;\n    }\n  }\n  return res;\n}\n// Prerna's sorted 3Sum",
    "author": "Prerna",
    "tags": [
      "two-pointers",
      "medium"
    ]
  },
  {
    "id": "dsa-62",
    "number": 62,
    "category": "Two Pointers",
    "title": "Container With Most Water (Variant 2)",
    "difficulty": "Medium",
    "description": "Max area between two lines. Solved by Kishan using JavaScript.",
    "starterCode": "// Problem 62: Container With Most Water\n// Author: Kishan\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function maxArea(height) {\n  let l = 0, r = height.length-1, max = 0;\n  while (l < r) {\n    max = Math.max(max, Math.min(height[l], height[r]) * (r-l));\n    height[l] < height[r] ? l++ : r--;\n  }\n  return max;\n}\n// Kishan's two-pointer",
    "author": "Kishan",
    "tags": [
      "two-pointers",
      "medium"
    ]
  },
  {
    "id": "dsa-63",
    "number": 63,
    "category": "Stack",
    "title": "Valid Parentheses (Variant 2)",
    "difficulty": "Easy",
    "description": "Check balanced brackets. Solved by Satyam using JavaScript.",
    "starterCode": "// Problem 63: Valid Parentheses\n// Author: Satyam\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function isValid(s) {\n  const stack = [], map = { \")\":\"(\", \"]\":\"[\", \"}\":\"{\" };\n  for (const c of s) {\n    if (c in map) {\n      if (stack.pop() !== map[c]) return false;\n    } else stack.push(c);\n  }\n  return stack.length === 0;\n}\n// Satyam: isValid(\"({[]})\") => true",
    "author": "Satyam",
    "tags": [
      "stack",
      "easy"
    ]
  },
  {
    "id": "dsa-64",
    "number": 64,
    "category": "Stack",
    "title": "Min Stack (Variant 2)",
    "difficulty": "Medium",
    "description": "Stack with O(1) getMin. Solved by Tarun Tiwari using JavaScript.",
    "starterCode": "// Problem 64: Min Stack\n// Author: Tarun Tiwari\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "class MinStack {\n  constructor() { this.stack = []; this.mins = []; }\n  push(val) {\n    this.stack.push(val);\n    this.mins.push(Math.min(val, this.mins.at(-1) ?? Infinity));\n  }\n  pop() { this.stack.pop(); this.mins.pop(); }\n  top() { return this.stack.at(-1); }\n  getMin() { return this.mins.at(-1); }\n}\n// Tarun Tiwari's dual stack",
    "author": "Tarun Tiwari",
    "tags": [
      "stack",
      "medium"
    ]
  },
  {
    "id": "dsa-65",
    "number": 65,
    "category": "Stack",
    "title": "Daily Temperatures (Variant 2)",
    "difficulty": "Medium",
    "description": "Days until warmer temperature. Solved by Tushar using JavaScript.",
    "starterCode": "// Problem 65: Daily Temperatures\n// Author: Tushar\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function dailyTemperatures(temps) {\n  const res = Array(temps.length).fill(0);\n  const stack = [];\n  for (let i = 0; i < temps.length; i++) {\n    while (stack.length && temps[i] > temps[stack.at(-1)]) {\n      const idx = stack.pop();\n      res[idx] = i - idx;\n    }\n    stack.push(i);\n  }\n  return res;\n}\n// Tushar's monotonic stack",
    "author": "Tushar",
    "tags": [
      "stack",
      "medium"
    ]
  },
  {
    "id": "dsa-66",
    "number": 66,
    "category": "Trees",
    "title": "Invert Binary Tree (Variant 2)",
    "difficulty": "Easy",
    "description": "Mirror a binary tree. Solved by Ranjeet using JavaScript.",
    "starterCode": "// Problem 66: Invert Binary Tree\n// Author: Ranjeet\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function invertTree(root) {\n  if (!root) return null;\n  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];\n  return root;\n}\n// Ranjeet's recursive swap",
    "author": "Ranjeet",
    "tags": [
      "trees",
      "easy"
    ]
  },
  {
    "id": "dsa-67",
    "number": 67,
    "category": "Trees",
    "title": "Max Depth of Tree (Variant 2)",
    "difficulty": "Easy",
    "description": "Maximum depth of binary tree. Solved by Abhishek using JavaScript.",
    "starterCode": "// Problem 67: Max Depth of Tree\n// Author: Abhishek\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function maxDepth(root) {\n  if (!root) return 0;\n  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));\n}\n// Abhishek's recursion",
    "author": "Abhishek",
    "tags": [
      "trees",
      "easy"
    ]
  },
  {
    "id": "dsa-68",
    "number": 68,
    "category": "Trees",
    "title": "Level Order Traversal (Variant 2)",
    "difficulty": "Medium",
    "description": "BFS level-by-level. Solved by Sonu using JavaScript.",
    "starterCode": "// Problem 68: Level Order Traversal\n// Author: Sonu\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function levelOrder(root) {\n  if (!root) return [];\n  const res = [], queue = [root];\n  while (queue.length) {\n    const level = [], size = queue.length;\n    for (let i = 0; i < size; i++) {\n      const node = queue.shift();\n      level.push(node.val);\n      if (node.left) queue.push(node.left);\n      if (node.right) queue.push(node.right);\n    }\n    res.push(level);\n  }\n  return res;\n}\n// Sonu's BFS",
    "author": "Sonu",
    "tags": [
      "trees",
      "medium"
    ]
  },
  {
    "id": "dsa-69",
    "number": 69,
    "category": "Trees",
    "title": "Validate BST (Variant 2)",
    "difficulty": "Medium",
    "description": "Check if tree is valid BST. Solved by Prerna using JavaScript.",
    "starterCode": "// Problem 69: Validate BST\n// Author: Prerna\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function isValidBST(root, min=-Infinity, max=Infinity) {\n  if (!root) return true;\n  if (root.val <= min || root.val >= max) return false;\n  return isValidBST(root.left, min, root.val) &&\n         isValidBST(root.right, root.val, max);\n}\n// Prerna's bounds check",
    "author": "Prerna",
    "tags": [
      "trees",
      "medium"
    ]
  },
  {
    "id": "dsa-70",
    "number": 70,
    "category": "Graphs",
    "title": "Number of Islands (Variant 2)",
    "difficulty": "Medium",
    "description": "Count islands in 2D grid. Solved by Kishan using JavaScript.",
    "starterCode": "// Problem 70: Number of Islands\n// Author: Kishan\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function numIslands(grid) {\n  let count = 0;\n  const dfs = (r, c) => {\n    if (r<0||c<0||r>=grid.length||c>=grid[0].length||grid[r][c]===\"0\") return;\n    grid[r][c] = \"0\";\n    dfs(r+1,c); dfs(r-1,c); dfs(r,c+1); dfs(r,c-1);\n  };\n  for (let r=0;r<grid.length;r++)\n    for (let c=0;c<grid[0].length;c++)\n      if (grid[r][c]===\"1\") { count++; dfs(r,c); }\n  return count;\n}\n// Kishan's DFS flood fill",
    "author": "Kishan",
    "tags": [
      "graphs",
      "medium"
    ]
  },
  {
    "id": "dsa-71",
    "number": 71,
    "category": "Graphs",
    "title": "BFS Shortest Path (Variant 2)",
    "difficulty": "Medium",
    "description": "Shortest path in unweighted graph. Solved by Satyam using JavaScript.",
    "starterCode": "// Problem 71: BFS Shortest Path\n// Author: Satyam\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function bfsShortest(graph, start, end) {\n  const queue = [[start, 0]];\n  const visited = new Set([start]);\n  while (queue.length) {\n    const [node, dist] = queue.shift();\n    if (node === end) return dist;\n    for (const next of graph[node] || []) {\n      if (!visited.has(next)) {\n        visited.add(next);\n        queue.push([next, dist + 1]);\n      }\n    }\n  }\n  return -1;\n}\n// Satyam's BFS",
    "author": "Satyam",
    "tags": [
      "graphs",
      "medium"
    ]
  },
  {
    "id": "dsa-72",
    "number": 72,
    "category": "Dynamic Programming",
    "title": "Climbing Stairs (Variant 2)",
    "difficulty": "Easy",
    "description": "Ways to climb n stairs (1 or 2 steps). Solved by Tarun Tiwari using JavaScript.",
    "starterCode": "// Problem 72: Climbing Stairs\n// Author: Tarun Tiwari\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function climbStairs(n) {\n  if (n <= 2) return n;\n  let a = 1, b = 2;\n  for (let i = 3; i <= n; i++) {\n    [a, b] = [b, a + b];\n  }\n  return b;\n}\n// Tarun Tiwari: climbStairs(5) => 8 (Fibonacci)",
    "author": "Tarun Tiwari",
    "tags": [
      "dynamic-programming",
      "easy"
    ]
  },
  {
    "id": "dsa-73",
    "number": 73,
    "category": "Dynamic Programming",
    "title": "House Robber (Variant 2)",
    "difficulty": "Medium",
    "description": "Max money without robbing adjacent. Solved by Tushar using JavaScript.",
    "starterCode": "// Problem 73: House Robber\n// Author: Tushar\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function rob(nums) {\n  let prev = 0, cur = 0;\n  for (const n of nums) {\n    [prev, cur] = [cur, Math.max(cur, prev + n)];\n  }\n  return cur;\n}\n// Tushar's DP",
    "author": "Tushar",
    "tags": [
      "dynamic-programming",
      "medium"
    ]
  },
  {
    "id": "dsa-74",
    "number": 74,
    "category": "Dynamic Programming",
    "title": "Coin Change (Variant 2)",
    "difficulty": "Medium",
    "description": "Minimum coins to make amount. Solved by Ranjeet using JavaScript.",
    "starterCode": "// Problem 74: Coin Change\n// Author: Ranjeet\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function coinChange(coins, amount) {\n  const dp = Array(amount + 1).fill(Infinity);\n  dp[0] = 0;\n  for (const coin of coins)\n    for (let i = coin; i <= amount; i++)\n      dp[i] = Math.min(dp[i], dp[i - coin] + 1);\n  return dp[amount] === Infinity ? -1 : dp[amount];\n}\n// Ranjeet's bottom-up DP",
    "author": "Ranjeet",
    "tags": [
      "dynamic-programming",
      "medium"
    ]
  },
  {
    "id": "dsa-75",
    "number": 75,
    "category": "Frontend DSA",
    "title": "Debounce Function (Variant 2)",
    "difficulty": "Medium",
    "description": "Debounce for search input. Solved by Abhishek using JavaScript.",
    "starterCode": "// Problem 75: Debounce Function\n// Author: Abhishek\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function debounce(fn, delay) {\n  let timer;\n  return function(...args) {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn.apply(this, args), delay);\n  };\n}\n// Abhishek: debounce(searchAPI, 300)",
    "author": "Abhishek",
    "tags": [
      "frontend-dsa",
      "medium"
    ]
  },
  {
    "id": "dsa-76",
    "number": 76,
    "category": "Frontend DSA",
    "title": "Throttle Function (Variant 2)",
    "difficulty": "Medium",
    "description": "Throttle scroll handler. Solved by Sonu using JavaScript.",
    "starterCode": "// Problem 76: Throttle Function\n// Author: Sonu\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function throttle(fn, limit) {\n  let inThrottle;\n  return function(...args) {\n    if (!inThrottle) {\n      fn.apply(this, args);\n      inThrottle = true;\n      setTimeout(() => inThrottle = false, limit);\n    }\n  };\n}\n// Sonu: throttle(onScroll, 100)",
    "author": "Sonu",
    "tags": [
      "frontend-dsa",
      "medium"
    ]
  },
  {
    "id": "dsa-77",
    "number": 77,
    "category": "Frontend DSA",
    "title": "Deep Clone Object (Variant 2)",
    "difficulty": "Medium",
    "description": "Deep copy nested object. Solved by Prerna using JavaScript.",
    "starterCode": "// Problem 77: Deep Clone Object\n// Author: Prerna\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function deepClone(obj) {\n  if (obj === null || typeof obj !== \"object\") return obj;\n  if (Array.isArray(obj)) return obj.map(deepClone);\n  const clone = {};\n  for (const key in obj) clone[key] = deepClone(obj[key]);\n  return clone;\n}\n// Prerna's recursive clone",
    "author": "Prerna",
    "tags": [
      "frontend-dsa",
      "medium"
    ]
  },
  {
    "id": "dsa-78",
    "number": 78,
    "category": "Frontend DSA",
    "title": "Flatten Array (Variant 2)",
    "difficulty": "Easy",
    "description": "Flatten nested array. Solved by Kishan using JavaScript.",
    "starterCode": "// Problem 78: Flatten Array\n// Author: Kishan\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function flatten(arr) {\n  return arr.reduce((acc, val) =>\n    acc.concat(Array.isArray(val) ? flatten(val) : val), []);\n}\n// Kishan: flatten([1,[2,[3]]]) => [1,2,3]",
    "author": "Kishan",
    "tags": [
      "frontend-dsa",
      "easy"
    ]
  },
  {
    "id": "dsa-79",
    "number": 79,
    "category": "Frontend DSA",
    "title": "LRU Cache (Variant 2)",
    "difficulty": "Hard",
    "description": "Least Recently Used cache. Solved by Satyam using JavaScript.",
    "starterCode": "// Problem 79: LRU Cache\n// Author: Satyam\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "class LRUCache {\n  constructor(cap) {\n    this.cap = cap;\n    this.map = new Map();\n  }\n  get(key) {\n    if (!this.map.has(key)) return -1;\n    const val = this.map.get(key);\n    this.map.delete(key);\n    this.map.set(key, val);\n    return val;\n  }\n  put(key, val) {\n    if (this.map.has(key)) this.map.delete(key);\n    this.map.set(key, val);\n    if (this.map.size > this.cap) this.map.delete(this.map.keys().next().value);\n  }\n}\n// Satyam's Map-based LRU",
    "author": "Satyam",
    "tags": [
      "frontend-dsa",
      "hard"
    ]
  },
  {
    "id": "dsa-80",
    "number": 80,
    "category": "Frontend DSA",
    "title": "Trie Autocomplete (Variant 2)",
    "difficulty": "Hard",
    "description": "Trie for search autocomplete. Solved by Tarun Tiwari using JavaScript.",
    "starterCode": "// Problem 80: Trie Autocomplete\n// Author: Tarun Tiwari\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "class TrieNode {\n  constructor() { this.children = {}; this.end = false; }\n}\nclass Trie {\n  constructor() { this.root = new TrieNode(); }\n  insert(word) {\n    let node = this.root;\n    for (const c of word) {\n      if (!node.children[c]) node.children[c] = new TrieNode();\n      node = node.children[c];\n    }\n    node.end = true;\n  }\n  search(word) {\n    let node = this.root;\n    for (const c of word) {\n      if (!node.children[c]) return false;\n      node = node.children[c];\n    }\n    return node.end;\n  }\n}\n// Tarun Tiwari's Trie for Tarun Tiwari's search bar",
    "author": "Tarun Tiwari",
    "tags": [
      "frontend-dsa",
      "hard"
    ]
  },
  {
    "id": "dsa-81",
    "number": 81,
    "category": "Frontend DSA",
    "title": "Virtual List Window (Variant 2)",
    "difficulty": "Hard",
    "description": "Render visible items only. Solved by Tushar using JavaScript.",
    "starterCode": "// Problem 81: Virtual List Window\n// Author: Tushar\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function getVisibleRange(scrollTop, itemHeight, containerHeight, total) {\n  const start = Math.floor(scrollTop / itemHeight);\n  const visible = Math.ceil(containerHeight / itemHeight) + 1;\n  const end = Math.min(start + visible, total);\n  return { start, end, offsetY: start * itemHeight };\n}\n// Tushar's virtual scroll math",
    "author": "Tushar",
    "tags": [
      "frontend-dsa",
      "hard"
    ]
  },
  {
    "id": "dsa-82",
    "number": 82,
    "category": "Frontend DSA",
    "title": "Event Emitter (Variant 2)",
    "difficulty": "Medium",
    "description": "Pub/sub pattern. Solved by Ranjeet using JavaScript.",
    "starterCode": "// Problem 82: Event Emitter\n// Author: Ranjeet\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "class EventEmitter {\n  constructor() { this.events = {}; }\n  on(event, cb) {\n    (this.events[event] ||= []).push(cb);\n  }\n  emit(event, ...args) {\n    (this.events[event] || []).forEach(cb => cb(...args));\n  }\n  off(event, cb) {\n    this.events[event] = (this.events[event] || []).filter(f => f !== cb);\n  }\n}\n// Ranjeet's event bus",
    "author": "Ranjeet",
    "tags": [
      "frontend-dsa",
      "medium"
    ]
  },
  {
    "id": "dsa-83",
    "number": 83,
    "category": "Arrays",
    "title": "Two Sum (Variant 3)",
    "difficulty": "Easy",
    "description": "Find two indices that add to target. Solved by Abhishek using JavaScript.",
    "starterCode": "// Problem 83: Two Sum\n// Author: Abhishek\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function twoSum(nums, target) {\n  const map = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const need = target - nums[i];\n    if (map.has(need)) return [map.get(need), i];\n    map.set(nums[i], i);\n  }\n}\n// Abhishek: twoSum([2,7,11,15], 9) => [0,1]",
    "author": "Abhishek",
    "tags": [
      "arrays",
      "easy"
    ]
  },
  {
    "id": "dsa-84",
    "number": 84,
    "category": "Arrays",
    "title": "Best Time to Buy Stock (Variant 3)",
    "difficulty": "Easy",
    "description": "Max profit from one buy and sell. Solved by Sonu using JavaScript.",
    "starterCode": "// Problem 84: Best Time to Buy Stock\n// Author: Sonu\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function maxProfit(prices) {\n  let min = Infinity, profit = 0;\n  for (const p of prices) {\n    min = Math.min(min, p);\n    profit = Math.max(profit, p - min);\n  }\n  return profit;\n}\n// Sonu's solution",
    "author": "Sonu",
    "tags": [
      "arrays",
      "easy"
    ]
  },
  {
    "id": "dsa-85",
    "number": 85,
    "category": "Arrays",
    "title": "Contains Duplicate (Variant 3)",
    "difficulty": "Easy",
    "description": "Check if array has duplicates. Solved by Prerna using JavaScript.",
    "starterCode": "// Problem 85: Contains Duplicate\n// Author: Prerna\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function containsDuplicate(nums) {\n  return new Set(nums).size !== nums.length;\n}\n// Prerna: containsDuplicate([1,2,3,1]) => true",
    "author": "Prerna",
    "tags": [
      "arrays",
      "easy"
    ]
  },
  {
    "id": "dsa-86",
    "number": 86,
    "category": "Arrays",
    "title": "Product Except Self (Variant 3)",
    "difficulty": "Medium",
    "description": "Return array of products except self. Solved by Kishan using JavaScript.",
    "starterCode": "// Problem 86: Product Except Self\n// Author: Kishan\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function productExceptSelf(nums) {\n  const res = Array(nums.length).fill(1);\n  let prefix = 1;\n  for (let i = 0; i < nums.length; i++) {\n    res[i] = prefix;\n    prefix *= nums[i];\n  }\n  let suffix = 1;\n  for (let i = nums.length - 1; i >= 0; i--) {\n    res[i] *= suffix;\n    suffix *= nums[i];\n  }\n  return res;\n}\n// Kishan's O(n) solution",
    "author": "Kishan",
    "tags": [
      "arrays",
      "medium"
    ]
  },
  {
    "id": "dsa-87",
    "number": 87,
    "category": "Arrays",
    "title": "Maximum Subarray (Variant 3)",
    "difficulty": "Medium",
    "description": "Kadane's algorithm — max contiguous sum. Solved by Satyam using JavaScript.",
    "starterCode": "// Problem 87: Maximum Subarray\n// Author: Satyam\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function maxSubArray(nums) {\n  let max = nums[0], cur = nums[0];\n  for (let i = 1; i < nums.length; i++) {\n    cur = Math.max(nums[i], cur + nums[i]);\n    max = Math.max(max, cur);\n  }\n  return max;\n}\n// Satyam: maxSubArray([-2,1,-3,4,-1,2,1,-5,4]) => 6",
    "author": "Satyam",
    "tags": [
      "arrays",
      "medium"
    ]
  },
  {
    "id": "dsa-88",
    "number": 88,
    "category": "Arrays",
    "title": "Merge Sorted Arrays (Variant 3)",
    "difficulty": "Easy",
    "description": "Merge two sorted arrays in-place. Solved by Tarun Tiwari using JavaScript.",
    "starterCode": "// Problem 88: Merge Sorted Arrays\n// Author: Tarun Tiwari\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function merge(nums1, m, nums2, n) {\n  let i = m - 1, j = n - 1, k = m + n - 1;\n  while (j >= 0) {\n    nums1[k--] = i >= 0 && nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];\n  }\n}\n// Tarun Tiwari's merge",
    "author": "Tarun Tiwari",
    "tags": [
      "arrays",
      "easy"
    ]
  },
  {
    "id": "dsa-89",
    "number": 89,
    "category": "Arrays",
    "title": "Rotate Array (Variant 3)",
    "difficulty": "Medium",
    "description": "Rotate array k steps right. Solved by Tushar using JavaScript.",
    "starterCode": "// Problem 89: Rotate Array\n// Author: Tushar\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function rotate(nums, k) {\n  k %= nums.length;\n  const rev = (l, r) => {\n    while (l < r) [nums[l], nums[r]] = [nums[r], nums[l]], l++, r--;\n  };\n  rev(0, nums.length - 1);\n  rev(0, k - 1);\n  rev(k, nums.length - 1);\n}\n// Tushar's 3-reverse approach",
    "author": "Tushar",
    "tags": [
      "arrays",
      "medium"
    ]
  },
  {
    "id": "dsa-90",
    "number": 90,
    "category": "Arrays",
    "title": "Find Missing Number (Variant 3)",
    "difficulty": "Easy",
    "description": "Find missing number in 0..n. Solved by Ranjeet using JavaScript.",
    "starterCode": "// Problem 90: Find Missing Number\n// Author: Ranjeet\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function missingNumber(nums) {\n  let sum = 0;\n  for (let i = 0; i < nums.length; i++) sum += nums[i];\n  const n = nums.length;\n  return (n * (n + 1)) / 2 - sum;\n}\n// Ranjeet's math trick",
    "author": "Ranjeet",
    "tags": [
      "arrays",
      "easy"
    ]
  },
  {
    "id": "dsa-91",
    "number": 91,
    "category": "Arrays",
    "title": "Move Zeroes (Variant 3)",
    "difficulty": "Easy",
    "description": "Move all zeroes to end. Solved by Abhishek using JavaScript.",
    "starterCode": "// Problem 91: Move Zeroes\n// Author: Abhishek\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function moveZeroes(nums) {\n  let j = 0;\n  for (let i = 0; i < nums.length; i++) {\n    if (nums[i] !== 0) nums[j++] = nums[i];\n  }\n  while (j < nums.length) nums[j++] = 0;\n}\n// Abhishek's two-pointer",
    "author": "Abhishek",
    "tags": [
      "arrays",
      "easy"
    ]
  },
  {
    "id": "dsa-92",
    "number": 92,
    "category": "Arrays",
    "title": "Intersection of Arrays (Variant 3)",
    "difficulty": "Easy",
    "description": "Find common elements. Solved by Sonu using JavaScript.",
    "starterCode": "// Problem 92: Intersection of Arrays\n// Author: Sonu\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function intersect(nums1, nums2) {\n  const map = new Map();\n  for (const n of nums1) map.set(n, (map.get(n) || 0) + 1);\n  const res = [];\n  for (const n of nums2) {\n    if (map.get(n) > 0) { res.push(n); map.set(n, map.get(n) - 1); }\n  }\n  return res;\n}\n// Sonu's hash map",
    "author": "Sonu",
    "tags": [
      "arrays",
      "easy"
    ]
  },
  {
    "id": "dsa-93",
    "number": 93,
    "category": "Strings",
    "title": "Valid Anagram (Variant 3)",
    "difficulty": "Easy",
    "description": "Check if two strings are anagrams. Solved by Prerna using JavaScript.",
    "starterCode": "// Problem 93: Valid Anagram\n// Author: Prerna\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function isAnagram(s, t) {\n  if (s.length !== t.length) return false;\n  const count = {};\n  for (const c of s) count[c] = (count[c] || 0) + 1;\n  for (const c of t) {\n    if (!count[c]) return false;\n    count[c]--;\n  }\n  return true;\n}\n// Prerna: isAnagram(\"listen\",\"silent\") => true",
    "author": "Prerna",
    "tags": [
      "strings",
      "easy"
    ]
  },
  {
    "id": "dsa-94",
    "number": 94,
    "category": "Strings",
    "title": "Valid Palindrome (Variant 3)",
    "difficulty": "Easy",
    "description": "Check palindrome ignoring non-alphanumeric. Solved by Kishan using JavaScript.",
    "starterCode": "// Problem 94: Valid Palindrome\n// Author: Kishan\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function isPalindrome(s) {\n  const clean = s.toLowerCase().replace(/[^a-z0-9]/g, \"\");\n  let l = 0, r = clean.length - 1;\n  while (l < r) {\n    if (clean[l] !== clean[r]) return false;\n    l++; r--;\n  }\n  return true;\n}\n// Kishan's two-pointer",
    "author": "Kishan",
    "tags": [
      "strings",
      "easy"
    ]
  },
  {
    "id": "dsa-95",
    "number": 95,
    "category": "Strings",
    "title": "Longest Substring Without Repeat (Variant 3)",
    "difficulty": "Medium",
    "description": "Sliding window — longest unique substring. Solved by Satyam using JavaScript.",
    "starterCode": "// Problem 95: Longest Substring Without Repeat\n// Author: Satyam\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function lengthOfLongestSubstring(s) {\n  const set = new Set();\n  let max = 0, l = 0;\n  for (let r = 0; r < s.length; r++) {\n    while (set.has(s[r])) set.delete(s[l++]);\n    set.add(s[r]);\n    max = Math.max(max, r - l + 1);\n  }\n  return max;\n}\n// Satyam's sliding window",
    "author": "Satyam",
    "tags": [
      "strings",
      "medium"
    ]
  },
  {
    "id": "dsa-96",
    "number": 96,
    "category": "Strings",
    "title": "Group Anagrams (Variant 3)",
    "difficulty": "Medium",
    "description": "Group strings that are anagrams. Solved by Tarun Tiwari using JavaScript.",
    "starterCode": "// Problem 96: Group Anagrams\n// Author: Tarun Tiwari\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function groupAnagrams(strs) {\n  const map = new Map();\n  for (const s of strs) {\n    const key = s.split(\"\").sort().join(\"\");\n    if (!map.has(key)) map.set(key, []);\n    map.get(key).push(s);\n  }\n  return [...map.values()];\n}\n// Tarun Tiwari's sorted key",
    "author": "Tarun Tiwari",
    "tags": [
      "strings",
      "medium"
    ]
  },
  {
    "id": "dsa-97",
    "number": 97,
    "category": "Strings",
    "title": "Reverse Words (Variant 3)",
    "difficulty": "Medium",
    "description": "Reverse words in a string. Solved by Tushar using JavaScript.",
    "starterCode": "// Problem 97: Reverse Words\n// Author: Tushar\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function reverseWords(s) {\n  return s.trim().split(/\\s+/).reverse().join(\" \");\n}\n// Tushar: reverseWords(\"hello world\") => \"world hello\"",
    "author": "Tushar",
    "tags": [
      "strings",
      "medium"
    ]
  },
  {
    "id": "dsa-98",
    "number": 98,
    "category": "Hash Map",
    "title": "First Unique Character (Variant 3)",
    "difficulty": "Easy",
    "description": "Index of first non-repeating char. Solved by Ranjeet using JavaScript.",
    "starterCode": "// Problem 98: First Unique Character\n// Author: Ranjeet\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function firstUniqChar(s) {\n  const map = new Map();\n  for (const c of s) map.set(c, (map.get(c) || 0) + 1);\n  for (let i = 0; i < s.length; i++) {\n    if (map.get(s[i]) === 1) return i;\n  }\n  return -1;\n}\n// Ranjeet's solution",
    "author": "Ranjeet",
    "tags": [
      "hash-map",
      "easy"
    ]
  },
  {
    "id": "dsa-99",
    "number": 99,
    "category": "Hash Map",
    "title": "Ransom Note (Variant 3)",
    "difficulty": "Easy",
    "description": "Can construct ransom note from magazine. Solved by Abhishek using JavaScript.",
    "starterCode": "// Problem 99: Ransom Note\n// Author: Abhishek\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function canConstruct(ransom, magazine) {\n  const count = {};\n  for (const c of magazine) count[c] = (count[c] || 0) + 1;\n  for (const c of ransom) {\n    if (!count[c]) return false;\n    count[c]--;\n  }\n  return true;\n}\n// Abhishek's char count",
    "author": "Abhishek",
    "tags": [
      "hash-map",
      "easy"
    ]
  },
  {
    "id": "dsa-100",
    "number": 100,
    "category": "Hash Map",
    "title": "Top K Frequent Elements (Variant 3)",
    "difficulty": "Medium",
    "description": "Return k most frequent elements. Solved by Sonu using JavaScript.",
    "starterCode": "// Problem 100: Top K Frequent Elements\n// Author: Sonu\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function topKFrequent(nums, k) {\n  const freq = new Map();\n  for (const n of nums) freq.set(n, (freq.get(n) || 0) + 1);\n  return [...freq.entries()]\n    .sort((a, b) => b[1] - a[1])\n    .slice(0, k)\n    .map(([n]) => n);\n}\n// Sonu's frequency map",
    "author": "Sonu",
    "tags": [
      "hash-map",
      "medium"
    ]
  },
  {
    "id": "dsa-101",
    "number": 101,
    "category": "Two Pointers",
    "title": "Valid Palindrome II (Variant 3)",
    "difficulty": "Easy",
    "description": "Palindrome after deleting one char. Solved by Prerna using JavaScript.",
    "starterCode": "// Problem 101: Valid Palindrome II\n// Author: Prerna\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function validPalindrome(s) {\n  const check = (l, r) => {\n    while (l < r) {\n      if (s[l] !== s[r]) return false;\n      l++; r--;\n    }\n    return true;\n  };\n  let l = 0, r = s.length - 1;\n  while (l < r) {\n    if (s[l] !== s[r]) return check(l+1,r) || check(l,r-1);\n    l++; r--;\n  }\n  return true;\n}\n// Prerna's two-pointer",
    "author": "Prerna",
    "tags": [
      "two-pointers",
      "easy"
    ]
  },
  {
    "id": "dsa-102",
    "number": 102,
    "category": "Two Pointers",
    "title": "3Sum (Variant 3)",
    "difficulty": "Medium",
    "description": "Find triplets that sum to zero. Solved by Kishan using JavaScript.",
    "starterCode": "// Problem 102: 3Sum\n// Author: Kishan\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function threeSum(nums) {\n  nums.sort((a,b) => a-b);\n  const res = [];\n  for (let i = 0; i < nums.length - 2; i++) {\n    if (i > 0 && nums[i] === nums[i-1]) continue;\n    let l = i+1, r = nums.length-1;\n    while (l < r) {\n      const sum = nums[i]+nums[l]+nums[r];\n      if (sum === 0) { res.push([nums[i],nums[l],nums[r]]); l++; r--; }\n      else if (sum < 0) l++; else r--;\n    }\n  }\n  return res;\n}\n// Kishan's sorted 3Sum",
    "author": "Kishan",
    "tags": [
      "two-pointers",
      "medium"
    ]
  },
  {
    "id": "dsa-103",
    "number": 103,
    "category": "Two Pointers",
    "title": "Container With Most Water (Variant 3)",
    "difficulty": "Medium",
    "description": "Max area between two lines. Solved by Satyam using JavaScript.",
    "starterCode": "// Problem 103: Container With Most Water\n// Author: Satyam\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function maxArea(height) {\n  let l = 0, r = height.length-1, max = 0;\n  while (l < r) {\n    max = Math.max(max, Math.min(height[l], height[r]) * (r-l));\n    height[l] < height[r] ? l++ : r--;\n  }\n  return max;\n}\n// Satyam's two-pointer",
    "author": "Satyam",
    "tags": [
      "two-pointers",
      "medium"
    ]
  },
  {
    "id": "dsa-104",
    "number": 104,
    "category": "Stack",
    "title": "Valid Parentheses (Variant 3)",
    "difficulty": "Easy",
    "description": "Check balanced brackets. Solved by Tarun Tiwari using JavaScript.",
    "starterCode": "// Problem 104: Valid Parentheses\n// Author: Tarun Tiwari\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "function isValid(s) {\n  const stack = [], map = { \")\":\"(\", \"]\":\"[\", \"}\":\"{\" };\n  for (const c of s) {\n    if (c in map) {\n      if (stack.pop() !== map[c]) return false;\n    } else stack.push(c);\n  }\n  return stack.length === 0;\n}\n// Tarun Tiwari: isValid(\"({[]})\") => true",
    "author": "Tarun Tiwari",
    "tags": [
      "stack",
      "easy"
    ]
  },
  {
    "id": "dsa-105",
    "number": 105,
    "category": "Stack",
    "title": "Min Stack (Variant 3)",
    "difficulty": "Medium",
    "description": "Stack with O(1) getMin. Solved by Tushar using JavaScript.",
    "starterCode": "// Problem 105: Min Stack\n// Author: Tushar\nfunction solve(input) {\n  // Your code here\n}",
    "solution": "class MinStack {\n  constructor() { this.stack = []; this.mins = []; }\n  push(val) {\n    this.stack.push(val);\n    this.mins.push(Math.min(val, this.mins.at(-1) ?? Infinity));\n  }\n  pop() { this.stack.pop(); this.mins.pop(); }\n  top() { return this.stack.at(-1); }\n  getMin() { return this.mins.at(-1); }\n}\n// Tushar's dual stack",
    "author": "Tushar",
    "tags": [
      "stack",
      "medium"
    ]
  }
];

export const dsaCategories = [
  "Arrays",
  "Strings",
  "Hash Map",
  "Two Pointers",
  "Stack",
  "Trees",
  "Graphs",
  "Dynamic Programming",
  "Frontend DSA"
];

export const dsaProblemCount = 105;
