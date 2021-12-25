import Link from "next/link";

export default function EditButtons() {
  const styles =
    "w-full py-2 font-medium text-center text-white bg-gray-700 rounded-md shadow w-25";

  return (
    <div className="flex items-center space-x-3">
      <Link href="/settings">
        <a className={styles}>Settings</a>
      </Link>
      <Link href="/links">
        <a className={styles}>Edit Links</a>
      </Link>
    </div>
  );
}
