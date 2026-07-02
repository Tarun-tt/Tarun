import { useEffect, useMemo, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  CircularProgress,
  Drawer,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { courseCatalog, getCourseById, getAdjacentTopics } from "../features/learning/courseCatalog";
import { loadTopic, preloadTopic } from "../topics/topicLoader";
import { loadTopicComponent, preloadTopicComponent } from "../courses/componentLoader";
import { selectCourseProgress } from "../features/learning/progressSlice";
import { showToast } from "../features/ui/toastSlice";
import TopicSidebar from "../components/TopicSidebar";
import LessonViewer from "../components/LessonViewer";
import BreadcrumbNav from "../components/BreadcrumbNav";
import { HEADER_HEIGHT_PX } from "../constants/layout";

const SIDEBAR_WIDTH = 300;

export default function CoursePage() {
  const { courseId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const course = getCourseById(courseId) || courseCatalog[0];
  const topicFromUrl = searchParams.get("topic");
  const [activeTopic, setActiveTopic] = useState(
    topicFromUrl || course.lessons[0]?.id || "variables",
  );
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeLesson, setActiveLesson] = useState(null);
  const [TopicComponent, setTopicComponent] = useState(null);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const completedCount = useSelector((s) => selectCourseProgress(s, course.id));
  const progress = Math.round((completedCount / course.lessons.length) * 100);

  useEffect(() => {
    if (topicFromUrl) setActiveTopic(topicFromUrl);
  }, [topicFromUrl]);

  useEffect(() => {
    setSearchParams({ topic: activeTopic }, { replace: true });
  }, [activeTopic, setSearchParams]);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setTopicComponent(null);

    Promise.all([
      loadTopic(course.id, activeTopic),
      loadTopicComponent(course.id, activeTopic),
    ]).then(([content, Component]) => {
      if (!cancelled) {
        const meta = course.lessons.find((l) => l.id === activeTopic);
        setActiveLesson(content ? { ...content, category: meta?.category } : null);
        setTopicComponent(() => Component);
        setLoading(false);
      }
    });

    return () => { cancelled = true; };
  }, [course, activeTopic]);

  // Preload adjacent topics
  useEffect(() => {
    const { prev, next } = getAdjacentTopics(course.id, activeTopic);
    if (prev) {
      preloadTopic(course.id, prev.id);
      preloadTopicComponent(course.id, prev.id);
    }
    if (next) {
      preloadTopic(course.id, next.id);
      preloadTopicComponent(course.id, next.id);
    }
  }, [course.id, activeTopic]);

  const categoriesWithTopics = useMemo(() => {
    const indexMap = {};
    const prevMap = {};
    course.lessons.forEach((l, i) => {
      indexMap[l.id] = i;
      prevMap[l.id] = i > 0 ? course.lessons[i - 1].id : null;
    });

    return course.categories
      .map((cat) => ({
        name: cat.name,
        topics: cat.topics
          .filter((t) =>
            `${t.title} ${cat.name}`.toLowerCase().includes(search.toLowerCase()),
          )
          .map((t) => ({
            ...t,
            globalIndex: indexMap[t.id] ?? 0,
            prevId: prevMap[t.id],
          })),
      }))
      .filter((cat) => cat.topics.length > 0);
  }, [course, search]);

  const { prev, next } = getAdjacentTopics(course.id, activeTopic);

  const handleSelectTopic = (topicId) => {
    const topic = course.lessons.find((l) => l.id === topicId);
    setActiveTopic(topicId);
    if (isMobile) setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    dispatch(
      showToast({
        message: `Opened: ${topic?.title || topicId}`,
        severity: "info",
      }),
    );
  };

  const sidebarContent = (
    <Box sx={{ p: 2.5, height: "100%", overflow: "auto" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
        <Box>
          <Typography variant="h6" fontWeight={800} sx={{ color: course.accent }}>
            {course.title}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {completedCount}/{course.lessons.length} completed · {progress}%
          </Typography>
        </Box>
        {isMobile && (
          <IconButton onClick={() => setSidebarOpen(false)}>
            <X size={20} />
          </IconButton>
        )}
      </Stack>
      <TopicSidebar
        categories={categoriesWithTopics}
        activeTopic={activeTopic}
        onSelect={handleSelectTopic}
        search={search}
        onSearch={setSearch}
        courseId={course.id}
        accent={course.accent}
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed((v) => !v)}
      />
    </Box>
  );

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <BreadcrumbNav
        courseTitle={course.title}
        topicTitle={activeLesson?.title}
        accent={course.accent}
      />

      {isMobile && (
        <IconButton
          onClick={() => setSidebarOpen(true)}
          sx={{ mb: 2, bgcolor: "background.paper", boxShadow: 1 }}
        >
          <Menu size={20} />
        </IconButton>
      )}

      <Grid container spacing={0}>
        {!isMobile && (
          <Grid size={{ md: sidebarCollapsed ? 0.8 : 2.8 }}>
            <Paper
              elevation={0}
              sx={{
                position: "sticky",
                top: HEADER_HEIGHT_PX + 16,
                height: `calc(100vh - ${HEADER_HEIGHT_PX + 32}px)`,
                borderRadius: 4,
                mr: 2,
                overflow: "auto",
                border: (t) => `1px solid ${t.palette.divider}`,
              }}
            >
              {sidebarContent}
            </Paper>
          </Grid>
        )}

        <Grid size={{ xs: 12, md: sidebarCollapsed ? 11.2 : 9.2 }}>
          {loading ? (
            <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
              <CircularProgress sx={{ color: course.accent }} />
            </Box>
          ) : (
            <motion.div
              key={activeTopic}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <LessonViewer
                lesson={activeLesson}
                courseId={course.id}
                topicId={activeTopic}
                accent={course.accent}
                hasPrev={!!prev}
                hasNext={!!next}
                TopicComponent={TopicComponent}
                onNext={() => next && handleSelectTopic(next.id)}
                onPrevious={() => prev && handleSelectTopic(prev.id)}
              />
            </motion.div>
          )}
        </Grid>
      </Grid>

      <Drawer
        anchor="left"
        open={isMobile && sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        PaperProps={{ sx: { width: SIDEBAR_WIDTH } }}
      >
        {sidebarContent}
      </Drawer>
    </Box>
  );
}
