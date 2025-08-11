"use client";
import Image from "next/image";
import { useState, useRef } from "react";

export default function CommentsPage() {
  const editorRef = useRef(null);
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Debitis Aut",
      date: "2 Weeks Ago",
      message:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas At vero eos",
    },
    {
      id: 2,
      name: "Debitis Aut",
      date: "2 Weeks Ago",
      message:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas At vero eosAt vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
    },
  ]);

  const formatText = (command) => {
    document.execCommand(command, false);
  };

  const handleSubmit = () => {
    if (!editorRef.current) return;
    const content = editorRef.current.innerHTML.trim();
    if (content) {
      setComments([
        ...comments,
        {
          id: Date.now(),
          name: "You",
          date: "Just Now",
          message: content,
        },
      ]);
      editorRef.current.innerHTML = "";
    }
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 mx-auto">
      {/* Comment Input */}
      <div
        className="border-2 rounded-lg p-4 mb-6 w-full"
        style={{ borderColor: "#CDE5F5" }}
      >
        <div
          ref={editorRef}
          contentEditable
          className="w-full min-h-[100px] max-h-[160px] overflow-y-auto resize-none border-none focus:outline-none text-gray-700 placeholder:text-gray-400"
          placeholder="Add comment..."
        ></div>

        {/* Formatting Buttons */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex space-x-3 sm:space-x-5 text-gray-500">
            <button
              onClick={() => formatText("bold")}
              className="hover:text-black font-bold"
              type="button"
            >
              B
            </button>
            <button
              onClick={() => formatText("italic")}
              className="hover:text-black italic"
              type="button"
            >
              I
            </button>
            <button
              onClick={() => formatText("underline")}
              className="hover:text-black underline"
              type="button"
            >
              U
            </button>
            <span className="hidden sm:inline">|</span>
            <button className="hover:text-black" type="button">
              <Image
                src="/Image/Smile.png"
                alt="Icon"
                width={16}
                height={16}
                className="mx-auto"
              />
            </button>
            <button className="hover:text-black" type="button">
              <Image
                src="/Image/image.png"
                alt="Icon"
                width={19}
                height={19}
                className="mx-auto"
              />
            </button>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-[#005E9D] text-white px-6 py-1.5 rounded-3xl shadow hover:bg-[#004e85] mt-4 sm:mt-6"
        >
          Submit
        </button>
      </div>

      {comments.map((comment) => (
        <div
          key={comment.id}
          className="mb-8 md:mb-12 lg:mb-16 relative pl-8 sm:pl-10 md:pl-12 border-l-2 border-[#CDE5F5] group"
        >
          {/* Avatar */}
          <div className="absolute -left-4 sm:-left-5 top-0 w-8 h-8 sm:w-10 sm:h-10 bg-[#E4EDF3] rounded-full flex items-center justify-center font-semibold text-sm sm:text-base">
            {comment.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase()}
          </div>

          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline">
              <h3 className="font-bold text-[#005E9D] text-base sm:text-lg">
                {comment.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 sm:ml-4 md:ml-8">
                {comment.date}
              </p>
            </div>
            <div
              className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed max-h-40 overflow-y-auto mt-2 sm:mt-4"
              dangerouslySetInnerHTML={{ __html: comment.message }}
            />
            <div className="flex flex-wrap gap-x-4 sm:gap-x-8 gap-y-2 text-xs sm:text-sm text-gray-600">
              <div className="flex items-center">
                <Image
                  src="/Image/Thumbsup.png"
                  alt="Icon"
                  width={16}
                  height={16}
                  className="me-1 sm:me-2 w-4 sm:w-5"
                />
                <button className="hover:text-black">Like</button>
              </div>
              <div className="flex items-center">
                <Image
                  src="/Image/commentbox.png"
                  alt="Icon"
                  width={16}
                  height={16}
                  className="me-1 sm:me-2 w-4 sm:w-5"
                />
                <button className="hover:text-black">Reply</button>
              </div>
              <div className="flex items-center">
                <Image
                  src="/Image/Share4.png"
                  alt="Icon"
                  width={16}
                  height={16}
                  className="me-1 sm:me-2 w-4 sm:w-5"
                />
                <button className="hover:text-black">Share</button>
              </div>

              <div className="ms-auto group relative flex items-center">
                <span className="cursor-pointer">
                  <Image
                    src="/Image/more_horiz.png"
                    alt="Icon"
                    width={16}
                    height={16}
                    className="me-1 sm:me-2 w-4 sm:w-5"
                  />
                </span>
                <div className="box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05)">
                  <span className="absolute right-0 top-full mt-1 px-3 sm:px-4 py-1 bg-white text-gray-700 shadow-[0px_0px_7.6px_0px_rgba(0,0,0,0.1)] hover:bg-gray-100 text-xs sm:text-sm font-medium rounded hidden group-hover:block whitespace-nowrap">
                    Report
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}