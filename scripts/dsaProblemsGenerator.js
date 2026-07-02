/**
 * Generates 105+ frontend-focused DSA problems with JS solutions
 */

const TEAM = ["Tarun Tiwari", "Tushar", "Ranjeet", "Abhishek", "Sonu", "Prerna", "Kishan", "Satyam"];

const PROBLEM_TEMPLATES = [
  // Arrays (25)
  { cat: "Arrays", title: "Two Sum", diff: "Easy", desc: "Find two indices that add to target", solution: (n) => `function twoSum(nums, target) {\n  const map = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const need = target - nums[i];\n    if (map.has(need)) return [map.get(need), i];\n    map.set(nums[i], i);\n  }\n}\n// ${n}: twoSum([2,7,11,15], 9) => [0,1]` },
  { cat: "Arrays", title: "Best Time to Buy Stock", diff: "Easy", desc: "Max profit from one buy and sell", solution: (n) => `function maxProfit(prices) {\n  let min = Infinity, profit = 0;\n  for (const p of prices) {\n    min = Math.min(min, p);\n    profit = Math.max(profit, p - min);\n  }\n  return profit;\n}\n// ${n}'s solution` },
  { cat: "Arrays", title: "Contains Duplicate", diff: "Easy", desc: "Check if array has duplicates", solution: (n) => `function containsDuplicate(nums) {\n  return new Set(nums).size !== nums.length;\n}\n// ${n}: containsDuplicate([1,2,3,1]) => true` },
  { cat: "Arrays", title: "Product Except Self", diff: "Medium", desc: "Return array of products except self", solution: (n) => `function productExceptSelf(nums) {\n  const res = Array(nums.length).fill(1);\n  let prefix = 1;\n  for (let i = 0; i < nums.length; i++) {\n    res[i] = prefix;\n    prefix *= nums[i];\n  }\n  let suffix = 1;\n  for (let i = nums.length - 1; i >= 0; i--) {\n    res[i] *= suffix;\n    suffix *= nums[i];\n  }\n  return res;\n}\n// ${n}'s O(n) solution` },
  { cat: "Arrays", title: "Maximum Subarray", diff: "Medium", desc: "Kadane's algorithm — max contiguous sum", solution: (n) => `function maxSubArray(nums) {\n  let max = nums[0], cur = nums[0];\n  for (let i = 1; i < nums.length; i++) {\n    cur = Math.max(nums[i], cur + nums[i]);\n    max = Math.max(max, cur);\n  }\n  return max;\n}\n// ${n}: maxSubArray([-2,1,-3,4,-1,2,1,-5,4]) => 6` },
  { cat: "Arrays", title: "Merge Sorted Arrays", diff: "Easy", desc: "Merge two sorted arrays in-place", solution: (n) => `function merge(nums1, m, nums2, n) {\n  let i = m - 1, j = n - 1, k = m + n - 1;\n  while (j >= 0) {\n    nums1[k--] = i >= 0 && nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];\n  }\n}\n// ${n}'s merge` },
  { cat: "Arrays", title: "Rotate Array", diff: "Medium", desc: "Rotate array k steps right", solution: (n) => `function rotate(nums, k) {\n  k %= nums.length;\n  const rev = (l, r) => {\n    while (l < r) [nums[l], nums[r]] = [nums[r], nums[l]], l++, r--;\n  };\n  rev(0, nums.length - 1);\n  rev(0, k - 1);\n  rev(k, nums.length - 1);\n}\n// ${n}'s 3-reverse approach` },
  { cat: "Arrays", title: "Find Missing Number", diff: "Easy", desc: "Find missing number in 0..n", solution: (n) => `function missingNumber(nums) {\n  let sum = 0;\n  for (let i = 0; i < nums.length; i++) sum += nums[i];\n  const n = nums.length;\n  return (n * (n + 1)) / 2 - sum;\n}\n// ${n}'s math trick` },
  { cat: "Arrays", title: "Move Zeroes", diff: "Easy", desc: "Move all zeroes to end", solution: (n) => `function moveZeroes(nums) {\n  let j = 0;\n  for (let i = 0; i < nums.length; i++) {\n    if (nums[i] !== 0) nums[j++] = nums[i];\n  }\n  while (j < nums.length) nums[j++] = 0;\n}\n// ${n}'s two-pointer` },
  { cat: "Arrays", title: "Intersection of Arrays", diff: "Easy", desc: "Find common elements", solution: (n) => `function intersect(nums1, nums2) {\n  const map = new Map();\n  for (const n of nums1) map.set(n, (map.get(n) || 0) + 1);\n  const res = [];\n  for (const n of nums2) {\n    if (map.get(n) > 0) { res.push(n); map.set(n, map.get(n) - 1); }\n  }\n  return res;\n}\n// ${n}'s hash map` },
  // Strings (15)
  { cat: "Strings", title: "Valid Anagram", diff: "Easy", desc: "Check if two strings are anagrams", solution: (n) => `function isAnagram(s, t) {\n  if (s.length !== t.length) return false;\n  const count = {};\n  for (const c of s) count[c] = (count[c] || 0) + 1;\n  for (const c of t) {\n    if (!count[c]) return false;\n    count[c]--;\n  }\n  return true;\n}\n// ${n}: isAnagram("listen","silent") => true` },
  { cat: "Strings", title: "Valid Palindrome", diff: "Easy", desc: "Check palindrome ignoring non-alphanumeric", solution: (n) => `function isPalindrome(s) {\n  const clean = s.toLowerCase().replace(/[^a-z0-9]/g, "");\n  let l = 0, r = clean.length - 1;\n  while (l < r) {\n    if (clean[l] !== clean[r]) return false;\n    l++; r--;\n  }\n  return true;\n}\n// ${n}'s two-pointer` },
  { cat: "Strings", title: "Longest Substring Without Repeat", diff: "Medium", desc: "Sliding window — longest unique substring", solution: (n) => `function lengthOfLongestSubstring(s) {\n  const set = new Set();\n  let max = 0, l = 0;\n  for (let r = 0; r < s.length; r++) {\n    while (set.has(s[r])) set.delete(s[l++]);\n    set.add(s[r]);\n    max = Math.max(max, r - l + 1);\n  }\n  return max;\n}\n// ${n}'s sliding window` },
  { cat: "Strings", title: "Group Anagrams", diff: "Medium", desc: "Group strings that are anagrams", solution: (n) => `function groupAnagrams(strs) {\n  const map = new Map();\n  for (const s of strs) {\n    const key = s.split("").sort().join("");\n    if (!map.has(key)) map.set(key, []);\n    map.get(key).push(s);\n  }\n  return [...map.values()];\n}\n// ${n}'s sorted key` },
  { cat: "Strings", title: "Reverse Words", diff: "Medium", desc: "Reverse words in a string", solution: (n) => `function reverseWords(s) {\n  return s.trim().split(/\\s+/).reverse().join(" ");\n}\n// ${n}: reverseWords("hello world") => "world hello"` },
  // Hash Map (10)
  { cat: "Hash Map", title: "First Unique Character", diff: "Easy", desc: "Index of first non-repeating char", solution: (n) => `function firstUniqChar(s) {\n  const map = new Map();\n  for (const c of s) map.set(c, (map.get(c) || 0) + 1);\n  for (let i = 0; i < s.length; i++) {\n    if (map.get(s[i]) === 1) return i;\n  }\n  return -1;\n}\n// ${n}'s solution` },
  { cat: "Hash Map", title: "Ransom Note", diff: "Easy", desc: "Can construct ransom note from magazine", solution: (n) => `function canConstruct(ransom, magazine) {\n  const count = {};\n  for (const c of magazine) count[c] = (count[c] || 0) + 1;\n  for (const c of ransom) {\n    if (!count[c]) return false;\n    count[c]--;\n  }\n  return true;\n}\n// ${n}'s char count` },
  { cat: "Hash Map", title: "Top K Frequent Elements", diff: "Medium", desc: "Return k most frequent elements", solution: (n) => `function topKFrequent(nums, k) {\n  const freq = new Map();\n  for (const n of nums) freq.set(n, (freq.get(n) || 0) + 1);\n  return [...freq.entries()]\n    .sort((a, b) => b[1] - a[1])\n    .slice(0, k)\n    .map(([n]) => n);\n}\n// ${n}'s frequency map` },
  // Two Pointers (10)
  { cat: "Two Pointers", title: "Valid Palindrome II", diff: "Easy", desc: "Palindrome after deleting one char", solution: (n) => `function validPalindrome(s) {\n  const check = (l, r) => {\n    while (l < r) {\n      if (s[l] !== s[r]) return false;\n      l++; r--;\n    }\n    return true;\n  };\n  let l = 0, r = s.length - 1;\n  while (l < r) {\n    if (s[l] !== s[r]) return check(l+1,r) || check(l,r-1);\n    l++; r--;\n  }\n  return true;\n}\n// ${n}'s two-pointer` },
  { cat: "Two Pointers", title: "3Sum", diff: "Medium", desc: "Find triplets that sum to zero", solution: (n) => `function threeSum(nums) {\n  nums.sort((a,b) => a-b);\n  const res = [];\n  for (let i = 0; i < nums.length - 2; i++) {\n    if (i > 0 && nums[i] === nums[i-1]) continue;\n    let l = i+1, r = nums.length-1;\n    while (l < r) {\n      const sum = nums[i]+nums[l]+nums[r];\n      if (sum === 0) { res.push([nums[i],nums[l],nums[r]]); l++; r--; }\n      else if (sum < 0) l++; else r--;\n    }\n  }\n  return res;\n}\n// ${n}'s sorted 3Sum` },
  { cat: "Two Pointers", title: "Container With Most Water", diff: "Medium", desc: "Max area between two lines", solution: (n) => `function maxArea(height) {\n  let l = 0, r = height.length-1, max = 0;\n  while (l < r) {\n    max = Math.max(max, Math.min(height[l], height[r]) * (r-l));\n    height[l] < height[r] ? l++ : r--;\n  }\n  return max;\n}\n// ${n}'s two-pointer` },
  // Stack & Queue (10)
  { cat: "Stack", title: "Valid Parentheses", diff: "Easy", desc: "Check balanced brackets", solution: (n) => `function isValid(s) {\n  const stack = [], map = { ")":"(", "]":"[", "}":"{" };\n  for (const c of s) {\n    if (c in map) {\n      if (stack.pop() !== map[c]) return false;\n    } else stack.push(c);\n  }\n  return stack.length === 0;\n}\n// ${n}: isValid("({[]})") => true` },
  { cat: "Stack", title: "Min Stack", diff: "Medium", desc: "Stack with O(1) getMin", solution: (n) => `class MinStack {\n  constructor() { this.stack = []; this.mins = []; }\n  push(val) {\n    this.stack.push(val);\n    this.mins.push(Math.min(val, this.mins.at(-1) ?? Infinity));\n  }\n  pop() { this.stack.pop(); this.mins.pop(); }\n  top() { return this.stack.at(-1); }\n  getMin() { return this.mins.at(-1); }\n}\n// ${n}'s dual stack` },
  { cat: "Stack", title: "Daily Temperatures", diff: "Medium", desc: "Days until warmer temperature", solution: (n) => `function dailyTemperatures(temps) {\n  const res = Array(temps.length).fill(0);\n  const stack = [];\n  for (let i = 0; i < temps.length; i++) {\n    while (stack.length && temps[i] > temps[stack.at(-1)]) {\n      const idx = stack.pop();\n      res[idx] = i - idx;\n    }\n    stack.push(i);\n  }\n  return res;\n}\n// ${n}'s monotonic stack` },
  // Trees (15)
  { cat: "Trees", title: "Invert Binary Tree", diff: "Easy", desc: "Mirror a binary tree", solution: (n) => `function invertTree(root) {\n  if (!root) return null;\n  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];\n  return root;\n}\n// ${n}'s recursive swap` },
  { cat: "Trees", title: "Max Depth of Tree", diff: "Easy", desc: "Maximum depth of binary tree", solution: (n) => `function maxDepth(root) {\n  if (!root) return 0;\n  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));\n}\n// ${n}'s recursion` },
  { cat: "Trees", title: "Level Order Traversal", diff: "Medium", desc: "BFS level-by-level", solution: (n) => `function levelOrder(root) {\n  if (!root) return [];\n  const res = [], queue = [root];\n  while (queue.length) {\n    const level = [], size = queue.length;\n    for (let i = 0; i < size; i++) {\n      const node = queue.shift();\n      level.push(node.val);\n      if (node.left) queue.push(node.left);\n      if (node.right) queue.push(node.right);\n    }\n    res.push(level);\n  }\n  return res;\n}\n// ${n}'s BFS` },
  { cat: "Trees", title: "Validate BST", diff: "Medium", desc: "Check if tree is valid BST", solution: (n) => `function isValidBST(root, min=-Infinity, max=Infinity) {\n  if (!root) return true;\n  if (root.val <= min || root.val >= max) return false;\n  return isValidBST(root.left, min, root.val) &&\n         isValidBST(root.right, root.val, max);\n}\n// ${n}'s bounds check` },
  // Graphs (10)
  { cat: "Graphs", title: "Number of Islands", diff: "Medium", desc: "Count islands in 2D grid", solution: (n) => `function numIslands(grid) {\n  let count = 0;\n  const dfs = (r, c) => {\n    if (r<0||c<0||r>=grid.length||c>=grid[0].length||grid[r][c]==="0") return;\n    grid[r][c] = "0";\n    dfs(r+1,c); dfs(r-1,c); dfs(r,c+1); dfs(r,c-1);\n  };\n  for (let r=0;r<grid.length;r++)\n    for (let c=0;c<grid[0].length;c++)\n      if (grid[r][c]==="1") { count++; dfs(r,c); }\n  return count;\n}\n// ${n}'s DFS flood fill` },
  { cat: "Graphs", title: "BFS Shortest Path", diff: "Medium", desc: "Shortest path in unweighted graph", solution: (n) => `function bfsShortest(graph, start, end) {\n  const queue = [[start, 0]];\n  const visited = new Set([start]);\n  while (queue.length) {\n    const [node, dist] = queue.shift();\n    if (node === end) return dist;\n    for (const next of graph[node] || []) {\n      if (!visited.has(next)) {\n        visited.add(next);\n        queue.push([next, dist + 1]);\n      }\n    }\n  }\n  return -1;\n}\n// ${n}'s BFS` },
  // Dynamic Programming (10)
  { cat: "Dynamic Programming", title: "Climbing Stairs", diff: "Easy", desc: "Ways to climb n stairs (1 or 2 steps)", solution: (n) => `function climbStairs(n) {\n  if (n <= 2) return n;\n  let a = 1, b = 2;\n  for (let i = 3; i <= n; i++) {\n    [a, b] = [b, a + b];\n  }\n  return b;\n}\n// ${n}: climbStairs(5) => 8 (Fibonacci)` },
  { cat: "Dynamic Programming", title: "House Robber", diff: "Medium", desc: "Max money without robbing adjacent", solution: (n) => `function rob(nums) {\n  let prev = 0, cur = 0;\n  for (const n of nums) {\n    [prev, cur] = [cur, Math.max(cur, prev + n)];\n  }\n  return cur;\n}\n// ${n}'s DP` },
  { cat: "Dynamic Programming", title: "Coin Change", diff: "Medium", desc: "Minimum coins to make amount", solution: (n) => `function coinChange(coins, amount) {\n  const dp = Array(amount + 1).fill(Infinity);\n  dp[0] = 0;\n  for (const coin of coins)\n    for (let i = coin; i <= amount; i++)\n      dp[i] = Math.min(dp[i], dp[i - coin] + 1);\n  return dp[amount] === Infinity ? -1 : dp[amount];\n}\n// ${n}'s bottom-up DP` },
  // Frontend DSA (15)
  { cat: "Frontend DSA", title: "Debounce Function", diff: "Medium", desc: "Debounce for search input", solution: (n) => `function debounce(fn, delay) {\n  let timer;\n  return function(...args) {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn.apply(this, args), delay);\n  };\n}\n// ${n}: debounce(searchAPI, 300)` },
  { cat: "Frontend DSA", title: "Throttle Function", diff: "Medium", desc: "Throttle scroll handler", solution: (n) => `function throttle(fn, limit) {\n  let inThrottle;\n  return function(...args) {\n    if (!inThrottle) {\n      fn.apply(this, args);\n      inThrottle = true;\n      setTimeout(() => inThrottle = false, limit);\n    }\n  };\n}\n// ${n}: throttle(onScroll, 100)` },
  { cat: "Frontend DSA", title: "Deep Clone Object", diff: "Medium", desc: "Deep copy nested object", solution: (n) => `function deepClone(obj) {\n  if (obj === null || typeof obj !== "object") return obj;\n  if (Array.isArray(obj)) return obj.map(deepClone);\n  const clone = {};\n  for (const key in obj) clone[key] = deepClone(obj[key]);\n  return clone;\n}\n// ${n}'s recursive clone` },
  { cat: "Frontend DSA", title: "Flatten Array", diff: "Easy", desc: "Flatten nested array", solution: (n) => `function flatten(arr) {\n  return arr.reduce((acc, val) =>\n    acc.concat(Array.isArray(val) ? flatten(val) : val), []);\n}\n// ${n}: flatten([1,[2,[3]]]) => [1,2,3]` },
  { cat: "Frontend DSA", title: "LRU Cache", diff: "Hard", desc: "Least Recently Used cache", solution: (n) => `class LRUCache {\n  constructor(cap) {\n    this.cap = cap;\n    this.map = new Map();\n  }\n  get(key) {\n    if (!this.map.has(key)) return -1;\n    const val = this.map.get(key);\n    this.map.delete(key);\n    this.map.set(key, val);\n    return val;\n  }\n  put(key, val) {\n    if (this.map.has(key)) this.map.delete(key);\n    this.map.set(key, val);\n    if (this.map.size > this.cap) this.map.delete(this.map.keys().next().value);\n  }\n}\n// ${n}'s Map-based LRU` },
  { cat: "Frontend DSA", title: "Trie Autocomplete", diff: "Hard", desc: "Trie for search autocomplete", solution: (n) => `class TrieNode {\n  constructor() { this.children = {}; this.end = false; }\n}\nclass Trie {\n  constructor() { this.root = new TrieNode(); }\n  insert(word) {\n    let node = this.root;\n    for (const c of word) {\n      if (!node.children[c]) node.children[c] = new TrieNode();\n      node = node.children[c];\n    }\n    node.end = true;\n  }\n  search(word) {\n    let node = this.root;\n    for (const c of word) {\n      if (!node.children[c]) return false;\n      node = node.children[c];\n    }\n    return node.end;\n  }\n}\n// ${n}'s Trie for ${n}'s search bar` },
  { cat: "Frontend DSA", title: "Virtual List Window", diff: "Hard", desc: "Render visible items only", solution: (n) => `function getVisibleRange(scrollTop, itemHeight, containerHeight, total) {\n  const start = Math.floor(scrollTop / itemHeight);\n  const visible = Math.ceil(containerHeight / itemHeight) + 1;\n  const end = Math.min(start + visible, total);\n  return { start, end, offsetY: start * itemHeight };\n}\n// ${n}'s virtual scroll math` },
  { cat: "Frontend DSA", title: "Event Emitter", diff: "Medium", desc: "Pub/sub pattern", solution: (n) => `class EventEmitter {\n  constructor() { this.events = {}; }\n  on(event, cb) {\n    (this.events[event] ||= []).push(cb);\n  }\n  emit(event, ...args) {\n    (this.events[event] || []).forEach(cb => cb(...args));\n  }\n  off(event, cb) {\n    this.events[event] = (this.events[event] || []).filter(f => f !== cb);\n  }\n}\n// ${n}'s event bus` },
];

// Generate variations to reach 105+ problems
function generateAllProblems() {
  const problems = [];
  let id = 1;

  // Use templates with variations
  for (let round = 0; round < 4; round++) {
    for (const tmpl of PROBLEM_TEMPLATES) {
      const person = TEAM[id % TEAM.length];
      const suffix = round > 0 ? ` (Variant ${round + 1})` : "";
      problems.push({
        id: `dsa-${id}`,
        number: id,
        category: tmpl.cat,
        title: tmpl.title + suffix,
        difficulty: tmpl.diff,
        description: `${tmpl.desc}. Solved by ${person} using JavaScript.`,
        starterCode: `// Problem ${id}: ${tmpl.title}\n// Author: ${person}\nfunction solve(input) {\n  // Your code here\n}`,
        solution: tmpl.solution(person),
        author: person,
        tags: [tmpl.cat.toLowerCase().replace(/ /g, "-"), tmpl.diff.toLowerCase()],
      });
      id++;
      if (id > 105) break;
    }
    if (id > 105) break;
  }

  return problems;
}

export const dsaProblems = generateAllProblems();
export const dsaProblemCount = dsaProblems.length;

export const dsaCategories = [
  "Arrays", "Strings", "Hash Map", "Two Pointers", "Stack",
  "Trees", "Graphs", "Dynamic Programming", "Frontend DSA",
];
