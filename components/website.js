import Image from "next/image";

export default function Website({ url }) {
  return (
    <a
      href={"https://" + url}
      target="_blank"
      className="flex items-center px-3 py-3 mt-4 bg-white rounded-md shadow-3xl"
    >
      <Image src="/website.png" alt="website icon" height={22} width={22} />
      <div className="ml-2 text-sm text-gray-800 opacity-90">{url}</div>
    </a>
  );
}
