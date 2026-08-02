const Trip = require("../models/Trip");

// ======================
// Create Trip
// ======================
const createTrip = async (req, res) => {
  try {
    const {
      title,
      destination,
      startDate,
      endDate,
      description,
      rating,
    } = req.body;

    const trip = await Trip.create({
      title,
      destination,
      startDate,
      endDate,
      description,
      rating,
      user: req.user._id,
    });

    res.status(201).json(trip);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ======================
// Get All Trips
// ======================
const getTrips = async (req, res) => {
  try {

    const trips = await Trip.find({
      user: req.user._id,
    }).sort({ createdAt: -1 });

    res.status(200).json(trips);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ======================
// Get Single Trip
// ======================
const getTripById = async (req, res) => {

  try {

    const trip = await Trip.findById(req.params.id);

    if (!trip) {
      return res.status(404).json({
        message: "Trip not found",
      });
    }

    if (trip.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "Access denied",
      });
    }

    res.status(200).json(trip);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

// ======================
// Update Trip
// ======================
const updateTrip = async (req, res) => {

  try {

    const trip = await Trip.findById(req.params.id);

    if (!trip) {
      return res.status(404).json({
        message: "Trip not found",
      });
    }

    if (trip.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "Access denied",
      });
    }

    const updatedTrip = await Trip.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedTrip);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

// ======================
// Delete Trip
// ======================
const deleteTrip = async (req, res) => {

  try {

    const trip = await Trip.findById(req.params.id);

    if (!trip) {

      return res.status(404).json({
        message: "Trip not found",
      });

    }

    if (trip.user.toString() !== req.user._id.toString()) {

      return res.status(403).json({
        message: "Access denied",
      });

    }

    await trip.deleteOne();

    res.status(200).json({
      message: "Trip deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

module.exports = {
  createTrip,
  getTrips,
  getTripById,
  updateTrip,
  deleteTrip,
};