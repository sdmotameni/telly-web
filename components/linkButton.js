import Image from "next/image";

import getMetaDetails from "../utils/getMetaDetails";

const LinkButton = (platform, handle) => {
  const { title, image, url } = getMetaDetails(platform, handle);
  return (
    <div>
      <a href={url}>
        <div className="flex px-3 py-1 mt-3 bg-white rounded-md shadow-3xl">
          <div className="flex w-full">
            <Image
              src={image}
              alt={platform + " Icon"}
              height={64}
              width={64}
            />
            <div className="flex flex-col justify-center ml-3">
              <h1 className="font-bold capitalize">{title}</h1>
              <p className="-mt-1 opacity-70">{handle}</p>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="my-auto text-black w-7 h-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </a>
    </div>
  );
};

export default LinkButton;
