import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";

import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import LoadingAnimate from "../../Shared/LoadingAnimate";
const UserProfiledata = () => {
  const [user, isLoading] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const imageStorageKey = "7fc3b735e6b7fba6fb529bd9ccdd4851";

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const userData = {
            _id: data._id,
            name: data.name,
            email: data.email,
            number: data.number,
            address: data.address,
            img: img,
          };
          // send to your database
          fetch("https://easyscheduler24.herokuapp.com/userData", {
            method: "PUT",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(userData),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Edit successfully");
                reset();
              } else {
                toast.error("Failed to edit");
              }
            });
        }
      });
  };

  if (isLoading) {
    return <LoadingAnimate></LoadingAnimate>;
  }
  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-2xl fw-bold text-center p-2 font-bold">
          Edit User Profile
        </h2>
        <div className="form-control w-full max-w-xs">
          <label>
            <span className="label-text">Name</span>
          </label>
          <input
            value={user?.displayName}
            type="name"
            className="input input-bordered w-full max-w-xs p-2 m-2"
            {...register("name")}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            value={user?.email}
            type="email"
            className="input input-bordered w-full max-w-xs p-2 m-2"
            {...register("email")}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Contact Number</span>
          </label>
          <input
            type="number"
            className="input input-bordered w-full max-w-xs p-2 m-2"
            {...register("number")}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input
            type="address"
            className="input input-bordered p-2 m-2"
            {...register("address")}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            className="mb-2 input input-bordered w-full max-w-xs p-2 m-2"
            placeholder="Description"
            {...register("description")}
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            className="input input-bordered w-full max-w-xs"
            {...register("image", {
              required: {
                value: true,
                message: "Image is Required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <input
          className="btn w-full max-w-xs text-white"
          type="submit"
          value="Edit"
        />
      </form>
    </div>
  );
};

export default UserProfiledata;
