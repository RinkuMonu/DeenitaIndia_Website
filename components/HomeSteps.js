"use client"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

function HomeSteps() {
    const numbers = [1, 2, 3, 4, 5, 6]

    const steps = [
        { label: "Register / Create an Account", icon: "/images/step1.png" },
        { label: "Complete KYC & Upload Documents", icon: "/images/step2.png" },
        { label: "Select a Service or Request a Quote", icon: "/images/step3.png" },
        { label: "Escrow Setup / Legal Process Begins", icon: "/images/step4.png" },
        { label: "Dashboard Access & Real-Time Tracking", icon: "/images/step5.png" },
        { label: "Completion & Secure Closure", icon: "/images/step6.png" },
    ]

    useEffect(() => {
        AOS.init({
            duration: 500,   
            once: false
        });
    }, []);

    return (
        <>
            <section className="container relative my-8">
                <p className="heading text-center font-semibold pb-12">
                    Here's how it <span className="theme-text">works</span>
                </p>
                {steps.map((step, index) => (
                    <div className="max-w-3xl mx-auto mt-7" key={index}>
                        <div

                            className={`rounded-2xl md:rounded-full max-w-lg bg-[#ECF5FB] shadow-[0_3px_3px_rgba(141,220,251)]  ${index % 2 === 0 ? "ms-auto md:me-12 " : "md:mr-auto"}`}
                            data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                        >
                            <div
                                className={` md:flex justify-between items-center p-5 theme-text 
          ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}
                            >
                                <p className="text-md md:text-2xl font-semibold lg:max-w-[250px] text-center mb-2 md:mb-0">{step.label}</p>
                                <div className="text-9xl "><Image src={step.icon} width={60} height={60} alt="sevice-icons" className="mx-auto md:mx-0"/></div>

                            </div>
                        </div>
                    </div>
                ))}
                <div className=" left-[46%] top-24 absolute hidden lg:block">
                    <div className="flex flex-col items-center ">
                        {numbers.map((num) => (
                            <div key={num}
                                className={`w-22 h-36 text-white flex items-center justify-center text-4xl font-bold relative
      ${num % 2 === 0 ? "bg-sky-300" : "bg-sky-500"} 
      ${num === 1 ? "rounded-t-4xl" : num === 6 ? "rounded-b-4xl" : ""}
      ${num !== 1 ? "before:absolute before:top-0 before:left-0 before:w-full before:h-6 before:bg-white before:rounded-b-full p-0" : ""}
      ${num !== 6 ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-6 after:bg-white after:rounded-t-full p-0" : ""}
    `}
                            >
                                {num}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}

export default HomeSteps
