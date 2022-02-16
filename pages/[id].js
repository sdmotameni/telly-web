import { useEffect } from "react";

import ProfileService from "../services/profileService";

import Profile from "../components/profile";

export async function getServerSideProps({ params, query }) {
  const { id } = params;

  const { data } = await ProfileService.getProfile(id);

  return {
    props: {
      data,
      query,
    },
  };
}

export default function ID({ data, query }) {
  const NoProfileComponent = (
    <div className="mt-10 text-sm font-light text-center text-gray-700 opacity-70">
      No Telly profile found at this ID. Contact support@gettelly.com if you
      believe this is an error.
    </div>
  );

  return data ? <Profile data={data} header={!query["h"]} /> : <div>hi</div>;
}

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
// this.setState({
//   component: (
//     <div className="mt-10 text-sm font-light text-center text-gray-700 opacity-70">
//       No Telly profile found at this ID. Contact support@gettelly.com
//       if you believe this is an error.
//     </div>
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
