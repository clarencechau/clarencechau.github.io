import { HashRouter, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AnimatedRoutes from "./components/component/AnimatedRoutes";

function App() {
  return (
    <HashRouter>
      <AnimatedRoutes />
    </HashRouter>
  );
}

export default App;
