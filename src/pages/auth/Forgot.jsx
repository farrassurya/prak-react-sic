import { useState } from "react";
import { useNavigate } from "react-router-dom";

// NEW: Halaman Forgot Password
export default function Forgot() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (evt) => {
    setEmail(evt.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    // NEW: Simulasi reset password (dalam kenyataan perlu endpoint backend)
    setTimeout(() => {
      setLoading(false);
      setSuccess(`Password reset link sent to ${email}`);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }, 1500);
  };

  const errorInfo = error && (
    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
      {error}
    </div>
  );

  const successInfo = success && (
    <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md">
      {success}
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
        Forgot Password 🔐
      </h2>

      <p className="text-center text-gray-600 mb-6">
        Enter your email address and we'll send you a link to reset your password
      </p>

      {errorInfo}

      {successInfo}

      {loadingInfo}

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-hijau"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-hijau text-white py-2 rounded-lg font-semibold hover:bg-green-600 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
      </form>

      <p className="text-center text-gray-600 mt-4">
        Remember your password?{" "}
        <a href="/login" className="text-hijau font-semibold hover:underline">
          Login here
        </a>
      </p>
    </div>
  );
}
