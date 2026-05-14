import { FaPlus, FaHome, FaClipboardList, FaBox, FaUsers, FaExclamationCircle } from "react-icons/fa"; // MODIFIED
import { NavLink } from "react-router-dom"; // MODIFIED

// NEW: Pindahkan dari /layouts
export default function Sidebar() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4  space-x-2
        ${
          isActive
            ? "text-hijau bg-green-200 font-extrabold"
            : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
        }`;
        
  return (
    <div
      id="sidebar"
      className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg"
    >
      {/* Logo */}
      <div id="sidebar-logo" className="flex flex-col">
        <span
          id="logo-title"
          className="font-poppins text-[48px] text-gray-900"
        >
          Sedap{" "}
          <b id="logo-dot" className="text-hijau">
            .
          </b>
        </span>
        <span id="logo-subtitle" className="font-semibold text-gray-400">
          Modern Admin Dashboard
        </span>
      </div>

      {/* List Menu */}
      <div id="sidebar-menu" className="mt-10">
        <ul id="menu-list" className="space-y-3">
          <li>
            <NavLink to="/" id="menu-1" className={menuClass}>
              <FaHome className="text-xl" />{" "}
              {/* Icon Home ditambahkan di sini */}
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/orders" id="menu-2" className={menuClass}>
              <FaClipboardList className="text-xl" /> {/* Icon Orders */}
              <span>Orders</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/customers" id="menu-3" className={menuClass}>
              <FaUsers className="text-xl" /> {/* Icon Customers */}
              <span>Customers</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" id="menu-4" className={menuClass}>
              <FaBox className="text-xl" />
              <span>Products</span>
            </NavLink>
          </li>

          {/* UPDATED: Visual separator between main menu and error menu */}
          <li className="pt-2">
            <div className="border-t border-gray-200" />
            <span className="mt-3 block px-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
              Error Pages
            </span>
          </li>

          {/* NEW: Error pages navigation */}
          <li>
            <NavLink to="/error/400" id="menu-5" className={menuClass}>
              <FaExclamationCircle className="text-xl" />
              <span>Error 400</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/error/401" id="menu-6" className={menuClass}>
              <FaExclamationCircle className="text-xl" />
              <span>Error 401</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/error/403" id="menu-7" className={menuClass}>
              <FaExclamationCircle className="text-xl" />
              <span>Error 403</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div id="sidebar-footer" className="mt-auto">
        <div
          id="footer-card"
          className="bg-hijau px-4 py-2 rounded-md shadow-lg mb-10 flex items-center"
        >
          <div id="footer-text" className="text-white text-sm">
            <span>Please organize your menus through button below!</span>
            <div
              id="add-menu-button"
              className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2"
            >
              <FaPlus className="text-gray-600" />
              <span className="text-gray-600 flex items-center">Add Menus</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
