import { Component } from "react";

import AuthService from "../services/authService";

import Loading from "../components/loading";

export default class validate extends Component {
  state = { component: <Loading /> };

  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("t");

    AuthService.validateToken(token)
      .then(({ headers }) => {
        auth.storeToken(headers["x-auth-token"]);
        window.location = "/me";
      })
      .catch(({ _, serversDown }) => {
        if (!serversDown) {
          // if not valid, return link has expired
          window.location = "/login?e=true";
        } else {
          window.location = "/maintenance";
        }
      });
  }

  render() {
    return this.state.component;
  }
}
