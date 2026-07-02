import { useState } from "react";
import { motion } from "framer-motion";
import Editor from "@monaco-editor/react";
import {
  Box,
  Button,
  Chip,
  Collapse,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
  alpha,
  Checkbox,
  FormControlLabel,
  Alert,
} from "@mui/material";
import {
  RotateCcw,
  Lightbulb,
  Play,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  XCircle,
  Download,
  Bookmark,
  BookmarkCheck,
  Code2,
  Brain,
  AlertTriangle,
  Trophy,
  FileText,
  Zap,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  markTopicComplete,
  setQuizScore,
  addBookmark,
  removeBookmark,
  isTopicComplete,
} from "../features/learning/progressSlice";
import { showToast } from "../features/ui/toastSlice";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.35, ease: "easeOut" },
  }),
};

function Section({ title, icon: Icon, children, index = 0, accent = "#2563eb" }) {
  return (
    <motion.div
      custom={index}
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <Paper
        elevation={0}
        sx={{
          p: { xs: 2.5, md: 3 },
          borderRadius: 4,
          border: (theme) => `1px solid ${alpha(theme.palette.divider, 0.6)}`,
          bgcolor: "background.paper",
        }}
      >
        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
          <Box
            sx={{
              p: 1,
              borderRadius: 2,
              bgcolor: alpha(accent, 0.1),
              color: accent,
              display: "flex",
            }}
          >
            <Icon size={20} />
          </Box>
          <Typography variant="h6" fontWeight={700}>
            {title}
          </Typography>
        </Stack>
        {children}
      </Paper>
    </motion.div>
  );
}

function ExampleCard({ example, index, accent }) {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ scale: 1.01 }}
    >
      <Paper
        variant="outlined"
        sx={{
          borderRadius: 3,
          overflow: "hidden",
          borderColor: expanded ? accent : "divider",
          transition: "border-color 0.2s",
        }}
      >
        <Box
          onClick={() => setExpanded(!expanded)}
          sx={{
            p: 2,
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            bgcolor: expanded ? alpha(accent, 0.04) : "transparent",
          }}
        >
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Chip
              label={`Ex ${index + 1}`}
              size="small"
              sx={{ bgcolor: accent, color: "white", fontWeight: 700 }}
            />
            <Typography fontWeight={700}>{example.title}</Typography>
          </Stack>
          {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </Box>
        <Collapse in={expanded}>
          <Box sx={{ p: 2, pt: 0 }}>
            <Box
              component="pre"
              sx={{
                p: 2,
                borderRadius: 2,
                bgcolor: "#0f172a",
                color: "#e2e8f0",
                overflow: "auto",
                fontSize: "0.85rem",
                lineHeight: 1.6,
              }}
            >
              {example.code}
            </Box>
            <Stack direction="row" spacing={2} sx={{ mt: 1.5 }}>
              <Chip
                label={`Output: ${example.output}`}
                size="small"
                variant="outlined"
                color="success"
              />
            </Stack>
            <Typography color="text.secondary" sx={{ mt: 1.5, lineHeight: 1.7 }}>
              {example.explanation}
            </Typography>
          </Box>
        </Collapse>
      </Paper>
    </motion.div>
  );
}

function QuizSection({ quiz, courseId, topicId, onComplete }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    setSubmitted(true);
    const correct = quiz.filter((q) => answers[q.question] === q.answer).length;
    const score = Math.round((correct / quiz.length) * 100);
    dispatch(setQuizScore({ courseId, topicId, score }));
    dispatch(
      showToast({
        message: `Quiz score: ${score}% (${correct}/${quiz.length})`,
        severity: score >= 70 ? "success" : "warning",
      }),
    );
    onComplete?.(score);
  };

  const score = submitted
    ? quiz.filter((q) => answers[q.question] === q.answer).length
    : 0;

  return (
    <Stack spacing={2}>
      {quiz.map((q, i) => (
        <Paper key={i} variant="outlined" sx={{ p: 2, borderRadius: 3 }}>
          <Typography fontWeight={600} sx={{ mb: 1.5 }}>
            {i + 1}. {q.question}
          </Typography>
          <Stack spacing={0.5}>
            {q.options.map((opt) => {
              const selected = answers[q.question] === opt;
              const isCorrect = opt === q.answer;
              let color = "default";
              if (submitted && selected && isCorrect) color = "success";
              if (submitted && selected && !isCorrect) color = "error";
              if (submitted && !selected && isCorrect) color = "success";

              return (
                <Chip
                  key={opt}
                  label={opt}
                  onClick={() => !submitted && setAnswers({ ...answers, [q.question]: opt })}
                  color={color}
                  variant={selected ? "filled" : "outlined"}
                  icon={
                    submitted && isCorrect ? (
                      <CheckCircle2 size={14} />
                    ) : submitted && selected && !isCorrect ? (
                      <XCircle size={14} />
                    ) : undefined
                  }
                  sx={{ justifyContent: "flex-start", height: "auto", py: 1 }}
                />
              );
            })}
          </Stack>
          {submitted && q.explanation && (
            <Alert severity="info" sx={{ mt: 1.5, borderRadius: 2 }}>
              {q.explanation}
            </Alert>
          )}
        </Paper>
      ))}
      {!submitted ? (
        <Button variant="contained" onClick={handleSubmit} disabled={Object.keys(answers).length < quiz.length}>
          Submit Quiz
        </Button>
      ) : (
        <Alert severity={score >= quiz.length * 0.7 ? "success" : "warning"} sx={{ borderRadius: 3 }}>
          Score: {score}/{quiz.length} ({Math.round((score / quiz.length) * 100)}%)
        </Alert>
      )}
    </Stack>
  );
}

export default function LessonViewer({
  lesson,
  courseId,
  topicId,
  onNext,
  onPrevious,
  accent = "#2563eb",
  hasPrev,
  hasNext,
  TopicComponent,
}) {
  const [code, setCode] = useState(lesson?.playground?.starterCode || "");
  const [showSolution, setShowSolution] = useState(false);
  const [preview, setPreview] = useState("");
  const dispatch = useDispatch();
  const completed = useSelector((s) => isTopicComplete(s, courseId, topicId));
  const bookmarked = useSelector((s) =>
    s.progress.bookmarks.some((b) => b.courseId === courseId && b.topicId === topicId),
  );

  if (!lesson) return null;

  const handleComplete = () => {
    dispatch(markTopicComplete({ courseId, topicId }));
    dispatch(showToast({ message: `Completed: ${lesson.title}`, severity: "success" }));
  };

  const toggleBookmark = () => {
    if (bookmarked) {
      dispatch(removeBookmark({ courseId, topicId }));
      dispatch(showToast({ message: "Bookmark removed", severity: "info" }));
    } else {
      dispatch(addBookmark({ courseId, topicId, title: lesson.title }));
      dispatch(showToast({ message: `Bookmarked: ${lesson.title}`, severity: "success" }));
    }
  };

  const runPreview = () => {
    try {
      const logs = [];
      const mockConsole = { log: (...args) => logs.push(args.join(" ")) };
      // eslint-disable-next-line no-new-func
      const fn = new Function("console", code);
      fn(mockConsole);
      const output = logs.join("\n") || "Code executed successfully.";
      setPreview(output);
      dispatch(showToast({ message: "Code ran successfully!", severity: "success" }));
    } catch (e) {
      setPreview(`Error: ${e.message}`);
      dispatch(showToast({ message: `Error: ${e.message}`, severity: "error" }));
    }
  };

  const downloadNotes = () => {
    const text = `# ${lesson.title}\n\n## Definition\n${lesson.definition}\n\n## Summary\n${lesson.summary}\n\n## Cheat Sheet\n${lesson.cheatSheet?.join("\n- ")}`;
    const blob = new Blob([text], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${topicId}-notes.md`;
    a.click();
    URL.revokeObjectURL(url);
    dispatch(showToast({ message: "Notes downloaded!", severity: "success" }));
  };

  return (
    <Stack spacing={3}>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <Paper
          sx={{
            p: { xs: 2.5, md: 3.5 },
            borderRadius: 4,
            background: `linear-gradient(135deg, ${alpha(accent, 0.12)} 0%, ${alpha(accent, 0.02)} 100%)`,
            border: `1px solid ${alpha(accent, 0.2)}`,
          }}
        >
          <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" alignItems={{ xs: "flex-start", md: "center" }} spacing={2}>
            <Box>
              <Typography variant="caption" sx={{ color: accent, fontWeight: 700, letterSpacing: 1.4, textTransform: "uppercase" }}>
                {courseId} · Topic
              </Typography>
              <Typography variant="h4" fontWeight={800} sx={{ mt: 0.5 }}>
                {lesson.title}
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 1, maxWidth: 640, lineHeight: 1.8 }}>
                {lesson.definition}
              </Typography>
            </Box>
            <Stack direction="row" spacing={1}>
              <IconButton onClick={toggleBookmark} color={bookmarked ? "primary" : "default"}>
                {bookmarked ? <BookmarkCheck size={20} /> : <Bookmark size={20} />}
              </IconButton>
              {completed && <Chip icon={<CheckCircle2 size={14} />} label="Completed" color="success" />}
            </Stack>
          </Stack>
        </Paper>
      </motion.div>

      {TopicComponent && (
        <motion.div
          key={`component-${topicId}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <TopicComponent />
        </motion.div>
      )}

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, lg: 7 }}>
          <Stack spacing={2.5}>
            <Section title="Definition" icon={Brain} index={0} accent={accent}>
              <Typography color="text.secondary" lineHeight={1.9}>
                {lesson.definition}
              </Typography>
            </Section>

            <Section title="Deep Explanation" icon={Zap} index={1} accent={accent}>
              <Typography color="text.secondary" lineHeight={1.9}>
                {lesson.deepExplanation}
              </Typography>
            </Section>

            <Section title="Syntax" icon={Code2} index={2} accent={accent}>
              <Box component="pre" sx={{ p: 2.5, borderRadius: 2, bgcolor: "#0f172a", color: "#f8fafc", overflow: "auto", fontSize: "0.9rem" }}>
                {lesson.syntax}
              </Box>
            </Section>

            <Section title="5-Minute Examples" icon={Play} index={3} accent={accent}>
              <Stack spacing={1.5}>
                {(lesson.examples || []).map((ex, i) => (
                  <ExampleCard key={i} example={ex} index={i} accent={accent} />
                ))}
              </Stack>
            </Section>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, lg: 5 }}>
          <Stack spacing={2.5}>
            <Section title="Visual Diagram" icon={FileText} index={4} accent={accent}>
              <Box component="pre" sx={{ p: 2, borderRadius: 2, bgcolor: alpha(accent, 0.06), fontSize: "0.75rem", overflow: "auto", lineHeight: 1.4 }}>
                {lesson.visualDiagram}
              </Box>
            </Section>

            <Section title="Real-World Analogy" icon={Lightbulb} index={5} accent={accent}>
              <Typography color="text.secondary" lineHeight={1.8}>
                {lesson.analogy}
              </Typography>
            </Section>

            <Section title="Interview Questions" icon={Trophy} index={6} accent={accent}>
              <Stack spacing={1}>
                {(lesson.interviewQuestions || []).map((q, i) => (
                  <InterviewItem key={i} question={q.question} answer={q.answer} index={i} />
                ))}
              </Stack>
            </Section>
          </Stack>
        </Grid>
      </Grid>

      <Section title="Common Mistakes" icon={AlertTriangle} index={7} accent={accent}>
        <Stack spacing={2}>
          {(lesson.mistakes || []).map((m, i) => (
            <Grid container spacing={2} key={i}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="subtitle2" color="error" fontWeight={700} gutterBottom>Wrong</Typography>
                <Box component="pre" sx={{ p: 1.5, borderRadius: 2, bgcolor: alpha("#ef4444", 0.08), fontSize: "0.8rem", overflow: "auto" }}>
                  {m.wrong}
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="subtitle2" color="success.main" fontWeight={700} gutterBottom>Correct</Typography>
                <Box component="pre" sx={{ p: 1.5, borderRadius: 2, bgcolor: alpha("#22c55e", 0.08), fontSize: "0.8rem", overflow: "auto" }}>
                  {m.correct}
                </Box>
              </Grid>
              <Grid size={12}>
                <Typography color="text.secondary">{m.explanation}</Typography>
              </Grid>
            </Grid>
          ))}
        </Stack>
      </Section>

      <Section title="Best Practices" icon={CheckCircle2} index={8} accent={accent}>
        <Stack spacing={1}>
          {(lesson.bestPractices || []).map((bp, i) => (
            <Stack key={i} direction="row" spacing={1.5} alignItems="flex-start">
              <CheckCircle2 size={18} color={accent} style={{ marginTop: 2, flexShrink: 0 }} />
              <Typography color="text.secondary">{bp}</Typography>
            </Stack>
          ))}
        </Stack>
      </Section>

      {lesson.miniChallenge && (
        <Section title="Mini Challenge" icon={Trophy} index={9} accent={accent}>
          <Typography fontWeight={700} gutterBottom>{lesson.miniChallenge.title}</Typography>
          <Typography color="text.secondary" gutterBottom>Requirements:</Typography>
          <Stack spacing={0.5}>
            {lesson.miniChallenge.requirements.map((r, i) => (
              <FormControlLabel key={i} control={<Checkbox size="small" />} label={r} />
            ))}
          </Stack>
        </Section>
      )}

      <Section title="Interactive Playground" icon={Code2} index={10} accent={accent}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Editor
              height="340px"
              defaultLanguage="javascript"
              value={showSolution ? lesson.playground?.solution || code : code}
              onChange={(v) => { setCode(v || ""); setShowSolution(false); }}
              theme="vs-dark"
              options={{ minimap: { enabled: false }, fontSize: 14, padding: { top: 12 } }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper variant="outlined" sx={{ p: 2, height: 340, borderRadius: 3, overflow: "auto" }}>
              <Typography variant="subtitle2" fontWeight={700} gutterBottom>Live Preview</Typography>
              <Box component="pre" sx={{ mt: 1, whiteSpace: "pre-wrap", fontFamily: "monospace", fontSize: "0.85rem", color: "text.secondary" }}>
                {preview || "Click Run to see output"}
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <Stack direction="row" spacing={1.5} sx={{ mt: 2 }} flexWrap="wrap" useFlexGap>
          <Button variant="contained" startIcon={<Play size={16} />} onClick={runPreview} sx={{ bgcolor: accent }}>Run</Button>
          <Button variant="outlined" startIcon={<RotateCcw size={16} />} onClick={() => { setCode(lesson.playground?.starterCode || ""); setShowSolution(false); setPreview(""); }}>Reset</Button>
          <Button variant="outlined" startIcon={<Lightbulb size={16} />} onClick={() => setPreview(lesson.playground?.hint || "Check examples above.")}>Hint</Button>
          <Button variant="outlined" onClick={() => setShowSolution(true)}>Solution</Button>
        </Stack>
      </Section>

      <Section title="Practice Problems" icon={Code2} index={11} accent={accent}>
        <Grid container spacing={2}>
          {(lesson.practiceQuestions || []).map((p, i) => (
            <Grid size={{ xs: 12, md: 6 }} key={i}>
              <Paper variant="outlined" sx={{ p: 2, borderRadius: 3, height: "100%" }}>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                  <Chip label={p.difficulty} size="small" color={p.difficulty === "Hard" ? "error" : p.difficulty === "Medium" ? "warning" : "success"} />
                  <Typography fontWeight={700}>{p.title}</Typography>
                </Stack>
                <Typography color="text.secondary" variant="body2" sx={{ mb: 1.5 }}>{p.description}</Typography>
                <Box component="pre" sx={{ p: 1.5, borderRadius: 2, bgcolor: "#0f172a", color: "#e2e8f0", fontSize: "0.75rem" }}>
                  {p.starterCode}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Section>

      <Section title="Quiz" icon={Trophy} index={12} accent={accent}>
        <QuizSection quiz={lesson.quiz || []} courseId={courseId} topicId={topicId} onComplete={handleComplete} />
      </Section>

      {lesson.assignment && (
        <Section title="Assignment" icon={FileText} index={13} accent={accent}>
          <Typography fontWeight={700} variant="h6">{lesson.assignment.title}</Typography>
          <Typography color="text.secondary" sx={{ mt: 1, mb: 2 }}>{lesson.assignment.description}</Typography>
          <Typography fontWeight={600} gutterBottom>Checklist:</Typography>
          <Stack spacing={0.5}>
            {lesson.assignment.checklist.map((item, i) => (
              <FormControlLabel key={i} control={<Checkbox />} label={item} />
            ))}
          </Stack>
        </Section>
      )}

      <Section title="Summary & Cheat Sheet" icon={Download} index={14} accent={accent}>
        <Typography color="text.secondary" lineHeight={1.9} sx={{ mb: 2 }}>{lesson.summary}</Typography>
        <Divider sx={{ my: 2 }} />
        <Typography fontWeight={700} gutterBottom>Key Points</Typography>
        <Stack spacing={0.5} sx={{ mb: 2 }}>
          {(lesson.cheatSheet || []).map((item, i) => (
            <Typography key={i} color="text.secondary">• {item}</Typography>
          ))}
        </Stack>
        <Button variant="outlined" startIcon={<Download size={16} />} onClick={downloadNotes}>
          Download Notes
        </Button>
      </Section>

      <Divider />
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="space-between">
        <Button variant="outlined" onClick={() => { dispatch(showToast({ message: "Previous topic", severity: "info" })); onPrevious(); }} disabled={!hasPrev} size="large">
          ← Previous Topic
        </Button>
        <Button variant="contained" onClick={() => { handleComplete(); dispatch(showToast({ message: "Moving to next topic", severity: "success" })); onNext(); }} disabled={!hasNext} size="large" sx={{ bgcolor: accent }}>
          Next Topic →
        </Button>
      </Stack>
    </Stack>
  );
}

function InterviewItem({ question, answer, index }) {
  const [open, setOpen] = useState(false);
  return (
    <Paper variant="outlined" sx={{ borderRadius: 2, overflow: "hidden" }}>
      <Box onClick={() => setOpen(!open)} sx={{ p: 1.5, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography fontWeight={600} variant="body2">{index + 1}. {question}</Typography>
        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </Box>
      <Collapse in={open}>
        <Box sx={{ px: 1.5, pb: 1.5 }}>
          <Typography color="text.secondary" variant="body2" lineHeight={1.7}>{answer}</Typography>
        </Box>
      </Collapse>
    </Paper>
  );
}
