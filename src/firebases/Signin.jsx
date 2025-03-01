import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { auth } from "./firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Signin = () => {
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            
            if (user) {
                Cookies.set("userToken", user.accessToken, { expires: 1 });
                navigate("/");
            }
        } catch (error) {
            console.error("Google Sign-In Error:", error);
        }
    };

    return (
        <div>
            <h2>Sign In / Register</h2>
            <button onClick={handleGoogleSignIn}>Continue with Google</button>
        </div>
    );
};

export default Signin;
