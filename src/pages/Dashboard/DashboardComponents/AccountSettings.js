import React, { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import './AccountSettings.css'
const AccountSettings = () => {
    const [user] = useAuthState(auth);

    const eduRef = useRef();
    const locRef = useRef();
    const contactRef = useRef();

    const handleAdd = (event) => {
        event.preventDefault();
        const profession = eduRef.current.value;
        const location = locRef.current.value;
        const contact = contactRef.current.value;
        console.log(profession, location, contact);
        event.target.reset();
    };

    return (
        <div className="background-img">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0099ff" fill-opacity="1" d="M0,128L60,138.7C120,149,240,171,360,165.3C480,160,600,128,720,133.3C840,139,960,181,1080,197.3C1200,213,1320,203,1380,197.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
            </svg>

            <div>
                <div className="hero  my-6">
                    <div className="card  w-full max-w-sm shadow-2xl bg-gradient-to-r from-cyan-500 to-blue-500">
                        <h2 className="text-2xl text-center text-white font-bold mb-3 p-3">
                            MY PROFILE
                        </h2>
                        <div className="card-body">
                            <form onSubmit={handleAdd}>
                                <div className="form-control ">
                                    <div className="flex items-center space-x-6">
                                        <div class="shrink-0">
                                            <img class="h-16 w-16 object-cover rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="Current profile photo" />
                                        </div>
                                        <label class="block">
                                            <span class="sr-only">Choose profile photo</span>
                                            <input type="file" class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "/>
                                        </label>
                                    </div>

                                    <p className="p-2">
                                        Name: <span className="font-bold">{user?.displayName}</span>
                                    </p>
                                    <p className="p-2">
                                        Email: <span className="font-bold"> {user?.email}</span>
                                    </p>
                                    <label className="label">
                                        <span className="label-text">Profession</span>
                                    </label>
                                    <textarea
                                        ref={eduRef}
                                        type="text"
                                        placeholder="profession"
                                        className="input input-bordered border-orange-600"
                                        required

                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input
                                        ref={locRef}
                                        type="text"
                                        placeholder="address"
                                        className="input input-bordered border-orange-600"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Contact No.</span>
                                    </label>
                                    <input
                                        ref={contactRef}
                                        type="number"
                                        placeholder="phone no"
                                        className="input input-bordered border-orange-600"
                                        required
                                    />
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="button-orange-border-h40">
                                        Add
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0099ff" fill-opacity="1" d="M0,128L60,138.7C120,149,240,171,360,165.3C480,160,600,128,720,133.3C840,139,960,181,1080,197.3C1200,213,1320,203,1380,197.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
        </div>
    );
};

export default AccountSettings;