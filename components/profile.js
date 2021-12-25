import Head from "next/head";

import ProfileHeader from "./profileHeader";
import LinkButton from "./linkButton";
import Website from "./website";

function Profile({ data }) {
  const noLinks =
    data.links == undefined || Object.keys(data.links).length === 0;

  return (
    <>
      <Head>
        <title>{data.name} - Telly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-screen bg-gray-100">
        <div className="p-4 mx-auto">
          <ProfileHeader
            profileId={data.profileId}
            photoUrl={data.photoUrl}
            name={data.name}
            bio={data.bio}
          />
          {data.website && <Website url={data.website} />}
          <div className="mt-4">
            {noLinks && (
              <p className="px-4 py-2 text-xl tracking-tight text-center bg-white rounded-md shadow">
                Once <span className="text-blue-500 ">{data.name}</span> adds
                social links, they will appear here.
              </p>
            )}
            {data.links &&
              Object.keys(data.links).map((ele) => {
                return (
                  <span key={ele}>{LinkButton(ele, data.links[ele])}</span>
                );
              })}
          </div>
        </div>
      </main>
    </>
  );
}

export default Profile;
