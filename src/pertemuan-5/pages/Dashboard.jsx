import { useEffect, useState } from "react";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

const recentOrders = [
  {
    id: "#OR-1021",
    customer: "Alya Putri",
    menu: "Cheese Burger",
    total: "Rp.85.000",
    status: "Delivered",
  },
  {
    id: "#OR-1022",
    customer: "Raka Wijaya",
    menu: "Chicken Katsu",
    total: "Rp.72.000",
    status: "Pending",
  },
  {
    id: "#OR-1023",
    customer: "Nadia Safira",
    menu: "Beef Teriyaki",
    total: "Rp.94.000",
    status: "Canceled",
  },
  {
    id: "#OR-1024",
    customer: "Fajar Pratama",
    menu: "Spicy Ramen",
    total: "Rp.68.000",
    status: "Delivered",
  },
  {
    id: "#OR-1025",
    customer: "Keisha Maharani",
    menu: "Salmon Mentai",
    total: "Rp.118.000",
    status: "Pending",
  },
];

function getStatusChipClass(status) {
  if (status === "Delivered") {
    return "bg-green-100 text-green-700";
  }

  if (status === "Pending") {
    return "bg-yellow-100 text-yellow-700";
  }

  return "bg-red-100 text-red-700";
}

function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const avatarPalette = [
  "bg-emerald-100 text-emerald-700",
  "bg-sky-100 text-sky-700",
  "bg-amber-100 text-amber-700",
  "bg-purple-100 text-purple-700",
  "bg-rose-100 text-rose-700",
];


export default function Dashboard() {
  const [isOrderLoading, setIsOrderLoading] = useState(true);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setIsOrderLoading(false);
    }, 1400);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div id="dashboard-container">
      <PageHeader />
      <div id="dashboard-grid" className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div id="dashboard-orders" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
          <div id="orders-icon" className="bg-hijau rounded-full p-4">
            <FaShoppingCart className="text-3xl text-white" />
          </div>
          <div id="orders-info" className="flex flex-col">
            <span id="orders-count" className="text-2xl font-bold">75</span>
            <span id="orders-text" className="text-gray-400">Total Orders</span>
          </div>
        </div>


        <div id="dashboard-delivered" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
          <div id="delivered-icon" className="bg-biru rounded-full p-4">
            <FaTruck className="text-3xl text-white" />
          </div>
          <div id="delivered-info" className="flex flex-col">
            <span id="delivered-count" className="text-2xl font-bold">175</span>
            <span id="delivered-text" className="text-gray-400">Total Delivered</span>
          </div>
        </div>


        <div id="dashboard-canceled" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
          <div id="canceled-icon" className="bg-merah rounded-full p-4">
            <FaBan className="text-3xl text-white" />
          </div>
          <div id="canceled-info" className="flex flex-col">
            <span id="canceled-count" className="text-2xl font-bold">40</span>
            <span id="canceled-text" className="text-gray-400">Total Canceled</span>
          </div>
        </div>


        <div id="dashboard-revenue" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
          <div id="revenue-icon" className="bg-kuning rounded-full p-4">
            <FaDollarSign className="text-3xl text-white" />
          </div>
          <div id="revenue-info" className="flex flex-col">
            <span id="revenue-amount" className="text-2xl font-bold">Rp.128</span>
            <span id="revenue-text" className="text-gray-400">Total Revenue</span>
          </div>
        </div>
      </div>

      <section id="recent-orders-section" className="px-5 pb-5">
        <div className="rounded-lg bg-white shadow-md">
          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Recent Orders</h2>
              <p className="text-sm text-gray-400">Latest transactions from your restaurant</p>
            </div>
            <button className="rounded-md border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50">
              View All
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left text-xs uppercase tracking-wide text-gray-500">
                  <th className="px-5 py-3 font-semibold">Order ID</th>
                  <th className="px-5 py-3 font-semibold">Customer</th>
                  <th className="px-5 py-3 font-semibold">Menu</th>
                  <th className="px-5 py-3 font-semibold">Total</th>
                  <th className="px-5 py-3 font-semibold">Status</th>
                </tr>
              </thead>

              <tbody>
                {isOrderLoading
                  ? Array.from({ length: 5 }).map((_, index) => (
                      <tr key={`order-skeleton-${index}`} className="animate-pulse border-t border-gray-50">
                        <td className="px-5 py-4">
                          <div className="h-4 w-20 rounded bg-gray-200" />
                        </td>
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="h-9 w-9 rounded-full bg-gray-200" />
                            <div className="h-4 w-28 rounded bg-gray-200" />
                          </div>
                        </td>
                        <td className="px-5 py-4">
                          <div className="h-4 w-24 rounded bg-gray-200" />
                        </td>
                        <td className="px-5 py-4">
                          <div className="h-4 w-20 rounded bg-gray-200" />
                        </td>
                        <td className="px-5 py-4">
                          <div className="h-6 w-20 rounded-full bg-gray-200" />
                        </td>
                      </tr>
                    ))
                  : recentOrders.map((order, index) => (
                      <tr key={order.id} className="border-t border-gray-50">
                        <td className="px-5 py-4 font-semibold text-gray-600">{order.id}</td>
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div
                              className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold ${
                                avatarPalette[index % avatarPalette.length]
                              }`}
                            >
                              {getInitials(order.customer)}
                            </div>
                            <span className="font-medium text-gray-700">{order.customer}</span>
                          </div>
                        </td>
                        <td className="px-5 py-4 text-gray-600">{order.menu}</td>
                        <td className="px-5 py-4 font-semibold text-gray-700">{order.total}</td>
                        <td className="px-5 py-4">
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusChipClass(
                              order.status,
                            )}`}
                          >
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
