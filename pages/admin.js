import { Component } from "react";
import Head from "next/head";

import AdminService from "../services/adminService";

export default class Admin extends Component {
  state = { data: "", errorMsg: null };

  async componentDidMount() {
    try {
      const { data } = await AdminService.getAllUsers();
      this.setState({ data });
    } catch ({ errorMsg }) {
      this.setState({ errorMsg });
    }
  }

  render() {
    const { data, errorMsg } = this.state;
    return (
      <>
        <Head>
          <title>Admin Panel - Telly</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="flex flex-col w-full h-screen p-4 bg-blue-500">
          <p className="font-bold text-white">{errorMsg && errorMsg}</p>
          {data && (
            <p className="font-bold text-white">User Count: {data.length}</p>
          )}
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                      >
                        User
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                      >
                        Contact
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                      >
                        Date Created
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                      >
                        Profile ID
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">View Profile Button</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {data &&
                      data.map((user) => {
                        return (
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 w-10 h-10">
                                  <img
                                    className="w-10 h-10 rounded-full"
                                    src={user.photoUrl}
                                    alt=""
                                  />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">
                                    {user.name}
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    {user.bio}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                email placeholder?
                              </div>
                              <div className="text-sm text-gray-500">
                                {user.phone}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                                {user.dateCreated}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                              {user.profileId}
                            </td>

                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                              <a
                                href={`https://app.gettelly.com/${user.profileId}`}
                                className="text-indigo-600 hover:text-indigo-900"
                                target="_blank"
                              >
                                View Profile
                              </a>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
