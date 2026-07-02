import { Link as RouterLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Box, Typography, alpha } from "@mui/material";
import {
  Home,
  ChevronRight,
  BookOpen,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -6 },
  visible: { opacity: 1, x: 0 },
};

function CrumbItem({ to, label, icon: Icon, active, accent }) {
  const content = (
    <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }}>
      <Box
        component={to ? RouterLink : "span"}
        to={to}
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: 0.75,
          px: 1.5,
          py: 0.75,
          borderRadius: 2,
          textDecoration: "none",
          color: active ? "white" : "text.secondary",
          bgcolor: active ? accent || "primary.main" : "transparent",
          border: active
            ? "none"
            : (theme) => `1px solid ${alpha(theme.palette.divider, 0.6)}`,
          boxShadow: active ? `0 4px 14px ${alpha(accent || "#2563eb", 0.35)}` : "none",
          transition: "all 0.2s ease",
          "&:hover": to
            ? {
                bgcolor: active ? accent : (theme) => alpha(theme.palette.primary.main, 0.08),
                borderColor: "primary.main",
                color: active ? "white" : "primary.main",
              }
            : {},
        }}
      >
        {Icon && <Icon size={14} strokeWidth={2.5} />}
        <Typography variant="body2" fontWeight={active ? 700 : 600}>
          {label}
        </Typography>
      </Box>
    </motion.div>
  );
  return content;
}

export default function BreadcrumbNav({
  courseTitle,
  topicTitle,
  accent = "#2563eb",
}) {
  const location = useLocation();
  const isHome = location.pathname === "/home";
  const isCourse = location.pathname.startsWith("/course/");

  return (
    <Box
      component={motion.nav}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      aria-label="breadcrumb"
      sx={{
        mb: 3,
        p: 1.25,
        borderRadius: 3,
        bgcolor: (theme) =>
          theme.palette.mode === "dark"
            ? alpha("#1e293b", 0.8)
            : alpha("#ffffff", 0.85),
        backdropFilter: "blur(12px)",
        border: (theme) => `1px solid ${alpha(theme.palette.divider, 0.5)}`,
        boxShadow: "0 4px 24px rgba(15, 23, 42, 0.06)",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 1 }}>
        <CrumbItem to="/home" label="Home" icon={Home} active={isHome} accent={accent} />

        {(isCourse || topicTitle) && (
          <>
            <motion.div variants={itemVariants}>
              <ChevronRight size={16} color="#94a3b8" />
            </motion.div>
            <CrumbItem
              to="/home"
              label="Courses"
              icon={BookOpen}
              active={false}
              accent={accent}
            />
          </>
        )}

        {isCourse && courseTitle && (
          <>
            <motion.div variants={itemVariants}>
              <ChevronRight size={16} color="#94a3b8" />
            </motion.div>
            <CrumbItem
              label={courseTitle}
              icon={GraduationCap}
              active={!topicTitle}
              accent={accent}
            />
          </>
        )}

        {topicTitle && (
          <>
            <motion.div variants={itemVariants}>
              <ChevronRight size={16} color="#94a3b8" />
            </motion.div>
            <CrumbItem
              label={topicTitle}
              icon={Sparkles}
              active
              accent={accent}
            />
          </>
        )}
      </Box>
    </Box>
  );
}
