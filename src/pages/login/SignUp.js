import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import google from "../../media/images/google.png";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import OpenSpinner from "../Shared/OpenSpinner";

const SignUp = () => {
  const [updateProfile] = useUpdateProfile(auth);
  const [user] = useAuthState(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [createUserWithEmailAndPassword, eUser, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  let signInError;
  if (gLoading || loading) {
    return <OpenSpinner />;
  }

  if (error || gError) {
    signInError = (
      <p className="text-red-500"> {error?.message || gError?.message} </p>
    );
  }

  const onSubmit = async (data) => {
    // console.log(data.name);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    const name = data.name;
    const email = data.email;
    // console.log(name, email);
    const allData = { name, email };
    console.log(allData);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(allData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("user added successfully");
      });
    reset();
  };
  console.log(user);
  if (eUser || gUser) {
    navigate("/");
  }
  return (
    <div>
      <div className="bg-primary">
        <div className=" w-96  mx-auto py-16">
          <div className=" shadow-2xl card-body bg-secondary rounded-lg">
            <h2 className="text-2xl font-bold text-center ">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },

                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                  })}
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-500">
                    {" "}
                    {errors.password.message}{" "}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-500">
                    {" "}
                    {errors.password.message}{" "}
                  </span>
                )}
              </div>
              {signInError}
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn button-orange-border-h40  text-lg font-bold "
                />
              </div>
            </form>

            <p className="text-center text-sm text-neutral">
              Already have an account?{" "}
              <Link className="text-neutral font-bold" to="/login">
                {" "}
                Login{" "}
              </Link>
            </p>

            <div className="divider text-neutral">OR</div>
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-neutral flex justify-center"
            >
              <img className="w-8 mr-12" src={google} alt="" />
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
