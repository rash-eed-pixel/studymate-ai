import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { register } from "../services/authService";
import { useAuth } from "../context/AuthContext";

const Register = () => {

  const navigate = useNavigate();

  const { user } = useAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  if (user) {

    return <Navigate to="/dashboard" replace />;

  }

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (password !== confirmPassword) {

      return setError("Passwords do not match.");

    }

    setLoading(true);

    setError("");

    try {

      await register(email, password);

      navigate("/dashboard");

    } catch (err) {

      setError(err.message.replace("Firebase:", ""));

    }

    setLoading(false);

  };

  return (

    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">

      <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl">

        <h1 className="mb-2 text-3xl font-bold">

          Create Account 🚀

        </h1>

        <p className="mb-8 text-slate-500">

          Join StudyMate AI today.

        </p>

        {error && (

          <div className="mb-5 rounded-lg bg-red-100 p-3 text-red-600">

            {error}

          </div>

        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl border p-4 outline-none focus:border-blue-600"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border p-4 outline-none focus:border-blue-600"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full rounded-xl border p-4 outline-none focus:border-blue-600"
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
            required
          />

          <button
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 p-4 font-semibold text-white transition hover:bg-blue-700"
          >

            {loading ? "Creating Account..." : "Register"}

          </button>

        </form>

        <p className="mt-8 text-center text-slate-500">

          Already have an account?

          <Link
            to="/login"
            className="ml-2 font-semibold text-blue-600"
          >

            Login

          </Link>

        </p>

      </div>

    </div>

  );

};

export default Register;