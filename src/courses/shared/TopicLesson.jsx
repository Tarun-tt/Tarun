import { Box, Button, Chip, Collapse, Paper, Stack, Typography, alpha } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ChevronDown, ChevronUp, Code2, Play, Sparkles, User } from "lucide-react";
import { showToast } from "../../features/ui/toastSlice";

const TEAM_COLORS = [
  "#2563eb", "#7c3aed", "#0f766e", "#f59e0b",
  "#ef4444", "#ec4899", "#06b6d4", "#84cc16",
];

function ExampleCard({ example, index, accent }) {
  const [open, setOpen] = useState(index < 3);
  const [runOutput, setRunOutput] = useState("");
  const dispatch = useDispatch();
  const color = TEAM_COLORS[index % TEAM_COLORS.length];

  const runExample = (e) => {
    e.stopPropagation();
    try {
      const logs = [];
      const mockConsole = { log: (...args) => logs.push(args.join(" ")) };
      // eslint-disable-next-line no-new-func
      const fn = new Function("console", example.code);
      fn(mockConsole);
      const output = logs.join("\n") || example.output;
      setRunOutput(output);
      dispatch(showToast({ message: `Ran: ${example.title}`, severity: "success" }));
    } catch (err) {
      setRunOutput(`Error: ${err.message}`);
      dispatch(showToast({ message: err.message, severity: "error" }));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05, duration: 0.35 }}
      whileHover={{ scale: 1.01 }}
    >
      <Paper
        elevation={0}
        sx={{
          borderRadius: 3,
          overflow: "hidden",
          border: `1px solid ${open ? alpha(color, 0.4) : "divider"}`,
        }}
      >
        <Box
          onClick={() => setOpen((v) => !v)}
          sx={{
            p: 2,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            bgcolor: open ? alpha(color, 0.06) : "transparent",
          }}
        >
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Box sx={{ width: 36, height: 36, borderRadius: "50%", bgcolor: alpha(color, 0.15), display: "flex", alignItems: "center", justifyContent: "center", color }}>
              <User size={18} />
            </Box>
            <Box>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography fontWeight={700}>{example.title}</Typography>
                {example.level && (
                  <Chip label={example.level} size="small" sx={{ height: 20, fontSize: "0.65rem" }} />
                )}
              </Stack>
              {example.person && (
                <Typography variant="caption" sx={{ color }}>{example.person}</Typography>
              )}
            </Box>
          </Stack>
          {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </Box>
        <Collapse in={open}>
          <Box sx={{ px: 2, pb: 2 }}>
            <Box component="pre" sx={{ p: 2, borderRadius: 2, bgcolor: "#0f172a", color: "#e2e8f0", fontSize: "0.82rem", lineHeight: 1.65, overflow: "auto", m: 0 }}>
              {example.code}
            </Box>
            <Stack direction="row" spacing={1} sx={{ mt: 1.5 }} flexWrap="wrap" useFlexGap>
              <Chip label={`Expected: ${example.output}`} size="small" sx={{ bgcolor: alpha(color, 0.1), color, fontWeight: 600 }} />
              <Button size="small" variant="contained" startIcon={<Play size={14} />} onClick={runExample} sx={{ bgcolor: color, textTransform: "none" }}>
                Run Example
              </Button>
            </Stack>
            {runOutput && (
              <Box component="pre" sx={{ mt: 1.5, p: 1.5, borderRadius: 2, bgcolor: alpha("#22c55e", 0.08), fontSize: "0.8rem", m: 0 }}>
                {runOutput}
              </Box>
            )}
            <Typography color="text.secondary" sx={{ mt: 1.5, lineHeight: 1.75, fontSize: "0.9rem" }}>
              {example.explanation}
            </Typography>
          </Box>
        </Collapse>
      </Paper>
    </motion.div>
  );
}

export default function TopicLesson({
  title,
  course,
  explanation,
  syntax,
  examples = [],
  accent = "#2563eb",
}) {
  return (
    <Stack spacing={3}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <Paper sx={{ p: { xs: 2.5, md: 3.5 }, borderRadius: 4, background: `linear-gradient(135deg, ${alpha(accent, 0.1)} 0%, transparent 100%)`, border: `1px solid ${alpha(accent, 0.2)}` }}>
          <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
            <Box>
              <Typography variant="caption" sx={{ color: accent, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>{course}</Typography>
              <Typography variant="h5" fontWeight={800} sx={{ mt: 0.5 }}>{title}</Typography>
              <Typography color="text.secondary" sx={{ mt: 1.5, lineHeight: 1.85, maxWidth: 720 }}>{explanation}</Typography>
            </Box>
            <Chip icon={<Sparkles size={14} />} label="All Topics Unlocked" sx={{ bgcolor: alpha(accent, 0.1), color: accent }} />
          </Stack>
        </Paper>
      </motion.div>

      {syntax && (
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Paper sx={{ p: 3, borderRadius: 4 }}>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
              <Code2 size={20} color={accent} />
              <Typography variant="h6" fontWeight={700}>Syntax</Typography>
            </Stack>
            <Box component="pre" sx={{ p: 2.5, borderRadius: 2, bgcolor: "#0f172a", color: "#f8fafc", overflow: "auto", fontSize: "0.88rem", m: 0 }}>{syntax}</Box>
          </Paper>
        </motion.div>
      )}

      {examples.length > 0 && (
        <Paper sx={{ p: 3, borderRadius: 4 }}>
          <Typography variant="h6" fontWeight={700} sx={{ mb: 2.5 }}>
            Examples — Basic to Advanced ({examples.length})
          </Typography>
          <Stack spacing={1.5}>
            {examples.map((ex, i) => (
              <ExampleCard key={i} example={ex} index={i} accent={accent} />
            ))}
          </Stack>
        </Paper>
      )}
    </Stack>
  );
}
