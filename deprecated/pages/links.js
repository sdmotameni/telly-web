import config from "../config.json";
import { Component } from "react";
import Image from "next/image";
import Head from "next/head";

import UserService from "../services/userService";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default class New extends Component {
  state = {
    data: "",
    profileData: "",
    links: [],
    errorMsg: null,
  };

  handleChange = ({ currentTarget }) => {
    const data = { ...this.state.data };
    data[currentTarget.name] = currentTarget.value;
    this.setState({ data });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.doSubmit();
  };

  renderInput(styles, type, name, placeholder, onChange) {
    return (
      <input
        className={styles}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={this.state.data && this.state.data[name]}
      />
    );
  }

  renderButton(styles, title) {
    return (
      <button className={styles} onClick={this.handleSubmit} type="submit">
        {title}
      </button>
    );
  }

  async componentDidMount() {
    try {
      const { data } = await UserService.getMe();
      let links = [];
      Object.keys(config).forEach((ele) => {
        const obj = {};
        obj["name"] = config[ele].title.toLowerCase();
        obj["iconPath"] = config[ele].image;

        links.push(obj);
      });

      this.setState({ data: data.links, profileData: data, links });
    } catch {
      window.location = "/login";
    }
  }

  async doSubmit() {
    const obj = {};
    Object.assign(obj, this.state.profileData.links, this.state.data);
    try {
      await UserService.updateLinks(obj);
      window.location = "/me";
    } catch ({ errorMsg }) {
      this.setState({ errorMsg });
    }
  }

  render() {
    const { profileData, links, errorMsg } = this.state;
    const inputStyles = "w-full h-full ml-4 text-lg outline-none";
    const buttonStyles =
      "flex items-center w-full justify-center px-4 py-2 mt-3 font-semibold text-white bg-green-500 rounded-full outline-none";
    const linkContainerStyles =
      "flex bg-white items-center rounded-md shadow-sm mb-2";

    return (
      <>
        <Head>
          <title>Edit Links- Telly</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="w-full h-screen bg-gray-100">
          <Navbar name={profileData.name} />
          <div className="px-4 py-3">
            <h1 className="mb-1 text-2xl font-semibold text-center">
              Edit Links
            </h1>
            {errorMsg && (
              <h2 className="px-3 py-4 my-3 text-center text-red-800 bg-red-200 rounded-lg shadow-inner">
                {errorMsg}
              </h2>
            )}
            <p className="mb-3 leading-tight tracking-tight text-center">
              Please enter your username handle only. It is important to not
              include any special characters like{" "}
              <span className="text-blue-500">@, $, # </span>
              or a <span className="text-blue-500">full link</span>.
            </p>
            <form onSubmit={this.handleSubmit}>
              {links &&
                links.map((link) => {
                  return (
                    <div className={linkContainerStyles} key={link.name}>
                      <Image src={link.iconPath} height={55} width={55} />
                      {this.renderInput(
                        inputStyles,
                        "text",
                        link.name,
                        `Enter your ${link.name} username`,
                        this.handleChange
                      )}
                    </div>
                  );
                })}
              {this.renderButton(buttonStyles, "Save Links")}
            </form>
          </div>
          <Footer />
        </main>
      </>
    );
  }
}
