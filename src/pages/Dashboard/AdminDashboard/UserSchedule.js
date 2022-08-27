import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const UserSchedule = () => {
  const [schedule, setSchedule] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

<<<<<<< HEAD
  useEffect(() => {
    fetch(`https://easyscheduler24.herokuapp.com/userSchedule`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        console.log("res", res);
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
          navigate("/");
        }
        return res.json();
      })
      .then((data) => {
        setSchedule(data);
      });
  }, [user]);
  return (
    <div>
      <h2 className="text-center p-4 text-lg font-semibold">
        Total Schedule Created: {schedule.length}
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
            {schedule.map((a, index) => (
              <tr key={a._id}>
                <th className="bg-orange-300">{index + 1}</th>
                <td className="bg-pink-500">{a.userEmail}</td>
                <td className="bg-indigo-400">{a.eventType}</td>
                <td className="bg-pink-500">{a.eventName}</td>
                <td className="bg-indigo-400">{a.eventDate}</td>
                <td className="bg-pink-500">{a.location}</td>
                {/* <td>
=======
    useEffect(() => {
        fetch(`https://easyscheduler24.herokuapp.com/userSchedule`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                console.log('res', res);
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/');
                }
                return res.json()
            })
            .then(data => {

                setSchedule(data);
            });
    }, [user])
    return (
        <div>
            <h2 className='text-center p-4 text-lg font-semibold'>Total User Schedule Created: {schedule.length}</h2>
            <div class="overflow-x-auto">
                <table class="table table-compact w-full">
                    <thead>
                        <tr className='bg-orange-300 text-center'>
                            <th className='bg-orange-300'></th>
                            <th className='bg-orange-300'>User Email</th>
                            <th className='bg-orange-300 '>Event Type</th>
                            <th className='bg-orange-300'>Event Name</th>
                            <th className='bg-orange-300'>Event Date</th>
                            <th className='bg-orange-300'>Location</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            schedule.map((a, index) => <tr key={a._id}>
                                <th className='bg-orange-300'>{index + 1}</th>
                                <td className='bg-teal-400'>{a.userEmail}</td>
                                <td className='bg-indigo-400'>{a.eventType}</td>
                                <td className='bg-rose-400'>{a.eventName}</td>
                                <td className='bg-pink-400'>{a.eventDate}</td>
                                <td className='bg-purple-400'>{a.location}</td>
                                {/* <td>
>>>>>>> 4694d8007913b2671e3ce70e30d325481f586bbc
                                {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                {(a.price && a.paid) && <div>
                                    <p><span className='text-success'>Paid</span></p>
                                    <p>Transaction id: <span className='text-success'>{a.transactionId}</span></p>
                                </div>}
                            </td> */}
<<<<<<< HEAD
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-orange-300 text-center">
              <th className="bg-orange-300"></th>
              <th className="bg-orange-300">User Email</th>
              <th className="bg-orange-300 ">Event Type</th>
              <th className="bg-orange-300">Event Name</th>
              <th className="bg-orange-300">Event Date</th>
              <th className="bg-orange-300">Location</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
=======
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
>>>>>>> 4694d8007913b2671e3ce70e30d325481f586bbc
};

export default UserSchedule;
