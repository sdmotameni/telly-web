import { Component } from "react";
import Loading from "../components/loading";
import auth from "../services/auth";

export default class validate extends Component {
  state = { component: <Loading /> };

  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("t");

    auth
      .validateToken(token)
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
