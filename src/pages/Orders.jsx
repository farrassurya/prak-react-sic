import { useEffect, useState } from "react"; // MODIF
import { useOutletContext } from "react-router-dom";
import { FaShoppingCart, FaPlus, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa"; // MODIF
import PageHeader from "../components/PageHeader";

// BARU: Data JSON order awal (30 data)
const initialOrders = [
  { orderId: "ORD-001", customerName: "Andi Pratama", status: "Completed", totalPrice: 125000, orderDate: "2026-04-01" },
  { orderId: "ORD-002", customerName: "Budi Santoso", status: "Pending", totalPrice: 85000, orderDate: "2026-04-01" },
  { orderId: "ORD-003", customerName: "Citra Lestari", status: "Cancelled", totalPrice: 43000, orderDate: "2026-04-02" },
  { orderId: "ORD-004", customerName: "Dewi Anjani", status: "Completed", totalPrice: 220000, orderDate: "2026-04-02" },
  { orderId: "ORD-005", customerName: "Eko Saputra", status: "Pending", totalPrice: 99000, orderDate: "2026-04-03" },
  { orderId: "ORD-006", customerName: "Fajar Ramadhan", status: "Completed", totalPrice: 157000, orderDate: "2026-04-03" },
  { orderId: "ORD-007", customerName: "Gita Maharani", status: "Pending", totalPrice: 67000, orderDate: "2026-04-04" },
  { orderId: "ORD-008", customerName: "Hadi Wijaya", status: "Cancelled", totalPrice: 51000, orderDate: "2026-04-04" },
  { orderId: "ORD-009", customerName: "Intan Permata", status: "Completed", totalPrice: 189000, orderDate: "2026-04-05" },
  { orderId: "ORD-010", customerName: "Joko Susilo", status: "Pending", totalPrice: 73000, orderDate: "2026-04-05" },
  { orderId: "ORD-011", customerName: "Kiki Amelia", status: "Completed", totalPrice: 131000, orderDate: "2026-04-06" },
  { orderId: "ORD-012", customerName: "Lina Marlina", status: "Cancelled", totalPrice: 47000, orderDate: "2026-04-06" },
  { orderId: "ORD-013", customerName: "Mira Oktavia", status: "Pending", totalPrice: 76000, orderDate: "2026-04-07" },
  { orderId: "ORD-014", customerName: "Nanda Saputri", status: "Completed", totalPrice: 145000, orderDate: "2026-04-07" },
  { orderId: "ORD-015", customerName: "Oka Prasetyo", status: "Pending", totalPrice: 92000, orderDate: "2026-04-08" },
  { orderId: "ORD-016", customerName: "Putri Ayu", status: "Completed", totalPrice: 201000, orderDate: "2026-04-08" },
  { orderId: "ORD-017", customerName: "Qori Ahmad", status: "Cancelled", totalPrice: 39000, orderDate: "2026-04-09" },
  { orderId: "ORD-018", customerName: "Rina Agustina", status: "Pending", totalPrice: 88000, orderDate: "2026-04-09" },
  { orderId: "ORD-019", customerName: "Sandi Nugraha", status: "Completed", totalPrice: 154000, orderDate: "2026-04-10" },
  { orderId: "ORD-020", customerName: "Tia Larasati", status: "Pending", totalPrice: 64000, orderDate: "2026-04-10" },
  { orderId: "ORD-021", customerName: "Umar Faruq", status: "Completed", totalPrice: 174000, orderDate: "2026-04-11" },
  { orderId: "ORD-022", customerName: "Vina Rahma", status: "Cancelled", totalPrice: 55000, orderDate: "2026-04-11" },
  { orderId: "ORD-023", customerName: "Wawan Setiawan", status: "Pending", totalPrice: 81000, orderDate: "2026-04-12" },
  { orderId: "ORD-024", customerName: "Xenia Putri", status: "Completed", totalPrice: 162000, orderDate: "2026-04-12" },
  { orderId: "ORD-025", customerName: "Yudi Kurniawan", status: "Pending", totalPrice: 79000, orderDate: "2026-04-13" },
  { orderId: "ORD-026", customerName: "Zahra Nabila", status: "Completed", totalPrice: 118000, orderDate: "2026-04-13" },
  { orderId: "ORD-027", customerName: "Aditia Mahendra", status: "Cancelled", totalPrice: 44000, orderDate: "2026-04-14" },
  { orderId: "ORD-028", customerName: "Bella Savitri", status: "Pending", totalPrice: 97000, orderDate: "2026-04-14" },
  { orderId: "ORD-029", customerName: "Cahya Wulandari", status: "Completed", totalPrice: 167000, orderDate: "2026-04-15" },
  { orderId: "ORD-030", customerName: "Dimas Sapto", status: "Pending", totalPrice: 69000, orderDate: "2026-04-15" },
];

const ORDERS_STORAGE_KEY = "ordersData"; // BARU

export default function Orders() { // MODIF
  // BARU: State utama data orders
  const [orders, setOrders] = useState(() => {
    // BARU: Ambil data orders tersimpan agar tidak hilang saat pindah halaman
    const savedOrders = localStorage.getItem(ORDERS_STORAGE_KEY);
    return savedOrders ? JSON.parse(savedOrders) : initialOrders;
  });
  const [showAddForm, setShowAddForm] = useState(false); // BARU
  const { searchQuery } = useOutletContext();

  // BARU: Logic pagination (mirip Customers)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // BARU: State form Add Order
  const [newOrder, setNewOrder] = useState({
    orderId: "",
    customerName: "",
    status: "Pending",
    totalPrice: "",
    orderDate: "",
  });

  // BARU: Search berdasarkan customerName dan orderId
  const filteredOrders = orders.filter((order) => {
    const keyword = (searchQuery || "").toLowerCase();
    return (
      order.customerName.toLowerCase().includes(keyword) ||
      order.orderId.toLowerCase().includes(keyword)
    );
  });

  const totalPages = Math.max(1, Math.ceil(filteredOrders.length / itemsPerPage)); // BARU
  const startIndex = (currentPage - 1) * itemsPerPage; // BARU
  const currentData = filteredOrders.slice(startIndex, startIndex + itemsPerPage); // BARU

  // BARU: Warna status order
  const statusStyles = {
    Pending: "bg-amber-100 text-amber-700 border-amber-200",
    Completed: "bg-emerald-100 text-emerald-700 border-emerald-200",
    Cancelled: "bg-rose-100 text-rose-700 border-rose-200",
  };

  // BARU: Format harga sederhana 
  const formatRupiah = (amount) =>
    `Rp ${Number(amount).toLocaleString("id-ID")}`;

  // BARU: Submit form Add Order
  const handleAddOrder = (event) => {
    event.preventDefault();

    if (!newOrder.orderId || !newOrder.customerName || !newOrder.totalPrice || !newOrder.orderDate) {
      return;
    }

    const orderToInsert = {
      ...newOrder,
      totalPrice: Number(newOrder.totalPrice),
    };

    setOrders((prev) => {
      const updatedOrders = [...prev, orderToInsert]; // MODIF: data baru masuk paling bawah
      setCurrentPage(Math.ceil(updatedOrders.length / itemsPerPage)); // BARU: pindah ke halaman terakhir
      return updatedOrders;
    });

    setShowAddForm(false);
    setNewOrder({
      orderId: "",
      customerName: "",
      status: "Pending",
      totalPrice: "",
      orderDate: "",
    });
  };

  // BARU: Simpan data orders ke localStorage setiap ada perubahan
  useEffect(() => {
    localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
  }, [orders]);

  // Jaga agar hasil filter langsung terlihat saat keyword search berubah
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  return (
    <div className="w-full pl-0 pr-6 pb-10 antialiased">
        <PageHeader title="Orders" breadcrumb={["Management", "Orders"]}>
          {/* MODIF: Tombol existing diaktifkan untuk modal Add Orders */}
          <button
            className="flex items-center gap-2 bg-[#557C56] text-white px-6 py-2.5 rounded-xl font-bold shadow-lg hover:bg-[#466847] transition-all active:scale-95" // MODIF
            onClick={() => setShowAddForm(true)}
          >
            <FaPlus className="text-[10px]" />
            Add Orders
          </button>
        </PageHeader>

        {/* BARU: Ringkasan orders */}
        <div className="relative overflow-hidden mb-8 rounded-4xl bg-linear-to-r from-[#557C56] to-[#466847] p-8 text-white shadow-xl shadow-slate-100"> {/* MODIF */}
          <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-white/10 blur-2xl"></div>
          <div className="relative flex items-center gap-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-inner">
              <FaShoppingCart className="text-2xl text-white" />
            </div>
            <div>
              <p className="text-xs font-bold text-white/70 uppercase tracking-[0.2em] mb-1">Orders Database</p>
              <div className="flex items-baseline gap-2">
                <h2 className="text-5xl font-black tracking-tighter">{orders.length}</h2>
                <span className="text-sm font-medium text-white/60">Total Orders</span>
              </div>
            </div>
          </div>
        </div>

        {/* BARU: Tabel Orders */}
        <div className="bg-white rounded-4xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50 text-slate-400 border-b border-slate-50">
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.15em]">Order ID</th>
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.15em]">Customer Name</th>
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.15em] text-center">Status</th>
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.15em]">Total Price</th>
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.15em]">Order Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {currentData.length > 0 ? (
                  currentData.map((order) => (
                    <tr key={order.orderId} className="hover:bg-slate-50/40 transition-colors">
                      <td className="px-8 py-5 text-[13px] font-bold text-[#334155]">{order.orderId}</td>
                      <td className="px-8 py-5 text-[13px] font-semibold text-slate-600">{order.customerName}</td>
                      <td className="px-8 py-5 text-center">
                        <span className={`inline-flex px-4 py-1.5 rounded-xl text-[10px] font-black border uppercase tracking-wider ${statusStyles[order.status] || "bg-slate-100 text-slate-600 border-slate-200"}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-8 py-5 text-[13px] font-bold text-slate-600">{formatRupiah(order.totalPrice)}</td>
                      <td className="px-8 py-5 text-[13px] font-medium text-slate-500">{order.orderDate}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-8 py-10 text-center text-sm font-semibold text-slate-400">
                      Data orders tidak ditemukan.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* BARU: Pagination */}
          <div className="flex items-center justify-between px-8 py-6 border-t border-slate-50 bg-white">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Page {Math.min(currentPage, totalPages)} of {totalPages}
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-2.5 rounded-xl border border-slate-100 text-slate-400 hover:bg-slate-50 disabled:opacity-30 transition-all"
              >
                <FaChevronLeft className="text-[10px]" />
              </button>

              <div className="flex gap-1.5">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`h-9 w-9 rounded-xl text-xs font-black transition-all ${
                      currentPage === i + 1
                        ? "bg-[#557C56] text-white shadow-md shadow-slate-200" // MODIF
                        : "text-slate-400 hover:bg-slate-50"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-2.5 rounded-xl border border-slate-100 text-slate-400 hover:bg-slate-50 disabled:opacity-30 transition-all"
              >
                <FaChevronRight className="text-[10px]" />
              </button>
            </div>
          </div>
        </div>

        {/* BARU: Modal Add Orders (mirip pola Customers) */}
        {showAddForm ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <div className="absolute inset-0" onClick={() => setShowAddForm(false)} />
            <form onSubmit={handleAddOrder} className="relative z-10 w-full max-w-3xl overflow-hidden rounded-[2.5rem] bg-white shadow-2xl">
              <div className="flex items-center justify-between px-10 py-8 border-b border-slate-50">
                <div>
                  <h3 className="text-2xl font-black text-slate-800 tracking-tight">Create New Order</h3>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Please fill in the order details</p>
                </div>
                <button type="button" onClick={() => setShowAddForm(false)} className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:text-red-500 transition-all"><FaTimes /></button>
              </div>

              <div className="bg-[#f8fafc] px-10 py-10 grid gap-6 sm:grid-cols-2">
                {[ // BARU
                  { label: "Order ID", key: "orderId", type: "text", placeholder: "ORD-100" },
                  { label: "Customer Name", key: "customerName", type: "text", placeholder: "Input customer name..." },
                  { label: "Total Price", key: "totalPrice", type: "number", placeholder: "100000" },
                  { label: "Order Date", key: "orderDate", type: "date", placeholder: "" },
                ].map((field) => (
                  <div key={field.key} className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase ml-1 tracking-wider">{field.label}</label>
                    <input
                      required
                      type={field.type}
                      placeholder={field.placeholder}
                      value={newOrder[field.key]}
                      onChange={(e) => setNewOrder((prev) => ({ ...prev, [field.key]: e.target.value }))}
                      className="w-full rounded-2xl border-2 border-slate-100 bg-white px-5 py-3.5 text-sm font-bold text-slate-600 focus:border-[#557C56] outline-none shadow-sm transition-all" // MODIF
                    />
                  </div>
                ))}

                <div className="sm:col-span-2 space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase ml-1 tracking-wider">Status</label>
                  <select
                    value={newOrder.status}
                    onChange={(e) => setNewOrder((prev) => ({ ...prev, status: e.target.value }))}
                    className="w-full rounded-2xl border-2 border-slate-100 bg-white px-5 py-3.5 text-sm font-bold text-slate-600 focus:border-[#557C56] outline-none cursor-pointer shadow-sm appearance-none" // MODIF
                  >
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-end gap-6 px-10 py-8 bg-white border-t border-slate-50">
                <button type="button" onClick={() => setShowAddForm(false)} className="text-xs font-black text-slate-400 uppercase tracking-widest hover:text-slate-600">Discard</button>
                <button type="submit" className="rounded-2xl bg-[#557C56] px-12 py-4 text-xs font-black text-white uppercase tracking-[0.2em] shadow-xl hover:bg-[#466847] transition-all active:scale-95">Confirm Order</button> {/* MODIF */}
              </div>
            </form>
          </div>
        ) : null}
    </div>
  );
}