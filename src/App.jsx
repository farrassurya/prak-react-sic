import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./assets/tailwind.css";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";
import { Route, Routes, useLocation } from "react-router-dom";
import Customers from "./pages/Customers";
import Orders from "./pages/Orders";
import NotFound from "./pages/NotFound";
import ErrorPage from "./components/ErrorPage"; // NEW

function App() {
  // BARU: State untuk search dari Header (dipakai di halaman Customers)
  const [searchQuery, setSearchQuery] = useState("");
  const [count, setCount] = useState(0);
  const location = useLocation(); // BARU
  const isCustomersPage = location.pathname === "/customers"; // BARU
  const isOrdersPage = location.pathname === "/orders";
  const isSearchablePage = isCustomersPage || isOrdersPage;

  return (
    <div id="app-container" className="bg-gray-100 min-h-screen flex">
      <div id="layout-wrapper" className="flex flex-row flex-1">
        <Sidebar />
        <div id="main-content" className="flex-1 p-4">
          <Header
            searchValue={isSearchablePage ? searchQuery : ""}
            onSearchChange={isSearchablePage ? setSearchQuery : () => {}}
            searchReadOnly={!isSearchablePage}
            searchPlaceholder={
              isCustomersPage
                ? "Search customer name or email"
                : isOrdersPage
                ? "Search order ID or customer name"
                : "Search Here..."
            }
          />
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders searchTerm={searchQuery} />} />
            <Route path="/customers" element={<Customers searchTerm={searchQuery} />} /> {/* MODIF */}

            {/* NEW: Error routes using error cat images */}
            <Route
              path="/error/400"
              element={
                <ErrorPage // NEW
                  errorCode={400}
                  description="Bad Request. Please check your input."
                  image="https://http.cat/400"
                />
              }
            />
            <Route
              path="/error/401"
              element={
                <ErrorPage // NEW
                  errorCode={401}
                  description="Unauthorized. Please sign in first."
                  image="https://http.cat/401"
                />
              }
            />
            <Route
              path="/error/403"
              element={
                <ErrorPage // NEW
                  errorCode={403}
                  description="Forbidden. You do not have access."
                  image="https://http.cat/403"
                />
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}


export default App;
