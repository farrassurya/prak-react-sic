import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import products from "../products.json";

export default function FiturXYZ() {
  return (
    <div className="w-full pl-0 pr-6 pb-10 antialiased">
      <PageHeader title="Fitur XYZ" breadcrumb={["Management", "Fitur XYZ"]} />

      <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-emerald-600 text-white border-b border-emerald-700">
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.15em]">#</th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.15em]">Name</th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.15em]">Code</th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.15em]">Category</th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.15em]">Brand</th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.15em]">Price</th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.15em]">Stock</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {products.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/40 transition-colors">
                  <td className="px-8 py-5 text-[13px] font-bold text-[#334155]">{item.id}</td>
                  <td className="px-8 py-5 text-[13px] font-semibold text-slate-600">
                    <Link to={`/products/${item.id}`} className="text-emerald-400 hover:text-emerald-500">
                      {item.title}
                    </Link>
                  </td>
                  <td className="px-8 py-5 text-[13px] font-medium text-slate-500">{item.code}</td>
                  <td className="px-8 py-5 text-[13px] font-medium text-slate-500">{item.category}</td>
                  <td className="px-8 py-5 text-[13px] font-medium text-slate-500">{item.brand}</td>
                  <td className="px-8 py-5 text-[13px] font-bold text-slate-600">{item.price}</td>
                  <td className="px-8 py-5 text-[13px] font-bold text-slate-600">{item.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}