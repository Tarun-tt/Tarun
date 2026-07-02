import { motion } from "framer-motion";
import { ArrowRight, Sparkles, BookOpen, Clock } from "lucide-react";
import {
  Box,
  Chip,
  CircularProgress,
  Paper,
  Stack,
  Typography,
  alpha,
} from "@mui/material";

export default function CourseCard({ course, onOpen }) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <Paper
        onClick={() => onOpen(course)}
        elevation={0}
        sx={{
          p: 3,
          borderRadius: 4,
          height: "100%",
          minHeight: 280,
          cursor: "pointer",
          position: "relative",
          overflow: "hidden",
          background: (theme) =>
            theme.palette.mode === "dark"
              ? `linear-gradient(145deg, ${alpha(course.accent, 0.15)} 0%, ${alpha("#1e293b", 0.95)} 100%)`
              : `linear-gradient(145deg, ${alpha(course.accent, 0.12)} 0%, rgba(255,255,255,0.98) 100%)`,
          border: `1px solid ${alpha(course.accent, 0.25)}`,
          boxShadow: `0 20px 50px ${alpha(course.accent, 0.12)}`,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: `linear-gradient(90deg, ${course.accent}, ${alpha(course.accent, 0.5)})`,
          },
          "&:hover": {
            boxShadow: `0 28px 60px ${alpha(course.accent, 0.2)}`,
            borderColor: alpha(course.accent, 0.4),
          },
          transition: "box-shadow 0.3s, border-color 0.3s",
        }}
      >
        <Stack spacing={2}>
          <Stack
            direction="row"
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Chip
              label={course.difficulty}
              size="small"
              sx={{ bgcolor: course.accent, color: "white" }}
            />
            <Sparkles size={18} color={course.accent} />
          </Stack>
          <Box>
            <Typography variant="h5" fontWeight={700}>
              {course.title}
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 1 }}>
              {course.description}
            </Typography>
          </Box>
          <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
            <Box sx={{ position: "relative", display: "inline-flex" }}>
              <CircularProgress
                variant="determinate"
                value={course.progress}
                size={56}
                thickness={5}
                sx={{ color: course.accent }}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="caption" fontWeight={700}>
                  {course.progress}%
                </Typography>
              </Box>
            </Box>
            <Box>
              <Stack direction="row" spacing={0.5} alignItems="center">
                <BookOpen size={14} color={course.accent} />
                <Typography variant="body2" color="text.secondary" fontWeight={600}>
                  {course.topics} Topics
                </Typography>
              </Stack>
              <Stack direction="row" spacing={0.5} alignItems="center" sx={{ mt: 0.5 }}>
                <Clock size={14} color={course.accent} />
                <Typography variant="body2" color="text.secondary" fontWeight={600}>
                  {course.hours} Hours
                </Typography>
              </Stack>
            </Box>
          </Stack>
          <Stack
            direction="row"
            spacing={1}
            sx={{ alignItems: "center", color: course.accent, fontWeight: 700 }}
          >
            <Typography>Start Learning</Typography>
            <ArrowRight size={16} />
          </Stack>
        </Stack>
      </Paper>
    </motion.div>
  );
}
