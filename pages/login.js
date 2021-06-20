import Head from "next/head";
import Image from "next/image";
import auth from "../services/auth";
import Form from "../components/form";
import Footer from "../components/footer";

export default class Home extends Form {
  state = { data: "", errorMsg: null, successMsg: null };

  async doSubmit() {
    this.setState({ errorMsg: null, successMsg: null });
    const { phone } = this.state.data;
    try {
      await auth.login(phone && phone.trim());
      this.setState({
        successMsg: "We sent you a text with your login link.",
      });
    } catch ({ errorMsg, _ }) {
      this.setState({ errorMsg });
    }
  }

  render() {
    const { errorMsg, successMsg } = this.state;

    const inputStyles =
      "focus:outline-none text-center outline-none focus:ring mb-2 focus:ring-blue-600 border border-gray-200 px-6 py-3 rounded-md w-full";
    const buttonStyles =
      "flex items-center w-full justify-center px-4 py-2 mt-3 font-semibold text-white bg-blue-500 rounded-full outline-none";

    return (
      <div>
        <Head>
          <title>Login - Telly</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex flex-col items-center w-full h-screen p-4 bg-gray-100">
          <Image src="/logo.png" alt="me" width={200} height={200} />
          <h1 className="my-3 text-4xl font-extrabold tracking-tight">
            Login to <span className="text-blue-600">Telly</span>
          </h1>
          {successMsg && (
            <h2 className="px-3 py-4 my-3 text-center text-green-800 bg-green-200 rounded-lg shadow-inner">
              {successMsg}
            </h2>
          )}
          {errorMsg && (
            <h2 className="px-3 py-4 my-3 text-center text-red-800 bg-red-200 rounded-lg shadow-inner">
              {errorMsg}
            </h2>
          )}
          <form
            className="flex flex-col items-center w-full"
            onSubmit={this.handleSubmit}
          >
            {this.renderInput(
              inputStyles,
              "phone",
              "phone",
              "Enter your phone number",
              this.handleChange
            )}
            {this.renderButton(buttonStyles, "Login")}
          </form>
          <Footer styles="mt-3" />
        </main>
      </div>
    );
  }
}
