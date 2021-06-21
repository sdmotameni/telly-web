import { Component } from "react";
import Head from "next/head";

import UserService from "../services/userService";

import Navbar from "../components/navbar";
import Footer from "../components/footer";


export default class Links extends Component {
  state = { data: "", profile: "", errorMsg: null };

  async componentDidMount() {
    try {
      const { data } = await UserService.getMe();
      this.setState({ profile: data });
    } catch {
      window.location = "/login";
    }
  }

  render() {
    const { profile, errorMsg } = this.state;
    return (
      <>
        <Head>
          <title>Links - Telly</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="w-full h-screen bg-gray-100">
          <Navbar name={profile.name} />
          <div className="px-4 py-3">
            <h1 className="mb-1 text-2xl font-semibold text-center">Links</h1>
            {errorMsg && (
              <h2 className="px-3 py-4 my-3 text-center text-red-800 bg-red-200 rounded-lg shadow-inner">
                {errorMsg}
              </h2>
            )}
            <div className="flex flex-col items-center">hello</div>
          </div>
          <Footer />
        </main>
      </=>
    );
  }
}
