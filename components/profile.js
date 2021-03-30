import Head from "next/head";
import ProfileHeader from "./profileHeader";
import LinkButton from "./linkButton";
import Navbar from "./navbar";
import EditButtons from "./editButtons";
import Footer from "./footer";

function Profile({ data }) {
  const firstName = data.name.substr(0, data.name.indexOf(" "));
  const noLinks =
    data.links == undefined || Object.keys(data.links).length === 0;

  return (
    <div>
      <Head>
        <title>{data.name} - Telly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-screen bg-gray-100">
        {false && <Navbar name={firstName} />}
        <div className="p-4 mx-auto">
          <ProfileHeader name={data.name} bio="High Point University" />
          {false && (
            <div className="pt-2">
              <EditButtons />
            </div>
          )}
          <div className="mt-4">
            {noLinks && (
              <p className="px-4 py-2 text-xl text-center bg-white rounded-md shadow">
                Once <span className="text-blue-500">{firstName}</span> adds
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
        <Footer />
      </main>
    </div>
  );
}

export default Profile;
