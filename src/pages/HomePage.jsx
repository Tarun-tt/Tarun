import { useSelector, useDispatch } from "react-redux";
import { Box, Grid, Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Trophy, Clock, BookOpen } from "lucide-react";
import { courseCatalog } from "../features/learning/courseCatalog";
import { selectCourseProgress } from "../features/learning/progressSlice";
import { showToast } from "../features/ui/toastSlice";
import CourseCard from "../components/CourseCard";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

function CourseCardWithProgress({ course, onOpen }) {
  const completed = useSelector((s) => selectCourseProgress(s, course.id));
  const progress = Math.round((completed / course.topics) * 100);
  return (
    <CourseCard
      course={{ ...course, progress }}
      onOpen={onOpen}
    />
  );
}

export default function HomePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const xp = useSelector((s) => s.progress.xp);

  const totalTopics = courseCatalog.reduce((sum, c) => sum + c.topics, 0);
  const totalHours = courseCatalog.reduce((sum, c) => sum + c.hours, 0);

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 120px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: 4,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: "center", marginBottom: 48, maxWidth: 640 }}
      >
        <Stack direction="row" justifyContent="center" spacing={1} alignItems="center" sx={{ mb: 2 }}>
          <Sparkles size={20} color="#2563eb" />
          <Typography
            variant="caption"
            sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}
          >
            Interactive Learning Platform
          </Typography>
        </Stack>
        <Typography variant="h3" fontWeight={800} gutterBottom>
          React Mastery
        </Typography>
        <Typography color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>
          Master JavaScript, React, Redux, TanStack Query, DSA, and AI from beginner to expert.
        </Typography>
        <Stack direction="row" spacing={3} justifyContent="center" flexWrap="wrap" useFlexGap>
          <Stack direction="row" spacing={1} alignItems="center">
            <BookOpen size={16} color="#64748b" />
            <Typography variant="body2" color="text.secondary">{totalTopics} Topics</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <Clock size={16} color="#64748b" />
            <Typography variant="body2" color="text.secondary">{totalHours} Hours</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <Trophy size={16} color="#64748b" />
            <Typography variant="body2" color="text.secondary">{xp} XP</Typography>
          </Stack>
        </Stack>
      </motion.div>

      <motion.div variants={container} initial="hidden" animate="show" style={{ width: "100%", maxWidth: 1200 }}>
        <Grid container spacing={3} justifyContent="center">
          {courseCatalog.map((course) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4 }} key={course.id}>
              <motion.div variants={item}>
                <CourseCardWithProgress
                  course={course}
                  onOpen={() => {
                    dispatch(showToast({ message: `Starting ${course.title}`, severity: "info" }));
                    navigate(`/course/${course.id}`);
                  }}
                />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
}
