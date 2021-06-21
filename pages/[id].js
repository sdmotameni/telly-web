import { Component } from "react";

import ProfileService from "../services/profileService";

import Loading from "../components/loading";
import Profile from "../components/profile";
import Welcome from "../components/welcome";

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
          this.setState({ component: <Welcome /> });
        } else {
          window.location = "/maintenance";
        }
      });
  }

  render() {
    return this.state.component;
  }
}
