import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { login } from "../features/auth/authSlice";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim()) {
      setError("Please enter your name to continue.");
      return;
    }

    dispatch(login({ name: name.trim() }));
    navigate("/react");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 3,
        background:
          "radial-gradient(circle at top left, #dbeafe, #f8fafc 55%, #eff6ff)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Card
          sx={{
            width: "100%",
            maxWidth: 500,
            p: 2,
            borderRadius: 4,
            boxShadow: "0 20px 50px rgba(37, 99, 235, 0.16)",
          }}
        >
          <CardContent>
            <Stack spacing={2.5}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="caption"
                  sx={{
                    textTransform: "uppercase",
                    letterSpacing: 1.5,
                    color: "primary.main",
                    fontWeight: 700,
                  }}
                >
                  AI learning studio
                </Typography>
                <Typography variant="h3" fontWeight={800} sx={{ mt: 1 }}>
                  Welcome back
                </Typography>
                <Typography color="text.secondary" sx={{ mt: 1 }}>
                  Learn React and JavaScript through animated topic pages, code
                  examples, and practice prompts.
                </Typography>
              </Box>
              {error ? <Alert severity="error">{error}</Alert> : null}
              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Your name"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                    setError("");
                  }}
                  sx={{ mb: 2 }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{ py: 1.2, borderRadius: 999 }}
                >
                  Enter learning hub
                </Button>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
}
