import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

function Dashboard() {

    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {

        const fetchUser = async () => {

            try {

                const token = localStorage.getItem("token");

                const res = await API.get("/auth/me", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setUser(res.data);

            } catch (err) {

                localStorage.removeItem("token");
                navigate("/login");

            }

        };

        fetchUser();

    }, []);

    const logout = () => {

        localStorage.removeItem("token");
        navigate("/login");

    };

    return (
        <div className="dashboard">

            <h1 className="logo">🌍 TripVault</h1>

            <div className="profile-card">

            <h2>Welcome, {user.name} 👋</h2>

            <p>Email: {user.email}</p>

            <p>Start creating your travel memories!</p>

            <button onClick={logout}>
                Logout
            </button>

            </div>

        </div>
    );

}

export default Dashboard;