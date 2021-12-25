import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Footer from "../../components/footer";

export default function Welcome() {
  return (
    <>
      <Head>
        <title>Welcome - Telly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-screen p-4 space-y-6 bg-gray-100">
        <h1 className="mt-5 text-5xl font-extrabold text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
            Hey!
          </span>
        </h1>
        <h2 className="text-3xl tracking-tight text-center">
          Let's setup your <span className="text-blue-500">Telly</span>,
        </h2>
        <p className="px-6 py-2 font-mono leading-tight tracking-tight text-center rounded-md">
          Peel off the sticker and attach your Telly to the back of your phone!
        </p>
        <div className="text-center">
          <Image src="/onboarding.gif" alt="" width={500} height={300} />
        </div>
        <p className="px-6 font-mono text-xs leading-tight tracking-tight text-center rounded-md opacity-70">
          You will never need to remove your Telly from your phone. In the
          future, just login to update your profile.
        </p>
        <Link
          href={{
            pathname: "/register",
            query: { profileId: window.location.pathname.substring(1) },
          }}
        >
          <a className="flex items-center justify-center px-4 py-2 mt-3 font-semibold text-white bg-blue-500 rounded-full outline-none">
            <span>Continue</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 ml-2 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </Link>
        <Footer />
      </div>
    </>
  );
}
