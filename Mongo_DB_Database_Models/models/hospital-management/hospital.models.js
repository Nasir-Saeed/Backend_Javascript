import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      types: String,
      required: true,
    },
    addressLine1: {
      types: String,
      required: true,
    },
    addressLine2: {
      types: String,
    },
    city: {
      types: String,
      required: true,
    },
    pincode: {
      types: String,
      required: true,
    },
    specializationIn: [
      {
        types: String,
      },
    ],
  },
  { timestamps: true }
);

export const Hospital = mongoose.model("Hospital", hospitalSchema);
