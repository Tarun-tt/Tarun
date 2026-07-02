import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function AnimatedCard({
  title,
  description,
  path,
  badge,
  accent,
}) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      <Card
        sx={{
          height: "100%",
          borderRadius: 4,
          boxShadow: "0 16px 40px rgba(15, 23, 42, 0.08)",
          border: `1px solid ${accent}`,
        }}
      >
        <CardContent>
          <Stack spacing={1.5}>
            <Chip
              label={badge}
              size="small"
              sx={{ alignSelf: "flex-start", bgcolor: accent, color: "white" }}
            />
            <Typography variant="h6" fontWeight={700}>
              {title}
            </Typography>
            <Typography color="text.secondary">{description}</Typography>
            <Button
              component={Link}
              to={path}
              variant="contained"
              sx={{ mt: 1, bgcolor: accent, "&:hover": { bgcolor: accent } }}
            >
              Explore
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  );
}
