import { useQuery } from "@tanstack/react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import LoadingAnimate from "../../Shared/LoadingAnimate";

const AccountSettings = () => {
    const [user] = useAuthState(auth);
    const { email } = user
    // console.log(user.email)
    // const [userProfile, setUserProfile] = useState([])
    // useEffect(() => {
    //     fetch(`http://localhost:5000/users/${user?.email}`)
    //         .then(res => {
    //             // console.log('res', res);
    //             if (isLoading) {
    //                 return <LoadingAnimate></LoadingAnimate>
    //             }
    //             return res.json()
    //         })
    //         .then(data => {
    //             // console.log(data);
    //             setUserProfile(data);
    //         });
    // }, [user?.email, isLoading])
    const { data: users, isLoading } = useQuery(['users'], () => fetch(`http://localhost:5000/users/${email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));


    if (isLoading) {
        return <LoadingAnimate></LoadingAnimate>
    }
    // console.log(users);
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0099ff" fill-opacity="1" d="M0,128L60,138.7C120,149,240,171,360,165.3C480,160,600,128,720,133.3C840,139,960,181,1080,197.3C1200,213,1320,203,1380,197.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
            </svg>
            <div className="background-img">


                <div className="hero  my-6">
                    <div className="card  w-full max-w-sm shadow-2xl bg-gradient-to-r from-cyan-500 to-blue-500">
                        <h2 className="text-2xl text-center text-white font-bold mb-3 p-3">
                            MY PROFILE
                        </h2>
                        <div className="card-body">
                            <div className="flex items-center space-x-6 ">
                                <div class="shrink-0 ">
                                    <img class="h-16 w-16 object-cover rounded-full " src={users.img} alt="Current profile photo" />
                                </div>
                            </div>

                            <p className="p-2">
                                Name: <span className="font-bold">{users?.name}</span>
                            </p>
                            <p className="p-2">
                                Email: <span className="font-bold"> {users?.email}</span>
                            </p>
                            <p className="p-2">
                                Contact Number: <span className="font-bold"> {users?.number}</span>
                            </p>
                            <p className="p-2">
                                Address: <span className="font-bold"> {users?.address}</span>
                            </p>
                            <p className="p-2">
                                Description: <span className="font-bold"> {users?.description}</span>
                            </p>
                            <Link to={'/userData'}>
                                <button type="submit" className="button-orange-border-h40">
                                    Edit Profile
                                </button>
                            </Link>
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