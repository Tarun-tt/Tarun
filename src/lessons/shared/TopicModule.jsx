import { Box, Chip, Divider, Paper, Stack, Typography } from "@mui/material";
import { Code2, Sparkles, Lightbulb } from "lucide-react";

export default function TopicModule({
  title,
  subtitle,
  summary,
  concepts = [],
  examples = [],
  practice,
  challenge,
}) {
  return (
    <Stack spacing={2.5}>
      <Paper sx={{ p: 3, borderRadius: 4, bgcolor: "#f8fafc" }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          sx={{
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
          }}
        >
          <Box>
            <Typography
              variant="caption"
              sx={{
                color: "primary.main",
                fontWeight: 700,
                letterSpacing: 1.4,
                textTransform: "uppercase",
              }}
            >
              {subtitle}
            </Typography>
            <Typography variant="h5" fontWeight={800} sx={{ mt: 0.5 }}>
              {title}
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 1, lineHeight: 1.8 }}>
              {summary}
            </Typography>
          </Box>
          <Chip
            icon={<Sparkles size={16} />}
            label="Focused lesson"
            color="primary"
            variant="outlined"
          />
        </Stack>
      </Paper>

      <Paper sx={{ p: 3, borderRadius: 4 }}>
        <Stack direction="row" spacing={1} sx={{ alignItems: "center", mb: 2 }}>
          <Code2 size={18} color="#2563eb" />
          <Typography variant="h6" fontWeight={700}>
            Core ideas
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
          {concepts.map((concept) => (
            <Chip key={concept} label={concept} variant="outlined" />
          ))}
        </Stack>
      </Paper>

      <Paper sx={{ p: 3, borderRadius: 4 }}>
        <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
          Examples
        </Typography>
        <Stack spacing={1.8}>
          {examples.map((example, index) => (
            <Box
              key={`${example.title}-${index}`}
              sx={{ p: 2, borderRadius: 3, bgcolor: "#f8fafc" }}
            >
              <Typography fontWeight={700}>{example.title}</Typography>
              <Box
                component="pre"
                sx={{
                  mt: 1,
                  p: 1.5,
                  borderRadius: 2,
                  bgcolor: "#0f172a",
                  color: "#f8fafc",
                  overflowX: "auto",
                }}
              >
                {example.code}
              </Box>
              <Typography color="text.secondary" sx={{ mt: 1 }}>
                {example.explanation}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Paper>

      <Paper sx={{ p: 3, borderRadius: 4 }}>
        <Stack
          direction="row"
          spacing={1}
          sx={{ alignItems: "center", mb: 1.5 }}
        >
          <Lightbulb size={18} color="#f59e0b" />
          <Typography variant="h6" fontWeight={700}>
            Practice
          </Typography>
        </Stack>
        <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
          {practice}
        </Typography>
        {challenge && (
          <Box sx={{ mt: 2 }}>
            <Divider sx={{ mb: 1.5 }} />
            <Typography variant="subtitle2" fontWeight={700}>
              Mini challenge
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 0.5 }}>
              {challenge}
            </Typography>
          </Box>
        )}
      </Paper>
    </Stack>
  );
}
