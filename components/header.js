import React from "react";

export default function Header() {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-center py-3 font-semibold text-gray-800 bg-white shadow-md text-md">
      Want your own Telly?
      <a
        href="https://gettelly.com/"
        target="_blank"
        className="px-4 ml-1 text-white bg-indigo-800 rounded-md"
      >
        Buy Now
      </a>
    </div>
  );
}
