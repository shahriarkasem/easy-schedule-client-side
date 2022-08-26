import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingAnimate from "../../../../../../Shared/LoadingAnimate";

const ConfirmMessage = () => {
  const { id } = useParams();
  const { data: invitationData, isLoading } = useQuery(["invitationData"], () =>
    fetch(`http://localhost:5000/event/invitation/single/${id}`).then((res) =>
      res.json()
    )
  );
  console.log(invitationData)

  if(isLoading) {
    return <LoadingAnimate></LoadingAnimate>
  }

  return (
    <div className="min-h-screen">
      {invitationData && (
        <div className="flex justify-center mt-12 md:mt-16 mb-5 md:mb-16">
          <div className="border p-5 md:p-16 lg:p-20 rounded">
            <div className="text-center">
              <h1 className="font-semibold text-lg">Confirmed</h1>
              <p>You are scheduled with {invitationData.name}</p>
            </div>
            <div class="divider"></div>
            <div>
              <h3 className="font-semibold text-lg my-3">
                {invitationData.userEvent.eventName}
              </h3>
              <p className="text-gray-500 my-2">
                <span>🗓️</span>{' '}
                {invitationData.inviteTime + ","} {' '}
                {invitationData.date}
              </p>
              <p className="text-gray-500 my-2">
                <span>🎥</span> Web conferencing details to follow.
              </p>
              <p className="text-gray-500 my-2">
                Meeting Host: {invitationData.email}
              </p>
              <p className="text-gray-500 my-2">
                Guest's emails: {invitationData.emails}
              </p>
              <p className="font-semibold my-2">
                A email invitation has been sent to your email address.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfirmMessage;
