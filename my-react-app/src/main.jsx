import ReactDOM from "react-dom/client";
import "./index.css";
import App from "@/App.jsx";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";

ReactDOM.createRoot(document.getElementById("root")).render(

    <BrowserRouter>
      <App />
    </BrowserRouter>
  
);
