import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// NEW: Halaman Login
export default function Login() {
  /* navigate, state & handleChange */
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  /* process form */
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(false); // MODIFIED: Sesuai modul (gunakan false seperti contoh modul)

    // MODIFIED: Sesuai modul - gunakan endpoint /user/login
    axios
      .post("https://dummyjson.com/user/login", {
        username: dataForm.email,
        password: dataForm.password,
      })
      .then((response) => {
        // Jika status bukan 200, tampilkan pesan error
        if (response.status !== 200) {
          setError(response.data.message);
          return;
        }

        // Redirect ke dashboard jika login sukses
        navigate("/");
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.message || "An error occurred");
        } else {
          setError(err.message || "An unknown error occurred");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // NEW: Variable untuk mengontrol tampilan error
  const errorInfo = error && (
    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
      {error}
    </div>
  );

  // NEW: Variable untuk mengontrol tampilan loading
  const loadingInfo = loading && (
    <div className="mb-4 p-3 bg-blue-100 border border-blue-400 text-blue-700 rounded-md">
      Processing...
    </div>
  );
  
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        Welcome Back 👋
      </h2>

      {errorInfo}

      {loadingInfo}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="text"
            name="email"
            value={dataForm.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-hijau"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={dataForm.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-hijau"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-hijau text-white py-2 rounded-lg font-semibold hover:bg-green-600 disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p className="text-center text-gray-600 mt-4">
        Don't have an account?{" "}
        <a href="/register" className="text-hijau font-semibold hover:underline">
          Register here
        </a>
      </p>
    </div>
  );
}
