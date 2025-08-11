import React from 'react';
import { FaArrowTrendUp } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsFolder } from 'react-icons/bs';
import {
    FaFacebookF,
    FaTwitter,
    FaWhatsapp,
    FaFolderOpen,
} from 'react-icons/fa';
import { IoIosArrowBack } from "react-icons/io";
import Comment from "@/components/Comment";


const blogData = [
    {
        image: '/images/cybersecurity.jpg',
        title: 'Lorem ipsum dolork ipsum dolork',
        rank: 1,
        date: '02-05-2025',
    },
    {
        image: '/images/cybersecurity.jpg',
        title: 'Lorem ipsum dolork ipsum dol dolork',
        rank: 1,
        date: '02-05-2025',
    },
    {
        image: '/images/cybersecurity.jpg',
        title: 'Lorem ipsum dolork ipsum dol dolork',
        rank: 1,
        date: '02-05-2025',
    },
    {
        image: '/images/cybersecurity.jpg',
        title: 'Lorem ipsum dolork ipsum dol dolork',
        rank: 1,
        date: '02-05-2025',
    },
];

const categories = [
    'Lorem ipsum dolorcc',
    'Lorem ipsum dolorcc',
    'Lorem ipsum dolorcc',
    'Lorem ipsum dolorcc',
    'Lorem ipsum dolorcc',
    'Lorem ipsum dolorcc',
    'Lorem ipsum dolorcc',
    'Lorem ipsum dolorcc',
];

export default function BlogDetailPage() {
    return (
      <>
      <section className='container bg-gray-50'>
          <section className="pt-20  min-h-screen ">
            <div className=" mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


                    <div className="md:col-span-2 space-y-6">
                        <div className="max-w-4xl mx-auto  py-6">

                            <h1 className="text-2xl md:text-4xl font-bold theme-text mb-2 ">
                                Lorem ipsum dolor sit amet, consecte adipiscing elit, sed
                            </h1>
                            <div className="md:flex justify-between text-gray-500 text-sm mb-4">
                                <div className="flex  md:justify-between gap-1 md:mt-3">
                                    <FaRegCalendarAlt size={14} />
                                    <span>02-05-2025</span>
                                </div>
                                <p className=' md:mt-3'>By : doloremque laudantium, totam reb</p>
                                <p className=' md:mt-3'>Author : dicta sunt</p>
                            </div>
                            <div className="rounded-xl overflow-hidden mb-6">
                                <Image
                                    src='/images/cybersecurity.jpg'
                                    alt="Blog Visual"
                                    width={1000}
                                    height={500}
                                    className="w-full object-cover max-h-[300px] md:max-h-[500px]"
                                />

                            </div>

                            <div className="mt-4">
                                <div className='grid grid-cols-1 md:grid-cols-12 gap-4'>
                                    <div className='md:col-span-1 flex md:block justify-center'>
                                        <div className="flex md:flex-col gap-4  md:mt-6">
                                            <Link href="#" className="text-[#115D8E] hover:text-white border w-fit p-2 rounded-full hover:bg-[#115D8E]">
                                                <FaWhatsapp size={24} />
                                            </Link>
                                            <Link href="#" className="text-[#115D8E] hover:text-white  border w-fit p-2 rounded-full hover:bg-[#115D8E]">
                                                <FaFacebookF size={24} />
                                            </Link>
                                            <Link href="#" className="text-[#115D8E] hover:text-white  border w-fit p-2 rounded-full hover:bg-[#115D8E]">
                                                <FaTwitter size={24} />
                                            </Link>
                                            <Link href="#" className="text-[#115D8E] hover:text-white  border w-fit p-2 rounded-full hover:bg-[#115D8E]">
                                                <FaFolderOpen size={24} />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className='md:col-span-11 ps-3 md:pe-0 md:mt-6'>
                                        <h2 className="text-2xl font-semibold mb-2">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        </h2>
                                        <p className="text-gray-700 leading-relaxed mb-2">
                                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                            praesentium voluptatum deleniti atque corrupti quos dolores et quas At vero
                                            eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                            praesentium voluptatum deleniti atque corrupti quos dolores et quas...
                                        </p>
                                        <p className="text-gray-700 leading-relaxed mb-2">
                                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                            praesentium voluptatum deleniti atque corrupti quos dolores et quas At vero
                                            eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                            praesentium voluptatum deleniti atque corrupti quos dolores et quas...
                                        </p>
                                        <h2 className="text-2xl font-semibold mb-2 md:mt-6">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        </h2>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                            praesentium voluptatum deleniti atque corrupti quos dolores et quas At vero
                                            eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                            praesentium voluptatum deleniti atque corrupti quos dolores et quas...
                                            <br />
                                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas

                                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
                                        </p>
                                        <Link href="/blog" className="font-semibold bg-gray-100 shadow-[0_8px_15px_rgba(138,173,187)] rounded-lg inline-flex text-base px-3 md:px-5 py-2 md:py-3 text-center theme-text mt-5 w-fit"> <IoIosArrowBack className='mt-1 me-1' />Back to blog</Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="h-fit md:pt-8">
                        <div className="lg:sticky top-24 max-w-full lg:max-w-sm space-y-8">
                            <div className="  rounded-xl border-2 border-[#CDE5F5] p-4">
                                <span className="bg-gradient-to-r from-[#777777] flex w-fit align-middle to-[#115D8E] text-white shadow-[0_4px_40px_rgba(138,173,187)] px-7 py-1 rounded-full text-sm font-medium">
                                    <FaArrowTrendUp className="text-white me-2" size={20} />
                                    <h3 className="text-md font-semibold text-white">Trending Blog</h3>
                                </span>
                                <div className="space-y-4 mt-3 ">
                                    {blogData.map((blog, index) => (
                                        <Link
                                            href="/"
                                            key={index}
                                            className="flex flex-col sm:flex-row items-start gap-3 border-b border-[#CDE5F5] pb-3"
                                        >
                                            <Image
                                                src={blog.image}
                                                alt="thumb"
                                                width={80}
                                                height={64}
                                                className="w-20 h-16 object-cover rounded-md"
                                            />
                                            <div className="flex flex-col justify-between w-full">
                                                <p className="text-sm font-medium text-gray-800 leading-snug">
                                                    {blog.title}
                                                </p>
                                                <div className="flex items-center justify-between text-xs text-gray-500 mt-2 gap-3">
                                                    <span className="bg-[#115D8E] text-white text-[11px] font-semibold px-2 py-[1px] rounded-sm">
                                                        #{blog.rank}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <FaRegCalendarAlt size={13} />
                                                        {blog.date}
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className=" rounded-xl border-2 border-[#CDE5F5] p-4">
                                <span className="bg-gradient-to-r from-[#777777] flex w-fit align-middle to-[#115D8E] text-white shadow-[0_4px_40px_rgba(138,173,187)] px-9 py-1 rounded-full text-sm font-medium">
                                    <AiOutlineClockCircle className="text-white me-2" size={20} />
                                    <h3 className="text-md font-semibold text-white">Recent Post</h3>
                                </span>
                                <div className="space-y-4 mt-3 ">
                                    {blogData.map((blog, index) => (
                                        <Link
                                            href="/"
                                            key={index}
                                            className="flex flex-col sm:flex-row items-start gap-3 border-b border-[#CDE5F5] pb-3"
                                        >
                                            <Image
                                                src={blog.image}
                                                alt="thumb"
                                                width={80}
                                                height={64}
                                                className="w-20 h-16 object-cover rounded-md"
                                            />
                                            <div className="flex flex-col justify-between w-full">
                                                <p className="text-sm font-medium text-gray-800 leading-snug">
                                                    {blog.title}
                                                </p>
                                                <div className="flex items-center justify-end text-xs text-gray-500 mt-2 gap-3">

                                                    <span className="flex items-center gap-1">
                                                        <FaRegCalendarAlt size={13} />
                                                        {blog.date}
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className=" rounded-xl  bg-[#F0F9FE] p-4">
                                <span className="bg-gradient-to-r from-[#777777] flex w-fit align-middle px-10 to-[#115D8E] text-white shadow-[0_4px_40px_rgba(138,173,187)] py-1 rounded-full text-sm font-medium">
                                    <BsFolder className="text-white me-2" size={20} />
                                    <h3 className="text-md font-semibold text-white">Categories</h3>
                                </span>
                                <div className="space-y-4 mt-3 ">
                                    <ul className="text-sm space-y-1">
                                        {categories.map((cat, i) => (
                                            <Link href="" key={i}>
                                                <li
                                                    className="transition-all cursor-pointer px-2 py-1 text-[#39464F] rounded hover:bg-white hover:shadow-sm hover:text-[#115D8E] font-medium"
                                                >
                                                    {cat}
                                                </li>
                                            </Link>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



<section>
    <Comment />
</section>


      </section>
      </>
    );
}
