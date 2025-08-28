// "use client";

// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// export default function LoginModal({ onClose }) {
//   const [rememberMe, setRememberMe] = useState(true);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({ email: "", password: "" });
//   const router = useRouter();

//   const validate = () => {
//     let valid = true;
//     let newErrors = { email: "", password: "" };

//     if (!email) {
//       newErrors.email = "Email is required.";
//       valid = false;
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       newErrors.email = "Email is invalid.";
//       valid = false;
//     }

//     if (!password) {
//       newErrors.password = "Password is required.";
//       valid = false;
//     } else if (password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters.";
//       valid = false;
//     }

//     setErrors(newErrors);
//     return valid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//        router.push('/');
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(82,93,101,0.6)]">
//       <div className="relative w-full max-w-md bg-white rounded-xl shadow-lg p-6">
//         <button
//           className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
//           onClick={onClose}
//         >
//           &times;
//         </button>

//         <h2 className="text-xl font-semibold text-center mb-1">
//           Welcome back to <span className="text-[#115D8E] font-bold">Deenita India</span>
//         </h2>
//         <p className="text-center text-gray-500 text-sm mb-6">
//           Your data stays protected while you stay connected.
//         </p>

//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <div className="relative w-full">
//             <label
//               htmlFor="email"
//               className="absolute font-semibold left-4 top-2 text-sm text-[#115D8E] pointer-events-none"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="email@company.com"
//               className="w-full pt-6 pb-2 px-4 border-2 border-gray-200 text-gray-900 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#115D8E] focus:shadow-[0_4px_30px_rgba(138,173,187)]"
//             />
//             {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//           </div>

//           <div className="relative w-full">
//             <label
//               htmlFor="password"
//               className="absolute left-4 top-2 text-sm font-semibold text-[#115D8E] pointer-events-none"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="*************"
//               className="w-full pt-6 pb-2 px-4 text-gray-900 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#115D8E]  focus:shadow-[0_0_6px_2px_rgba(17,93,142,0.4)]"
//             />
//             {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
//           </div>

//           <Link href="/" className="text-[#115D8E] text-sm font-semibold hover:underline">
//             Forget password?
//           </Link>

//           <div className="flex justify-between gap-2 mt-1">
//             <span className="text-gray-700 text-sm">Remember sign in details</span>
//             <button
//               type="button"
//               onClick={() => setRememberMe(!rememberMe)}
//               className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors duration-300 ${rememberMe ? 'bg-[#115D8E]' : 'bg-gray-300'}`}
//             >
//               <div
//                 className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${rememberMe ? 'translate-x-5' : 'translate-x-0'}`}
//               />
//             </button>
//           </div>

//           <button
//             type="submit"
//             className="w-full py-2 rounded-4xl text-white font-semibold bg-gradient-to-r from-[#777777] to-[#115D8E] hover:opacity-90 transition"
//           >
//             Log in
//           </button>
//         </form>

//         <div className="my-4 flex items-center justify-center">
//           <div className="border-t w-1/3 border-gray-300" />
//           <span className="px-2 text-sm text-gray-400">OR</span>
//           <div className="border-t w-1/3 border-gray-300" />
//         </div>

//         <button className="w-full py-2 rounded-lg bg-gray-100 text-gray-800 font-medium hover:bg-gray-200 transition">
//           Continue with Google
//         </button>

//         <p className="text-center text-sm mt-4 text-gray-600">
//           Don’t have an account?{" "}
//           <Link href="#" className="text-[#115D8E] font-semibold hover:underline">Sign up</Link>
//         </p>
//       </div>
//     </div>
//   );
// }



"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function LoginModal({ onClose }) {
  const [rememberMe, setRememberMe] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const validate = () => {
    let valid = true;
    let newErrors = { email: "", password: "" };

    if (!email) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid.";
      valid = false;
    }

    if (!password) {
      newErrors.password = "Password is required.";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      router.push('/');
    }
  };

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(82,93,101,0.6)] backdrop-blur-sm transition-opacity duration-300">
      <div 
        className="relative w-full max-w-md bg-white rounded-2xl shadow-xl p-6 mx-4 transform transition-all duration-300 scale-100 opacity-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl transition-colors duration-200 w-8 h-8 flex items-center cursor-pointer justify-center rounded-full hover:bg-gray-200"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            Welcome back to <span className="text-[#115D8E]">Deenita India</span>
          </h2>
          <p className="text-gray-500 text-sm">
            Your data stays protected while you stay connected.
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <div className="relative">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`block px-4 pt-5 pb-2 w-full text-gray-900 bg-transparent rounded-lg border-2 appearance-none focus:outline-none focus:ring-0 peer ${errors.email ? 'border-red-500' : 'border-gray-200 focus:border-[#115D8E]'}`}
                placeholder=" "
              />
              <label 
                htmlFor="email"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-[#115D8E] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
              >
                Email
              </label>
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <div className="relative">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`block px-4 pt-5 pb-2 w-full text-gray-900 bg-transparent rounded-lg border-2 appearance-none focus:outline-none focus:ring-0 peer ${errors.password ? 'border-red-500' : 'border-gray-200 focus:border-[#115D8E]'}`}
                placeholder=" "
              />
              <label 
                htmlFor="password" 
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-[#115D8E] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
              >
                Password
              </label>
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>{errors.password}</p>}
          </div>

          <div className="flex justify-between items-center">
            <Link href="/" className="text-[#115D8E] text-sm font-medium hover:underline transition-all duration-200">
              Forgot password?
            </Link>
            
            <div className="flex items-center gap-2">
              <span className="text-gray-700 text-sm">Remember me</span>
              <button
                type="button"
                onClick={() => setRememberMe(!rememberMe)}
                className={`relative inline-flex h-5 w-10 cursor-pointer items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#115D8E] focus:ring-offset-2 ${rememberMe ? 'bg-[#115D8E]' : 'bg-gray-300'}`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${rememberMe ? 'translate-x-5' : 'translate-x-1'}`}
                />
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl text-white font-semibold cursor-pointer bg-gradient-to-r from-[#777777] to-[#115D8E] hover:opacity-90 transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
          >
            Log in
          </button>
        </form>

        <div className="my-6 flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-sm text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <button className="w-full py-3 cursor-pointer rounded-xl border border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md">
          <svg className="w-5 h-5" viewBox="0 0 24 24" width="24" height="24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continue with Google
        </button>

        <p className="text-center text-sm mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link href="#" className="text-[#115D8E] font-semibold hover:underline transition-all duration-200">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}