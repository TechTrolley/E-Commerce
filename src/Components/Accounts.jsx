import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { auth } from "../firebases/firebaseConfig";
import { signOut } from "firebase/auth";

const Account = () => {
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const email = Cookies.get("userEmail"); // Get user email from cookies
    if (email) {
      setUserEmail(email);
    } else {
      navigate("/"); // Redirect if not logged in
    }
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      Cookies.remove("userToken");
      Cookies.remove("userEmail");
      navigate("/");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Your Account</h2>
        {userEmail ? (
          <>
            <p className="text-lg text-gray-700 mb-4">Signed in as: <strong>{userEmail}</strong></p>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-200"
            >
              Logout
            </button>
          </>
        ) : (
          <p className="text-gray-500">No user signed in.</p>
        )}
      </div>
    </div>
  );
};

export default Account;
