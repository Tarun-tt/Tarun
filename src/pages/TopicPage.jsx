import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Alert,
  Box,
  Button,
  Chip,
  Divider,
  Paper,
  Stack,
  Typography,
  Snackbar,
} from "@mui/material";
import { motion } from "framer-motion";
import { reactTopics } from "../data/tracks/reactTopics";
import { javascriptTopics } from "../data/tracks/javascriptTopics";
import { reduxTopics } from "../data/tracks/reduxTopics";
import TopicDetailView from "../components/TopicDetailView";

export default function TopicPage() {
  const location = useLocation();
  const pathname = location.pathname;
  const track = pathname.includes("javascript")
    ? "JavaScript"
    : pathname.includes("redux")
      ? "Redux"
      : "React";
  const topics = pathname.includes("javascript")
    ? javascriptTopics
    : pathname.includes("redux")
      ? reduxTopics
      : reactTopics;
  const [activeTopic, setActiveTopic] = useState(topics[0]);
  const [toastOpen, setToastOpen] = useState(false);

  const selectedTopic = useMemo(() => {
    return (
      topics.find((topic) => topic.title === activeTopic.title) || topics[0]
    );
  }, [activeTopic, topics]);

  const handleTopicSelect = (topic) => {
    setActiveTopic(topic);
    setToastOpen(true);
  };

  return (
    <Box>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Paper
          sx={{
            p: { xs: 2.5, md: 3.5 },
            borderRadius: 4,
            mb: 3,
            background: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            sx={{ justifyContent: "space-between" }}
          >
            <Box>
              <Typography
                variant="caption"
                sx={{
                  textTransform: "uppercase",
                  letterSpacing: 1.5,
                  color: "primary.main",
                  fontWeight: 700,
                }}
              >
                {track} learning path
              </Typography>
              <Typography variant="h4" fontWeight={700} sx={{ mt: 0.5 }}>
                Master {track} with guided topics
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 1 }}>
                Click any topic in the sidebar to explore a polished concept
                page with examples, practice ideas, and why-it-matters guidance.
              </Typography>
            </Box>
            <Chip
              label={`${topics.length} topics`}
              color="primary"
              variant="filled"
              sx={{ alignSelf: "flex-start" }}
            />
          </Stack>
        </Paper>
      </motion.div>

      <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
        <Paper
          sx={{
            width: { xs: "100%", md: 300 },
            p: 2.2,
            borderRadius: 4,
            boxShadow: "0 12px 30px rgba(15, 23, 42, 0.06)",
          }}
        >
          <Typography variant="h6" fontWeight={700} sx={{ mb: 1.5 }}>
            Topics
          </Typography>
          <Divider sx={{ mb: 1.5 }} />
          <Stack spacing={1}>
            {topics.map((topic) => {
              const isActive = selectedTopic.title === topic.title;
              return (
                <motion.button
                  key={topic.title}
                  whileHover={{ x: 4, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleTopicSelect(topic)}
                  style={{
                    all: "unset",
                    cursor: "pointer",
                    borderRadius: 14,
                    padding: "12px 14px",
                    background: isActive ? "#dbeafe" : "#f8fafc",
                    border: isActive
                      ? "1px solid #93c5fd"
                      : "1px solid transparent",
                  }}
                >
                  <Typography fontWeight={700}>{topic.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {topic.description}
                  </Typography>
                </motion.button>
              );
            })}
          </Stack>
        </Paper>

        <Box sx={{ flex: 1 }}>
          <Stack spacing={2}>
            <Paper
              sx={{
                p: 2,
                borderRadius: 4,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" fontWeight={700}>
                Selected topic
              </Typography>
              <Button variant="outlined" onClick={() => setToastOpen(true)}>
                Show toast
              </Button>
            </Paper>
            <TopicDetailView topic={selectedTopic} track={track} />
          </Stack>
        </Box>
      </Stack>

      <Snackbar
        open={toastOpen}
        autoHideDuration={1800}
        onClose={() => setToastOpen(false)}
        anchorOrigin={{ vertical: "bottom", right: "right" }}
      >
        <Alert
          onClose={() => setToastOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          {selectedTopic.title} is ready for you.
        </Alert>
      </Snackbar>
    </Box>
  );
}
