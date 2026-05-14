import { useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar"; // NEW: Import dari components
import Header from "../components/Header"; // NEW: Import dari components

// NEW: MainLayout untuk halaman utama aplikasi
export default function MainLayout() {
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const isCustomersPage = location.pathname === "/customers";
  const isOrdersPage = location.pathname === "/orders";
  const isProductsPage =
    location.pathname === "/products" || location.pathname.startsWith("/products/");
  const isSearchablePage = isCustomersPage || isOrdersPage || isProductsPage;

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
                : isProductsPage
                ? "Cari produk..."
                : "Search Here..."
            }
          />
          {/* NEW: Outlet untuk menampilkan halaman-halaman yang menjadi child route */}
          <Outlet context={{ searchQuery, setSearchQuery }} />
        </div>
      </div>
    </div>
  );
}
