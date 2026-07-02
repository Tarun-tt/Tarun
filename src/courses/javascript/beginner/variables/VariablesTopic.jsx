import TopicLesson from "../../../shared/TopicLesson.jsx";

/**
 * @module courses/javascript/beginner/variables
 * @description let, var, const — from basics to advanced loops
 * @level beginner
 */

const explanation =
  "Variables are containers for data in JavaScript. Use let for values that change, const for values that stay fixed, and avoid var in modern code. The for loop is the most common way to repeat actions — counting from 1 to 10 is the classic first exercise every developer practices.";

const syntax = `// ─── let (reassignable, block-scoped) ───
let count = 0;
count = 10;

// ─── const (fixed reference, block-scoped) ───
const MAX = 10;
const team = "React Mastery";

// ─── var (legacy — function-scoped, avoid) ───
var legacy = true;

// ─── for loop 1 to 10 with let ───
for (let i = 1; i <= 10; i++) {
  console.log(i);
}`;

const examples = [
  // ── let, var, const basics ──
  {
    person: "Tarun Tiwari",
    level: "Basic",
    title: "let — declare and reassign",
    code: `let tarunScore = 85;\nconsole.log("Before:", tarunScore);\ntarunScore = 92;\nconsole.log("After:", tarunScore);`,
    output: "Before: 85 → After: 92",
    explanation: "let allows reassignment. Tarun Tiwari updates his score.",
  },
  {
    person: "Tushar",
    level: "Basic",
    title: "const — fixed value",
    code: `const tusharRole = "Frontend Developer";\nconst tusharTeam = "React Mastery";\nconsole.log(tusharRole, "at", tusharTeam);`,
    output: "Frontend Developer at React Mastery",
    explanation: "const cannot be reassigned. Tushar's role and team stay fixed.",
  },
  {
    person: "Ranjeet",
    level: "Basic",
    title: "var — legacy (avoid in new code)",
    code: `function ranjeetDemo() {\n  if (true) {\n    var ranjeetXP = 100;\n  }\n  console.log("Ranjeet XP:", ranjeetXP); // var leaks!\n}\nranjeetDemo();`,
    output: "Ranjeet XP: 100",
    explanation: "var is function-scoped and leaks outside blocks. Ranjeet uses let/const instead.",
  },

  // ── for loop 1 to 10 with let ──
  {
    person: "Abhishek",
    level: "Loop",
    title: "let + for loop — print 1 to 10",
    code: `// Abhishek counts 1 to 10 using let\nfor (let i = 1; i <= 10; i++) {\n  console.log("Abhishek:", i);\n}`,
    output: "Abhishek: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10",
    explanation: "Classic for loop: let i starts at 1, runs while i <= 10, increments each time.",
  },
  {
    person: "Sonu",
    level: "Loop",
    title: "let + for loop — build string 1-10",
    code: `let sonuNumbers = "";\nfor (let i = 1; i <= 10; i++) {\n  sonuNumbers += i + (i < 10 ? ", " : "");\n}\nconsole.log("Sonu:", sonuNumbers);`,
    output: "Sonu: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10",
    explanation: "Sonu accumulates numbers 1-10 into a string using let and for loop.",
  },
  {
    person: "Prerna",
    level: "Loop",
    title: "let + for loop — sum 1 to 10",
    code: `let prernaSum = 0;\nfor (let i = 1; i <= 10; i++) {\n  prernaSum += i;\n}\nconsole.log("Prerna sum 1-10:", prernaSum);`,
    output: "Prerna sum 1-10: 55",
    explanation: "Sum of 1+2+...+10 = 55. Prerna uses let accumulator in for loop.",
  },
  {
    person: "Kishan",
    level: "Loop",
    title: "let + for loop — even numbers 1-10",
    code: `let kishanEvens = [];\nfor (let i = 1; i <= 10; i++) {\n  if (i % 2 === 0) kishanEvens.push(i);\n}\nconsole.log("Kishan evens:", kishanEvens);`,
    output: "Kishan evens: [2, 4, 6, 8, 10]",
    explanation: "Kishan filters even numbers from 1-10 using let i in for loop.",
  },
  {
    person: "Satyam",
    level: "Loop",
    title: "let + for loop — multiplication table",
    code: `const satyamTable = 5;\nfor (let i = 1; i <= 10; i++) {\n  console.log(\`Satyam: \${satyamTable} x \${i} = \${satyamTable * i}\`);\n}`,
    output: "Satyam: 5x1=5 ... 5x10=50",
    explanation: "Satyam prints 5's table from 1 to 10 using let i.",
  },

  // ── const with loops ──
  {
    person: "Tarun Tiwari",
    level: "Loop",
    title: "const + for loop — iterate fixed array",
    code: `const tarunScores = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];\nfor (let i = 0; i < tarunScores.length; i++) {\n  console.log("Tarun score[" + i + "]:", tarunScores[i]);\n}`,
    output: "Tarun score[0]:10 ... score[9]:100",
    explanation: "const array cannot be reassigned but elements are readable in for loop.",
  },
  {
    person: "Tushar",
    level: "Loop",
    title: "const + for...of — 1 to 10 array",
    code: `const tusharNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\nfor (const num of tusharNums) {\n  console.log("Tushar:", num);\n}`,
    output: "Tushar: 1 through 10",
    explanation: "for...of with const num — cleaner iteration over 1-10.",
  },

  // ── var with loop (show the bug) ──
  {
    person: "Ranjeet",
    level: "Advanced",
    title: "var + for loop — closure bug",
    code: `// WRONG: var shares one binding\nfor (var i = 1; i <= 3; i++) {\n  setTimeout(() => console.log("var:", i), 0);\n}\n// Prints: var:4, var:4, var:4`,
    output: "var: 4, var: 4, var: 4 (bug!)",
    explanation: "var in loop causes closure bug — all callbacks see final i value.",
  },
  {
    person: "Abhishek",
    level: "Advanced",
    title: "let + for loop — closure fixed",
    code: `// CORRECT: let creates new binding each iteration\nfor (let i = 1; i <= 10; i++) {\n  if (i === 10) console.log("Abhishek reached:", i);\n}`,
    output: "Abhishek reached: 10",
    explanation: "let in for loop creates fresh binding per iteration — no closure bug.",
  },

  // ── More loop types ──
  {
    person: "Sonu",
    level: "Intermediate",
    title: "while loop — count 1 to 10",
    code: `let sonuI = 1;\nwhile (sonuI <= 10) {\n  console.log("Sonu:", sonuI);\n  sonuI++;\n}`,
    output: "Sonu: 1 through 10",
    explanation: "while loop with let counter — alternative to for loop.",
  },
  {
    person: "Prerna",
    level: "Intermediate",
    title: "do...while — count 1 to 10",
    code: `let prernaI = 1;\ndo {\n  console.log("Prerna:", prernaI);\n  prernaI++;\n} while (prernaI <= 10);`,
    output: "Prerna: 1 through 10",
    explanation: "do...while always runs at least once, then checks condition.",
  },
  {
    person: "Kishan",
    level: "Intermediate",
    title: "for...in — object with 10 properties",
    code: `const kishanData = {};\nfor (let i = 1; i <= 10; i++) {\n  kishanData["key" + i] = i * 10;\n}\nfor (const key in kishanData) {\n  console.log(key + ":", kishanData[key]);\n}`,
    output: "key1:10, key2:20 ... key10:100",
    explanation: "Kishan builds object with for loop, reads keys with for...in.",
  },
  {
    person: "Satyam",
    level: "Advanced",
    title: "Nested for loop — 10x10 grid index",
    code: `let satyamCount = 0;\nfor (let row = 1; row <= 10; row++) {\n  for (let col = 1; col <= 10; col++) {\n    satyamCount++;\n  }\n}\nconsole.log("Satyam total cells:", satyamCount);`,
    output: "Satyam total cells: 100",
    explanation: "Nested loops 1-10 each = 100 iterations. Satyam counts grid cells.",
  },
  {
    person: "Tarun Tiwari",
    level: "Advanced",
    title: "let destructuring + loop",
    code: `const tarunPairs = [[1,10], [2,9], [3,8], [4,7], [5,6]];\nfor (const [a, b] of tarunPairs) {\n  console.log(\`Tarun: \${a} + \${b} = \${a + b}\`);\n}`,
    output: "Tarun: 1+10=11, 2+9=11 ...",
    explanation: "Destructuring in for...of — advanced pattern with const.",
  },
];

export default function VariablesTopic() {
  return (
    <TopicLesson
      title="Variables (let, var, const)"
      course="JavaScript"
      explanation={explanation}
      syntax={syntax}
      examples={examples}
      accent="#f59e0b"
    />
  );
}
