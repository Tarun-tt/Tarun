import { Snackbar, Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { hideToast } from "../features/ui/toastSlice";

export default function ToastProvider() {
  const dispatch = useDispatch();
  const { open, message, severity } = useSelector((s) => s.toast);

  return (
    <Snackbar
      open={open}
      autoHideDuration={3500}
      onClose={() => dispatch(hideToast())}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert
        onClose={() => dispatch(hideToast())}
        severity={severity}
        variant="filled"
        sx={{ width: "100%", borderRadius: 2, fontWeight: 500 }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
