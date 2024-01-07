import { useContext } from "react";
import UserContex from "../Context/UserContext";


function Profile() {

    const {user} = useContext(UserContex);

    // console.log(user.username);

    return (
        <div className="text-black">
               {
                  !user.username ? <h1>Please Login</h1> : <h1>Login succes, Welcome {user.username}</h1>
               }

        </div>

    )

   
   

}

export default Profile