"use client";

import { useState } from "react";
import { X } from "lucide-react";


export default function LoginModal({ onClose }) {
  const [rememberMe, setRememberMe] = useState(true);

  return (
     <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-sm p-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <h2 className="text-xl font-semibold text-center mb-1">
          Welcome back to <span className="text-blue-600 font-bold">Deenita India</span>
        </h2>
        <p className="text-center text-gray-500 text-sm mb-6">
          Your data stays protected while you stay connected.
        </p>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
            <input
              type="email"
              placeholder="email@company.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
            <input
              type="password"
              placeholder="*************"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <a href="#" className="text-blue-600 hover:underline">Forget password ?</a>
            <label className="flex items-center gap-2 text-gray-700">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="form-checkbox accent-blue-500"
              />
              Rember sign in details
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-gray-600 to-blue-600 hover:opacity-90 transition"
          >
            Log in
          </button>
        </form>

        <div className="my-4 flex items-center justify-center">
          <div className="border-t w-1/3 border-gray-300" />
          <span className="px-2 text-sm text-gray-400">OR</span>
          <div className="border-t w-1/3 border-gray-300" />
        </div>

        <button className="w-full py-2 rounded-lg bg-gray-100 text-gray-800 font-medium hover:bg-gray-200 transition">
          Continue with Google
        </button>

        <p className="text-center text-sm mt-4 text-gray-600">
          Don’t have an account? <a href="#" className="text-blue-600 font-semibold hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
}
