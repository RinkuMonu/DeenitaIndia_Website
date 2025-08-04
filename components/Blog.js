import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";


function Blog() {

    const blogPosts = [
        {
            id: 1,
            author: "Debitis Aut",
            date: "20 April 2025",
            title: "At vero eos et accusamus et lustood io dignissimos ducimus vero",
            description: "Stay updated with our latest insights and industry trends. Explore expert articles, tips, and thought leadership.",
            url: "/blog/post-1",
            image: "/images/blog.jpg"
        },
        {
            id: 2,
            author: "Jane Doe",
            date: "15 May 2025",
            title: "Understanding modern web development practices",
            description: "Learn about the latest trends in web development and how to implement them in your projects.",
            url: "/blog/post-2",
            image: "/images/blog.jpg"
        },
        {
            id: 3,
            author: "John Smith",
            date: "1 June 2025",
            title: "The future of responsive design",
            description: "Exploring new techniques for creating truly responsive web experiences across all devices.",
            url: "/blog/post-3",
            image: "/images/blog.jpg"
        }
    ];
    return (
        <>
            <section className='mt-10 my-10 md:my-0'   data-aos="fade-up"
  data-aos-duration="2000">
                <div className='container'>
                    <div className='md:flex justify-between gap-5 align-middle'>
                        <p className="heading font-semibold ">
                            Recent <span className="theme-text">Articles</span>
                        </p>
                        <p className='md:max-w-sm pt-4'>Stay updated with our latest insights and industry trends. Explore expert articles, tips, and thought leadership.
                        </p>
                    </div>
               <div className='relative'>
                     <div className="flex flex-col lg:flex-row w-full pt-10 overflow-hidden min-h-[550px]">
                        {blogPosts.map((post, index) => (
                            <div
                                key={index}
                                className="group transition-all duration-700 ease-in-out transform-gpu 
                 w-full lg:basis-1/3 lg:hover:basis-[44%] lg:hover:z-10"
                            >
                                <div className="p-2">
                                    <Image
                                        src={post.image}
                                        width={600}
                                        height={600}
                                        alt="blog image"
                                        className="w-full h-auto rounded-xl border-2 border-transparent 
                     transition-all duration-500 ease-in-out group-hover:border-[#115D8E]"
                                    />

                                    <div className="px-2">
                                        <div className="flex justify-between items-center my-2">
                                            <span className="font-bold theme-text">{post.author}</span>
                                            <span className="text-xs text-gray-500">{post.date}</span>
                                        </div>

                                        <h3
                                            className="text-xl font-bold text-gray-800 line-clamp-1 
                       lg:group-hover:line-clamp-none transition-all duration-500 ease-in-out"
                                        >
                                            {post.title}
                                        </h3>

                                        <p
                                            className="text-gray-500 text-sm mb-5 max-h-0 opacity-0 overflow-hidden 
                       transition-all duration-700 ease-in-out 
                       lg:group-hover:max-h-40 lg:group-hover:opacity-100"
                                        >
                                            {post.description}
                                        </p>

                                        <Link
                                            href="/blog"
                                            className="inline-flex items-center text-xs py-1 px-2 rounded-lg 
                       text-white bg-[#115D8E] mt-auto
                       shadow-[0_4px_30px_rgba(138,173,187,0.4)] 
                       transition-all duration-500 ease-in-out"
                                        >
                                            Read more <MdArrowOutward className="ml-1 font-bold" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
               </div>

                </div>
            </section >
        </>
    )
}

export default Blog
