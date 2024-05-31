import mongoose, { Types } from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    name: {
      types: String,
      required: true,
    },
    diagonsedWith: {
      types: String,
      required: true,
    },
    address: {
      types: String,
      required: true,
    },
    age: {
      types: Number,
      required: true,
    },
    bloodGroup: {
      types: Number,
      required: true,
    },
    gender: {
      types: Number,
      enum: ["M", "F", "O"],
      required: true,
    },
    admittedIn: {
      types: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
      required: true,
    },
  },
  { timestamps: true }
);

export const Patient = mongoose.model("Patient", patientSchema);
