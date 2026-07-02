import { useEffect, useMemo, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  CssBaseline,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  ThemeProvider,
  createTheme,
  InputBase,
  Paper,
  alpha,
  ClickAwayListener,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Moon, Sun, Search, GraduationCap } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { toggleDarkMode, initDarkMode } from "../features/learning/progressSlice";
import { courseCatalog } from "../features/learning/courseCatalog";
import { HEADER_HEIGHT_PX } from "../constants/layout";

export default function Layout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const darkMode = useSelector((s) => s.progress.darkMode);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(initDarkMode());
  }, [dispatch]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: { main: "#2563eb" },
          background: {
            default: darkMode ? "#0f172a" : "#f8fafc",
            paper: darkMode ? "#1e293b" : "#ffffff",
          },
        },
        typography: {
          fontFamily: "Inter, system-ui, -apple-system, sans-serif",
        },
        shape: { borderRadius: 12 },
      }),
    [darkMode],
  );

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    const results = [];
    for (const course of courseCatalog) {
      for (const lesson of course.lessons) {
        const text = `${lesson.title} ${course.title} ${lesson.category}`.toLowerCase();
        if (text.includes(q)) {
          results.push({ course, lesson });
        }
      }
    }
    return results.slice(0, 8);
  }, [query]);

  const handleSearchSelect = (courseId, topicId) => {
    navigate(`/course/${courseId}?topic=${topicId}`);
    setSearchOpen(false);
    setQuery("");
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            bgcolor: darkMode ? alpha("#0f172a", 0.92) : alpha("#ffffff", 0.92),
            backdropFilter: "blur(16px)",
            borderBottom: (t) => `1px solid ${t.palette.divider}`,
            color: "text.primary",
          }}
        >
          <Toolbar
            sx={{
              minHeight: { xs: 64, md: HEADER_HEIGHT_PX },
              gap: { xs: 1, md: 2 },
              px: { xs: 1.5, md: 2 },
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ cursor: "pointer", flexShrink: 0 }}
              onClick={() => navigate("/home")}
            >
              <Box
                sx={{
                  p: 0.75,
                  borderRadius: 2,
                  bgcolor: alpha("#2563eb", 0.1),
                  display: "flex",
                }}
              >
                <GraduationCap size={22} color="#2563eb" />
              </Box>
              <Typography
                variant="h6"
                fontWeight={800}
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                React Mastery
              </Typography>
            </Stack>

            <Box
              sx={{
                flex: 1,
                position: "relative",
                maxWidth: 480,
                mx: { xs: 0, md: "auto" },
                minWidth: 0,
              }}
            >
              <Paper
                component={motion.div}
                whileFocus={{ scale: 1.01 }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  px: 2,
                  py: 0.5,
                  borderRadius: 3,
                  bgcolor: darkMode ? alpha("#1e293b", 0.8) : alpha("#f1f5f9", 0.9),
                  border: (t) => `1px solid ${t.palette.divider}`,
                }}
              >
                <Search size={18} style={{ opacity: 0.5, marginRight: 8 }} />
                <InputBase
                  placeholder="Search topics... (Ctrl+K)"
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); setSearchOpen(true); }}
                  onFocus={() => setSearchOpen(true)}
                  sx={{ flex: 1, fontSize: "0.9rem" }}
                />
              </Paper>

              <AnimatePresence>
                {searchOpen && query && searchResults.length > 0 && (
                  <ClickAwayListener onClickAway={() => setSearchOpen(false)}>
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                    >
                      <Paper
                        sx={{
                          position: "absolute",
                          top: "100%",
                          left: 0,
                          right: 0,
                          mt: 1,
                          borderRadius: 3,
                          overflow: "hidden",
                          zIndex: 1300,
                          boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
                        }}
                      >
                        <List dense>
                          {searchResults.map(({ course, lesson }) => (
                            <ListItemButton
                              key={`${course.id}-${lesson.id}`}
                              onClick={() => handleSearchSelect(course.id, lesson.id)}
                            >
                              <ListItemText
                                primary={lesson.title}
                                secondary={course.title}
                              />
                            </ListItemButton>
                          ))}
                        </List>
                      </Paper>
                    </motion.div>
                  </ClickAwayListener>
                )}
              </AnimatePresence>
            </Box>

            <IconButton onClick={() => dispatch(toggleDarkMode())} color="inherit" sx={{ flexShrink: 0 }}>
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Spacer — pushes content below fixed AppBar */}
        <Toolbar sx={{ minHeight: { xs: 64, md: HEADER_HEIGHT_PX } }} />

        <Box
          component="main"
          sx={{
            p: { xs: 2, md: 3 },
            pt: { xs: 2, md: 3 },
            maxWidth: 1400,
            mx: "auto",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
