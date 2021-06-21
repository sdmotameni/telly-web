import auth from "../services/authService";
import { useRouter } from "next/router";

const Logout = (router) => {
  auth.logout();
  router.reload();
};

export default function Navbar({ name }) {
  const router = useRouter();
  const formattedName = name && name.trim().split(" ");
  const firstName = formattedName && formattedName[0];

  return (
    <nav className="sticky top-0 flex items-center justify-between w-full px-2 py-4 bg-gray-700">
      <p className="text-lg font-medium text-white">
        {" "}
        Welcome back, {firstName}
      </p>
      <div
        onClick={() => Logout(router)}
        className="px-3 py-1 font-normal text-white bg-red-500 rounded-full"
      >
        Logout
      </div>
    </nav>
  );
}
