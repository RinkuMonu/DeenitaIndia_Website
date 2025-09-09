
// import axios from "axios";
// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import { FaArrowTrendUp } from "react-icons/fa6";
// import { FaRegCalendarAlt, FaFacebookF, FaTwitter, FaWhatsapp, FaFolderOpen, FaUser } from "react-icons/fa";
// import { AiOutlineClockCircle } from "react-icons/ai";
// import { BsFolder, BsArrowLeft } from "react-icons/bs";
// import { IoIosArrowBack } from "react-icons/io";
// import Comment from "@/components/Comment";

// const BLOG_API = "https://cms.sevenunique.com/apis/blogs/get-blogs.php?website_id=2&status=2";
// const AUTH_HEADER = { Authorization: "Bearer jibhfiugh84t3324fefei#*fef" };

// async function getAllPosts() {
//   const res = await axios.get(BLOG_API, { headers: AUTH_HEADER });
//   return res?.data?.data || [];
// }

// export async function generateStaticParams() {
//   const posts = await getAllPosts();
//   return posts.filter(p => p?.slug).map(p => ({ slug: p.slug }));
// }

// export const dynamicParams = false;

// export async function fetchCategoryById(categoryId) {
//   if (!categoryId) return null;
//   try {
//     const res = await axios.get(
//       `https://cms.sevenunique.com/apis/category/get_category_by_id.php?category_id=${categoryId}`,
//       { headers: AUTH_HEADER }
//     );
//     return res?.data?.data || null;
//   } catch (e) {
//     console.error("Failed to fetch category:", e);
//     return null;
//   }
// }

// export default async function BlogDetailPage({ params }) {
//   const { slug } = params;

//   // All posts
//   const rawPosts = await getAllPosts();

//   // Build category map (id -> name)
//   const categoryIds = [...new Set(rawPosts.map(p => p.category_id))].filter(Boolean);
//   const categoryMap = {};
//   await Promise.all(
//     categoryIds.map(async (id) => {
//       const cat = await fetchCategoryById(id);
//       if (cat?.name) categoryMap[id] = cat.name;
//     })
//   );

//   // Enrich posts with categoryName
//   const allPosts = rawPosts.map(p => ({
//     ...p,
//     categoryName: categoryMap[p.category_id] || "Uncategorized",
//   }));

//   const post = allPosts.find(p => p.slug === slug);
//   if (!post) notFound();

//   // ---- Trending (top 5) ----
//   const trendingPosts = allPosts.filter(p => String(p?.is_trending) === "1").slice(0, 5);

//   // ---- Recent (top 5 by date) ----
//   const recentPosts = [...allPosts]
//     .sort((a, b) => new Date(b.date || b.created_at) - new Date(a.date || a.created_at))
//     .slice(0, 5);

//   // ---- Category counts from API data ----
//   const countsById = rawPosts.reduce((acc, p) => {
//     const id = p.category_id;
//     if (!id) return acc;
//     acc[id] = (acc[id] || 0) + 1;
//     return acc;
//   }, {});

//   const categoriesList = Object.entries(countsById)
//     .map(([id, count]) => ({
//       id,
//       name: categoryMap[id] || "Uncategorized",
//       count,
//     }))
//     .sort((a, b) => b.count - a.count);

//   return (
//     <>
//       <section className="min-h-screen mt-28">
//         <div className="container mx-auto px-4 py-8">
//           {/* Breadcrumb */}
//           <nav className="mb-8">
//             <ol className="flex items-center space-x-2 text-sm text-gray-600">
//               <li>
//                 <Link href="/" className="hover:text-[#115D8E] transition-colors">Home</Link>
//               </li>
//               <li className="before:content-['/'] before:mx-2 before:text-gray-400">
//                 <Link href="/blog" className="hover:text-[#115D8E] transition-colors">Blog</Link>
//               </li>
//               <li className="before:content-['/'] before:mx-2 before:text-gray-400">
//                 <span className="text-[#115D8E] font-medium truncate max-w-xs">{post.title}</span>
//               </li>
//             </ol>
//           </nav>

//           <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//             {/* --------- MAIN CONTENT --------- */}
//             <div className="lg:col-span-3">
//               <article className="bg-white rounded-2xl shadow-sm overflow-hidden">
//                 {/* Featured Image */}
//                 <div className="relative h-64 md:h-80 lg:h-96">
//                   <Image
//                     src={post.image || "/images/cybersecurity.jpg"}
//                     alt={post.title || "Blog Visual"}
//                     fill
//                     className="object-cover"
//                   />
//                   <div className="absolute top-4 left-4">
//                     <span className="bg-[#115D8E] text-white text-xs font-medium px-3 py-1.5 rounded-full">
//                       {post.categoryName}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Article Content */}
//                 <div className="p-6 md:p-8">
//                   <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0B4870] mb-4">
//                     {post.title || "Untitled Blog"}
//                   </h1>

//                   {/* Meta Information */}
//                   <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6 pb-4 border-b border-gray-100">
//                     <div className="flex items-center">
//                       <FaRegCalendarAlt className="mr-2" size={14} />
//                       <span>{new Date(post?.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
//                     </div>
//                     <div className="flex items-center">
//                       <FaUser className="mr-2" size={14} />
//                       <span>By {post.author || "Admin"}</span>
//                     </div>
//                     <div className="flex items-center">
//                       <AiOutlineClockCircle className="mr-2" size={16} />
//                       <span>5 min read</span>
//                     </div>
//                   </div>

//                   {/* Article Body */}
//                   <div className="prose max-w-none prose-headings:text-[#0B4870] prose-a:text-[#115D8E] prose-img:rounded-xl">
//                     {post?.description_html ? (
//                       <div dangerouslySetInnerHTML={{ __html: post.description_html }} />
//                     ) : post?.summary ? (
//                       <div dangerouslySetInnerHTML={{ __html: post.summary }} />
//                     ) : (
//                       <div className="text-gray-700">
//                         <p>No content available for this post.</p>
//                       </div>
//                     )}
//                   </div>

//                   {/* Social Sharing and Back Button */}
//                   <div className="mt-8 pt-6 border-t border-gray-100">
//                     <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//                       <div>
//                         <h3 className="text-sm font-medium text-gray-700 mb-2">Share this article:</h3>
//                         <div className="flex space-x-2">
//                           <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#E6F0F9] text-[#115D8E] hover:bg-[#115D8E] hover:text-white transition-colors">
//                             <FaFacebookF size={16} />
//                           </a>
//                           <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#E6F0F9] text-[#115D8E] hover:bg-[#115D8E] hover:text-white transition-colors">
//                             <FaTwitter size={16} />
//                           </a>
//                           <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#E6F0F9] text-[#115D8E] hover:bg-[#115D8E] hover:text-white transition-colors">
//                             <FaWhatsapp size={16} />
//                           </a>
//                         </div>
//                       </div>
                      
//                       <Link
//                         href="/blog"
//                         className="inline-flex items-center gap-2 bg-[#E6F0F9] hover:bg-[#115D8E] text-[#115D8E] hover:text-white font-medium px-5 py-2.5 rounded-lg transition-colors"
//                       >
//                         <BsArrowLeft className="text-lg" />
//                         Back to blog
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </article>

//               {/* Comments Section */}
//               <section className="mt-8">
//                 <Comment />
//               </section>
//             </div>

//             {/* --------- SIDEBAR --------- */}
//             <div className="lg:col-span-1 space-y-6">
//               {/* Trending Posts */}
//               <div className="bg-white rounded-2xl shadow-sm p-6">
//                 <div className="flex items-center mb-4 pb-2 border-b border-gray-100">
//                   <FaArrowTrendUp className="text-[#115D8E] mr-2" size={20} />
//                   <h3 className="text-lg font-semibold text-[#0B4870]">Trending Posts</h3>
//                 </div>
//                 <div className="space-y-4">
//                   {trendingPosts.map((blog, index) => (
//                     <Link
//                       href={blog.slug ? `/blog/${blog.slug}` : "/"}
//                       key={blog.slug || index}
//                       className="flex group items-start gap-3 py-3 border-b border-gray-100 last:border-0 last:pb-0"
//                     >
//                       <div className="flex-shrink-0 relative w-16 h-14 rounded-md overflow-hidden">
//                         <Image
//                           src={blog.image || "/images/cybersecurity.jpg"}
//                           alt="thumb"
//                           fill
//                           className="object-cover group-hover:scale-105 transition-transform duration-300"
//                         />
//                       </div>
//                       <div className="flex-1 min-w-0">
//                         <p className="text-sm font-medium text-gray-800 leading-snug line-clamp-2 group-hover:text-[#115D8E] transition-colors">
//                           {blog.title || "—"}
//                         </p>
//                         <div className="flex items-center text-xs text-gray-500 mt-1">
//                           <span className="bg-[#115D8E] text-white text-[11px] font-semibold px-1.5 py-0.5 rounded mr-2">
//                             #{index + 1}
//                           </span>
//                           <span>{new Date(blog?.created_at).toLocaleDateString()}</span>
//                         </div>
//                       </div>
//                     </Link>
//                   ))}
//                 </div>
//               </div>

//               {/* Recent Posts */}
//               <div className="bg-white rounded-2xl shadow-sm p-6">
//                 <div className="flex items-center mb-4 pb-2 border-b border-gray-100">
//                   <AiOutlineClockCircle className="text-[#115D8E] mr-2" size={20} />
//                   <h3 className="text-lg font-semibold text-[#0B4870]">Recent Posts</h3>
//                 </div>
//                 <div className="space-y-4">
//                   {recentPosts.map((blog, index) => (
//                     <Link
//                       href={blog.slug ? `/blog/${blog.slug}` : "/"}
//                       key={blog.slug || index}
//                       className="flex group items-start gap-3 py-3 border-b border-gray-100 last:border-0 last:pb-0"
//                     >
//                       <div className="flex-shrink-0 relative w-16 h-14 rounded-md overflow-hidden">
//                         <Image
//                           src={blog.image || "/images/cybersecurity.jpg"}
//                           alt="thumb"
//                           fill
//                           className="object-cover group-hover:scale-105 transition-transform duration-300"
//                         />
//                       </div>
//                       <div className="flex-1 min-w-0">
//                         <p className="text-sm font-medium text-gray-800 leading-snug line-clamp-2 group-hover:text-[#115D8E] transition-colors">
//                           {blog.title || "—"}
//                         </p>
//                         <div className="text-xs text-gray-500 mt-1">
//                           {new Date(blog?.created_at).toLocaleDateString()}
//                         </div>
//                       </div>
//                     </Link>
//                   ))}
//                 </div>
//               </div>

//               {/* Categories */}
//               <div className="bg-white rounded-2xl shadow-sm p-6">
//                 <div className="flex items-center mb-4 pb-2 border-b border-gray-100">
//                   <BsFolder className="text-[#115D8E] mr-2" size={20} />
//                   <h3 className="text-lg font-semibold text-[#0B4870]">Categories</h3>
//                 </div>
//                 <div className="space-y-2">
//                   {categoriesList.map((cat) => (
//                     <Link 
//                       href={`/blog`} 
//                       key={cat.id}
//                       className="flex justify-between items-center py-2 px-3 rounded-lg hover:bg-[#E6F0F9] transition-colors group"
//                     >
//                       <span className="text-sm font-medium text-gray-700 group-hover:text-[#115D8E]">
//                         {cat.name}
//                       </span>
//                       <span className="bg-[#E6F0F9] text-[#115D8E] text-xs font-medium px-2 py-1 rounded-full">
//                         {cat.count}
//                       </span>
//                     </Link>
//                   ))}
//                 </div>
//               </div>

        
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }