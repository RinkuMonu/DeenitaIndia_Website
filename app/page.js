import Image from "next/image";
import { FaRegUserCircle, FaCheckCircle, FaUserEdit, FaListAlt, FaCreditCard, FaRocket } from "react-icons/fa"

const steps = [
  { label: "Register / Create an Account", icon: <FaRegUserCircle className="text-4xl" /> },
  { label: "Verify Your Email", icon: <FaCheckCircle className="text-4xl" /> },
  { label: "Fill Profile Information", icon: <FaUserEdit className="text-4xl" /> },
  { label: "Select Your Plan", icon: <FaListAlt className="text-4xl" /> },
  { label: "Add Payment Method", icon: <FaCreditCard className="text-4xl" /> },
  { label: "Start Using the Platform", icon: <FaRocket className="text-4xl" /> },
]

  const projects = [
    {
      title: "Switch",
      description: "Consolidate your projects, clients and team intoConsolidate your projects, clients and team into",
      image: "/images/expert-service1.jpg",
    },
    {
      title: "Project Title 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "/images/expert-service2.jpg",
    },
    {
      title: "Project Title 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "/images/expert-service3.jpg",
    },
    {
      title: "Project Title 4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "/images/expert-service4.jpg",
    },
  ];


export default function Home() {


  return (
    <>
      <section className="home-hero-section pt-10 container">
        <div className="grid grid-cols-2">
          <div className="pt-20 flex flex-col gap-4">
            <h1 className="theme-text text-2xl text-[55px] font-bold">
              One platform to handle everything
            </h1>
            <p className="text-base font-semibold text-[#515151] max-w-md">
              Consolidate your projects, clients and team into
              one integrated, easy-to-use platform
            </p>
            <div>
              <button type="button" className="text-white shadow-[0_8px_30px_rgba(138,173,187)] me-4 font-semibold bg-[#115D8E] py-3 rounded-lg text-base px-6 text-center   ">Get started</button>
              <button type="button" className="font-semibold bg-white rounded-lg shadow-[0_8px_30px_rgba(138,173,187)] text-base px-6 py-3 text-center text-[#39464F] ">Book a demo</button>
            </div>
            <div>
              <p className="text-[40px] font-semibold"><span className="theme-text">100+ </span>Projects</p>
              <p className="text-sm max-w-32 text-[#515151]">
                Consolidate your projects, clients and team into
              </p>
            </div>
          </div>
          <div className="relative home-img-height">
            <Image className="object-cover rounded-md p-0" src="/images/home-main.png" fill alt="banner image" />
          </div>
        </div>

      </section>

      <section className="container py-10">
        <p className="heading font-semibold max-w-xl">
          Delivering Expert <span className="theme-text">Services</span> that drive results
        </p>
        <button type="button" className="text-white shadow-[0_8px_30px_rgba(138,173,187)] me-4 font-semibold bg-[#115D8E] py-3 rounded-lg text-base px-6 text-center mt-3 mb-7">Get in touch</button>
        <div className="grid lg:grid-cols-4 xs:grid-cols-1 md:grid-cols-2 gap-6">

          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative w-full h-72 overflow-hidden rounded-lg shadow-lg transition-all duration-500 ${index % 2 === 1 ? "mt-10" : ""
                }`}
            >
              <div className="absolute inset-0 bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-50"
                />
              </div>

              <div className="absolute inset-0 flex translate-y-full flex-col justify-end bg-gradient-to-t from-[rgb(17,93,142)] via-white/20 to-transparent p-6 transition-all duration-500 group-hover:translate-y-0 text-center">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-2 text-white">{project.description}</p>
              </div>
            </div>
          ))}



        </div>
      </section>


        <section className="container py-10 ">
      {steps.map((step, index) => (
        <div
          key={index}
          className="rounded-3xl max-w-lg bg-[#ECF5FB] shadow-[0_8px_30px_rgba(141,220,251)]"
        >
          <div className="flex justify-between items-center p-5 theme-text">
            {step.icon}
            <p className="text-2xl max-w-[250px] text-center">{step.label}</p>
          </div>
        </div>
      ))}
    </section>
    </>
  );
}
