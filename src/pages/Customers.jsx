import { useEffect, useState } from "react"; // MODIF
import { useOutletContext } from "react-router-dom"; // NEW: Import useOutletContext
import { FaUsers, FaPlus, FaSearch, FaEnvelope, FaPhone, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

const initialCustomers = [
  { customerId: "CUST-001", customerName: "Andi Pratama", email: "andi.pratama@mail.com", phone: "081200000001", loyalty: "Gold" },
  { customerId: "CUST-002", customerName: "Budi Santoso", email: "budi.santoso@mail.com", phone: "081200000002", loyalty: "Silver" },
  { customerId: "CUST-003", customerName: "Citra Lestari", email: "citra.lestari@mail.com", phone: "081200000003", loyalty: "Bronze" },
  { customerId: "CUST-004", customerName: "Dewi Anjani", email: "m.anjani@mail.com", phone: "081200000004", loyalty: "Gold" },
  { customerId: "CUST-005", customerName: "Eko Saputra", email: "eko.saputra@mail.com", phone: "081200000005", loyalty: "Silver" },
  { customerId: "CUST-006", customerName: "Fajar Ramadhan", email: "fajar.ramadhan@mail.com", phone: "081200000006", loyalty: "Bronze" },
  { customerId: "CUST-007", customerName: "Gita Maharani", email: "gita.maharani@mail.com", phone: "081200000007", loyalty: "Gold" },
  { customerId: "CUST-008", customerName: "Hadi Wijaya", email: "hadi.wijaya@mail.com", phone: "081200000008", loyalty: "Silver" },
  { customerId: "CUST-009", customerName: "Intan Permata", email: "intan.permata@mail.com", phone: "081200000009", loyalty: "Bronze" },
  { customerId: "CUST-010", customerName: "Joko Susilo", email: "joko.susilo@mail.com", phone: "081200000010", loyalty: "Gold" },
  { customerId: "CUST-011", customerName: "Kiki Amelia", email: "kiki.amelia@mail.com", phone: "081200000011", loyalty: "Silver" },
  { customerId: "CUST-012", customerName: "Lina Marlina", email: "lina.marlina@mail.com", phone: "081200000012", loyalty: "Bronze" },
  { customerId: "CUST-013", customerName: "Mira Oktavia", email: "mira.oktavia@mail.com", phone: "081200000013", loyalty: "Gold" },
  { customerId: "CUST-014", customerName: "Nanda Saputri", email: "nanda.saputri@mail.com", phone: "081200000014", loyalty: "Silver" },
  { customerId: "CUST-015", customerName: "Oka Prasetyo", email: "oka.prasetyo@mail.com", phone: "081200000015", loyalty: "Bronze" },
  { customerId: "CUST-016", customerName: "Putri Ayu", email: "putri.ayu@mail.com", phone: "081200000016", loyalty: "Gold" },
  { customerId: "CUST-017", customerName: "Qori Ahmad", email: "qori.ahmad@mail.com", phone: "081200000017", loyalty: "Silver" },
  { customerId: "CUST-018", customerName: "Rina Agustina", email: "rina.agustina@mail.com", phone: "081200000018", loyalty: "Bronze" },
  { customerId: "CUST-019", customerName: "Sandi Nugraha", email: "sandi.nugraha@mail.com", phone: "081200000019", loyalty: "Gold" },
  { customerId: "CUST-020", customerName: "Tia Larasati", email: "tia.larasati@mail.com", phone: "081200000020", loyalty: "Silver" },
  { customerId: "CUST-021", customerName: "Umar Faruq", email: "umar.faruq@mail.com", phone: "081200000021", loyalty: "Bronze" },
  { customerId: "CUST-022", customerName: "Vina Rahma", email: "vina.rahma@mail.com", phone: "081200000022", loyalty: "Gold" },
  { customerId: "CUST-023", customerName: "Wawan Setiawan", email: "wawan.setiawan@mail.com", phone: "081200000023", loyalty: "Silver" },
  { customerId: "CUST-024", customerName: "Xenia Putri", email: "xenia.putri@mail.com", phone: "081200000024", loyalty: "Bronze" },
  { customerId: "CUST-025", customerName: "Yudi Kurniawan", email: "yudi.kurniawan@mail.com", phone: "081200000025", loyalty: "Gold" },
  { customerId: "CUST-026", customerName: "Zahra Nabila", email: "zahra.nabila@mail.com", phone: "081200000026", loyalty: "Silver" },
  { customerId: "CUST-027", customerName: "Aditia Mahendra", email: "aditia.mahendra@mail.com", phone: "081200000027", loyalty: "Bronze" },
  { customerId: "CUST-028", customerName: "Bella Savitri", email: "bella.savitri@mail.com", phone: "081200000028", loyalty: "Gold" },
  { customerId: "CUST-029", customerName: "Cahya Wulandari", email: "cahya.wulandari@mail.com", phone: "081200000029", loyalty: "Silver" },
  { customerId: "CUST-030", customerName: "Dimas Sapto", email: "dimas.sapto@mail.com", phone: "081200000030", loyalty: "Bronze" },
];

const CUSTOMERS_STORAGE_KEY = "customersData"; // BARU

export default function Customers() { // UPDATED: Hapus searchTerm parameter
  // NEW: Ambil searchQuery dari Outlet context
  const { searchQuery } = useOutletContext();
  const [customers, setCustomers] = useState(() => {
    // BARU: Ambil data customer tersimpan agar tidak hilang saat pindah halaman
    const savedCustomers = localStorage.getItem(CUSTOMERS_STORAGE_KEY);
    return savedCustomers ? JSON.parse(savedCustomers) : initialCustomers;
  });
  const [showAddForm, setShowAddForm] = useState(false);
  
  // LOGIC PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; 

  const filteredCustomers = customers.filter((customer) => {
    const keyword = (searchQuery || "").toLowerCase(); // UPDATED: searchTerm -> searchQuery
    return (
      customer.customerName.toLowerCase().includes(keyword) ||
      customer.email.toLowerCase().includes(keyword)
    );
  });

  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = filteredCustomers.slice(startIndex, startIndex + itemsPerPage);

  const [newCustomer, setNewCustomer] = useState({
    customerId: "", customerName: "", email: "", phone: "", loyalty: "Bronze",
  });

  const loyaltyStyles = {
    Bronze: "bg-[#78350f]/10 text-[#78350f] border-[#78350f]/20", // Brown (Coklat Kayu)
    Silver: "bg-[#475569]/10 text-[#475569] border-[#475569]/20", // Silver Slate
    Gold: "bg-[#a16207]/10 text-[#a16207] border-[#a16207]/20",   // Dark Gold
  };

  const handleAddCustomer = (event) => {
    event.preventDefault();

    // MODIF: Tambah data baru di urutan paling bawah
    setCustomers((prev) => {
      const updatedCustomers = [...prev, newCustomer];

      // MODIF: Pindah ke halaman terakhir agar data baru langsung terlihat
      setCurrentPage(Math.ceil(updatedCustomers.length / itemsPerPage));

      return updatedCustomers;
    });

    setShowAddForm(false);
    setNewCustomer({ customerId: "", customerName: "", email: "", phone: "", loyalty: "Bronze" });
  };

  // BARU: Simpan data customer ke localStorage setiap ada perubahan
  useEffect(() => {
    localStorage.setItem(CUSTOMERS_STORAGE_KEY, JSON.stringify(customers));
  }, [customers]);

  return (
    <div className="w-full pl-0 pr-6 pb-10 antialiased">
      <PageHeader title="Customer Directory" breadcrumb={["Management", "Customers"]}>
        <button
          className="flex items-center gap-2 bg-[#557C56] text-white px-6 py-2.5 rounded-xl font-bold shadow-lg hover:bg-[#466847] transition-all active:scale-95" // MODIF
          onClick={() => setShowAddForm(true)}
        >
          <FaPlus className="text-[10px]" />
          Add New Member
        </button>
      </PageHeader>

      {/* Info Card - Sage Theme dengan revisi teks lebih cantik */}
      <div className="relative overflow-hidden mb-8 rounded-[2rem] bg-gradient-to-r from-[#557C56] to-[#466847] p-8 text-white shadow-xl shadow-slate-100">
        <div className="absolute right-[-20px] top-[-20px] h-32 w-32 rounded-full bg-white/10 blur-2xl"></div>
        <div className="relative flex items-center gap-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-inner">
            <FaUsers className="text-2xl text-white" />
          </div>
          <div>
            <p className="text-xs font-bold text-white/70 uppercase tracking-[0.2em] mb-1">Customer Database</p>
            <div className="flex items-baseline gap-2">
               <h2 className="text-5xl font-black tracking-tighter">{customers.length}</h2>
               <span className="text-sm font-medium text-white/60">Registered Members</span>
            </div>
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 text-slate-400 border-b border-slate-50">
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.15em]">Profile</th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.15em]">Contact Info</th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.15em] text-center">Membership</th>
                <th className="px-8 py-6"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {currentData.map((customer) => (
                <tr key={customer.customerId} className="hover:bg-slate-50/40 transition-colors group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-400 font-bold text-xs group-hover:bg-[#557C56] group-hover:text-white transition-all shadow-sm">
                        {customer.customerName.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-[#334155] text-[15px]">{customer.customerName}</p>
                        <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{customer.customerId}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="space-y-1 text-[13px] font-medium text-slate-500">
                      <div className="flex items-center gap-2"> <FaEnvelope className="text-[10px] text-slate-300" /> {customer.email} </div>
                      <div className="flex items-center gap-2"> <FaPhone className="text-[10px] text-slate-300" /> {customer.phone} </div>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-center">
                    <span className={`inline-flex px-4 py-1.5 rounded-xl text-[10px] font-black border uppercase tracking-wider ${loyaltyStyles[customer.loyalty]}`}>
                      {customer.loyalty}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right"><button className="text-slate-200 hover:text-slate-400 transition-colors">•••</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGINATION UI */}
        <div className="flex items-center justify-between px-8 py-6 border-t border-slate-50 bg-white">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
            Page {currentPage} of {totalPages}
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
                    ? "bg-[#557C56] text-white shadow-md shadow-slate-200" 
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

      {/* Modal - Struktur Tetap, Visual Diperhalus */}
      {showAddForm ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="absolute inset-0" onClick={() => setShowAddForm(false)} />
          <form onSubmit={handleAddCustomer} className="relative z-10 w-full max-w-3xl overflow-hidden rounded-[2.5rem] bg-white shadow-2xl">
            <div className="flex items-center justify-between px-10 py-8 border-b border-slate-50">
              <div>
                <h3 className="text-2xl font-black text-slate-800 tracking-tight">Register New Identity</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Please fill in the member data accurately</p>
              </div>
              <button type="button" onClick={() => setShowAddForm(false)} className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:text-red-500 transition-all"><FaTimes /></button>
            </div>
            
            <div className="bg-[#f8fafc] px-10 py-10 grid gap-6 sm:grid-cols-2">
              {[
                { label: "Identity ID", key: "customerId", type: "text", placeholder: "CUST-100" },
                { label: "Full Name", key: "customerName", type: "text", placeholder: "Input name..." },
                { label: "Active Email", key: "email", type: "email", placeholder: "email@domain.com" },
                { label: "Phone Connection", key: "phone", type: "text", placeholder: "08..." }
              ].map((field) => (
                <div key={field.key} className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase ml-1 tracking-wider">{field.label}</label>
                  <input
                    required
                    type={field.type}
                    placeholder={field.placeholder}
                    value={newCustomer[field.key]}
                    onChange={(e) => setNewCustomer(prev => ({...prev, [field.key]: e.target.value}))}
                    className="w-full rounded-2xl border-2 border-slate-100 bg-white px-5 py-3.5 text-sm font-bold text-slate-600 focus:border-[#557C56] outline-none shadow-sm transition-all"
                  />
                </div>
              ))}
              <div className="sm:col-span-2 space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase ml-1 tracking-wider">Membership Level</label>
                <select
                  value={newCustomer.loyalty}
                  onChange={(e) => setNewCustomer(prev => ({...prev, loyalty: e.target.value}))}
                  className="w-full rounded-2xl border-2 border-slate-100 bg-white px-5 py-3.5 text-sm font-bold text-slate-600 focus:border-[#557C56] outline-none cursor-pointer shadow-sm appearance-none"
                >
                  <option value="Bronze">Bronze (Member)</option>
                  <option value="Silver">Silver (Pro)</option>
                  <option value="Gold">Gold (VIP)</option>
                </select>
              </div>
            </div>

            <div className="flex items-center justify-end gap-6 px-10 py-8 bg-white border-t border-slate-50">
              <button type="button" onClick={() => setShowAddForm(false)} className="text-xs font-black text-slate-400 uppercase tracking-widest hover:text-slate-600">Discard</button>
              <button type="submit" className="rounded-2xl bg-[#557C56] px-12 py-4 text-xs font-black text-white uppercase tracking-[0.2em] shadow-xl hover:bg-[#466847] transition-all active:scale-95">Confirm Member</button> {/* MODIF */}
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
}