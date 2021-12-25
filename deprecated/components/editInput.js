export default function EditInput({ title, value, type = "text" }) {
  return (
    <div className="flex items-center overflow-hidden bg-white border border-gray-300 rounded-md">
      <p className="w-1/3 py-3 pl-2 font-semibold text-white bg-gray-500">
        {title}
      </p>
      <input
        className="w-full h-full ml-3 outline-none"
        value={value}
        type={type}
      />
    </div>
  );
}
