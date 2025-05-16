import React, { useState, useEffect } from "react";
import axios from "axios";

function Profile() {
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        mobile: "",
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch user profile data from API
    useEffect(() => {
        const token = localStorage.getItem("userToken"); // assuming token is stored in localStorage

        if (!token) {
            setError("No token provided. Please log in.");
            setLoading(false);
            return;
        }

        axios
            .get("http://localhost:5000/api/users/profile", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                setUserData(response.data); // Set user data to state
                setLoading(false);
            })
            .catch((err) => {
                setError("Failed to fetch user data.");
                setLoading(false);
            });
    }, []);

    const handleUpdate = async () => {
        const token = localStorage.getItem("userToken");
        if (!token) {
            setError("No token provided. Please log in.");
            return;
        }

        const updatedData = {
            username: userData.username,
            email: userData.email,
            mobile: userData.mobile,
        };

        try {
            const response = await axios.put(
                "http://localhost:5000/api/users/profile",
                updatedData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            // Assuming the response contains the updated user data
            setUserData(response.data.user);
            alert("Profile updated successfully.");
        } catch (err) {
            setError("Failed to update user data.");
        }
    };

    if (loading) return <p>Loading...</p>;

    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>User Profile</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={userData.username}
                        onChange={(e) =>
                            setUserData({ ...userData, username: e.target.value })
                        }
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={userData.email}
                        onChange={(e) =>
                            setUserData({ ...userData, email: e.target.value })
                        }
                    />
                </div>
                <div>
                    <label htmlFor="mobile">Mobile</label>
                    <input
                        type="text"
                        id="mobile"
                        value={userData.mobile}
                        onChange={(e) =>
                            setUserData({ ...userData, mobile: e.target.value })
                        }
                    />
                </div>
                <button type="button" onClick={handleUpdate}>
                    Update Profile
                </button>
            </form>
        </div>
    );
}

export default Profile;
