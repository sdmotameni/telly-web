export default function VCardButton({ profileId }) {
  const handleClick = (e) => {
    e.preventDefault();
    window.location = `https://api.gettelly.com/profile/${profileId}/vcard`;
  };

  return (
    <a
      href="#"
      onClick={handleClick}
      className="flex items-center justify-center px-3 py-2 font-semibold tracking-tight text-white bg-indigo-800 rounded-lg outline-none"
    >
      <svg className="w-5 h-5 mr-1 fill-current" viewBox="0 0 139 139">
        <path d="M67.317,81.952c-9.284-7.634-15.483-17.054-18.742-22.414l-2.431-4.583c0.85-0.912,7.332-7.853,10.141-11.619  c3.53-4.729-1.588-9-1.588-9S40.296,19.933,37.014,17.076c-3.282-2.861-7.06-1.272-7.06-1.272  c-6.898,4.457-14.049,8.332-14.478,26.968C15.46,60.22,28.705,78.216,43.028,92.148c14.346,15.734,34.043,31.504,53.086,31.486  c18.634-0.425,22.508-7.575,26.965-14.473c0,0,1.59-3.775-1.268-7.06c-2.86-3.284-17.265-17.688-17.265-17.688  s-4.268-5.119-8.998-1.586c-3.525,2.635-9.855,8.496-11.38,9.917C84.171,92.749,73.582,87.104,67.317,81.952z" />
      </svg>
      Add to Contacts
    </a>
  );
}
