import { useEffect, useState } from "react";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Orders() {
  return (
    <div id="dashboard-container">
        <PageHeader title="Orders" breadcrumb={["Dashboard", "Orders"]}>
          <button className="bg-hijau text-white px-4 py-2 rounded-lg">Add Order</button>
        </PageHeader>
        <p>Ini Halaman Orders</p>
    </div>
  );
}