// // app/blog/[slug]/page.js
// import axios from "axios";
// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import { FaArrowTrendUp } from "react-icons/fa6";
// import { FaRegCalendarAlt, FaFacebookF, FaTwitter, FaWhatsapp, FaFolderOpen } from "react-icons/fa";
// import { AiOutlineClockCircle } from "react-icons/ai";
// import { BsFolder } from "react-icons/bs";
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
//       <section className="container bg-gray-50">
//         <section className="pt-24 min-h-screen">
//           <div className="mx-auto">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pl-10">
//               {/* --------- MAIN --------- */}
//               <div className="md:col-span-2 space-y-6">
//                 <div className="max-w-4xl mx-auto py-6">
//                   <h1 className="text-2xl md:text-4xl font-bold theme-text mb-2">
//                     {post.title || "Untitled Blog"}
//                   </h1>

//                   <div className="md:flex justify-between text-gray-500 text-sm mb-4">
//                     <div className="flex gap-1 md:mt-3">
//                       <FaRegCalendarAlt size={14} className="mt-1" />
//                       <span> {new Date(post?.created_at).toLocaleDateString()}</span>
//                     </div>
//                     <p className="md:mt-3">By : {post.author || "—"}</p>
//                     <p className="md:mt-3">Category : {post.categoryName}</p>
//                   </div>

//                   <div className="rounded-xl overflow-hidden mb-6">
//                     <Image
//                       src={post.image || "/images/cybersecurity.jpg"}
//                       alt={post.title || "Blog Visual"}
//                       width={1000}
//                       height={500}
//                       className="w-full object-cover max-h-[300px] md:max-h-[500px]"
//                     />
//                   </div>

//                   <div className="mt-4">
//                     <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
//                       {/* Social */}
//                       <div className="md:col-span-1 flex md:block justify-center">
//                         <div className="flex md:flex-col gap-4 md:mt-6">
//                           <Link href="#" className="text-[#115D8E] hover:text-white border w-fit p-2 rounded-full hover:bg-[#115D8E]">
//                             <FaWhatsapp size={24} />
//                           </Link>
//                           <Link href="#" className="text-[#115D8E] hover:text-white border w-fit p-2 rounded-full hover:bg-[#115D8E]">
//                             <FaFacebookF size={24} />
//                           </Link>
//                           <Link href="#" className="text-[#115D8E] hover:text-white border w-fit p-2 rounded-full hover:bg-[#115D8E]">
//                             <FaTwitter size={24} />
//                           </Link>
//                           <Link href="#" className="text-[#115D8E] hover:text-white border w-fit p-2 rounded-full hover:bg-[#115D8E]">
//                             <FaFolderOpen size={24} />
//                           </Link>
//                         </div>
//                       </div>

//                       {/* Content */}
//                       <div className="md:col-span-11 ps-3 md:pe-0 md:mt-6">
//                         {post?.description_html ? (
//                           <div dangerouslySetInnerHTML={{ __html: post.description_html }} />
//                         ) : post?.summary ? (
//                           <div dangerouslySetInnerHTML={{ __html: post.summary }} />
//                         ) : (
//                           <>
//                             <h2 className="text-2xl font-semibold mb-2">Summary</h2>
//                             <p className="text-gray-700 leading-relaxed mb-4">No content found.</p>
//                           </>
//                         )}

//                         <Link
//                           href="/blog"
//                           className="font-semibold bg-gray-100 shadow-[0_8px_15px_rgba(138,173,187)] rounded-lg inline-flex text-base px-3 md:px-5 py-2 md:py-3 text-center theme-text mt-5 w-fit"
//                         >
//                           <IoIosArrowBack className="mt-1 me-1" />
//                           Back to blog
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* --------- SIDEBAR --------- */}
//               <div className="h-fit md:pt-8">
//                 <div className="lg:sticky top-24 max-w-full lg:max-w-sm space-y-8">
//                   {/* Trending (5) */}
//                   <div className="rounded-xl border-2 border-[#CDE5F5] p-4">
//                     <span className="bg-gradient-to-r from-[#777777] flex w-fit align-middle to-[#115D8E] text-white shadow-[0_4px_40px_rgba(138,173,187)] px-7 py-1 rounded-full text-sm font-medium">
//                       <FaArrowTrendUp className="text-white me-2" size={20} />
//                       <h3 className="text-md font-semibold text-white">Trending Blog</h3>
//                     </span>
//                     <div className="space-y-4 mt-3">
//                       {trendingPosts.map((blog, index) => (
//                         <Link
//                           href={blog.slug ? `/blog/${blog.slug}` : "/"}
//                           key={blog.slug || index}
//                           className="flex flex-col sm:flex-row items-start gap-3 border-b border-[#CDE5F5] pb-3"
//                         >
//                           <Image
//                             src={blog.image || "/images/cybersecurity.jpg"}
//                             alt="thumb"
//                             width={80}
//                             height={64}
//                             className="w-20 h-16 object-cover rounded-md"
//                           />
//                           <div className="flex flex-col justify-between w-full">
//                             <p className="text-sm font-medium text-gray-800 leading-snug">{blog.title || "—"}</p>
//                             <div className="flex items-center justify-between text-xs text-gray-500 mt-2 gap-3">
//                               <span className="bg-[#115D8E] text-white text-[11px] font-semibold px-2 py-[1px] rounded-sm">
//                                 #{blog.rank || 1}
//                               </span>
//                               <span className="flex items-center gap-1">
//                                 <FaRegCalendarAlt size={13} />
//                                  {new Date(blog?.created_at).toLocaleDateString()}
//                               </span>
//                             </div>
//                           </div>
//                         </Link>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Recent (5) */}
//                   <div className="rounded-xl border-2 border-[#CDE5F5] p-4">
//                     <span className="bg-gradient-to-r from-[#777777] flex w-fit align-middle to-[#115D8E] text-white shadow-[0_4px_40px_rgba(138,173,187)] px-9 py-1 rounded-full text-sm font-medium">
//                       <AiOutlineClockCircle className="text-white me-2" size={20} />
//                       <h3 className="text-md font-semibold text-white">Recent Post</h3>
//                     </span>
//                     <div className="space-y-4 mt-3">
//                       {recentPosts.map((blog, index) => (
//                         <Link
//                           href={blog.slug ? `/blog/${blog.slug}` : "/"}
//                           key={blog.slug || index}
//                           className="flex flex-col sm:flex-row items-start gap-3 border-b border-[#CDE5F5] pb-3"
//                         >
//                           <Image
//                             src={blog.image || "/images/cybersecurity.jpg"}
//                             alt="thumb"
//                             width={80}
//                             height={64}
//                             className="w-20 h-16 object-cover rounded-md"
//                           />
//                           <div className="flex flex-col justify-between w-full">
//                             <p className="text-sm font-medium text-gray-800 leading-snug">{blog.title || "—"}</p>
//                             <div className="flex items-center justify-end text-xs text-gray-500 mt-2 gap-3">
//                               <span className="flex items-center gap-1">
//                                 <FaRegCalendarAlt size={13} />
//                                  {new Date(blog?.created_at).toLocaleDateString()}
//                               </span>
//                             </div>
//                           </div>
//                         </Link>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Categories with counts + link */}
//                   <div className="rounded-xl bg-[#F0F9FE] p-4">
//                     <span className="bg-gradient-to-r from-[#777777] flex w-fit align-middle px-10 to-[#115D8E] text-white shadow-[0_4px_40px_rgba(138,173,187)] py-1 rounded-full text-sm font-medium">
//                       <BsFolder className="text-white me-2" size={20} />
//                       <h3 className="text-md font-semibold text-white">Categories</h3>
//                     </span>
//                     <div className="space-y-4 mt-3">
//                       <ul className="text-sm space-y-1">
//                         {categoriesList.map((cat) => (
//                           <Link href={`/blog`} key={cat.id}>
//                             <li className="transition-all cursor-pointer px-2 py-1 text-[#39464F] rounded hover:bg-white hover:shadow-sm hover:text-[#115D8E] font-medium flex justify-between">
//                               <span>{cat.name}</span>
//                               <span>({cat.count})</span>
//                             </li>
//                           </Link>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>

//                 </div>
//               </div>
//               {/* --------- /SIDEBAR --------- */}
//             </div>
//           </div>
//         </section>

//         <section>
//           <Comment />
//         </section>
//       </section>
//     </>
//   );
// }



// app/blog/[slug]/page.js
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaRegCalendarAlt, FaFacebookF, FaTwitter, FaWhatsapp, FaFolderOpen, FaUser } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsFolder, BsArrowLeft } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import Comment from "@/components/Comment";

const BLOG_API = "https://cms.sevenunique.com/apis/blogs/get-blogs.php?website_id=2&status=2";
const AUTH_HEADER = { Authorization: "Bearer jibhfiugh84t3324fefei#*fef" };

async function getAllPosts() {
  const res = await axios.get(BLOG_API, { headers: AUTH_HEADER });
  return res?.data?.data || [];
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.filter(p => p?.slug).map(p => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function fetchCategoryById(categoryId) {
  if (!categoryId) return null;
  try {
    const res = await axios.get(
      `https://cms.sevenunique.com/apis/category/get_category_by_id.php?category_id=${categoryId}`,
      { headers: AUTH_HEADER }
    );
    return res?.data?.data || null;
  } catch (e) {
    console.error("Failed to fetch category:", e);
    return null;
  }
}

export default async function BlogDetailPage({ params }) {
  const { slug } = params;

  // All posts
  const rawPosts = await getAllPosts();

  // Build category map (id -> name)
  const categoryIds = [...new Set(rawPosts.map(p => p.category_id))].filter(Boolean);
  const categoryMap = {};
  await Promise.all(
    categoryIds.map(async (id) => {
      const cat = await fetchCategoryById(id);
      if (cat?.name) categoryMap[id] = cat.name;
    })
  );

  // Enrich posts with categoryName
  const allPosts = rawPosts.map(p => ({
    ...p,
    categoryName: categoryMap[p.category_id] || "Uncategorized",
  }));

  const post = allPosts.find(p => p.slug === slug);
  if (!post) notFound();

  // ---- Trending (top 5) ----
  const trendingPosts = allPosts.filter(p => String(p?.is_trending) === "1").slice(0, 5);

  // ---- Recent (top 5 by date) ----
  const recentPosts = [...allPosts]
    .sort((a, b) => new Date(b.date || b.created_at) - new Date(a.date || a.created_at))
    .slice(0, 5);

  // ---- Category counts from API data ----
  const countsById = rawPosts.reduce((acc, p) => {
    const id = p.category_id;
    if (!id) return acc;
    acc[id] = (acc[id] || 0) + 1;
    return acc;
  }, {});

  const categoriesList = Object.entries(countsById)
    .map(([id, count]) => ({
      id,
      name: categoryMap[id] || "Uncategorized",
      count,
    }))
    .sort((a, b) => b.count - a.count);

  return (
    <>
      <section className="min-h-screen mt-28">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-[#115D8E] transition-colors">Home</Link>
              </li>
              <li className="before:content-['/'] before:mx-2 before:text-gray-400">
                <Link href="/blog" className="hover:text-[#115D8E] transition-colors">Blog</Link>
              </li>
              <li className="before:content-['/'] before:mx-2 before:text-gray-400">
                <span className="text-[#115D8E] font-medium truncate max-w-xs">{post.title}</span>
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* --------- MAIN CONTENT --------- */}
            <div className="lg:col-span-3">
              <article className="bg-white rounded-2xl shadow-sm overflow-hidden">
                {/* Featured Image */}
                <div className="relative h-64 md:h-80 lg:h-96">
                  <Image
                    src={post.image || "/images/cybersecurity.jpg"}
                    alt={post.title || "Blog Visual"}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#115D8E] text-white text-xs font-medium px-3 py-1.5 rounded-full">
                      {post.categoryName}
                    </span>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6 md:p-8">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0B4870] mb-4">
                    {post.title || "Untitled Blog"}
                  </h1>

                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6 pb-4 border-b border-gray-100">
                    <div className="flex items-center">
                      <FaRegCalendarAlt className="mr-2" size={14} />
                      <span>{new Date(post?.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center">
                      <FaUser className="mr-2" size={14} />
                      <span>By {post.author || "Admin"}</span>
                    </div>
                    <div className="flex items-center">
                      <AiOutlineClockCircle className="mr-2" size={16} />
                      <span>5 min read</span>
                    </div>
                  </div>

                  {/* Article Body */}
                  <div className="prose max-w-none prose-headings:text-[#0B4870] prose-a:text-[#115D8E] prose-img:rounded-xl">
                    {post?.description_html ? (
                      <div dangerouslySetInnerHTML={{ __html: post.description_html }} />
                    ) : post?.summary ? (
                      <div dangerouslySetInnerHTML={{ __html: post.summary }} />
                    ) : (
                      <div className="text-gray-700">
                        <p>No content available for this post.</p>
                      </div>
                    )}
                  </div>

                  {/* Social Sharing and Back Button */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <h3 className="text-sm font-medium text-gray-700 mb-2">Share this article:</h3>
                        <div className="flex space-x-2">
                          <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#E6F0F9] text-[#115D8E] hover:bg-[#115D8E] hover:text-white transition-colors">
                            <FaFacebookF size={16} />
                          </a>
                          <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#E6F0F9] text-[#115D8E] hover:bg-[#115D8E] hover:text-white transition-colors">
                            <FaTwitter size={16} />
                          </a>
                          <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#E6F0F9] text-[#115D8E] hover:bg-[#115D8E] hover:text-white transition-colors">
                            <FaWhatsapp size={16} />
                          </a>
                        </div>
                      </div>
                      
                      <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 bg-[#E6F0F9] hover:bg-[#115D8E] text-[#115D8E] hover:text-white font-medium px-5 py-2.5 rounded-lg transition-colors"
                      >
                        <BsArrowLeft className="text-lg" />
                        Back to blog
                      </Link>
                    </div>
                  </div>
                </div>
              </article>

              {/* Comments Section */}
              <section className="mt-8">
                <Comment />
              </section>
            </div>

            {/* --------- SIDEBAR --------- */}
            <div className="lg:col-span-1 space-y-6">
              {/* Trending Posts */}
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <div className="flex items-center mb-4 pb-2 border-b border-gray-100">
                  <FaArrowTrendUp className="text-[#115D8E] mr-2" size={20} />
                  <h3 className="text-lg font-semibold text-[#0B4870]">Trending Posts</h3>
                </div>
                <div className="space-y-4">
                  {trendingPosts.map((blog, index) => (
                    <Link
                      href={blog.slug ? `/blog/${blog.slug}` : "/"}
                      key={blog.slug || index}
                      className="flex group items-start gap-3 py-3 border-b border-gray-100 last:border-0 last:pb-0"
                    >
                      <div className="flex-shrink-0 relative w-16 h-14 rounded-md overflow-hidden">
                        <Image
                          src={blog.image || "/images/cybersecurity.jpg"}
                          alt="thumb"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-800 leading-snug line-clamp-2 group-hover:text-[#115D8E] transition-colors">
                          {blog.title || "—"}
                        </p>
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                          <span className="bg-[#115D8E] text-white text-[11px] font-semibold px-1.5 py-0.5 rounded mr-2">
                            #{index + 1}
                          </span>
                          <span>{new Date(blog?.created_at).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <div className="flex items-center mb-4 pb-2 border-b border-gray-100">
                  <AiOutlineClockCircle className="text-[#115D8E] mr-2" size={20} />
                  <h3 className="text-lg font-semibold text-[#0B4870]">Recent Posts</h3>
                </div>
                <div className="space-y-4">
                  {recentPosts.map((blog, index) => (
                    <Link
                      href={blog.slug ? `/blog/${blog.slug}` : "/"}
                      key={blog.slug || index}
                      className="flex group items-start gap-3 py-3 border-b border-gray-100 last:border-0 last:pb-0"
                    >
                      <div className="flex-shrink-0 relative w-16 h-14 rounded-md overflow-hidden">
                        <Image
                          src={blog.image || "/images/cybersecurity.jpg"}
                          alt="thumb"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-800 leading-snug line-clamp-2 group-hover:text-[#115D8E] transition-colors">
                          {blog.title || "—"}
                        </p>
                        <div className="text-xs text-gray-500 mt-1">
                          {new Date(blog?.created_at).toLocaleDateString()}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <div className="flex items-center mb-4 pb-2 border-b border-gray-100">
                  <BsFolder className="text-[#115D8E] mr-2" size={20} />
                  <h3 className="text-lg font-semibold text-[#0B4870]">Categories</h3>
                </div>
                <div className="space-y-2">
                  {categoriesList.map((cat) => (
                    <Link 
                      href={`/blog`} 
                      key={cat.id}
                      className="flex justify-between items-center py-2 px-3 rounded-lg hover:bg-[#E6F0F9] transition-colors group"
                    >
                      <span className="text-sm font-medium text-gray-700 group-hover:text-[#115D8E]">
                        {cat.name}
                      </span>
                      <span className="bg-[#E6F0F9] text-[#115D8E] text-xs font-medium px-2 py-1 rounded-full">
                        {cat.count}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

        
            </div>
          </div>
        </div>
      </section>
    </>
  );
}