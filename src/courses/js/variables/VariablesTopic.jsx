import TopicLesson from "../../shared/TopicLesson.jsx";

const explanation =
  "Variables store data in JavaScript using let, const, or var. let and const are block-scoped (modern standard). const prevents reassignment but allows object/array mutation. var is function-scoped and hoisted — avoid in new code. Loops use variables as counters, accumulators, and iterators.";

const syntax = `// let — reassignable, block-scoped\nlet score = 0;\nscore = 100;\n\n// const — cannot reassign, block-scoped\nconst PI = 3.14;\nconst team = "React Mastery";\n\n// var — function-scoped (legacy, avoid)\nvar legacy = true;\n\n// for loop with let\nfor (let i = 0; i < 3; i++) {\n  console.log(i);\n}`;

const examples = [
  { person: "Tarun Tiwari", title: "let — Tarun's reassignable score", code: `let tarunScore = 85;\ntarunScore = 92;\nconsole.log("Tarun Tiwari:", tarunScore);`, output: "Tarun Tiwari: 92", explanation: "let allows reassignment. Tarun Tiwari updates his score after practice." },
  { person: "Tushar", title: "const — Tushar's fixed role", code: `const tusharRole = "Frontend Developer";\nconsole.log("Tushar:", tusharRole);`, output: "Tushar: Frontend Developer", explanation: "const cannot be reassigned. Tushar's role stays constant." },
  { person: "Ranjeet", title: "var — Ranjeet's legacy pattern (avoid)", code: `function demo() {\n  if (true) { var ranjeetLevel = "Intermediate"; }\n  console.log("Ranjeet:", ranjeetLevel);\n}\ndemo();`, output: "Ranjeet: Intermediate", explanation: "var leaks outside blocks. Ranjeet should use let/const instead." },
  { person: "Abhishek", title: "for loop — Abhishek counts 1 to 5", code: `let abhishekCount = "";\nfor (let i = 1; i <= 5; i++) {\n  abhishekCount += i + " ";\n}\nconsole.log("Abhishek:", abhishekCount.trim());`, output: "Abhishek: 1 2 3 4 5", explanation: "Classic for loop with let counter i." },
  { person: "Sonu", title: "for...of — Sonu iterates team names", code: `const sonuTeam = ["Sonu", "React", "DSA"];\nlet output = "";\nfor (const member of sonuTeam) {\n  output += member + " ";\n}\nconsole.log(output.trim());`, output: "Sonu React DSA", explanation: "for...of loops over iterable values." },
  { person: "Prerna", title: "for...in — Prerna loops object keys", code: `const prernaProfile = { name: "Prerna", xp: 500, level: 3 };\nlet keys = "";\nfor (const key in prernaProfile) {\n  keys += key + " ";\n}\nconsole.log(keys.trim());`, output: "name xp level", explanation: "for...in iterates object keys." },
  { person: "Kishan", title: "while loop — Kishan counts down", code: `let kishanCount = 5;\nlet result = "";\nwhile (kishanCount > 0) {\n  result += kishanCount + " ";\n  kishanCount--;\n}\nconsole.log("Kishan:", result.trim());`, output: "Kishan: 5 4 3 2 1", explanation: "while runs while condition is true." },
  { person: "Satyam", title: "do...while — Satyam runs at least once", code: `let satyamAttempts = 0;\nlet msg = "";\ndo {\n  satyamAttempts++;\n  msg = "Satyam attempt " + satyamAttempts;\n} while (satyamAttempts < 3);\nconsole.log(msg);`, output: "Satyam attempt 3", explanation: "do...while always executes once." },
  { person: "Tarun Tiwari", title: "let block scope in for loop", code: `for (let i = 0; i < 3; i++) {\n  const step = "Tarun step " + i;\n  console.log(step);\n}`, output: "Tarun step 0 / 1 / 2", explanation: "let inside for creates block-scoped binding each iteration." },
  { person: "Tushar", title: "const array — Tushar mutates elements", code: `const tusharSkills = ["HTML", "CSS", "JS"];\ntusharSkills.push("React");\nconsole.log("Tushar:", tusharSkills.join(", "));`, output: "Tushar: HTML, CSS, JS, React", explanation: "const arrays can be mutated with push." },
  { person: "Ranjeet", title: "const object — Ranjeet updates XP", code: `const ranjeet = { name: "Ranjeet", xp: 100 };\nranjeet.xp += 50;\nconsole.log(ranjeet.name, ranjeet.xp);`, output: "Ranjeet 150", explanation: "const objects allow property updates." },
  { person: "Abhishek", title: "Destructuring variables", code: `const abhishek = { name: "Abhishek", age: 22, city: "Delhi" };\nconst { name, age, city } = abhishek;\nconsole.log(name, age, city);`, output: "Abhishek 22 Delhi", explanation: "Destructuring extracts variables from objects." },
  { person: "Sonu", title: "Swap with temp variable", code: `let sonuA = "React";\nlet sonuB = "Vue";\nconst temp = sonuA;\nsonuA = sonuB;\nsonuB = temp;\nconsole.log("Sonu:", sonuA, sonuB);`, output: "Sonu: Vue React", explanation: "Temporary let variable swaps values." },
  { person: "Prerna", title: "Accumulator in for loop", code: `const prernaScores = [80, 90, 85, 95];\nlet total = 0;\nfor (let i = 0; i < prernaScores.length; i++) {\n  total += prernaScores[i];\n}\nconsole.log("Prerna avg:", total / prernaScores.length);`, output: "Prerna avg: 87.5", explanation: "let total accumulates in a for loop." },
  { person: "Kishan", title: "Nested for loops", code: `let grid = "";\nfor (let row = 0; row < 2; row++) {\n  for (let col = 0; col < 2; col++) {\n    grid += \`Kishan[\${row},\${col}] \`;\n  }\n}\nconsole.log(grid.trim());`, output: "Kishan[0,0] Kishan[0,1] Kishan[1,0] Kishan[1,1]", explanation: "Nested for loops with let row/col." },
  { person: "Satyam", title: "let vs var in loop closure", code: `for (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log("Satyam let:", i), 0);\n}`, output: "Satyam let: 0 / 1 / 2", explanation: "let creates new binding per iteration — avoids var closure bug." },
  { person: "Tarun Tiwari", title: "const in for...of", code: `const tarunLessons = ["Variables", "Functions", "Arrays"];\nfor (const lesson of tarunLessons) {\n  const msg = \`Tarun Tiwari learns \${lesson}\`;\n  console.log(msg);\n}`, output: "Tarun Tiwari learns Variables / Functions / Arrays", explanation: "const in for...of prevents accidental reassignment." },
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
