import {
  Box,
  Chip,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
  Alert,
  alpha,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { motion } from "framer-motion";
import CodeIcon from "@mui/icons-material/Code";
import QuizIcon from "@mui/icons-material/Quiz";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function TopicDetailView({ topic, track }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <Paper
        sx={{
          p: { xs: 2.5, md: 4 },
          borderRadius: 4,
          bgcolor: "rgba(255,255,255,0.95)",
          boxShadow: "0 18px 45px rgba(15, 23, 42, 0.08)",
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          sx={{
            mb: 3,
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
          }}
        >
          <Box>
            <Typography
              variant="caption"
              sx={{
                textTransform: "uppercase",
                letterSpacing: 1.4,
                color: "primary.main",
                fontWeight: 700,
              }}
            >
              {track} topic
            </Typography>
            <Typography variant="h4" fontWeight={700} sx={{ mt: 0.5 }}>
              {topic.title}
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 1, maxWidth: 720 }}>
              {topic.description}
            </Typography>
          </Box>
          <Chip
            label={topic.level || "Beginner"}
            color="primary"
            variant="outlined"
          />
        </Stack>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, lg: 7 }}>
            <Stack spacing={2.5}>
              <Paper
                variant="outlined"
                sx={{
                  p: 2.5,
                  borderRadius: 3,
                  bgcolor: alpha("#2563eb", 0.04),
                }}
              >
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ mb: 1.5, alignItems: "center" }}
                >
                  <AutoAwesomeIcon color="primary" />
                  <Typography fontWeight={700}>Overview</Typography>
                </Stack>
                <Typography sx={{ lineHeight: 1.8, color: "text.secondary" }}>
                  {topic.summary}
                </Typography>
              </Paper>

              <Paper variant="outlined" sx={{ p: 2.5, borderRadius: 3 }}>
                <Typography fontWeight={700} sx={{ mb: 1.5 }}>
                  Key points
                </Typography>
                <List dense>
                  {topic.bullets.map((bullet) => (
                    <ListItem key={bullet} disablePadding sx={{ py: 0.4 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CodeIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={bullet} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, lg: 5 }}>
            <Stack spacing={2.5}>
              <Paper
                variant="outlined"
                sx={{
                  p: 2.5,
                  borderRadius: 3,
                  bgcolor: "#0f172a",
                  color: "white",
                }}
              >
                <Typography fontWeight={700} sx={{ mb: 1.2 }}>
                  Examples
                </Typography>
                <Stack spacing={1.5}>
                  {(topic.examples || []).map((example, index) => (
                    <Accordion
                      key={`${example.title}-${index}`}
                      disableGutters
                      sx={{
                        bgcolor: "rgba(255,255,255,0.06)",
                        color: "white",
                        borderRadius: 2,
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                      >
                        <Typography fontWeight={600}>
                          {example.title}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Box
                          component="pre"
                          sx={{
                            m: 0,
                            whiteSpace: "pre-wrap",
                            fontFamily: "monospace",
                            fontSize: "0.9rem",
                            color: "#cbd5e1",
                          }}
                        >
                          {example.code}
                        </Box>
                        <Typography sx={{ mt: 1.5, fontWeight: 600 }}>
                          Output
                        </Typography>
                        <Typography color="#cbd5e1">
                          {example.output}
                        </Typography>
                        <Typography sx={{ mt: 1, color: "#e2e8f0" }}>
                          {example.explanation}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Stack>
              </Paper>

              <Alert
                severity="success"
                icon={<QuizIcon />}
                sx={{ borderRadius: 3 }}
              >
                <Typography fontWeight={700} sx={{ mb: 0.5 }}>
                  Practice
                </Typography>
                <Typography>{topic.practice}</Typography>
              </Alert>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" fontWeight={700} sx={{ mb: 1.5 }}>
          Why it matters
        </Typography>
        <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
          {topic.reason}
        </Typography>
      </Paper>
    </motion.div>
  );
}
