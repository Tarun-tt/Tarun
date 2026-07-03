import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "./store";
import Layout from "./components/Layout";
import ToastProvider from "./components/ToastProvider";
import HomePage from "./pages/HomePage";
import CoursePage from "./pages/CoursePage";

const queryClient = new QueryClient();

export default function App() {
  useEffect(() => {
    document.title = "React Mastery";
  }, []);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {/* <BrowserRouter> */}
        <BrowserRouter basename="/Tarun">
          <ToastProvider />
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route element={<Layout />}>
              <Route path="/home" element={<HomePage />} />
              <Route path="/course/:courseId" element={<CoursePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  );
}
