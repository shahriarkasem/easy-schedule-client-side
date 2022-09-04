import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSchedules } from "../../../redux/slices/scheduleSlice";

const UserSchedule = () => {
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
  // console.log(schedules);
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
            <tr className="bg-gray-400 text-center">
              <th className="bg-gray-400"></th>
              <th className="bg-gray-400">User Email</th>
              <th className="bg-gray-400 ">Event Type</th>
              <th className="bg-gray-400">Event Name</th>
              <th className="bg-gray-400">Event Date</th>
              <th className="bg-gray-400">Location</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {schedules?.map((a, index) => (
              <tr key={a._id}>
                <th className="bg-gray-400">{index + 1}</th>
                <td className="bg-gray-300">{a.userEmail}</td>
                <td className="bg-gray-200">{a.eventType}</td>
                <td className="bg-gray-300">{a.eventName}</td>
                <td className="bg-gray-200">{a.location}</td>
                <td className="bg-gray-300">{a.eventDate}</td>
                {/* <td3
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
