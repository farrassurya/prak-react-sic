import { useEffect, useState } from "react";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Customers() {
  return (
    <div id="dashboard-container">
        <PageHeader title="Customers" breadcrumb={["Dashboard", "Customers"]}>
          <button className="bg-hijau text-white px-4 py-2 rounded-lg">Add Customer</button>
        </PageHeader>
        <p>Ini Halaman Customers</p>
    </div>
  );
}
