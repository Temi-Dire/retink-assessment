import { useState } from "react";
import { motion as m } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const pageAnimation = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, 0.01, 0.9],
        delay: 0.5,
      },
    },
  };

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        if (userCredential) {
          navigate("/");
        }
      }
    );
  };

  return (
    <>
      <m.div
        variants={pageAnimation}
        initial="hidden"
        animate="visible"
        className="min-h-screen flex items-center justify-center bg-gray-100"
      >
        <div className="bg-white p-8 rounded shadow-lg w-80">
          <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:border-purple-500 focus:outline-none focus:ring focus:ring-purple-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:border-purple-500 focus:outline-none focus:ring focus:ring-purple-200"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
              <button
                type="button"
                className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
                onClick={() => navigate("/")}
              >
                Back
              </button>
            </div>
          </form>
        </div>
      </m.div>
    </>
  );
};

export default Login;
