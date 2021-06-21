import Head from "next/head";
import Image from "next/image";

import Footer from "../components/footer";

function Maintenance() {
  return (
    <>
      <Head>
        <title>Login - Telly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center w-full h-screen p-4 bg-gray-100">
        <Image src="/logo.png" alt="me" width={100} height={100} />
        <h1 className="my-3 text-3xl font-extrabold tracking-tight text-center">
          Our servers are undergoing routine maintenance.{" "}
          <div className="text-blue-600">Check back later.</div>
        </h1>
        <Image src="/maintenance.png" alt="me" width={250} height={250} />
        <Footer styles="mt-3" />
      </main>
    </>
  );
}

export default Maintenance;
