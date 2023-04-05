import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import renderRoutes from "./routes";
import { Suspense } from "react";
import Loader from "./components/Loader/Loader";

function App() {
  return (
    <Suspense fallback={<div><Loader /></div>}>
      <BrowserRouter>
        <Routes>{renderRoutes()}</Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
