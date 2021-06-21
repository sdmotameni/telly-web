import Head from "next/head";
import Image from "next/image";

import AuthService from "../services/authService";

import Footer from "../components/footer";
import Form from "../components/form";

export default class Register extends Form {
  state = { data: "", errorMsg: null };

  async doSubmit() {
    if (this.state.data.password != this.state.data.password2) {
      setTimeout(() => {
        this.setState({ errorMsg: "" });
      }, 3000);
      return this.setState({
        errorMsg: "Password and confirm password need to match.",
      });
    }
    // Get Query Profile ID from query string
    const urlParams = new URLSearchParams(window.location.search);
    const profileId = urlParams.get("profileId");

    const { name, phone } = this.state.data;

    try {
      const { headers } = await AuthService.register(
        profileId,
        name,
        phone && phone.replace(/[^\d]/g, "")
      );
      AuthService.storeToken(headers["x-auth-token"]);
      window.location = "/me";
    } catch ({ errorMsg, _ }) {
      this.setState({ errorMsg });
    }
  }

  render() {
    const { errorMsg } = this.state;

    const inputStyles =
      "focus:outline-none outline-none focus:ring-2 mb-1 focus:ring-blue-600 border border-gray-200 px-6 py-2 rounded-md w-full";
    const buttonStyles =
      "flex items-center w-full justify-center px-4 py-2 mt-3 font-semibold text-white bg-blue-500 rounded-full outline-none";

    return (
      <>
        <Head>
          <title>Register - Telly</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex flex-col items-center w-full h-screen p-4 bg-gray-100">
          <Image src="/logo.png" alt="me" width={125} height={125} />
          <h1 className="my-3 text-2xl font-extrabold tracking-tight text-center">
            Create your <span className="text-blue-600">Telly</span> account
          </h1>
          {errorMsg && (
            <h2 className="px-3 py-4 my-3 text-center text-red-800 bg-red-200 rounded-lg shadow-inner">
              {errorMsg}
            </h2>
          )}
          <form className="flex flex-col w-full" onSubmit={this.handleSubmit}>
            <label className="font-semibold">Phone Number</label>
            {this.renderInput(
              inputStyles,
              "tel",
              "phone",
              "123-456-7891",
              this.handleChange
            )}
            <label className="font-semibold">Full Name</label>
            {this.renderInput(
              inputStyles,
              "text",
              "name",
              "John Doe",
              this.handleChange
            )}
            {this.renderButton(buttonStyles, "Create Account")}
          </form>
          <Footer styles="mt-3" />
        </main>
      </>
    );
  }
}
