import React from "react";
import { toast } from "react-toastify";
const ManageUsersRow = ({ user, refetch, index }) => {
  const { name, email, setUser } = user;
  const removeAdmin = (id) => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        // console.log(res);
        if (res.status === 403) {
          toast.error("Failed to Make an admin");
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        if (data.deletedCount > 0) {
          refetch();
          const remaining = user.filter((us) => us._id !== id);
          setUser(remaining);
          toast.success(`Successfully removed an admin`);
        }
      });
  };

  return (
    <tr>
      <th className="bg-gray-400">{index + 1}</th>
      <td className="bg-gray-300">{name}</td>
      <td className="bg-gray-200">{email}</td>
      <td className="bg-gray-300">
        {
          <button onClick={() => removeAdmin(user._id)} class="btn btn-xs">
            Remove User
          </button>
        }
      </td>

      {/* <td>
                                {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                {(a.price && a.paid) && <div>
                                    <p><span className='text-success'>Paid</span></p>
                                    <p>Transaction id: <span className='text-success'>{a.transactionId}</span></p>
                                </div>}
                            </td> */}
    </tr>
  );
};

export default ManageUsersRow;
