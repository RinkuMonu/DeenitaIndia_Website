"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { MdArrowOutward, MdClose } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

// Thank You Modal Component
const ThankYouModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative bg-[#eaedee] rounded-2xl max-w-md w-full p-8 animate-scaleIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <MdClose size={24} />
        </button>

        {/* Content */}
        <div className="text-center">
          <div className=" bg-[#eaedee] rounded-full flex items-center justify-center mx-auto mb-6">
            <img
              src="/Image/tq.gif"
              alt="Thank you animation"
              className="h-50"
            />
          </div>

          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Message Sent Successfully!
          </h3>
          <p className="text-gray-600 mb-6 text-[15px] font-[400]">
            Thank you for reaching out to us. Our team will get back to you
            within 24 hours.
          </p>

          <div className="bg-#115D8E-50 rounded-lg p-4 mb-6 flex items-start">
            <VscWorkspaceTrusted className="text-[#115d8e] mt-0.5 mr-3 flex-shrink-0" />
            <p className="text-[#2671a3] text-sm">
              In the meantime, check out our services page to learn more about
              what we offer.
            </p>
          </div>

          {/* <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-[#115d8e] text-white rounded-lg font-medium hover:bg-[#0a3e61] transition-colors cursor-pointer"
            >
              Continue Browsing
            </button>
            <Link
              href="/services/switch"
              className="px-6 py-2 border border-[#115d8e] text-[#115d8e] rounded-lg font-medium hover:bg-blue-50 transition-colors inline-flex items-center justify-center cursor-pointer"
            >
              Explore Services
              <MdArrowOutward className="ml-2" />
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    message: "",
    agreedToTerms: false,
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    mobile: "",
    message: "",
    agreedToTerms: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateName = (value) => {
    if (!value) return "Please fill this field";
    if (!/^[A-Za-z\s]+$/.test(value)) return "Only letters are allowed";
    return "";
  };

  const validateMobile = (value) => {
    if (!value) return "Please fill this field";
    if (!/^\d+$/.test(value)) return "Only numbers are allowed";
    if (value.length !== 10) return "Must be 10 digits";
    if (!/^[6-9]/.test(value))
      return "Mobile number must start with 7, 8, or 9";
    return "";
  };

  const validate = (data) => {
    const newErrors = {
      fullName: validateName(data.fullName),
      email: "",
      mobile: validateMobile(data.mobile),
      message: data.message ? "" : "Please fill this field",
      agreedToTerms: data.agreedToTerms ? "" : "You must agree to the terms",
    };

    if (!data.email) newErrors.email = "Please fill this field";
    else if (!/^\S+@\S+\.\S+$/.test(data.email))
      newErrors.email = "Enter a valid email";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);

    const newErrors = validate(formData);
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((v) => v !== "");
    if (hasErrors) {
      setIsSubmitting(false);
      return;
    }

    const payload = {
      website_id: 2,
      name: formData.fullName,
      email: formData.email,
      phone: formData.mobile, // API expects `phone`
      message: formData.message,
      service: "N/A",
    };

    try {
      const response = await axios.post(
        "https://cms.sevenunique.com/apis/contact-query/set-contact-details.php",
        payload,
        { headers: { Authorization: "Bearer jibhfiugh84t3324fefei#*fef" } }
      );

      if (response.status === 200) {
        setShowThankYouModal(true);
        setFormData({
          fullName: "",
          email: "",
          mobile: "",
          message: "",
          agreedToTerms: false,
        });
      } else {
        setIsError(true);
      }
    } catch (err) {
      console.error(err);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  function scrollDown50vh() {
    const scrollAmount = window.innerHeight * 0.8;
    window.scrollBy({
      top: scrollAmount,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <ThankYouModal
        isOpen={showThankYouModal}
        onClose={() => setShowThankYouModal(false)}
      />

      <section className="px-4 sm:px-14">
        <section className="pt-20 md:pt-32 relative before:content-[''] before:absolute before:inset-0 before:backdrop-blur-[100px] before:z-[-1] z-1 px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 bg-[#E6F0F9] rounded-2xl p-8 md:p-12 gap-8 overflow-hidden">
            <div className="flex flex-col justify-center space-y-6 z-10">
              <span className="inline-block bg-gradient-to-r from-[#777777] to-[#115D8E] text-white shadow-lg px-4 py-2 rounded-full text-sm font-medium w-fit">
                Contact us anytime
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0B4870] leading-tight">
                Reach out to us we&apos;re just a message away
              </h1>
              <p className="text-gray-600 text-lg">
                We&apos;re here to answer your questions and provide the support
                you need.
              </p>
              <div className="flex gap-4">
                <button
                  className="inline-flex items-center gap-2 bg-[#115D8E] hover:bg-[#0B4870] text-white font-medium text-base px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
                  onClick={scrollDown50vh}
                >
                  Connect With Us
                  <MdArrowOutward className="text-lg" />
                </button>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center relative">
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#115D8E] opacity-10 rounded-full"></div>
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-[#0B4870] opacity-10 rounded-full"></div>
              <Image
                src="/Image/contact-banner-img.png"
                alt="Blog Preview"
                width={400}
                height={500}
                className="rounded-2xl h-[400px] w-[350px] object-cover object-center z-10 shadow-xl"
              />
            </div>
          </div>
        </section>

        <section className="mt-8 lg:mt-28 py-12 lg:py-20 ">
          <div className="px-4 flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-16 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="w-full lg:max-w-lg bg-white rounded-3xl shadow-[0_20px_50px_rgba(17,93,142,0.1)] border border-gray-100 p-10 md:px-12 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_25px_60px_rgba(17,93,142,0.15)]">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  Contact Us
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-[#115D8E] to-[#24b6f0] mx-auto rounded-full"></div>
              </div>

              {isError && (
                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-400 text-red-700 rounded-r-lg text-sm flex items-center gap-2">
                  <span className="text-red-500">⚠️</span>
                  Something went wrong. Please try again.
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div className="space-y-1">
                  <label className="block text-sm font-semibold text-[#115D8E] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#115D8E] focus:ring-4 focus:ring-[#115D8E]/10 transition-all duration-300 shadow-sm hover:shadow-md"
                    value={formData.fullName}
                    onChange={handleChange}
                    autoComplete="name"
                    onKeyDown={(e) => {
                      const allowed =
                        /^[a-zA-Z\s]$/.test(e.key) ||
                        [
                          "Backspace",
                          "Delete",
                          "ArrowLeft",
                          "ArrowRight",
                          "Tab",
                        ].includes(e.key);
                      if (!allowed) {
                        e.preventDefault();
                      }
                    }}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
                      <span>⚠️</span>
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-semibold text-[#115D8E] mb-2">
                    Business Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your business email"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#115D8E] focus:ring-4 focus:ring-[#115D8E]/10 transition-all duration-300 shadow-sm hover:shadow-md"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
                      <span>⚠️</span>
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-semibold text-[#115D8E] mb-2">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Enter your mobile number"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#115D8E] focus:ring-4 focus:ring-[#115D8E]/10 transition-all duration-300 shadow-sm hover:shadow-md"
                    value={formData.mobile}
                    onChange={(e) => {
                      const val = e.target.value;

                      if (/^\d*$/.test(val) && val.length <= 10) {
                        setFormData((prev) => ({ ...prev, mobile: val }));
                      }
                    }}
                    inputMode="numeric"
                    maxLength={10}
                    onKeyDown={(e) => {
                      const controlKeys = [
                        "Backspace",
                        "Delete",
                        "ArrowLeft",
                        "ArrowRight",
                        "Tab",
                      ];

                      if (controlKeys.includes(e.key)) return;

                      if (!/[0-9]/.test(e.key)) {
                        e.preventDefault();
                        return;
                      }

                      if (formData.mobile.length === 0 && /[0-5]/.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                  />
                  {errors.mobile && (
                    <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
                      <span>⚠️</span>
                      {errors.mobile}
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-semibold text-[#115D8E] mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project or inquiry..."
                    rows={4}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 resize-none focus:outline-none focus:border-[#115D8E] focus:ring-4 focus:ring-[#115D8E]/10 transition-all duration-300 shadow-sm hover:shadow-md"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
                      <span>⚠️</span>
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="flex items-start gap-3 text-sm text-gray-600 p-4 bg-gray-50 rounded-xl">
                  <input
                    type="checkbox"
                    id="terms"
                    name="agreedToTerms"
                    className="mt-1 accent-[#115D8E] w-5 h-5 rounded focus:ring-2 focus:ring-[#115D8E]/20"
                    checked={formData.agreedToTerms}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="terms"
                    className="cursor-pointer leading-relaxed"
                  >
                    I agree to all{" "}
                    <Link
                      href="/termsofuse"
                      className="text-[#115D8E] underline hover:text-[#24b6f0] transition-colors duration-200"
                    >
                      terms and conditions
                    </Link>
                    .
                  </label>
                </div>
                {errors.agreedToTerms && (
                  <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
                    <span>⚠️</span>
                    {errors.agreedToTerms}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-[#777777] to-[#115D8E] shadow-lg hover:shadow-xl hover:from-[#666666] hover:to-[#0d4a73] transform transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden"
                >
                  <span className="relative z-10">
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </span>
                </button>
              </form>
            </div>

            <div className="w-full lg:max-w-2xl text-gray-800 mt-7 lg:mt-0">
              <div className="">
                <h3 className="text-3xl md:text-4xl font-bold text-[#115D8E] mb-4 leading-tight">
                  Start the conversation today
                </h3>
                <p className="text-gray-600 mb-5 text-lg md:text-xl leading-relaxed">
                  We&apos;re just a message, call, or click away.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300 group">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#c3e0f3] rounded-xl flex items-center justify-center group-hover:bg-[#115D8E]/20 transition-colors duration-300">
                    <span>
                      <MdEmail size={23} color={"#115D8E"} />
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-lg md:text-xl text-gray-800 mb-1">
                      Email
                    </div>
                    <div className="text-gray-600 text-base md:text-lg">
                      email@company.com
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300 group">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#c3e0f3] rounded-xl flex items-center justify-center group-hover:bg-[#115D8E]/20 transition-colors duration-300">
                    <span>
                      <IoCall size={23} color={"#115D8E"} />
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-lg md:text-xl text-gray-800 mb-1">
                      Call us
                    </div>
                    <div className="text-gray-600 text-base md:text-lg">
                      2545682559
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300 group">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#c3e0f3] rounded-xl flex items-center justify-center group-hover:bg-[#115D8E]/20 transition-colors duration-300">
                    <span>
                      <FaLocationDot size={23} color={"#115D8E"} />
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-lg md:text-xl text-gray-800 mb-1">
                      Visit us
                    </div>
                    <div className="text-gray-600 text-base md:text-lg leading-relaxed">
                      Office No. 101/2, 'Vakratunda Corporate Park Premises
                      Co-operative Society Limited, Off. Aarey Road, Goregaon
                      (East), Mumbai - 400063
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl border border-gray-100">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#115D8E] rounded-full"></div>
                    Office Hours
                  </h3>
                  <div className="space-y-2 text-base md:text-md text-gray-600">
                    <p className="flex justify-between">
                      <span className="font-medium">Monday - Friday:</span>
                      <span>9:30 AM - 6:30 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="font-medium">Saturday:</span>
                      <span>09:30 AM - 6:30 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="font-medium">Sunday:</span>
                      <span>Closed</span>
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      *2nd and 4th Saturday closed
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#24b6f0]/5 to-[#115D8E]/5 p-6 rounded-2xl border border-[#24b6f0]/20">
                  <p className="text-[#24b6f0] text-lg md:text-xl mb-4 font-semibold">
                    Working together for smarter solutions
                  </p>
                  <div className="flex flex-wrap items-center gap-6 md:gap-8">
                    <div className="transform transition-all duration-300 hover:scale-110 hover:shadow-lg rounded-lg p-2">
                      <Image
                        src="/Image/logo-1.png"
                        alt="Partner Logo 1"
                        width={48}
                        height={48}
                        className="w-10 md:w-12"
                      />
                    </div>
                    <div className="transform transition-all duration-300 hover:scale-110 hover:shadow-lg rounded-lg p-2">
                      <Image
                        src="/Image/logo-2.png"
                        alt="Partner Logo 2"
                        width={48}
                        height={48}
                        className="w-10 md:w-12"
                      />
                    </div>
                    <div className="transform transition-all duration-300 hover:scale-110 hover:shadow-lg rounded-lg p-2">
                      <Image
                        src="/Image/logo-3.png"
                        alt="Partner Logo 3"
                        width={80}
                        height={40}
                        className="w-16 md:w-20"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <div className="hidden md:block absolute md:right-40 top-[1780px] z-10">
          <Image
            src="/Image/curved-arrow.png"
            alt="Curved Arrow"
            width={180}
            height={140}
            className="w-[120px] lg:w-[180px]"
          />
        </div> */}

        <section className="relative bg-white py-8 text-center px-4 sm:px-6 lg:px-8 lg:mt-12">
          <p className="text-lg md:text-[20px] text-[#115D8E] mb-2 font-bold">
            Here&apos;s where you can find us!
          </p>
          <h3 className="text-2xl md:text-[32px] font-semibold text-gray-800 mb-8 md:mb-16">
            We&apos;re easy to find and always ready to connect
          </h3>

          <div className="overflow-hidden mb-6 rounded-lg shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.2631829043157!2d75.8672345743544!3d26.799747364938032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc94baba6edad%3A0xd9cda1cfd0d224a!2sSevenUnique%20Tech%20Solutions%20Pvt.%20Ltd.%20%7C%20Web%20%26%20App%20Development.!5e0!3m2!1sen!2sin!4v1753855642126!5m2!1sen!2sin"
              width="100%"
              height="400"
              className="md:h-[450px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </section>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
