import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import AppProvider from "./context/AppProvider.tsx"
import "@/styles/global.css"

const rootElement = document.getElementById("root")!;

// Fade out + remove loader before mounting React
const loader = document.getElementById("loader");
if (loader) {
  loader.style.transition = "opacity 0.5s ease";
  loader.style.opacity = "0";

  setTimeout(() => {
    loader.remove();
  }, 500); // matches the CSS transition
}

ReactDOM.createRoot(rootElement).render(
  <AppProvider>
    <App />
  </AppProvider>
);
