import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaStar,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

function TripCard({ trip, onEdit, onDelete }) {

  const image =
    `https://picsum.photos/400/250?random=${trip._id}`;

  return (

    <div className="trip-card">

      <img
        src={image}
        alt={trip.title}
      />

      <div className="trip-content">

        <h2>{trip.title}</h2>

        <p>
          <FaMapMarkerAlt />
          {trip.destination}
        </p>

        <p>
          <FaCalendarAlt />

          {trip.startDate?.substring(0,10)}

          {" - "}

          {trip.endDate?.substring(0,10)}

        </p>

        <div className="rating">

          {[...Array(Number(trip.rating))].map((_, index) => (

            <FaStar key={index} />

          ))}

        </div>

        <p className="description">
          {trip.description}
        </p>

        <div className="buttons">

          <button
            className="edit"
            onClick={() => onEdit(trip)}
          >
            <FaEdit />
            Edit
          </button>

          <button
            className="delete"
            onClick={() => onDelete(trip._id)}
          >
            <FaTrash />
            Delete
          </button>

        </div>

      </div>

    </div>

  );

}

export default TripCard;