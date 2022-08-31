import { useQuery } from '@tanstack/react-query'
import React from "react";
import Loading from "../../Shared/Loading";
import AllUsersRows from './AllUsersRows';
import ManageUsersRow from './ManageUsersRow';

const ManageUsers = () => {
  const { data: users, isLoading, refetch } = useQuery(['users'], () => fetch('http://localhost:5000/users', {
    method: 'GET',
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()));
  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div>
      <h2 className='text-center p-4 text-lg font-semibold'>Total Users: {users.length}</h2>
      <div class="overflow-x-auto">
        <table class="table table-compact w-full">
          <thead>
            <tr className='bg-orange-300 text-center'>
              <th className='bg-orange-300'></th>
              <th className='bg-orange-300'>User Name</th>
              <th className='bg-orange-300'>User Email</th>
              <th className='bg-orange-300'></th>
              <th className='bg-orange-300'></th>

            </tr>
          </thead>
          <tbody className='text-center'>

            {
              users.map((user, index) => <ManageUsersRow
                key={user._id}
                user={user}
                index={index}
                refetch={refetch}
              ></ManageUsersRow>)
            }
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
