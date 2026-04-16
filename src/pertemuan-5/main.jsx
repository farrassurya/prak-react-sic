import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FaWhatsapp } from "react-icons/fa";
import "./assets/tailwind.css";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <div id="app-container" className="bg-gray-100 min-h-screen flex">
        <div id="layout-wrapper" className="flex flex-row flex-1">
          <Sidebar />
          <div id="main-content" className="flex-1 p-4">
            <Header />
            <Dashboard />
          </div>
        </div>
      </div>

      <a
        id="floating-whatsapp"
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat via WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-hijau text-white shadow-lg transition-transform hover:scale-105"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </>
  </StrictMode>
);

