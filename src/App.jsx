import React, { Suspense } from "react"; // NEW: Import React dan Suspense
import "./assets/tailwind.css";
import { Route, Routes } from "react-router-dom";

// UPDATED: Import MainLayout & AuthLayout
import MainLayout from "./layouts/MainLayout"; // NEW
import AuthLayout from "./layouts/AuthLayout"; // NEW
import Loading from "./components/Loading"; // NEW: Import Loading component

// NEW: Lazy load page components
const Dashboard = React.lazy(() => import("./pages/Dashboard")); // NEW
const Customers = React.lazy(() => import("./pages/Customers")); // NEW
const Orders = React.lazy(() => import("./pages/Orders")); // NEW
const NotFound = React.lazy(() => import("./pages/NotFound")); // NEW
const ErrorPage = React.lazy(() => import("./components/ErrorPage")); // NEW

// NEW: Lazy load auth pages
const Login = React.lazy(() => import("./pages/auth/Login")); // NEW
const Register = React.lazy(() => import("./pages/auth/Register")); // NEW
const Forgot = React.lazy(() => import("./pages/auth/Forgot")); // NEW

function App() {
  return (
    /* NEW: Wrap Routes dengan Suspense dan Loading fallback */
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* NEW: Auth Routes dengan AuthLayout sebagai parent */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        {/* Main Routes dengan MainLayout sebagai parent */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/error/400" element={<ErrorPage errorCode={400} description="Bad Request. Please check your input." image="https://http.cat/400" />} />
          <Route path="/error/401" element={<ErrorPage errorCode={401} description="Unauthorized. Please sign in first." image="https://http.cat/401" />} />
          <Route path="/error/403" element={<ErrorPage errorCode={403} description="Forbidden. You do not have access." image="https://http.cat/403" />} />
        </Route>

        {/* Catch all - 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}


export default App;
