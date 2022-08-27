import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";
import Loading from "../../Shared/Loading";

const ManageUsers = () => {
  const [adminRole, setadminRole] = useState([]);

  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const { name, email, role, isLoading } = adminRole;
  useEffect(() => {
    fetch(`https://easyscheduler24.herokuapp.com/users`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        console.log("res", res);
        if (isLoading) {
          return <Loading></Loading>;
        }
        return res.json();
      })
      .then((data) => {
        setadminRole(data);
      });
  }, [user]);
  const makeAdmin = () => {
    fetch(`https://easyscheduler24.herokuapp.com/users/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <h2 className="text-center p-4 text-lg font-semibold">
        Total Users: {adminRole.length}
      </h2>
      <div class="overflow-x-auto">
        <table class="table table-compact w-full">
          <thead>
            <tr className="bg-orange-300 text-center">
              <th className="bg-orange-300"></th>

              <th className="bg-orange-300">User Email</th>

              <th className="bg-orange-300"></th>
            </tr>
          </thead>
          <tbody className="text-center">
            {adminRole.map((a, index) => (
              <tr key={a._id}>
                <th className="bg-blue-300">{index + 1}</th>

                <td className="bg-red-400">{a.email}</td>

                <td className="bg-orange-400">
                  <button class="btn btn-xs">Remove User</button>
                </td>
                {/* <td>
                                {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                {(a.price && a.paid) && <div>
                                    <p><span className='text-success'>Paid</span></p>
                                    <p>Transaction id: <span className='text-success'>{a.transactionId}</span></p>
                                </div>}
                            </td> */}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-orange-300 text-center">
              <th className="bg-orange-300"></th>
              <th className="bg-orange-300">User Name</th>
              <th className="bg-orange-300">User Email</th>
              <th className="bg-orange-300"></th>
              <th className="bg-orange-300"></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
