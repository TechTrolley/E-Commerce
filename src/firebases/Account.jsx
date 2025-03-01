import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { auth } from "./firebaseConfig";
import { deleteUser, signOut } from "firebase/auth";

const Account = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        Cookies.remove("userToken");
        navigate("/");
    };

    const handleDeleteAccount = async () => {
        try {
            const user = auth.currentUser;
            if (user) {
                await deleteUser(user);
                Cookies.remove("userToken");
                navigate("/");
            }
        } catch (error) {
            console.error("Error deleting account:", error);
        }
    };

    return (
        <div>
            <h2>Account</h2>
            <button onClick={handleLogout}>Logout</button>
            <button onClick={handleDeleteAccount}>Delete Account</button>
        </div>
    );
};

export default Account;
