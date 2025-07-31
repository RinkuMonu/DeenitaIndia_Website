"use client";
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";


export default function ContactPage() {

const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    message: '',
    agreedToTerms: false
  });
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    mobile: '',
    message: '',
    agreedToTerms: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateMobile = (value) => {
    if (!value) return "Please fill this field";
    if (!/^\d+$/.test(value)) return "Only numbers are allowed";
    if (value.length !== 10) return "Must be 10 digits";
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    const newErrors = {
      fullName: formData.fullName ? "" : "Please fill this field",
      email: formData.email ? "" : "Please fill this field",
      mobile: validateMobile(formData.mobile),
      message: formData.message ? "" : "Please fill this field",
      agreedToTerms: formData.agreedToTerms ? "" : "You must agree to the terms"
    };

    setErrors(newErrors);

    // Check if any errors exist
    if (Object.values(newErrors).some(error => error !== "")) {
      isValid = false;
    }

    if (isValid) {
      // Submit form logic here
      console.log("Form submitted:", formData);
    }
  };




  return (
    <section className="pt-20 md:pt-32 relative before:content-[''] before:absolute before:inset-0 before:backdrop-blur-[100px] before:z-[-1] z-1 overflow-x-hidden">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
        <div className="w-full bg-[#eaf4fa] rounded-xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row">
          <div className="w-full md:w-3/5">
            <div className="px-4 md:px-16">
              <span className="inline-block bg-gradient-to-r from-[#777777] to-[#115D8E] text-white text-sm px-4 py-1 rounded-full mb-4">
                Contact us anytime
              </span>

              <h1 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-[#115d8e] mb-4">
                Reach out to us we're just a message away
              </h1>
              <p className="text-gray-800 mb-6 text-base md:text-[20px]">
                We're here to answer your questions and provide the support you
                need.
              </p>

             <Link href="/contactpage">
              <button className="flex mt-8 md:mt-16 bg-[#115d8e] hover:bg-[#006c9d] text-white font-semibold px-6 py-2 md:px-8 md:py-3 rounded-md shadow-[2px_2px_20px_0px_#8AADBB]">
                Connect
                <Image
                  src="/Image/Arrow up-right.png"
                  alt="Icon"
                  width={20}
                  height={20}
                  className="w-4 h-4 md:w-5 md:h-5 mt-1 ml-2"
                />
              </button></Link>
            </div>
          </div>

          <div className="hidden md:block md:absolute right-4 lg:right-8 xl:right-40 top-[90px]">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/Image/contact-banner-img.png"
                alt="Team working"
                width={398}
                height={190}
                className="banner-overlaid-img object-fill h-[400px] lg:h-[470px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="mt-8 lg:mt-40">
        <div className="bg-white flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="w-full lg:max-w-md bg-white rounded-2xl shadow-[1px_4px_10px_2px_rgba(0,0,0,0.25)] p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>

      <form className="space-y-4" onSubmit={handleSubmit} noValidate>
        {/* Full Name Field */}
        <div>
          <label className="block text-sm font-medium text-[#115D8E] mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Kanak Sharma"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 shadow-[1px_1px_6px_0px_#E5E5E5]"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
          )}
        </div>

        {/* Business Email Field */}
        <div>
          <label className="block text-sm font-medium text-[#115D8E] mb-1">
            Business Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="email@company.com"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 shadow-[1px_1px_6px_0px_#E5E5E5]"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Mobile Number Field */}
        <div>
          <label className="block text-sm font-medium text-[#115D8E] mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            name="mobile"
            placeholder="4856545165"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 shadow-[1px_1px_6px_0px_#E5E5E5]"
            value={formData.mobile}
            onChange={handleChange}
            maxLength="10"
            onKeyDown={(e) => {
              if (!/[0-9]/.test(e.key) &&
                  e.key !== 'Backspace' &&
                  e.key !== 'Delete' &&
                  e.key !== 'ArrowLeft' &&
                  e.key !== 'ArrowRight') {
                e.preventDefault();
              }
            }}
          />
          {errors.mobile && (
            <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-sm font-medium text-[#115D8E] mb-1">
            Message
          </label>
          <textarea
            name="message"
            placeholder="Tell us about your needs.."
            rows="4"
            className="w-full border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 shadow-[1px_1px_6px_0px_#E5E5E5]"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
          )}
        </div>

        {/* Terms Checkbox */}
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
            I agree to all <a href="/termsofuse" className="text-[#115D8E] underline">terms and conditions</a>.
          </label>
        </div>
        {errors.agreedToTerms && (
          <p className="text-red-500 text-xs mt-1">{errors.agreedToTerms}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 rounded-md text-white font-medium bg-gradient-to-r from-[#777777] to-[#115D8E] shadow-md hover:opacity-90 transition"
        >
          Submit
        </button>
      </form>
    </div>

          {/* Contact Info */}
          <div className="w-full lg:max-w-xl text-gray-800 mt-8 lg:mt-0">
            <h3 className="text-2xl md:text-[32px] font-bold text-[#115D8E] mb-2">
              Start the conversation today
            </h3>
            <p className="text-gray-500 mb-6 md:mb-8 text-base md:text-[18px]">
              We're just a message, call, or click away.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-3 pl-2">
                <span className="pt-0.5">
                  <Image
                    src="/Image/mail.png"
                    alt="Icon"
                    width={20}
                    height={20}
                    className=""
                  />
                </span>
                <div>
                  <div className="font-semibold text-base md:text-[18px]">Email</div>
                  <div className="text-gray-500 text-sm md:text-[16px]">email@company.com</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <span className="pt-0.5">
                  <Image
                    src="/Image/call_end.png"
                    alt="Icon"
                    width={30}
                    height={30}
                    className=""
                  />
                </span>
                <div>
                  <div className="font-semibold text-base md:text-[18px]">Call us</div>
                  <div className="text-gray-500 text-sm md:text-[16px]">2545682559</div>
                </div>
              </div>

              <div className="flex items-start gap-3 pl-3">
                <span className="text-blue-600 pt-0.5">
                  <Image
                    src="/Image/icon.png"
                    alt="Icon"
                    width={14}
                    height={14}
                    className=""
                  />
                </span>
                <div>
                  <div className="font-semibold text-base md:text-[18px]">Visit us</div>
                  <div className="text-gray-500 text-sm md:text-[16px]">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                  </div>
                </div>
              </div>

              <div className="mt-6 md:mt-12">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-gray-800">Office Hours</h3>
                <div className="space-y-1 md:space-y-2 text-sm md:text-base text-gray-600">
                  <p>Monday - Friday: 9:30 AM - 6:30 PM</p>
                  <p>Saturday: 09:30 AM - 6:30 PM (2nd and 4th Saturday closed)</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              {/* Logos */}
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
                    className="w-8 md:w-10"
                  />
                  <Image
                    src="/Image/logo-2.png"
                    alt="Logo 2"
                    width={40}
                    height={10}
                    className="w-8 md:w-10"
                  />
                  <Image
                    src="/Image/logo-3.png"
                    alt="Logo 3"
                    width={80}
                    height={30}
                    className="w-16 md:w-20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curved Arrow */}
      <div className="hidden md:block absolute right-4 lg:right-8 xl:right-26 top-[1450px] z-10">
        <Image
          src="/Image/curved-arrow.png"
          alt="Curved Arrow"
          width={180}
          height={140}
          className="w-[120px] lg:w-[180px]"
        />
      </div>

      {/* Map Section */}
      <section className="relative bg-white py-12 text-center px-4 sm:px-6 lg:px-8 lg:mt-40">
        <p className="text-lg md:text-[20px] text-[#115D8E] mb-2 font-bold">
          Here's where you can find us!
        </p>
        <h3 className="text-2xl md:text-[32px] font-semibold text-gray-800 mb-8 md:mb-16">
          We're easy to find and always ready to connect
        </h3>

        <div className="w-full overflow-hidden mb-6 rounded-lg shadow-lg">
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