import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, Search, CheckCircle2, Circle } from "lucide-react";
import {
  Box,
  Chip,
  Collapse,
  IconButton,
  List,
  ListItemButton,
  TextField,
  Typography,
  alpha,
} from "@mui/material";
import { useSelector } from "react-redux";
import { isTopicComplete } from "../features/learning/progressSlice";
import { slugifyCategory } from "../courses/manifest";

const LEVEL_COLORS = {
  beginner: "#22c55e",
  intermediate: "#f59e0b",
  advanced: "#ef4444",
  projects: "#8b5cf6",
  "problem-bank": "#dc2626",
};

export default function TopicSidebar({
  categories,
  activeTopic,
  onSelect,
  search,
  onSearch,
  courseId,
  accent = "#2563eb",
  collapsed,
  onToggleCollapse,
}) {
  if (collapsed) {
    return (
      <Box sx={{ py: 1 }}>
        <IconButton onClick={onToggleCollapse} size="small">
          <ChevronRight size={18} />
        </IconButton>
      </Box>
    );
  }

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Typography variant="h6" fontWeight={700}>
          Topics
        </Typography>
        <Chip label="All Unlocked" size="small" color="success" variant="outlined" />
        {onToggleCollapse && (
          <IconButton onClick={onToggleCollapse} size="small">
            <ChevronDown size={18} style={{ transform: "rotate(90deg)" }} />
          </IconButton>
        )}
      </Box>
      <TextField
        fullWidth
        size="small"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search topics..."
        slotProps={{
          input: {
            startAdornment: <Search size={16} style={{ marginRight: 8, opacity: 0.5 }} />,
          },
        }}
        sx={{ mb: 2 }}
      />
      <List disablePadding>
        {categories.map((category) => (
          <CategoryGroup
            key={category.name}
            category={category}
            activeTopic={activeTopic}
            onSelect={onSelect}
            courseId={courseId}
            accent={accent}
          />
        ))}
      </List>
    </Box>
  );
}

function CategoryGroup({ category, activeTopic, onSelect, courseId, accent }) {
  const [open, setOpen] = useState(true);
  const level = slugifyCategory(category.name);
  const levelColor = LEVEL_COLORS[level] || accent;

  if (category.topics.length === 0) return null;

  return (
    <>
      <ListItemButton
        onClick={() => setOpen((v) => !v)}
        sx={{ borderRadius: 2, mb: 0.5, py: 1 }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography fontWeight={700} variant="body2">
            {category.name}
          </Typography>
          <Chip
            label={level}
            size="small"
            sx={{
              mt: 0.5,
              height: 18,
              fontSize: "0.65rem",
              bgcolor: alpha(levelColor, 0.12),
              color: levelColor,
              textTransform: "capitalize",
            }}
          />
        </Box>
        <Chip label={category.topics.length} size="small" sx={{ mr: 1, height: 20, fontSize: "0.7rem" }} />
        {open ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
      </ListItemButton>
      <Collapse in={open}>
        <List component="div" disablePadding sx={{ pl: 0.5, mb: 1 }}>
          <AnimatePresence>
            {category.topics.map((topic, index) => (
              <TopicItem
                key={topic.id}
                topic={topic}
                index={index}
                active={activeTopic === topic.id}
                onSelect={onSelect}
                courseId={courseId}
                accent={accent}
              />
            ))}
          </AnimatePresence>
        </List>
      </Collapse>
    </>
  );
}

function TopicItem({ topic, index, active, onSelect, courseId, accent }) {
  const completed = useSelector((s) => isTopicComplete(s, courseId, topic.id));

  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.03 }}
    >
      <ListItemButton
        selected={active}
        onClick={() => onSelect(topic.id)}
        sx={{
          borderRadius: 2,
          pl: 1.5,
          py: 1,
          mb: 0.5,
          alignItems: "flex-start",
          borderLeft: active ? `3px solid ${accent}` : "3px solid transparent",
          bgcolor: active ? alpha(accent, 0.08) : completed ? alpha("#22c55e", 0.06) : "transparent",
          "&.Mui-selected": { bgcolor: alpha(accent, 0.1) },
        }}
      >
        <Box sx={{ mr: 1, mt: 0.3, color: completed ? "#22c55e" : accent }}>
          {completed ? <CheckCircle2 size={14} /> : <Circle size={14} />}
        </Box>
        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
          <Typography variant="body2" fontWeight={active ? 700 : 600} noWrap>
            {topic.title}
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 0.25 }} noWrap>
            {topic.definition?.slice(0, 50) || "Learn this topic"}...
          </Typography>
        </Box>
      </ListItemButton>
    </motion.div>
  );
}
