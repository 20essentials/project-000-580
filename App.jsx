import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <section className="fixed inset-0 z-10 bg-[url('assets/image.avif')] bg-cover relative group">
      <div className="absolute inset-0 z-11 bg-[url('assets/splash.avif')] bg-cover bg-center mix-blend-difference"></div>
      <div className="absolute inset-0 z-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:animate-move"></div>
      <style>
        {`
          @keyframes move {
            0% { opacity: 1; transform: translateX(-100%); }
            100% { opacity: 1; transform: translateX(100%); }
          }
          .animate-move { animation: move 1s linear both; }
        `}
      </style>
    </section>
  );
};

const rootEl = document.getElementById("root") || (() => {
  const el = document.createElement("div");
  el.id = "root";
  document.body.appendChild(el);
  return el;
})();

createRoot(rootEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
