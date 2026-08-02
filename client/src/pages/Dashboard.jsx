import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

import TripCard from "../components/TripCard";
import TripForm from "../components/TripForm";

function Dashboard() {

  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const [trips, setTrips] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState(null);

  // -------------------------
  // Fetch Logged-in User
  // -------------------------

  const fetchUser = async () => {

    try {

      const res = await API.get("/auth/me");

      setUser(res.data);

    } catch (err) {

      localStorage.removeItem("token");
      navigate("/login");

    }

  };

  // -------------------------
  // Fetch Trips
  // -------------------------

  const fetchTrips = async () => {

    try {

      const res = await API.get("/trips");

      setTrips(res.data);

    } catch (err) {

      console.log(err);

    }

  };

  useEffect(() => {

    fetchUser();
    fetchTrips();

  }, []);

  // -------------------------
  // Create / Update Trip
  // -------------------------

  const handleSubmit = async (trip) => {

    try {

      if (selectedTrip) {

        await API.put(`/trips/${selectedTrip._id}`, trip);

      } else {

        await API.post("/trips", trip);

      }

      setSelectedTrip(null);

      fetchTrips();

    } catch (err) {

      console.log(err);

    }

  };

  // -------------------------
  // Delete Trip
  // -------------------------

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Delete this trip?"
    );

    if (!confirmDelete) return;

    try {

      await API.delete(`/trips/${id}`);

      fetchTrips();

    } catch (err) {

      console.log(err);

    }

  };

  // -------------------------
  // Logout
  // -------------------------

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/login");

  };

  return (

    <div className="dashboard">

        <div className="top-bar">

            <div>

                <h1>🌍 <span className="logo-text">TripVault</span></h1>

                <p>
                    Welcome back,
                    <b> {user.name}</b>
                </p>

            </div>

            <button onClick={logout}>
                Logout
            </button>

        </div>

        <div className="hero">

            <h2>
                ✈️ Plan Your Next Adventure
            </h2>

            <p>
                Create memories. Save trips. Explore the world.
            </p>

        </div>

        <TripForm
            onSubmit={handleSubmit}
            selectedTrip={selectedTrip}
        />

        <div className="trip-grid">

            {trips.length === 0 ? (

                <div className="empty">

                    <h1> 🌍 </h1>

                    <h2>No Trips Yet </h2>

                    <p> Create your first trip and start saving your travel memories.</p>

                </div>

            ) : (

            trips.map((trip) => (

                <TripCard
                key={trip._id}
                trip={trip}
                onEdit={setSelectedTrip}
                onDelete={handleDelete}
                />

            ))

            )}

      </div>

    </div>

  );

}

export default Dashboard;