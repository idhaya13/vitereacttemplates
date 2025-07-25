import { useState } from "react";
import bgImage from "../assets/bg2.jpg";
import { motion } from "framer-motion";

function RegisterPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1,  y: 0 }}
        transition={{
              type: "spring",
              stiffness: 30,
              damping: 17
                          }} 
        className="bg-white/0.2 backdrop-blur-4xl rounded-2xl border border-white/30 shadow-[0_0_30px_rgba(0,0,0,0.5)] w-full max-w-md p-8 m-4"
      >
        <div className="flex justify-between mb-6 bg-white/10 rounded-lg overflow-hidden">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 font-semibold transition ${
              isLogin
                ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                : "text-gray-300 hover:bg-white/10"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 font-semibold transition ${
              !isLogin
                ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                : "text-gray-300 hover:bg-white/10"
            }`}
          >
            Sign Up
          </button>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-center text-gray-300">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h2>

        <form className="flex flex-col space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Name"
              className="bg-white/10 text-gray-100 placeholder-gray-400 border border-white/20 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="bg-white/10 text-gray-100 placeholder-gray-400 border border-white/20 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-white/10 text-gray-100 placeholder-gray-400 border border-white/20 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg hover:opacity-90 transition"
          >
            {isLogin ? "Sign In" : "Sign Up"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default RegisterPage;
