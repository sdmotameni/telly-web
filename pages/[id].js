import { Component } from "react";

import ProfileService from "../services/profileService";

import Loading from "../components/loading";
import Profile from "../components/profile";

export default class Id extends Component {
  state = { component: <Loading /> };

  componentDidMount() {
    const id = window.location.pathname.substring(1);

    ProfileService.getProfile(id)
      .then(({ data }) => {
        this.setState({ component: <Profile data={data} /> });
      })
      .catch(({ _, serversDown }) => {
        if (!serversDown) {
          this.setState({
            component: (
              <div className="mt-10 text-sm font-light text-center text-gray-700 opacity-70">
                No Telly profile found at this ID. Contact support@gettelly.com
                if you believe this is an error.
              </div>
            ),
          });
        } else {
          window.location = "/maintenance";
        }
      });
  }

  render() {
    return this.state.component;
  }
}
