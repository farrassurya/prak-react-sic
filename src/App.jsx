import React from "react";
import "./assets/tailwind.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Orders from "./pages/Orders";
import Produk from "./pages/Produk";
import NotFound from "./pages/NotFound";
import Components from "./pages/Components";
import ErrorPage from "./components/ErrorPage";
import FiturXYZ from "./pages/auth/FiturXYZ";
import { Component } from "react";

const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/products" element={<Produk />} />
        <Route path="/components" element={<Components />} />
        <Route path="/fitur-xyz" element={<FiturXYZ />} />
        <Route
          path="/products/:id"
          element={
            <React.Suspense fallback={<div className="p-4">Loading...</div>}>
              <ProductDetail />
            </React.Suspense>
          }
        />
        <Route
          path="/error/400"
          element={
            <ErrorPage
              errorCode={400}
              description="Bad Request. Please check your input."
              image="https://http.cat/400"
            />
          }
        />
        <Route
          path="/error/401"
          element={
            <ErrorPage
              errorCode={401}
              description="Unauthorized. Please sign in first."
              image="https://http.cat/401"
            />
          }
        />
        <Route
          path="/error/403"
          element={
            <ErrorPage
              errorCode={403}
              description="Forbidden. You do not have access."
              image="https://http.cat/403"
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}


export default App;
