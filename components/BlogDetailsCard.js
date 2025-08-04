

export default function BlogDetailsCard({ blogs }) {
    return (
        <div className="space-y-4 mt-3 ">
            {blogs.map((blog, index) => (
                <Link href="" key={index} className="flex items-start gap-3  border-b-2 border-[#CDE5F5] py-3">
                    <Image
                        src={blog.image}
                        alt="thumb"
                        width={40}
                        height={40}
                        className="w-20 h-16 object-cover rounded-md"
                    />
                    <div className="flex flex-col justify-between height_blogcard">
                        <p className="text-sm font-medium leading-snug text-gray-800">
                            {blog.title}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500 mt-1 gap-3">
                            <span className="bg-[#115D8E] text-white text-[11px] font-semibold px-2 py-[1px] rounded-sm">#{blog.rank}
                            </span>
                            <span className="flex items-center text-gray-500 gap-1">
                                <FaRegCalendarAlt size={14} />
                                {blog.date}
                            </span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
