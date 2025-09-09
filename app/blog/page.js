// "use client";
// import Cta from "@/components/Cta";
// import Image from "next/image";
// import Link from "next/link";
// import { MdArrowOutward } from "react-icons/md";
// import { SlCalender } from "react-icons/sl";
// import { useEffect, useState } from "react";
// import { FaArrowRight, FaArrowLeft, FaSearch } from "react-icons/fa";
// import axios from "axios";

// export default function BlogSection() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [allCategories, setAllCategories] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [hasMore, setHasMore] = useState(true);

//   const postsPerPage = 6;
//   const limit = 6;

//   const fetchBlogs = async (page = 1, reset = false) => {
//     setLoading(true);
//     try {
//       const res = await axios.get(
//         `https://cms.sevenunique.com/apis/blogs/get-blogs.php?website_id=2&status=2&page=${page}&limit=${limit}`,
//         {
//           headers: {
//             Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
//           },
//         }
//       );

//       const newBlogs = res.data.data || [];
//       const pagination = res.data.pagination || {};

//       if (reset) {
//         setBlogs(newBlogs);
//       } else {
//         setBlogs((prev) => [...prev, ...newBlogs]);
//       }

//       if (page >= pagination.total_pages) {
//         setHasMore(false);
//       } else {
//         setHasMore(true);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchBlogs(1, true);
//   }, []);

//   const fetchCategories = async () => {
//     try {
//       const allCatIds = [...new Set(blogs.map((post) => post.category_id))];

//       const categories = await Promise.all(
//         allCatIds.map(async (category_id) => {
//           const res = await axios.get(
//             `https://cms.sevenunique.com/apis/category/get_category_by_id.php?category_id=${category_id}`,
//             {
//               headers: {
//                 Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
//               },
//             }
//           );

//           return {
//             id: category_id,
//             name: res.data?.data?.name,
//           };
//         })
//       );
//       setAllCategories(categories);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     if (blogs.length > 0) {
//       fetchCategories();
//     }
//   }, [blogs]);

//   const filteredPosts = blogs.filter((post) => {
//     const categoryName = allCategories.find(
//       (cat) => cat.id === post.category_id
//     )?.name;

//     const matchesSearch =
//       searchQuery === "" ||
//       post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       (post.summary && post.summary.toLowerCase().includes(searchQuery.toLowerCase()));

//     const matchesCategory =
//       selectedCategory === "" || 
//       (categoryName && categoryName === selectedCategory);

//     return matchesSearch && matchesCategory;
//   });

//   const handleLoadMore = () => {
//     const nextPage = Math.ceil(blogs.length / limit) + 1;
//     fetchBlogs(nextPage, false);
//   };

//   return (
//     <>
//       <section className="mt-32">
//         <div className="container relative">
//           {/* Hero Section */}
//           <div className="grid lg:grid-cols-2 bg-[#E6F0F9] rounded-2xl p-8 md:p-12 gap-8 overflow-hidden">
//             <div className="flex flex-col justify-center space-y-6 z-10">
//               <span className="inline-block bg-gradient-to-r from-[#777777] to-[#115D8E] text-white shadow-lg px-4 py-2 rounded-full text-sm font-medium w-fit">
//                 Blog
//               </span>
//               <h1 className="text-4xl md:text-5xl font-bold text-[#0B4870] leading-tight">
//                 Explore expert insights, tips, and updates from our team
//               </h1>
//               <p className="text-gray-600 text-lg">
//                 Stay informed with our latest articles and industry news. Check out our latest stories, tips, and ideas!
//               </p>
//               <div className="flex gap-4">
//                 <Link
//                   href="/contact"
//                   className="inline-flex items-center gap-2 bg-[#115D8E] hover:bg-[#0B4870] text-white font-medium text-base px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
//                 >
//                   Connect With Us
//                   <MdArrowOutward className="text-lg" />
//                 </Link>
//                 <Link
//                   href="#blog-posts"
//                   className="inline-flex items-center gap-2 border border-[#115D8E] text-[#115D8E] hover:bg-[#115D8E] hover:text-white font-medium text-base px-6 py-3 rounded-lg transition-all duration-300"
//                 >
//                   Read Blogs
//                 </Link>
//               </div>
//             </div>
//             <div className="hidden lg:flex items-center justify-center relative">
//               <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#115D8E] opacity-10 rounded-full"></div>
//               <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-[#0B4870] opacity-10 rounded-full"></div>
//               <Image
//                 src="/images/blog_image.jpg"
//                 alt="Blog Preview"
//                 width={400}
//                 height={500}
//                 className="rounded-2xl h-[400px] w-[350px] object-cover object-center z-10 shadow-xl"
//               />
//             </div>
//           </div>

//           {/* Blog Posts Section */}
//           <section id="blog-posts" className="my-16">
//             <div className="text-center mb-12">
//               <span className="theme-text text-lg font-semibold">Latest Posts</span>
//               <h2 className="pt-2 text-3xl md:text-4xl font-bold text-[#0B4870]">
//                 Fresh ideas, real stories, and smart insights.
//               </h2>
//             </div>

//             {/* Search and Filter */}
//             <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
//               <div className="relative w-full md:w-2/3">
//                 <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Search articles..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="w-full border border-gray-200 bg-gray-50 rounded-lg px-12 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#115D8E] focus:border-transparent"
//                 />
//               </div>
//               <select
//                 value={selectedCategory}
//                 onChange={(e) => setSelectedCategory(e.target.value)}
//                 className="w-full md:w-1/3 border border-gray-200 bg-gray-50 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#115D8E] focus:border-transparent"
//               >
//                 <option value="">All Categories</option>
//                 {allCategories?.map((category, idx) => (
//                   <option key={category.id || idx} value={category.name}>
//                     {category.name}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Blog Posts Grid */}
//             {filteredPosts.length > 0 ? (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {filteredPosts.map((post, index) => {
//                   const categoryName = allCategories.find(
//                     (cat) => cat.id === post.category_id
//                   )?.name;

//                   return (
//                     <div
//                       key={index}
//                       className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100"
//                     >
//                       <div className="relative h-56 w-full overflow-hidden">
//                         <Image
//                           src={post.image || "/images/placeholder-blog.jpg"}
//                           alt={post.title}
//                           fill
//                           className="object-cover group-hover:scale-105 transition-transform duration-500"
//                         />
//                         <div className="absolute top-4 left-4">
//                           {categoryName && (
//                             <span className="bg-[#115D8E] text-white text-xs font-medium px-3 py-1.5 rounded-full">
//                               {categoryName}
//                             </span>
//                           )}
//                         </div>
//                         <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
//                       </div>
//                       <div className="p-6 flex flex-col flex-1">
//                         <div className="flex items-center text-gray-500 text-sm mb-3">
//                           <SlCalender className="me-2" />
//                           <span>{new Date(post.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
//                         </div>
//                         <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2 group-hover:text-[#115D8E] transition-colors duration-300">
//                           {post.title}
//                         </h3>
//                         <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
//                           {post.summary}
//                         </p>
//                         <Link
//                           href={`/blog/${post.slug}`}
//                           className="inline-flex items-center gap-2 text-[#115D8E] font-medium text-sm mt-auto group/readmore"
//                         >
//                           Read More
//                           <MdArrowOutward className="transition-transform duration-300 group-hover/readmore:translate-x-1" />
//                         </Link>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             ) : (
//               <div className="text-center py-16 bg-white rounded-xl shadow-sm">
//                 <div className="text-4xl text-gray-300 mb-4">📝</div>
//                 <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
//                 <p className="text-gray-500">
//                   {searchQuery || selectedCategory 
//                     ? "Try adjusting your search or filter criteria" 
//                     : "Check back later for new content"}
//                 </p>
//               </div>
//             )}

//             {/* Load More Button */}
//             {hasMore && !loading && (
//               <div className="text-center mt-12">
//                 <button
//                   onClick={handleLoadMore}
//                   className="bg-white border border-[#115D8E] text-[#115D8E] hover:bg-[#115D8E] hover:text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2"
//                 >
//                   Load More Articles
//                 </button>
//               </div>
//             )}

//             {loading && (
//               <div className="text-center mt-12">
//                 <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#115D8E]"></div>
//                 <p className="mt-2 text-gray-600">Loading articles...</p>
//               </div>
//             )}
//           </section>
//         </div>
//         <Cta />
//       </section>
//     </>
//   );
// }

"use client";
import Blog from '../../components/Blog';
import React from 'react'

export default function page() {
  return (
    <>
    <Blog />
      
    </>
  )
}
