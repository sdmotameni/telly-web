import Head from "next/head";

import UserService from "../services/userService";

import Form from "../components/form";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default class Settings extends Form {
  state = {
    data: "",
    placeHolder: "",
    errorMsg: null,
    selectedImageFile: null,
    photoLoading: false,
  };

  async componentDidMount() {
    try {
      const { data } = await UserService.getMe();
      this.setState({ placeHolder: data });
    } catch {
      window.location = "/login";
    }
  }

  async doSubmit() {
    const { data } = this.state;

    if (!data) return (window.location = "/me");
    try {
      await UserService.updateSettings(data);
      window.location = "/me";
    } catch ({ errorMsg, _ }) {
      this.setState({ errorMsg });
    }
  }

  fileSelectedHandler = async (event) => {
    const imageFile = event.target.files[0];
    const formData = new FormData();

    const UploadProgressHandler = (res) => {
      if (res === 100) {
        this.setState({ photoLoading: false });
      }
    };

    if (imageFile) {
      formData.append("image", imageFile, imageFile.name);
      try {
        this.setState({ photoLoading: true });
        await UserService.uploadProfilePicture(formData, UploadProgressHandler);
        window.location.reload();
      } catch ({ errorMsg, _ }) {
        this.setState({ errorMsg, photoLoading: false });
      }
    }
  };

  render() {
    const { placeHolder, errorMsg, photoLoading } = this.state;
    const inputStyles =
      "focus:outline-none outline-none focus:ring-2 mb-1 focus:ring-blue-600 border border-gray-200 px-6 py-2 rounded-md w-full";
    const buttonStyles =
      "flex items-center w-full justify-center px-4 py-2 mt-3 font-semibold text-white bg-green-500 rounded-full outline-none";

    return (
      <>
        <Head>
          <title>Settings- Telly</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="w-full h-screen bg-gray-100">
          <Navbar name={placeHolder.name} />
          <div className="px-4 py-3">
            <h1 className="mb-1 text-2xl font-semibold text-center">
              Settings
            </h1>
            {errorMsg && (
              <h2 className="px-3 py-4 my-3 text-center text-red-800 bg-red-200 rounded-lg shadow-inner">
                {errorMsg}
              </h2>
            )}
            <div className="flex flex-col items-center">
              <img
                className="object-cover h-32 mx-auto mt-3 rounded-full shadow-lg"
                src={placeHolder.photoUrl}
                alt=""
              />
              <input
                className="hidden"
                type="file"
                name="image"
                onChange={this.fileSelectedHandler}
                ref={(fileInput) => (this.fileInput = fileInput)}
              />
              <button
                className="w-40 px-3 py-1 mt-2 font-medium text-white bg-gray-600 rounded-full text-md"
                onClick={() => this.fileInput.click()}
              >
                {photoLoading ? (
                  <div className="flex">
                    <svg
                      className="w-5 h-5 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <p className="ml-1">Uploading...</p>
                  </div>
                ) : (
                  "Change Picture"
                )}
              </button>
            </div>
            <form onSubmit={this.handleSubmit}>
              <label className="font-semibold">Phone</label>
              {this.renderInput(
                inputStyles,
                "tel",
                "phone",
                placeHolder.phone,
                this.handleChange
              )}
              <label className="font-semibold">Full Name</label>
              {this.renderInput(
                inputStyles,
                "text",
                "name",
                placeHolder.name,
                this.handleChange
              )}
              <label className="font-semibold">Bio</label>
              {this.renderInput(
                inputStyles,
                "text",
                "bio",
                placeHolder.bio,
                this.handleChange
              )}
              {this.renderButton(buttonStyles, "Save Settings")}
            </form>
          </div>
          <Footer />
        </main>
      </>
    );
  }
}
