import VCardButton from "../components/vcardButton";

export default function ProfileHeader({ profileId, photoUrl, name, bio }) {
  return (
    <>
      <div className="flex flex-col items-center px-2 py-3 bg-white rounded-md shadow-lg ">
        <img
          className="object-cover h-32 rounded-full shadow-lg"
          src={photoUrl}
          alt=""
        />
        <div className="flex flex-col items-center justify-center w-full space-y-3">
          <div>
            <h1 className="mt-2 text-2xl font-bold tracking-tight text-center">
              {name}
            </h1>
            <h2 className="font-light tracking-tight text-center text-gray-500">
              {bio}
            </h2>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <VCardButton profileId={profileId} />
      </div>
    </>
  );
}
