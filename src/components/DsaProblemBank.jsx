import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Box, Chip, Collapse, Paper, Stack, TextField, Typography, alpha, IconButton,
} from "@mui/material";
import { ChevronDown, ChevronUp, Code2, Search, Trophy, Filter } from "lucide-react";
import { dsaProblems, dsaCategories, dsaProblemCount } from "../data/dsaProblems.js";

function ProblemCard({ problem, index }) {
  const [showSolution, setShowSolution] = useState(false);
  const diffColor = { Easy: "#22c55e", Medium: "#f59e0b", Hard: "#ef4444" };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: (index % 20) * 0.02 }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 2.5,
          borderRadius: 3,
          border: "1px solid",
          borderColor: "divider",
          mb: 1.5,
        }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 1 }}>
          <Box>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 0.5 }}>
              <Chip label={`#${problem.number}`} size="small" sx={{ fontWeight: 700 }} />
              <Chip
                label={problem.difficulty}
                size="small"
                sx={{ bgcolor: alpha(diffColor[problem.difficulty], 0.15), color: diffColor[problem.difficulty], fontWeight: 600 }}
              />
              <Chip label={problem.category} size="small" variant="outlined" />
            </Stack>
            <Typography fontWeight={700}>{problem.title}</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              {problem.description}
            </Typography>
            <Typography variant="caption" color="primary" sx={{ mt: 0.5, display: "block" }}>
              Solved by: {problem.author}
            </Typography>
          </Box>
          <IconButton size="small" onClick={() => setShowSolution(!showSolution)}>
            {showSolution ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </IconButton>
        </Stack>

        <Box component="pre" sx={{ p: 1.5, borderRadius: 2, bgcolor: alpha("#0f172a", 0.05), fontSize: "0.78rem", overflow: "auto", m: 0 }}>
          {problem.starterCode}
        </Box>

        <Collapse in={showSolution}>
          <Box sx={{ mt: 1.5 }}>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
              <Code2 size={16} color="#22c55e" />
              <Typography variant="subtitle2" fontWeight={700} color="success.main">Solution</Typography>
            </Stack>
            <Box component="pre" sx={{ p: 2, borderRadius: 2, bgcolor: "#0f172a", color: "#e2e8f0", fontSize: "0.78rem", overflow: "auto", m: 0 }}>
              {problem.solution}
            </Box>
          </Box>
        </Collapse>
      </Paper>
    </motion.div>
  );
}

export default function DsaProblemBank() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [difficulty, setDifficulty] = useState("All");

  const filtered = useMemo(() => {
    return dsaProblems.filter((p) => {
      const matchSearch = `${p.title} ${p.description} ${p.author}`.toLowerCase().includes(search.toLowerCase());
      const matchCat = category === "All" || p.category === category;
      const matchDiff = difficulty === "All" || p.difficulty === difficulty;
      return matchSearch && matchCat && matchDiff;
    });
  }, [search, category, difficulty]);

  return (
    <Stack spacing={3}>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <Paper sx={{ p: 3, borderRadius: 4, background: "linear-gradient(135deg, #fef2f220, #fff)" }}>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
            <Trophy size={22} color="#dc2626" />
            <Typography variant="h5" fontWeight={800}>DSA Problem Bank</Typography>
          </Stack>
          <Typography color="text.secondary">
            {dsaProblemCount}+ frontend-focused JavaScript problems with full solutions.
            Team: Tarun Tiwari, Tushar, Ranjeet, Abhishek, Sonu, Prerna, Kishan, Satyam.
          </Typography>
          <Stack direction="row" spacing={1} sx={{ mt: 2 }} flexWrap="wrap" useFlexGap>
            <Chip label={`${dsaProblemCount} Problems`} color="error" />
            <Chip label="9 Categories" variant="outlined" />
            <Chip label="Easy → Hard" variant="outlined" />
          </Stack>
        </Paper>
      </motion.div>

      <Paper sx={{ p: 2, borderRadius: 3 }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <TextField
            size="small"
            placeholder="Search problems..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            slotProps={{ input: { startAdornment: <Search size={16} style={{ marginRight: 8, opacity: 0.5 }} /> } }}
            sx={{ flex: 1 }}
          />
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap alignItems="center">
            <Filter size={16} />
            {["All", ...dsaCategories].map((c) => (
              <Chip key={c} label={c} size="small" onClick={() => setCategory(c)} color={category === c ? "error" : "default"} variant={category === c ? "filled" : "outlined"} />
            ))}
          </Stack>
        </Stack>
        <Stack direction="row" spacing={1} sx={{ mt: 1.5 }}>
          {["All", "Easy", "Medium", "Hard"].map((d) => (
            <Chip key={d} label={d} size="small" onClick={() => setDifficulty(d)} color={difficulty === d ? "primary" : "default"} variant={difficulty === d ? "filled" : "outlined"} />
          ))}
          <Typography variant="caption" color="text.secondary" sx={{ ml: "auto", alignSelf: "center" }}>
            Showing {filtered.length} of {dsaProblemCount}
          </Typography>
        </Stack>
      </Paper>

      <Box>
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <ProblemCard key={p.id} problem={p} index={i} />
          ))}
        </AnimatePresence>
      </Box>
    </Stack>
  );
}
