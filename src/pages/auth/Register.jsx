import { useState } from "react";
import { useNavigate } from "react-router-dom";

// NEW: Halaman Register
export default function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dataForm, setDataForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // NEW: Validasi password match
    if (dataForm.password !== dataForm.confirmPassword) {
      setError("Password does not match");
      return;
    }

    setLoading(true);
    setError("");

    // NEW: Simulasi register (dalam kenyataan perlu endpoint backend)
    setTimeout(() => {
      setLoading(false);
      navigate("/login");
    }, 1500);
  };

  const errorInfo = error && (
    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
      {error}
    </div>
  );

  const loadingInfo = loading && (
    <div className="mb-4 p-3 bg-blue-100 border border-blue-400 text-blue-700 rounded-md">
      Processing...
    </div>
  );

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        Create Account 🚀
      </h2>

      {errorInfo}

      {loadingInfo}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={dataForm.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-hijau"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={dataForm.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-hijau"
            required
          />
        </div>

        <div className="mb-4">
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

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={dataForm.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-hijau"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-hijau text-white py-2 rounded-lg font-semibold hover:bg-green-600 disabled:opacity-50"
        >
          {loading ? "Creating Account..." : "Register"}
        </button>
      </form>

      <p className="text-center text-gray-600 mt-4">
        Already have an account?{" "}
        <a href="/login" className="text-hijau font-semibold hover:underline">
          Login here
        </a>
      </p>
    </div>
  );
}
