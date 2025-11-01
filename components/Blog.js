"use client";

import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      author: "Debitis Aut",
      date: "20 April 2025",
      title: "At vero eos et accusamus et lustood io dignissimos ducimus vero",
      description:
        "Stay updated with our latest insights and industry trends. Explore expert articles, tips, and thought leadership.",
      url: "/blog/post-1",
      image: "/images/blog.jpg",
    },
    {
      id: 2,
      author: "Jane Doe",
      date: "15 May 2025",
      title: "Understanding modern web development practices",
      description:
        "Learn about the latest trends in web development and how to implement them in your projects.",
      url: "/blog/post-2",
      image: "/images/blog.jpg",
    },
    {
      id: 3,
      author: "John Smith",
      date: "1 June 2025",
      title: "The future of responsive design",
      description:
        "Exploring new techniques for creating truly responsive web experiences across all devices.",
      url: "/blog/post-3",
      image: "/images/blog.jpg",
    },
  ];

  const [feature, ...rest] = blogPosts;

  return (
    <section className="mt-10 my-10 md:my-0 container mx-auto px-14 pt-32 pb-20">
      <div className="container">
        {/* header */}
        <div className="md:flex justify-between gap-5 items-start">
          <p className="heading font-semibold">
            Recent <span className="theme-text">Articles</span>
          </p>
          <p className="md:max-w-md pt-4">
      Stay informed with authoritative insights and sector news. Our latest writing ranges from Switch & Escrow Services to Connected Banking, Legal Compliance, and Utility Services—everything to keep you ahead in this digital world.
          </p>
        </div>

        {/* magazine grid */}
        <div className="pt-10 grid grid-cols-1 lg:grid-cols-6 gap-6">
          {/* FEATURED CARD */}
          <article
            className="group relative col-span-1 lg:col-span-3 min-h-[420px] rounded-2xl overflow-hidden isolate"
            data-aos="fade-right"
          >
            {/* image */}
            <Image
              src={feature.image}
              alt={feature.title}
              fill
              priority
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
              sizes="(min-width:1024px) 50vw, 100vw"
            />

            {/* gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent transition-opacity duration-500" />

            {/* shine */}
            <span className="absolute -left-1/3 top-0 h-full w-1/3 bg-white/10 blur-xl rotate-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-[160%] transition-all duration-[900ms] ease-out" />

            {/* content */}
            <div className="relative z-10 h-full p-6 flex flex-col justify-end text-white">
              <div className="mb-3 flex items-center gap-3 text-xs/none">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-3 py-1">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
                  {feature.author}
                </span>
                <span className="opacity-80">{feature.date}</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
                {feature.title}
              </h3>

              <p className="mt-3 max-w-xl text-white/80 line-clamp-2 group-hover:line-clamp-none transition-[line-clamp] duration-300">
                {feature.description}
              </p>

              <div className="mt-5">
                <Link
                  href={feature.url}
                  className="inline-flex items-center gap-2 rounded-lg bg-white text-gray-900 px-3 py-2 text-sm font-semibold shadow-sm hover:shadow-md transition"
                >
                  Read Article <MdArrowOutward className="text-xl" />
                </Link>
              </div>
            </div>

            {/* 3D hover tilt */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:translate-y-[-2px] group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.35)] transition-all duration-500" />
          </article>

          {/* SECONDARY CARDS */}
          <div className="col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {rest.map((post, i) => (
              <article
                key={post.id}
                className="group relative min-h-[300px] rounded-2xl overflow-hidden bg-white"
                data-aos="fade-left"
                data-aos-delay={i * 100}
              >
                {/* image */}
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width:1024px) 25vw, 100vw"
                />
                {/* dark-to-transparent overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />

                {/* content */}
                <div className="relative z-10 h-full p-5 flex flex-col justify-end text-white">
                  <div className="mb-2 flex items-center justify-between text-xs opacity-90">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-2.5 py-1">
                      <span className="inline-block h-2 w-2 rounded-full bg-sky-400"></span>
                      {post.author}
                    </span>
                    <span>{post.date}</span>
                  </div>

                  <h4 className="text-xl font-semibold leading-snug">{post.title}</h4>
                  <p className="mt-2 text-white/80 line-clamp-2">{post.description}</p>

                  <div className="mt-4">
                    <Link
                      href={post.url}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-white/90 text-gray-900 px-3 py-1.5 text-xs font-semibold hover:bg-white transition"
                    >
                      Read more <MdArrowOutward />
                    </Link>
                  </div>
                </div>

                {/* small shine */}
                <span className="absolute left-0 top-0 h-full w-1/5 translate-x-[-60%] bg-white/10 blur-xl opacity-0 group-hover:opacity-100 group-hover:translate-x-[180%] transition-all duration-[900ms]" />
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* local extras */}
      <style jsx global>{`
        /* Optional: smooth title underline effect on hover (can be reused) */
        .heading .theme-text {
          background-image: linear-gradient(currentColor, currentColor);
          background-repeat: no-repeat;
          background-size: 0% 2px;
          background-position: 0 100%;
          transition: background-size 300ms ease;
        }
        .heading:hover .theme-text {
          background-size: 100% 2px;
        }
      `}</style>
    </section>
  );
}
