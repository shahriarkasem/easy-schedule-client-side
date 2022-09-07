import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../Shared/Loading";
import AllUsersRows from "./AllUsersRows";

const AllUsers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery(["users"], () =>
    fetch("http://localhost:3000/users", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-center p-4 text-lg font-semibold">
        Total Users: {users.length}
      </h2>
      <div class="overflow-x-auto">
        <table class="table table-compact w-full">
          <thead>
            <tr className="bg-gray-400 text-center">
              <th className="bg-gray-400"></th>
              <th className="bg-gray-400">User Name</th>
              <th className="bg-gray-400">User Email</th>
              <th className="bg-gray-400"></th>
              <th className="bg-gray-400"></th>
            </tr>
          </thead>
          <tbody className="text-center">
            {users.map((user, index) => (
              <AllUsersRows
                key={user._id}
                user={user}
                index={index}
                refetch={refetch}
              ></AllUsersRows>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-500 text-center">
              <th className="bg-gray-500"></th>
              <th className="bg-gray-500">User Name</th>
              <th className="bg-gray-500">User Email</th>
              <th className="bg-gray-500"></th>
              <th className="bg-gray-500"></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
