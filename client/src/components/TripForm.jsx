import { useState, useEffect } from "react";

function TripForm({ onSubmit, selectedTrip }) {

  const [trip, setTrip] = useState({
    title: "",
    destination: "",
    startDate: "",
    endDate: "",
    description: "",
    rating: 1,
  });

  useEffect(() => {

    if (selectedTrip) {

      setTrip({
        ...selectedTrip,
        startDate: selectedTrip.startDate?.substring(0, 10),
        endDate: selectedTrip.endDate?.substring(0, 10),
      });

    } else {

      setTrip({
        title: "",
        destination: "",
        startDate: "",
        endDate: "",
        description: "",
        rating: 1,
      });

    }

  }, [selectedTrip]);

  const handleChange = (e) => {

    setTrip({
      ...trip,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    onSubmit(trip);

    // Clear form after creating a new trip
    if (!selectedTrip) {

      setTrip({
        title: "",
        destination: "",
        startDate: "",
        endDate: "",
        description: "",
        rating: 1,
      });

    }

  };

  return (

    <>

      <h2 className="form-title">

        {selectedTrip
          ? "✏️ Edit Trip"
          : "✈️ Plan a New Trip"}

      </h2>

      <form
        className="trip-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          name="title"
          placeholder="Trip Title"
          value={trip.title}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="destination"
          placeholder="Destination"
          value={trip.destination}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="startDate"
          value={trip.startDate}
          onChange={handleChange}
        />

        <input
          type="date"
          name="endDate"
          value={trip.endDate}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Write a few memories or notes about your trip..."
          value={trip.description}
          onChange={handleChange}
        />

        <select
          name="rating"
          value={trip.rating}
          onChange={handleChange}
        >

          <option value="1">⭐ 1 Star</option>
          <option value="2">⭐⭐ 2 Stars</option>
          <option value="3">⭐⭐⭐ 3 Stars</option>
          <option value="4">⭐⭐⭐⭐ 4 Stars</option>
          <option value="5">⭐⭐⭐⭐⭐ 5 Stars</option>

        </select>

        <button type="submit">

          {selectedTrip
            ? "💾 Update Trip"
            : "➕ Create Trip"}

        </button>

      </form>

    </>

  );

}

export default TripForm;