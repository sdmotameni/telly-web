import ProfileService from "../services/profileService";

import Profile from "../components/profile";
import NotFound from "../components/NotFound";

// Functional Component w/ server side props
export default function Id({ profile, header }) {
  return profile ? <Profile data={profile} header={header} /> : <NotFound />;
}

export async function getServerSideProps({ query }) {
  let profile;

  try {
    const { data } = await ProfileService.getProfile(query.id);
    profile = data;
  } catch ({ _, seversDown }) {
    profile = null;
  }

  return {
    props: {
      profile,
      header: query.h ? false : true,
    },
  };
}

// Function Component
// const [Component, setComponent] = useState(<Loading />);
// const [data, setData] = useState(null);

// const loadProfile = async (id) => {
//   try {
//     const { data } = await ProfileService.getProfile(id);
//     setData(data);
//   } catch ({ _, seversDown }) {}
// };

// useEffect(() => {
//   data && setComponent(<Profile data={data} />);
// }, [data]);

// useEffect(() => {
//   const id = window.location.pathname.substring(1);
//   console.log(profile);
//   // loadProfile(id);
// }, []);

// Class Component
// export default class Id extends Component {
//   state = { component: <Loading /> };

//   componentDidMount() {
//     const id = window.location.pathname.substring(1);

//     const urlSearchParams = new URLSearchParams(window.location.search);
//     const params = Object.fromEntries(urlSearchParams.entries());

//     ProfileService.getProfile(id)
//       .then(({ data }) => {
//         this.setState({
//           component: <Profile data={data} header={!params["h"]} />,
//         });
//       })
//       .catch(({ _, serversDown }) => {
//         if (!serversDown) {
//           this.setState({
//             component: (
//               <div className="mt-10 text-sm font-light text-center text-gray-700 opacity-70">
//                 No Telly profile found at this ID. Contact support@gettelly.com
//                 if you believe this is an error.
//               </div>
//             ),
//           });
//         } else {
//           window.location = "/maintenance";
//         }
//       });
//   }

//   render() {
//     return this.state.component;
//   }
// }
