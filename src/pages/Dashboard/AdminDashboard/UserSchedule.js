import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import { fetchSchedules } from "../../../redux/slices/scheduleSlice";


const UserSchedule = () => {
  const [schedule, setSchedule] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetch(`http://localhost:5000/userSchedule`, {
  //     method: "GET",
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //     },
  //   })
  //     .then((res) => {
  //       console.log("res", res);
  //       if (res.status === 401 || res.status === 403) {
  //         signOut(auth);
  //         localStorage.removeItem("accessToken");
  //         navigate("/");
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setSchedule(data);
  //     });
  // }, [user]);
  const { schedules } = useSelector((state) => state.schedules);
  console.log(schedules);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSchedules());
  }, [dispatch]);
  return (
    <div>
      <h2 className="text-center p-4 text-lg font-semibold">
        Total User Schedule Created: {schedules?.length}
      </h2>
      <div class="overflow-x-auto">
        <table class="table table-compact w-full">
          <thead>
            <tr className="bg-orange-300 text-center">
              <th className="bg-orange-300"></th>
              <th className="bg-orange-300">User Email</th>
              <th className="bg-orange-300 ">Event Type</th>
              <th className="bg-orange-300">Event Name</th>
              <th className="bg-orange-300">Event Date</th>
              <th className="bg-orange-300">Location</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {schedules?.map((a, index) => (
              <tr key={a._id}>
                <th className="bg-orange-300">{index + 1}</th>
                <td className="bg-teal-400">{a.userEmail}</td>
                <td className="bg-indigo-400">{a.eventType}</td>
                <td className="bg-rose-400">{a.eventName}</td>
                <td className="bg-pink-400">{a.eventDate}</td>
                <td className="bg-purple-400">{a.location}</td>
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
        </table>
      </div>
    </div>
  );
};

export default UserSchedule;
