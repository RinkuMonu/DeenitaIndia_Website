"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { MdArrowOutward } from "react-icons/md";

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
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const validateMobile = (value) => {
    if (!value) return "Please fill this field";
    if (!/^\d+$/.test(value)) return "Only numbers are allowed";
    if (value.length !== 10) return "Must be 10 digits";
    return "";
  };

  const validate = (data) => {
    const newErrors = {
      fullName: data.fullName ? "" : "Please fill this field",
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
    setIsSubmitted(false);

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
        setIsSubmitted(true);
        setFormData({
          fullName: "",
          email: "",
          mobile: "",
          message: "",
          agreedToTerms: false,
        });
        setTimeout(() => setIsSubmitted(false), 5000);
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

  return (
    <section className="px-4 sm:px-14">
      <section className="pt-20 md:pt-32 relative before:content-[''] before:absolute before:inset-0 before:backdrop-blur-[100px] before:z-[-1] z-1 px-4 sm:px-6">
        {/* <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full bg-[#eaf4fa] rounded-xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row">
            <div className="w-full lg:w-3/5 md:p-6">
              <span className="inline-block bg-gradient-to-r from-[#777777] to-[#115D8E] text-white text-sm px-4 py-1 rounded-full mb-4">
                Contact us anytime
              </span>
              <h1 className="text-2xl md:text-[32px] font-bold text-[#115d8e] mb-4 md:pr-10">
                Reach out to us we&apos;re just a message away
              </h1>
              <p className="text-gray-800 mb-6 text-base md:text-[16px] md:pr-8">
                We&apos;re here to answer your questions and provide the support
                you need.
              </p>

              <Link href="/contact">
                <button className="flex mt-8 md:mt-16 bg-[#115d8e] hover:bg-[#006c9d] text-white font-semibold px-6 py-2 md:px-8 md:py-3 rounded-md shadow-[2px_2px_20px_0px_#8AADBB]">
                  Connect
                  <Image
                    src="/Image/Arrow up-right.png"
                    alt="Icon"
                    width={20}
                    height={20}
                    className="w-4 h-4 md:w-5 md:h-5 mt-1 ml-2"
                  />
                </button>
              </Link>
            </div>

            <div className="hidden md:block md:absolute md:right-8 lg:right-28 top-[90px] transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/Image/contact-banner-img.png"
                  alt="Team working"
                  width={398}
                  height={190}
                  className="banner-overlaid-img object-cover h-[464px]"
                />
              </div>
            </div>
          </div>
        </div> */}

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
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#115D8E] hover:bg-[#0B4870] text-white font-medium text-base px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Connect With Us
                  <MdArrowOutward className="text-lg" />
                </Link>
            
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

      <section className="mt-8 lg:mt-28">
        <div className="bg-white flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="w-full lg:max-w-md bg-white rounded-2xl shadow-[1px_4px_10px_2px_rgba(0,0,0,0.25)] p-6 md:p-8 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>

            {isSubmitted && (
              <p className="mb-3 text-green-700 text-sm">
                ✅ Your message was sent successfully.
              </p>
            )}
            {isError && (
              <p className="mb-3 text-red-600 text-sm">
                ❌ Something went wrong. Please try again.
              </p>
            )}

            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <div>
                <label className="block text-sm font-medium text-[#115D8E] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Your name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 shadow-[1px_1px_6px_0px_#E5E5E5]"
                  value={formData.fullName}
                  onChange={handleChange}
                  autoComplete="name"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#115D8E] mb-1">
                  Business Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 shadow-[1px_1px_6px_0px_#E5E5E5]"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#115D8E] mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Your phone number"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 shadow-[1px_1px_6px_0px_#E5E5E5]"
                  value={formData.mobile}
                  onChange={handleChange}
                  maxLength={10}
                  inputMode="numeric"
                  onKeyDown={(e) => {
                    const allowed =
                      /[0-9]/.test(e.key) ||
                      ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(
                        e.key
                      );
                    if (!allowed) e.preventDefault();
                  }}
                />
                {errors.mobile && (
                  <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#115D8E] mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Your message"
                  rows={4}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 shadow-[1px_1px_6px_0px_#E5E5E5]"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <div className="flex items-start gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  id="terms"
                  name="agreedToTerms"
                  className="mt-1 accent-[#115D8E] w-4 h-4"
                  checked={formData.agreedToTerms}
                  onChange={handleChange}
                />
                <label htmlFor="terms" className="cursor-pointer">
                  I agree to all{" "}
                  <Link href="/termsofuse" className="text-[#115D8E] underline">
                    terms and conditions
                  </Link>
                  .
                </label>
              </div>
              {errors.agreedToTerms && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.agreedToTerms}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 rounded-md text-white font-medium bg-gradient-to-r from-[#777777] to-[#115D8E] shadow-md hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>

          <div className="w-full lg:max-w-xl text-gray-800 mt-8 lg:mt-0">
            <h3 className="text-2xl md:text-[32px] font-bold text-[#115D8E] mb-2">
              Start the conversation today
            </h3>
            <p className="text-gray-500 mb-6 md:mb-8 text-base md:text-[18px]">
              We&apos;re just a message, call, or click away.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-3 pl-2">
                <span className="pt-0.5">
                  <Image src="/Image/mail.png" alt="Icon" width={20} height={20} />
                </span>
                <div>
                  <div className="font-semibold text-base md:text-[18px]">
                    Email
                  </div>
                  <div className="text-gray-500 text-sm md:text-[16px]">
                    email@company.com
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <span className="pt-0.5">
                  <Image
                    src="/Image/call_end.png"
                    alt="Icon"
                    width={30}
                    height={30}
                  />
                </span>
                <div>
                  <div className="font-semibold text-base md:text-[18px]">
                    Call us
                  </div>
                  <div className="text-gray-500 text-sm md:text-[16px]">
                    2545682559
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 pl-3">
                <span className="text-blue-600 pt-0.5">
                  <Image src="/Image/icon.png" alt="Icon" width={14} height={14} />
                </span>
                <div>
                  <div className="font-semibold text-base md:text-[18px]">
                    Visit us
                  </div>
                  <div className="text-gray-500 text-sm md:text-[16px]">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                  </div>
                </div>
              </div>

              <div className="mt-6 md:mt-12">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-gray-800">
                  Office Hours
                </h3>
                <div className="space-y-1 md:space-y-2 text-sm md:text-base text-gray-600">
                  <p>Monday - Friday: 9:30 AM - 6:30 PM</p>
                  <p>Saturday: 09:30 AM - 6:30 PM (2nd and 4th Saturday closed)</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <div className="mt-8 md:mt-10">
                <p className="text-gray-800 text-base md:text-lg mb-2">
                  Working together for smarter solutions
                </p>
                <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-3">
                  <Image
                    src="/Image/logo-1.png"
                    alt="Logo 1"
                    width={40}
                    height={10}
                    className="w-8 md:w-10 transform transition duration-300 hover:scale-105"
                  />
                  <Image
                    src="/Image/logo-2.png"
                    alt="Logo 2"
                    width={40}
                    height={10}
                    className="w-8 md:w-10 transform transition duration-300 hover:scale-105"
                  />
                  <Image
                    src="/Image/logo-3.png"
                    alt="Logo 3"
                    width={80}
                    height={30}
                    className="w-16 md:w-20 transform transition duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="hidden md:block absolute md:right-40 top-[1460px] z-10">
        <Image
          src="/Image/curved-arrow.png"
          alt="Curved Arrow"
          width={180}
          height={140}
          className="w-[120px] lg:w-[180px]"
        />
      </div>

      <section className="relative bg-white py-8 text-center px-4 sm:px-6 lg:px-8 lg:mt-28">
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
  );
}
