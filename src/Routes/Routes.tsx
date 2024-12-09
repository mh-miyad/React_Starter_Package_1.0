import App from "@/App";
import Home from "@/Page/Home";
import { Route, Routes } from "react-router";

<Routes>
  <Route path="/" element={<App />} />
  <Route path="/home" element={<Home />} />
</Routes>;
