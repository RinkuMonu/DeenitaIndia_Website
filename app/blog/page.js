"use client"
import Cta from "@/components/Cta";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { useState } from "react"
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export default function BlogSection() {
    const blogPosts = [
        {
            id: 1,
            author: "Debitis Aut",
            date: "20 April 2025",
            title: "At vero eos et accusamus et lustood io ",
            description: "Stay updated with our latest insights and industry trends. Explore expert articles, tips, and thought leadership.",
            url: "/blog/post-1",
            image: "/images/blog.jpg",
            category: "marketing"
        },
        {
            id: 2,
            author: "Jane Doe",
            date: "15 May 2025",
            title: "Understanding modern web development practices",
            description: "Stay updated with our latest insights and industry trends. Explore expert articles, tips, and thought leadership.",
            url: "/blog/post-2",
            image: "/images/blog.jpg",
            category: "marketing"
        },
        {
            id: 3,
            author: "John Smith",
            date: "1 June 2025",
            title: "The future of responsive design",
            description: "Stay updated with our latest insights and industry trends. Explore expert articles, tips, and thought leadership.",
            url: "/blog/post-3",
            image: "/images/blog.jpg",
            category: "marketing"
        },
        {
            id: 4,
            author: "Debitis Aut",
            date: "20 April 2025",
            title: "At vero eos et accusamus et lustood io ",
            description: "Stay updated with our latest insights and industry trends. Explore expert articles, tips, and thought leadership.",
            url: "/blog/post-1",
            image: "/images/blog.jpg",
            category: "marketing"
        },
        {
            id: 5,
            author: "Jane Doe",
            date: "15 May 2025",
            title: "Understanding modern web development practices",
            description: "Stay updated with our latest insights and industry trends. Explore expert articles, tips, and thought leadership.",
            url: "/blog/post-2",
            image: "/images/blog.jpg",
            category: "finance"
        },
        {
            id: 6,
            author: "John Smith",
            date: "1 June 2025",
            title: "The future of responsive design",
            description: "Stay updated with our latest insights and industry trends. Explore expert articles, tips, and thought leadership.",
            url: "/blog/post-3",
            image: "/images/blog.jpg",
            category: "technology"
        }
    ];
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const postsPerPage = 6

    const filteredPosts = blogPosts.filter((post) => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = selectedCategory === "" || post.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)

    return (
        <>
            <section className="mt-30">
                <div className="container  relative">
                    <div className="grid lg:grid-cols-2 bg-[#E6F0F9] rounded-xl p-6 md:p-10 gap-6">
                        <div className=" space-y-4 ">
                            <span className="inline-block  bg-gradient-to-r from-[#777777] to-[#115D8E] text-white shadow-[0_8px_30px_rgba(138,173,187)] px-3 py-1 rounded-full text-sm font-medium ">
                                Blog
                            </span>
                            <h1 className="text-3xl md:text-4xl font-bold text-[#0B4870] leading-snug">
                                Explore expert insights, tips, and updates from our team
                            </h1>
                            <p className="text-gray-600 text-sm md:text-base">
                                Stay informed with our latest articles and industry news.<br />
                                Check out our latest stories, tips, and ideas!
                            </p>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-[#115D8E] shadow-[0_8px_30px_rgba(138,173,187)]  text-white font-medium text-sm px-5 py-2.5 rounded-md transition"
                            >
                                Connect
                                <MdArrowOutward className="ml-2 text-bold" />
                            </Link>
                        </div>
                        <div className=" absolute -top-7 right-50 rounded-xl shadow-md hidden lg:block">
                            <Image
                                src="/images/blog_image.jpg"
                                alt="Blog Preview"
                                width={350}
                                height={900}
                                className="rounded-xl h-[400px]"
                            />
                        </div>
                    </div>
                    <section className="mb-10 mt-20">
                        <div className="text-center">
                            <p className="theme-text">Latest Posts</p>
                            <p className="pt-4 text-4xl font-semibold">Fresh ideas, real stories, and smart insights.</p>
                        </div>
                        <div className="sm:flex  items-center mx-auto max-w-5xl gap-4 mt-8 mb-4">
                            <input
                                type="text"
                                placeholder="Search Articles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full mb-2 sm:mb-0 lg:w-2/3 border border-gray-300 bg-gray-100 rounded-md px-10 font-semibold py-2"
                            />
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-full lg:w-1/3 border border-gray-300 bg-gray-100  rounded-md px-4 py-2"
                            >
                                <option value="">All Categories</option>
                                {[...new Set(blogPosts.map((p) => p.category))].map((cat, idx) => (
                                    <option key={idx} value={cat}>
                                        {cat.toUpperCase()}

                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full pt-10 pb-5 border-b-2 border-gray-200">
                            {currentPosts.map((post, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-xl transition overflow-hidden flex flex-col h-full"
                                >
                                    <div className="p-2 flex flex-col flex-1">
                                        <div className="flex items-center text-gray-500 mb-2 text-sm">
                                            <SlCalender className="me-2" />
                                            <span>{post.date}</span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
                                        <p className="text-gray-500 text-sm mb-4">{post.description}</p>
                                    </div>
                                    <div className="relative h-[250px] w-full overflow-hidden rounded-xl hover:rounded-xl">
                                        <Image
                                            src={post.image}
                                            alt="blog image"
                                            width={400}
                                            height={200}
                                            className="object-cover rounded-xl w-full h-full transition-transform duration-500 group-hover:scale-105 "
                                        />
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-[#115D8E54] via-[#115D8E54]/33 to-[#115D8E54] z-10" />
                                        <Link href="/blog"  className="absolute inline-flex z-20 top-27 left-1/2 font-bold -translate-x-1/2 bg-white theme-text px-4 py-2 text-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500">
                                            Read More <MdArrowOutward className="font-bold text-lg ms-1" />
                                        </Link >
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="sm:flex justify-between items-center mt-10">
                            <div className="flex justify-center sm:justify-end gap-2">
                                {Array.from({ length: 4 }).map((_, i) => {
                                    const half = Math.floor(4 / 2);
                                    let start = Math.max(1, currentPage - half);
                                    let end = start + 3;

                                    if (end > totalPages) {
                                        end = totalPages;
                                        start = Math.max(1, end - 3);
                                    }

                                    const page = start + i;
                                    const isDisabled = page > totalPages;

                                    return (
                                        <button
                                            key={i}
                                            className={`px-4 py-2 border-2 border-[#115D8E] font-bold rounded-full ${currentPage === page ? "bg-[#115D8E] text-white" : "hover:bg-gray-100"
                                                } ${isDisabled ? " cursor-not-allowed" : ""}`}
                                            onClick={() => {
                                                if (!isDisabled) setCurrentPage(page);
                                            }}
                                            disabled={isDisabled}
                                        >
                                            {page}
                                        </button>
                                    );
                                })}
                            </div>
                            <div className="flex gap-2 pt-4 justify-center sm:justify-end sm:mt-0">
                                <button
                                    onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className="px-3 py-3 border rounded-full  text-[#115D8E] border-[#115D8E]    hover:bg-[#0B4870] hover:text-white disabled:cursor-not-allowed"
                                >
                                   <FaArrowLeft/>
                                </button>
                                <button
                                    onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className="px-3 py-3 border rounded-full text-[#115D8E] border-[#115D8E]   hover:bg-[#0B4870] hover:text-white disabled:cursor-not-allowed"
                                >
                                     <FaArrowRight/>
                                </button>
                            </div>
                        </div>


                    </section>
                </div>
                <Cta />
            </section>
        </>
    );
}
